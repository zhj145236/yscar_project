// pages/nextCon//pages/browseCenter/browseCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  // 点击手浏览过的产品
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
    let that = this;
    console.log(options.authCode);
    wx.request({
      url: 'https://api.yuesheng.mierhuo.com/api/v1/user/visitHistory/get?page=' + 1,
      data: {},
      header: {
        "AuthCode": options.authCode,
        "Content-Type": "application/json"
      },
      method: "GET",
      success(res) {
        let result = [], isRepeated, carList= res.data.data;
        for (let i = 0, len = carList.length; i < len;i++){
          isRepeated = false;
          // console.log(carList[i].id);
          for(let j = 0,len = result.length;j<len;j++){
            if (carList[i].id == result[j].id){
              isRepeated = true;
              break;
            }
          }
          if (!isRepeated){
            result.push(carList[i]);
          }
        }
        that.setData({
          resultCarList: result
        });
      }
    });

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