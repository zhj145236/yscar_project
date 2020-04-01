// pages/index/goodsDetails/goodsDetails.js
const datas = require('../../../utils/data.js');
const app = getApp(), o = app.requirejs('core');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,

    // 数据加载
    fastList: datas.goodsDetails,
    carInfoTitle: datas.carInfoTitle,
    carTitle: datas.carTitle,
    carDescribe: datas.carDescribe,
    footerData: datas.footerData,
    num:0,
    detailsNum:0,
    zfImg:'image/zf.png',

    latitude:"22.967436",
    longitude:"113.775547",
    name:"广东粤晟二手车交易中心",
    address:"广东省-东莞市-东城街道莞长路东城段92号（新奥燃气站旁）",
  },

  // 点击标题
  clickTitle:function(e){
    let that = this;
    that.setData({
      num:e.currentTarget.dataset.index,
      detailsNum: e.currentTarget.dataset.index,
    });
  },

  zfClick:function(e){
    let that = this;
    // console.log(e);
    switch (e.currentTarget.dataset.index) {
      case 0:
        wx.getLocation({
          type:'gcj02',
          altitude:true,
          success: function(res) {
            console.log(res,'这是地图的经纬度');
            wx.openLocation({
              latitude: Number(that.data.latitude), //纬度
              longitude: Number(that.data.longitude), // 经度
              name: that.data.name,
              address: that.data.address
            })
          },
        });
        break;
      case 1:
        wx.getStorage({
          key: 'authCode',
          success(res){
            let authCode = res.data;
            console.log(authCode);
            o.post('user/authCode/check', { "authCode": authCode },function(b){
              if (b.data.alive_flag) {
                wx.request({
                  url: 'https://api.yuesheng.mierhuo.com/api/v1/user/carCollection/collect',
                  data: { "carId": that.data.carId},
                  header: {
                    "AuthCode": authCode,
                    "Content-Type": "application/json"
                  },
                  method: "POST",
                  success(a) {
                    wx.showToast({
                      title: '恭喜您收藏成功',
                      icon: 'success',
                      duration: 2000
                    })
                  }
                }); 
              }else {
                wx.showModal({
                  title: '温馨提示',
                  content: '您暂未授权，请前往个人中心进行授权',
                  showCancel: false,
                  confirmColor: '#ffa028',
                });
              }
            });           
          }
        });
        break;
      case 2:
        wx.makePhoneCall({
          phoneNumber: '130665521' //仅为示例，并非真实的电话号码
        })
        // o.get('user/platformNotifications/get',{},function(res){
        //   console.log(res);
        // });
        break;
      default:
    }
  },

  videoErrorCallback: function (e) {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.role,'aaa');
    let that = this,carArr = [],bannerImg = [];
    if (options.role == 'agent'){
      that.setData({
        showPrice:1
      });
    } else {
      showPrice: 0
    }
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight,
          winWidth: res.windowWidth,
          // carDetail: datas.carDetail,
          carId: options.goodId
        });
      },
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.videoContext = wx.createVideoContext('ysvideo')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showLoading({
      title: '加载中',
    });
    console.log(this.data.carId);
    let that = this, carArr = [], bannerImg = [];
    wx.getStorage({
      key: 'authCode',
      success(res) {
        let authCode = res.data;
        console.log(authCode,'走了浏览');
        o.post('user/authCode/check', { "authCode": authCode }, function (b) {
          if (b.data.alive_flag) {
            wx.request({
              url: 'https://api.yuesheng.mierhuo.com/api/v1/goodsInfo/carDetail?carId=' + that.data.carId,
              data: { "carId": that.data.carId },
              header: {
                "AuthCode": authCode,
                "Content-Type": "application/json"
              },
              method: "GET",
              success(a) {
                console.log(a);
                carArr.push(a.data);
                bannerImg.push(a.data.data.mediaInfoList.banner);
                that.setData({
                  carDetail: carArr,
                  bannerImg: bannerImg,
                });
              }
            });
          }
        });
      },
      fail(res){
        o.get('goodsInfo/carDetail?carId=' + that.data.carId,{},function(res){
          console.log(res,'没走浏览');
          carArr.push(res);
          bannerImg.push(res.data.mediaInfoList.banner);
          that.setData({
            carDetail: carArr,
            bannerImg: bannerImg
          });   
        });
      }
    });
    wx.hideLoading();
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