const datas = require('../../utils/data.js');
const app = getApp(), o = app.requirejs('core');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuData: datas.menuData,
    carSortFunctions: datas.carSortFunctions,
    isShow:1,
    isScrolly:1,//允许页面滚动
    ishidden:'none',
    isbackground:'rgba(0,0,0,0)', // 遮罩层透明度设置为全透明
    istransition:'0.2s', // 显示遮罩层时有淡入的效果
    cloTransition:'0.6s', // 隐藏或显示内容时间
    cloVisibility:0, // 控制遮罩层内容区从右边渐入值为，0时为不显示，1为显示
    isWidth: '0%',//设置遮罩层高度
    isRight:'-80%',
    isBol: 0,
    imgUrls: [
      '../../image/banner.png',
      '../../image/banner.png',
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 3000,
    duration: 1000,
    brandLetter: datas.brandLetter,
    userType:0,
    // carBrandList: datas.carBrandList,
  },

  /**
   * 封装遮罩层函数
   */
  hid: function () {
    let that = this;
    if (that.data.isBol) {
      that.setData({
        isScrolly: 1,
        istransition: '0.6s', // 显示遮罩层时有淡入的效果
        cloTransition: '0.2s', // 隐藏或显示内容时间
        isWidth: '0%',
        isbackground: 'rgba(0,0,0,0)',
        isRight: '-80%',
        cloVisibility: 0,
        isWidth: '0%',
        isBol: 0,
      });
    }
  },

  /** 点击筛选条件弹出遮罩层 **/
  clickMenu: function (e) {
    var that = this;
    that.setData({
      num: e.currentTarget.dataset.index,
      detailsNum: e.currentTarget.dataset.index,
      isScrolly:0,//不允许页面滚动
    });

    let indexData = that.data.num;
    switch (indexData) {
      case 0: // 排序      
        wx.showLoading({
          title: '加载中',
        })
        o.get("goodsInfo/carSortFunctions", {}, function (res) {
          that.setData({
            carSortFunctions: res.data,
            sortMenuType: '排序'
          });  
        }); 
        wx.hideLoading();      
        break;
      case 1: // 品牌
        wx.showLoading({
          title: '加载中',
        })
        o.get('goodsInfo/carBrandTree',{},function(res){
          that.setData({
            brandMenuType: '品牌',
            notBrand: '不限品牌',
            hostBrand: '热门品牌',
            allBrand: '全部品牌',
            carBrandList:res.data
          });
        });
        wx.hideLoading();
        break;
      case 2:
        that.setData({
          priceData: datas.priceData,
          priceMenuType: '价格',
        });
        break;
      case 3:
        that.setData({
          moreData: datas.moreData,
          moveMenuType: '更多',
        });
        break;
      default:
    };


    if (!that.data.isBol){
      that.setData({
        istransition:'0.2s',
        cloTransition:'0.6s',
        isWidth: '100%',
        cloVisibility: 1,
        isRight:'0',
        isBol:1,
      });
    }
  },

  /**
   * 排序重置按钮
   */
  againBtn:function(){
    let that = this;
    that.setData({
      agent:0
    });
  },
  /**
   * 品牌重置按钮
   */
  brandBtn:function(){
    let that = this;
    that.setData({
      rmBrand:0,
      qbBrand:0
    });
  },
  /**
   * 价格重置按钮
   */
  priceBtn:function(){
    let that = this;
    that.setData({
      price:0
    });
  },
  /**
   * 更多重置
   */
  moreBtn:function(){
    let that = this;
    that.setData({
      more:0
    });
  },

  /**
   * 取消按钮
   */
  cancelBtn:function(){
    let that = this;
    that.setData({
      agent: 0,
      brand: 0,
      price: 0,
      more: 0,
    });
    that.hid();
  },
  // 如果客户选择热门品牌，则全部品牌设置为不选中
  hotBrandRaio:function(){
    let that = this;
    that.setData({
      qbBrand:0
    });
  },
  // 如果客户选择是全部品牌，则热门品牌则设置为不选中
  allBrandRadio: function () {
    let that = this;
    that.setData({
      rmBrand: 0
    });
  },

  /** 点击遮罩层清除遮罩层 **/
  closeMask: function (){
    let that = this;
    that.hid();
  },
  goodsClick:function(e){
    console.log(e);
    let that = this, role = that.data.role;
    // console.log(role,'cs');
    wx.navigateTo({
      url: 'goodsDetails/goodsDetails?goodId=' + e.currentTarget.dataset.goodsid + '&role=' + role,
    })
  },

  /** 选择内容提交 **/
  conBlock:function(){
    var that = this;
  },

  /**
   * 价格点击
   */
  priceClick: function (e) {
    let that = this;
    that.setData({
      priceIndex: e.currentTarget.dataset.index
    });
  },

  /** 搜索提交表单 **/
  formSubmit:function(e){
    let that = this,btnid = e.detail.target.dataset.btnid;  
    console.log(e,'AAA'); 
    // 搜索ID 
    if (btnid == 'searchId') {
      wx.showLoading({
        title: '加载中',
      });
      o.post('goodsInfo/carList',{
        "page": 1,
        "filters": {
          "searchWord": e.detail.value.searchGoods,
        },
      },function(res){
        that.setData({
          carList: res.data
        });
      });
      wx.hideLoading();
    }

    // 排序筛选
    if (btnid == 'sureAgent') {
      if (e.detail.value.agentRadio == ''){
        wx.showModal({
          title: '温馨提示',
          content: '请选择您所需要的排序方法',
          showCancel:false,
          confirmColor: '#ffa028',
        });
      } else {
        that.hid();
        wx.showLoading({
          title: '加载中',
        })
        o.post('goodsInfo/carList', {
          "page": 1,
          "sortFuncCode": e.detail.value.agentRadio,
        }, function (res) {
          that.setData({
            carList: res.data
          });
        });
        wx.hideLoading();
      }
    }

    // 品牌筛选
    if (btnid == 'sureBrand') {
      if (e.detail.value.hotBrandRadio != "") {
        that.hid();
        wx.showLoading({
          title: '加载中',
        });
        o.post('goodsInfo/carList',{
          "page": 1,
          "filters": {
            "carBrandId": e.detail.value.hotBrandRadio,
          }
        },function(res){
          that.setData({
            carList: res.data
          });
        });
        wx:wx.hideLoading();
      } else if (e.detail.value.allBrandRadio != "") {
        that.hid();
        wx.showLoading({
          title: '加载中',
        });
        o.post('goodsInfo/carList', {
          "page": 1,
          "filters": {
            "carBrandId": e.detail.value.allBrandRadio,
          }
        }, function (res) {
          that.setData({
            carList: res.data
          });
        });
        wx:wx.hideLoading();
      }else{
        wx.showModal({
          title: '温馨提示',
          content: '您尚未选择需要查询的品牌',
          showCancel: false,
          confirmColor: '#ffa028',
        });
      }
    }

    // 价格筛选
    if (btnid == 'surePric') {
      switch (that.data.priceIndex) {
        case 0:
          that.hid();
          wx.showLoading({
            title: '加载中',
          });
          o.post('goodsInfo/carList',{
            "page": 1,
            "filters": {
              "priceMax": 50000,
            }
          },function(res){
            that.setData({
              carList: res.data
            });
          });
          wx:wx.hideLoading();
          break;
        case 1:
          that.hid();
          wx.showLoading({
            title: '加载中',
          });
          o.post('goodsInfo/carList', {
            "page": 1,
            "filters": {
              "priceMin": 50000,
              "priceMax": 100000,
            }
          }, function (res) {
            that.setData({
              carList: res.data
            });
          });
          wx:wx.hideLoading();
          break;
        case 2:
          that.hid();
          wx.showLoading({
            title: '加载中',
          });
          o.post('goodsInfo/carList', {
            "page": 1,
            "filters": {
              "priceMin": 100000,
              "priceMax": 200000,
            }
          }, function (res) {
            that.setData({
              carList: res.data
            });
          });
          wx:wx.hideLoading();
          break;
        case 3:
          that.hid();
          wx.showLoading({
            title: '加载中',
          });
          o.post('goodsInfo/carList', {
            "page": 1,
            "filters": {
              "priceMin": 200000,
            }
          }, function (res) {
            that.setData({
              carList: res.data
            });
          });
          wx.hideLoading();
          break;
        default:
      }
    }

    // 更多
    if (btnid == 'sureMore') {
      wx.showModal({
        title: '温馨提示',
        content: '此功能正在内测，尚未开放',
        showCancel: false,
        confirmColor: '#ffa028',
        success(res){
          if(res.confirm){
            that.hid();
          }
        }
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    o.loading();
    let that = this;
    o.post('goodsInfo/carList',{
      "page":1,
    },function(res){
      console.log(res);
      that.setData({
        carList: res.data
      });
  });
  o.hideLoading();
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
  search: function(){
    
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
    let that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          winHeight: res.windowHeight,
          winWidth: res.windowWidth,
        });
      },
    });
    wx.getStorage({
      key: 'role',
      success(res){
        let role = res.data;
        console.log(role, '用户身份');
        if (role == 'agent'){
          that.setData({
            role: role,
            userType:1
          });
        }
      }
    });
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