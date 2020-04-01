// pages/shop/shop.js
const datas = require('../../utils/data.js');
const app = getApp(), o = app.requirejs('core');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userPermissions:0,
    hidCount:0,
    // filtrateCar: datas.filtrateCar,
    // filtrateCarTitle: datas.filtrateCarTitle,
    carShang:'../../image/cheshangtp.png',
    num:0,
    detailsNum:0,
    // userType:1,//用户类型是商户0是游客
    carStatus:"normal",
  },

  filtrate:function(e){
    var that = this;
    // console.log(e.currentTarget.dataset.carstatus);
    // 获取车辆车辆列表
    wx.request({
      url: 'https://api.yuesheng.mierhuo.com/api/v1/agent/car/get',
      data: { "status": e.currentTarget.dataset.carstatus, "page": 1 },
      header: {
        "AuthCode": that.data.authCode,
        "Content-Type": "application/json"
      },
      method: "POST",
      success(e) {
        console.log(e, 'BBB');
        that.setData({
          filtrateCar: e.data.data
        });
      }
    });
    that.setData({
      num: e.currentTarget.dataset.index,
      detailsNum: e.currentTarget.dataset.index,
      carStatus: e.currentTarget.dataset.carstatus,
    });
  },

  goodsClick: function (e) {
    let that = this;
    wx.navigateTo({
      url: '../index/goodsDetails/goodsDetails?goodId=' + e.currentTarget.dataset.goodsid + '&role=' + that.data.role,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    let that = this;
    console.log('111');
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight,
          winWidth: res.windowWidth,
        });
      },
    });
    // that.getKey("authCode"); // 获取code
    // that.getKey("role"); // 获取用户角色

    // 获取缓存中的key
    // 逻辑梳理进入车商界面
    // 一：判断用户是否为登陆状态aliveFlag为1即为登陆状态，为0即为未登录状态需要前往个人中心授权
    // 二：如果用户授权成功则需要判断用户的身份信息，如果为user普通用户则不显示车商界面，提示暂无查看权限，如果为agent代理商户，则可以查看自己名下的车辆信息   
    wx.getStorage({
      key: 'authCode',
      success(res) {
        let authCode = res.data;
        that.setData({
          authCode: authCode
        });
        o.post('user/authCode/check', { "authCode": authCode }, function (b) {
          console.log(b.data.alive_flag,'检查是否已登录');
          if (b.data.alive_flag) {
            console.log('确定');
            that.setData({
              aliveFlag: b.data.alive_flag
            });
            wx.getStorage({
              key: 'role',
              success(res) {
                let role = res.data;
                console.log(role);
                that.setData({
                  role: role
                });
                if (role == "user") {
                  that.setData({
                    userPermissions: 1,
                  });
                } else if (role == "agent") {
                  // 获取车辆统计信息
                  wx.request({
                    url: 'https://api.yuesheng.mierhuo.com/api/v1/agent/statisticsInfo/get',
                    data: {},
                    header: {
                      "AuthCode": authCode,
                      "Content-Type": "application/json"
                    },
                    method: "GET",
                    success(a) {
                      console.log(a,'AAA');
                      let carShangData = a.data.data;
                      that.setData({
                        hidCount: 1,  
                        carShangData :[
                          { "title": '今日浏览', "num": carShangData.visitCountToday },
                          { "title": '今日成交', "num": carShangData.dealCountToday },
                          { "title": '今日上架', "num": carShangData.publishCountToday }
                        ],
                        filtrateCarTitle:[
                          { 'title': '在售', 'num': carShangData.normal, 'carStatus':'normal' },
                          { 'title': '预售', 'num': carShangData.pre_sale, 'carStatus': 'pre_sale' },
                          { 'title': '已预定', 'num': carShangData.ordered, 'carStatus': 'ordered' },
                          { 'title': '已成交', 'num': carShangData.deal, 'carStatus': 'deal' },
                        ]
                      });
                    }
                  });
                  // 获取车辆车辆列表
                  wx.request({
                    url: 'https://api.yuesheng.mierhuo.com/api/v1/agent/car/get',
                    data: { "status": that.data.carStatus,"page": 1},
                    header: {
                      "AuthCode": authCode,
                      "Content-Type": "application/json"
                    },
                    method: "POST",
                    success(e) {
                      // console.log(e, 'BBB');
                      that.setData({
                        filtrateCar:e.data.data
                      });
                    }
                  });
                }
              }
            });
          }else{
            that.setData({
              aliveFlag: b.data.alive_flag,
              hidCount:0
            });
          }
        });
      }
    });    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
  }
})