// pages/nextCon//pages/collect/collect.js
const datas = require('../../../../utils/data.js');
// const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fastList: datas.fastList,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res.windowHeight);
        console.log(res.windowWidth);
        that.setData({
          winHeight: res.windowHeight,
          winWidth: res.windowWidth,
        });
      },
    });
  },
  goodsClick: function (e) {
    let that = this;
    that.setData({
      dataNum: e.currentTarget.dataset.index,
      userType: e.currentTarget.dataset.usertype,
    });
    let dataNum = that.data.dataNum, userType = that.data.userType;
    wx.navigateTo({
      url: '../../../index/goodsDetails/goodsDetails?dataNum=' + dataNum + '&userType=' + userType,
    })
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