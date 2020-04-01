// pages/classification/classification.js
const datas = require('../../utils/data.js');
const app = getApp(), o = app.requirejs('core');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  formSubmit:function(e){

    console.log(e);
    let that = this, user_name = e.detail.value.call, mobile_number = e.detail.value.contact, car_description = e.detail.value.describe;

    wx.getStorage({
      key: 'authCode',
      success(res) {
        let authCode = res.data;
        o.post('user/authCode/check', { "authCode": authCode }, function (b) {
          if (b.data.alive_flag) {
            console.log('已经登录可以继续使用该功能');
            // 判断用户登录是否有效，1为有效，0为无效，如果有效则请求接口，传送用户填写的数据，并提示用户信息提交成功
            wx.request({
              url: 'https://api.yuesheng.mierhuo.com/api/v1/user/saleCar/submit',
              data: {
                "user_name": user_name,
                "mobile_number": mobile_number,
                "car_description": car_description
              },
              header: {
                "AuthCode": authCode,
                "Content-Type": "application/json"
              },
              method: "POST",
              
              success(a) {

                if (user_name != '' && mobile_number != '' && car_description != ''){
                  wx.showToast({title: '成功',icon: 'success',duration: 2000});
                  that.setData({
                    user_contact:'',
                    user_number:'',
                    user_textarea:''
                  });
                }else{
                  wx.showModal({title: '温馨提示',content: '请输入完整信息',showCancel: false,confirmColor: '#ffa028',});
                }
              }
            });
          } else {
            wx.showModal({
              title: '温馨提示',
              content: '您尚未授权，请前往个人中心页进行授权',
              showCancel: false,
              confirmColor: '#ffa028',
            });
          }
        });
      }
    });
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight,
          winWidth: res.windowWidth,
        });
      },
    });
  },

  /**
   * 扫一扫
  */
  scanCode: function () {
    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })
  },

  /**
   * 跳转搜索页
   */
  search: function () {

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