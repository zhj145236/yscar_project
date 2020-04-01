//me.js
//获取应用实例
const app = getApp(), o = app.requirejs('core');
const datas = require('../../utils/data.js');

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    bjImg:'../../image/beijingtu2.png',
    meCenter: datas.meCenter,
  },

  nextInfo:function(e){
    let that = this;
    switch (e.currentTarget.dataset.index) {
      case 0:
        console.log(that.data.authCode);
        if (that.data.authCode != undefined){
          wx.navigateTo({
            url: '../nextCon/pages/collectCenter/collectCenter?authCode=' + that.data.authCode,
          })
        }else{
          wx.showModal({
            title: '温馨提示',
            content: '请授权后才能查看"我的收藏"功能',
            showCancel: false,
            confirmColor: '#ffa028',
          });
        }
        break;
      case 1:
        // console.log(that.data.authCode);
        if (that.data.authCode != undefined) {
          wx.navigateTo({
            url: '../nextCon/pages/browseCenter/browseCenter?authCode=' + that.data.authCode,
          })
        } else {
          wx.showModal({
            title: '温馨提示',
            content: '请授权后才能查看"浏览历史"功能',
            showCancel: false,
            confirmColor: '#ffa028',
          });
        }
        // wx.showModal({
        //   title: '温馨提示',
        //   content: '浏览历史功能正在内测当中',
        //   showCancel: false,
        //   confirmColor: '#ffa028',
        // });
        break;
      case 2:
        wx.showModal({
          title: '温馨提示',
          content: '粤晟公告暂未对外开放',
          showCancel: false,
          confirmColor: '#ffa028',
        });
        // o.get('user/platformNotifications/get',{},function(res){
        //   console.log(res);
        // });
        break;
      default:
    }

    that.setData({
      nextpage: e.currentTarget.dataset.nextpage,
    });
    let nextpage = that.data.nextpage;
    // wx.navigateTo({
    //   url: '../nextCon/pages/' + nextpage + '/' + nextpage + '?nextpage=' + nextpage,
    // })
  },
  
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        }
      })
    };
  },
  getUserInfo: function (e) {
    let that = this, userInfoSucces = e.detail.errMsg,nickName = e.detail.userInfo.nickName;
    // 获取用户信息code
    // app.globalData.userInfo = e.detail.userInfo;
    // 查看用户是否授权成功
    if (userInfoSucces == 'getUserInfo:ok'){
      that.setData({
        userInfoSet:1
      });
      if (that.data.userInfoSet){
        wx.login({
          success(res) {
            if (res.code) {
              let code = res.code;
              o.post('user/wechatAuth', { "code": code }, function (a) {
                wx.request({
                  url: 'https://api.yuesheng.mierhuo.com/api/v1/user/userInfo/set',
                  data: { "nickname": nickName},
                  header: {
                    "AuthCode": a.data.auth_code,
                    "Content-Type": "application/json"
                  },
                  method: "POST",
                  success(a) {
                    console.log(a, 'AAA');
                  }
                });
                that.setData({
                  userInfo: e.detail.userInfo,
                  hasUserInfo: true,
                  authCode: a.data.auth_code,
                  role:a.data.role
                });
                console.log(that.data.role,'用户角色');
                // 将获取的authCode存储在缓存中
                wx.setStorage({ key: "authCode", data: that.data.authCode }); // 存储code
                wx.setStorage({ key: "role", data: that.data.role }); // 存储role，用户身份信息  
              });
            }
          }
        });
      }
    }else{
      that.setData({
        userInfoSet:0
      });
    };
  },
})
