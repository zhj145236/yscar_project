// pages/nextCon//pages/collectCenter/collectCenter.js
const app = getApp()
const datas = require('../../../../utils/data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // recordList: datas.recordList,
    startX: 0, //开始坐标
    startY: 0
  },

  //手指触摸动作开始 记录起点X坐标
  touchstart: function (e) {
    //开始触摸时 重置所有删除
    this.data.recordList.forEach(function (v, i) {
      if (v.isTouchMove)//只操作为true的
        v.isTouchMove = false;
    })
    this.setData({
      startX: e.changedTouches[0].clientX,
      startY: e.changedTouches[0].clientY,
      recordList: this.data.recordList
    })
  },
  //滑动事件处理
  touchmove: function (e) {
    var that = this,
      index = e.currentTarget.dataset.index,//当前索引
      startX = that.data.startX,//开始X坐标
      startY = that.data.startY,//开始Y坐标
      touchMoveX = e.changedTouches[0].clientX,//滑动变化坐标
      touchMoveY = e.changedTouches[0].clientY,//滑动变化坐标
      //获取滑动角度
      angle = that.angle({ X: startX, Y: startY }, { X: touchMoveX, Y: touchMoveY });
    that.data.recordList.forEach(function (v, i) {
      v.isTouchMove = false
      //滑动超过30度角 return
      if (Math.abs(angle) > 30) return;
      if (i == index) {
        if (touchMoveX > startX) //右滑
          v.isTouchMove = false
        else //左滑
          v.isTouchMove = true
      }
    })
    //更新数据
    that.setData({
      recordList: that.data.recordList
    })
  },
  /**
   * 计算滑动角度
   * @param {Object} start 起点坐标
   * @param {Object} end 终点坐标
   */
  angle: function (start, end) {
    var _X = end.X - start.X,
      _Y = end.Y - start.Y
    //返回角度 /Math.atan()返回数字的反正切值
    return 360 * Math.atan(_Y / _X) / (2 * Math.PI);
  },

  del:function(e){
    console.log(e.currentTarget.dataset.id,'EEE');
    let that = this;
    wx.request({
      url: 'https://api.yuesheng.mierhuo.com/api/v1/user/carCollection/cancel',
      data: { "carId": e.currentTarget.dataset.id},
      header: {
        "AuthCode": that.data.authCode,
        "Content-Type": "application/json"
      },
      method: "POST",
      success(res) {
        wx.showLoading({
          title: '加载中',
        });
        wx.request({
          url: 'https://api.yuesheng.mierhuo.com/api/v1/user/carCollection/get?page=' + 1,
          data: {},
          header: {
            "AuthCode": that.data.authCode,
            "Content-Type": "application/json"
          },
          method: "GET",
          success(b) {
            console.log(b, 'AAA');
            that.setData({
              recordList: b.data.data
            });
          }
        });
        wx.hideLoading();
      }
    });
  },

  // 点击手收藏的产品
  goodsClick: function (e) {
    console.log(e);
    let that = this;
    wx.navigateTo({
      url: '../../../index/goodsDetails/goodsDetails?goodId=' + e.currentTarget.dataset.goodsid,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    });
    let that = this;
    console.log(options.authCode);
    wx.request({
      url: 'https://api.yuesheng.mierhuo.com/api/v1/user/carCollection/get?page=' + 1,
      data: {},
      header: {
        "AuthCode": options.authCode,
        "Content-Type": "application/json"
      },
      method: "GET",
      success(res) {
        that.setData({
          recordList: res.data.data,
          authCode: options.authCode
        });
      }
    });
    wx.hideLoading();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})