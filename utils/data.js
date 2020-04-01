
let menuData= [
  {
    imgUrl: '../../image/jiantou.png',
    text: '排序',
    isShow: 1,
  },
  {
    imgUrl: '../../image/jiantou.png',
    text: '品牌',
    isShow: 1,
  },
  {
    imgUrl: '../../image/jiantou.png',
    text: '价格',
    isShow: 1,
  },
  {
    imgUrl: '',
    text: '更多',
    isShow: 1,
  },
];


let goodsDetails = [
  [{
    imgUrl: '../../image/tp.png',
    maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
    minTitle: '2016年03/7.06万公里',
    price: '16.5万',
    firstPrice: '首付4.85万'
  }],

  [{
    imgUrl: '../../image/tp.png',
    maxTitle: '一汽大众-大众朗逸 2016款智版',
    minTitle: '2016年03/7.06万公里',
    price: '16.5万',
    firstPrice: '首付4.85万'
  }],
  [{
    imgUrl: '../../image/tp.png',
    maxTitle: '通用别克-别克君威 2016款智版',
    minTitle: '2016年03/7.06万公里',
    price: '16.5万',
    firstPrice: '首付4.85万'
  }],
];

let carTitle = [
  { title: '车辆信息', status: 1},
  { title: '详细配置', status: 1},
  { title: '车辆视频', status: 1}
];

let carInfoTitle = [
  [{
    title:'车辆信息',
    carId:'0',
    content:[
      {name:'2014年4月上牌',info:'5年3个月'},
      {name:'表显里程',info:'5.2万公里'},
      {name:'车辆归属地',info:'-'},
      {name:'车身颜色',info:'白色'},
      {name:'排放标准',info:'国V'},
      {name:'变速箱',info:'首自一体'},
      {name:'车辆所在地',info:'东莞'},
      {name:'排量',info:'2.5L'},
    ],
  }],
  [{
    title:'详细配置',
    carId:'1',
    content:[
      {
        name: '车身配置',
        info: [
          {
            title: [{ name: '标配', status: 1 }, { name: '选配', status: 0 }, { name: '-无', status: 0 }],
            content: [
              { name: '长度(mm)', value: '4635' },
              { name: '宽度(mm)', value: '1800' },
              { name: '轴距(mm)', value: '2730' },
              { name: '高度(mm)', value: '1415' },
            ]
          },
        ]
      },
      {
        name: '发动机配置',
        info: [
          {
            title: [{ name: '标配', status: 1 }, { name: '选配', status: 0 }, { name: '-无', status: 0 }],
            content: [
              { name: '发动机型号', value: '-' },
              { name: '排量(mL)', value: '2500' },
              { name: '进气形式', value: '自然吸气' },
              { name: '气缸排列形式', value: 'V' },
            ]
          },
        ]
      },
    ],
  }],
  [
    {
      title: '车辆视频',
      carId:2,
      content: [
        {
          name: '车辆视频',
          imgUrl: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
          imgType:0,
          posterImg:'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&sec=1564416979&di=0690d3e498cc04279283a06df15f0172&quality=100&size=f320_180&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D1335315754%2C3545763222%26fm%3D171%26s%3D97ACF90413DA0FCC3201A193030080C3%26w%3D975%26h%3D547%26img.JPEG',
        },
        {
          name: '360°全景看车',
          imgUrl: '../image/360banner.png',
          imgType: 1
        },
      ],
    }
  ],
];

let carDescribe = [
  {
    name:'车辆描述',
    type:'0',
    text:'暂无描述内容'
  },
  {
    name: '检测报告',
    type:'1',
    imgUrl:'../image/bg_02.jpg'
  }
];

let footerData = [
  { imgUrl:'map.png',name:'定位'},
  { imgUrl:'footerIcon2.png',name:'收藏'},
  { imgUrl:'footerIcon1.png',name:'卖家'}
];

// 个人中心数据
let meCenter = [
  { icon: 'mexin.png', title: '我的收藏', point:'arrowright.png',nextPage:'collect'},
  { icon: 'mesj.png', title: '浏览历史', point: 'arrowright.png', nextPage: 'browse'},
  { icon: 'mesheng.png', title: '粤晟公告', point: 'arrowright.png', nextPage: 'notice'}
];

// 文章中心
let articleCenter = [
  {
    title: '粤晟8.1发布会盛大召开',
    time: '公布时间：2019-07-15',
    noticeIndex: 0,
  },
  {
    title: '粤晟8.8招商盛大召开',
    time: '公布时间：2019-08-08',
    noticeIndex: 1,
  },
  {
    title: '粤晟7.30线上小程序正式上线',
    time: '公布时间：2019-07-30',
    noticeIndex: 2,
  },
];

// 内容中心
let contentCenter = [
  [{
    noticeContent: [{ name: '粤晟8.1发布会盛大召开', time: '公布时间：2019-07-15', con: '7月15日，第七届库布其国际沙漠论坛在内蒙古自治区鄂尔多斯市举办，国家主席习近平致贺信。习主席在贺信中指出，国际社会应该携手努力，加强防沙治沙国际合作，推动全球环境治理，全面落实2030年可持续发展议程，还自然以和谐美丽，为人民谋幸福安康。继上一届论坛后，习近平主席再致贺信，充分体现了对论坛的高度重视，更彰显了中国作为负责任大国的情怀担当。' }],
  }],
  [{
    noticeContent: [{ name: '粤晟8.8招商盛大召开', time: '公布时间：2019-08-08', con: '8月8日，第七届库布其国际沙漠论坛在内蒙古自治区鄂尔多斯市举办，国家主席习近平致贺信。习主席在贺信中指出，国际社会应该携手努力，加强防沙治沙国际合作，推动全球环境治理，全面落实2030年可持续发展议程，还自然以和谐美丽，为人民谋幸福安康。继上一届论坛后，习近平主席再致贺信，充分体现了对论坛的高度重视，更彰显了中国作为负责任大国的情怀担当。' }],
  }],
  [{
    noticeContent: [{ name: '粤晟7.30线上小程序正式上线', time: '公布时间：2019-07-30', con: '7月30日，第七届库布其国际沙漠论坛在内蒙古自治区鄂尔多斯市举办，国家主席习近平致贺信。习主席在贺信中指出，国际社会应该携手努力，加强防沙治沙国际合作，推动全球环境治理，全面落实2030年可持续发展议程，还自然以和谐美丽，为人民谋幸福安康。继上一届论坛后，习近平主席再致贺信，充分体现了对论坛的高度重视，更彰显了中国作为负责任大国的情怀担当。' }],
  }],
];

// 车商数据
let carShangData = [
  {title:'今日浏览',num:'999'},
  { title:'今日成交',num:'888'},
  {title:'今日上架',num:'777'}
];
let filtrateCarTitle = [
  { title: '在售', num: '999', carStatus: 1 },
  { title: '预售', num: '888', carStatus: 1 },
  { title: '评估中', num: '777', carStatus: 1 },
  { title: '已成交', num: '666', carStatus: 1 },
  { title: '已上架', num: '555', carStatus: 1 },
  { title: '退库', num: '444', carStatus: 1 },
  { title: '个人寄售', num: '333', carStatus: 1 },
  { title: '拍卖区', num: '222', carStatus: 0 }
];
// 车辆筛选标题
let filtrateCar = [
  [{ 
    title: '在售', 
    num: '999',
    goodsList:[
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '售价：16.5万',
        storagePrice:'入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(在售)',
        participationNum: '0'
      }
    ]
  }],
  [{ 
    title: '预售', 
    num: '888',
    goodsList: [
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(预售)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(预售)',
        participationNum: '0'
      }
    ]
  }],
  [{ 
    title: '评估中', 
    num: '777',
    goodsList: [
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(评估中)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(评估中)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(评估中)',
        participationNum: '0'
      }
    ]
  }],
  [{ 
    title: '已成交', 
    num: '666',
    goodsList: [
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(已成交)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(已成交)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(已成交)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(已成交)',
        participationNum: '0'
      }
    ]
  }],
  [{ 
    title: '已上架', 
    num: '555',
    goodsList: [
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(已上架)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(已上架)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(已上架)',
        participationNum: '0'
      }
    ]
  }],
  [{ 
    title: '退库', 
    num: '444',
    goodsList: [
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(退库)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(退库)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(退库)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(退库)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(退库)',
        participationNum: '0'
      }
    ]
  }],
  [{ 
    title: '个人寄售', 
    num: '333',
    goodsList: [
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(寄售中)',
        participationNum: '0'
      },
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '入库价：14万',
        firstPrice: '首付4.85万',
        salesType: '(寄售中)',
        participationNum: '0'
      }
    ]
  }],
  [{ 
    title: '拍卖区', 
    num: '222',
    goodsList: [
      {
        imgUrl: '../../image/tp.png',
        maxTitle: '小鹏汽车-小鹏汽车 2016款智版',
        minTitle: '2016年03/7.06万公里',
        price: '16.5万',
        storagePrice: '起拍价：14万',
        salesType: '(拍卖中)',
        participationNum:'3600'
      }
    ]
  }],  
];

// 品牌首字母
// let brandLetter= [
//   { 'name': "A", 'name': "B", 'name': "C", 'name': "D", 'name': "E", 'name': "F", 'name': "G", 'name': "H", 'name': "I", 'name': "J", 'name': "K", 'name': "L", 'name': "M", 'name': "N", 'name': "O", 'name': "P", 'name': "Q", 'name': "R", 'name': "S", 'name': "T", 'name': "U", 'name': "V", 'name': "W", 'name': "X", 'name': "Y", 'name': "Z"}
// ];

// 品牌的数据
let carBrandList = [
  {
    "code": "YS_000000",
    "data": [
      {
        "id": 1,
        "pid": 0,
        "name": "大众",
        "icon": "default_test_icon.png",
        "hot_flag": 1,
        "initial_acronym": "D"
      },
      {
        "id": 2,
        "pid": 1,
        "name": "大众下",
        "icon": "default_test_icon.png",
        "hot_flag": 0,
        "initial_acronym": "D"
      },
      {
        "id": 3,
        "pid": 2,
        "name": "大众下下",
        "icon": "default_test_icon.png",
        "hot_flag": 0,
        "initial_acronym": "D"
      },
      {
        "id": 4,
        "pid": 1,
        "name": "大众下1_hot",
        "icon": "default_test_icon.png",
        "hot_flag": 1,
        "initial_acronym": "D"
      },
      {
        "id": 5,
        "pid": 0,
        "name": "特斯拉",
        "icon": "default_test_icon.png",
        "hot_flag": 1,
        "initial_acronym": "T"
      },
      {
        "id": 6,
        "pid": 5,
        "name": "特斯拉A",
        "icon": "default_test_icon.png",
        "hot_flag": 1,
        "initial_acronym": "T"
      },
      {
        "id": 7,
        "pid": 5,
        "name": "特斯拉B",
        "icon": "default_test_icon.png",
        "hot_flag": 0,
        "initial_acronym": "T"
      },
      {
        "id": 8,
        "pid": 7,
        "name": "特斯拉BB",
        "icon": "default_test_icon.png",
        "hot_flag": 0,
        "initial_acronym": "T"
      },
      {
        "id": 9,
        "pid": 0,
        "name": "小鹏",
        "icon": "default_test_icon.png",
        "hot_flag": 0,
        "initial_acronym": "X"
      }
    ]
  }
];

// 价格数据写死
let priceData = [
  {
    "code": "YS_000000",
    "data": [
      {
        "name": "wuwanyixia",
        'value': '5万以下',
        'priceMin': '50000'
      },
      {
        "name": "wuzhishiwan",
        'value': '5-10万', 
        'priceMin': '50000', 
        'priceMax': '100000'
      },
      {
        "name": "shizhiershiwan",
        'value': '10-20万', 
        'priceMin': '100000', 
        'priceMax': '200000'
      },
      {
        "name": "ershiwanyishang",
        'value': '20万以上', 
        'priceMin': '200000'
      }
    ]
  }
];

let moreData = [
  {
    'name':'车辆类型',
    'data':[
      { 'name': '轿车', 'value': 'jiaoche' },
      { 'name': '跑车', 'value': 'paoche' },
      { 'name': 'SUV', 'value': 'SUV' },
      { 'name': 'MPV', 'value': 'MPV' },
      { 'name': '商用车', 'value': 'shangyongche' },
      { 'name': '面包车', 'value': 'mianbaoche' },
      { 'name': '皮卡', 'value': 'pika' },
      { 'name': '微型车', 'value': 'wixingche' },
      { 'name': '小型车', 'value': 'xiaoxingche' },
      { 'name': '紧凑型车', 'value': 'jincouxingche' },
      { 'name': '中型车', 'value': 'zhongxingche' },
      { 'name': '中大型车', 'value': 'zhongdaxingche' },
      { 'name': '豪华车', 'value': 'haohuache' },
      { 'name': '轻客', 'value': 'qingke' }
    ]
  },
  {
    'name':'变速箱',
    'data':[
      { 'name': '自动', 'value':'zidong'},
      { 'name': '手动', 'value': 'shoudong'}
    ]
  },
  {
    'name':'车龄',
    'data':[
      { 'name': '1年以下', 'value': 'yinianyixia' },
      { 'name': '1-3年', 'value': 'yizhisannian' },
      { 'name': '3-5年', 'value': 'sanzhiwunian' },
      { 'name': '5年以上', 'value': 'wunianyishang' },
    ]
  },
  {
    'name':'国别',
    'data':[
      { 'name': '国别', 'value': 'guobie' },
      { 'name': '合资', 'value': 'hezi' },
      { 'name': '进口', 'value': 'jinkou' },
    ]
  },
  {
    'name': '排放标准',
    'data': [
      { 'name': '不限', 'value': '不限' },
      { 'name': '国I', 'value': '国I' },
      { 'name': '国II', 'value': '国II' },
      { 'name': '国IV', 'value': '国IV' },
      { 'name': '国V', 'value': '国V' },
      { 'name': '国V以上', 'value': '国V以上' },
    ]
  },
  {
    'name':'驱动',
    'data':[
      {'name': '两驱','value': 'liangqu' },
      { 'name':'四驱','value': 'siqu' }
    ]
  }
];


// 详情信息页
let carDetail = [
  {
    "code": "YS_000000",
    "data": {
      "id": 1,
      "brand_id": 1,
      "sale_price": 120,//售价
      "purchase_price": 80,//买入价
      "down_payment_price": 23,//首付
      "name": "别克2017款尊享版自动挡",
      "user_id": 1,
      "publish_date": "2019-08-03",
      "user_purchase_date": "2018-08-03",
      "mileage": 10000,
      "location": "东莞",
      "color": "红色",
      "emission_standards": "国IV",
      "gearbox_type": "手动",
      "emission_volume": "3L",
      "post_image": "/default_car_post.png",
      "car_description": "<p>车辆描述。。。</p>",
      "detection_report": "本车使用太阳能，电能，气能多能源动力，全独立四轮驱动，并搭载12L排量八缸柴油发动机，带涡轮增压，使用缸内直喷（尼玛，柴油直喷的还没问世），300/10 R22 88轮胎，全铝22寸轮毂，四轮通风碟刹，双离合8档自动变速箱，全影像倒车系统，夜视系统，防抱死系统（ABS），车身稳定系统，全独立悬挂系统，指纹识别防盗系统，智能人机对话语音操作系统，自动巡航，自动驾驶等， 检测报告单： <b>此处之后应有图片</b>",
      "status": "normal",
      "created_at": "2019-08-03 07:46:05",
      "updated_at": "2019-08-03 07:46:05",
      "brand_name": "大众",
      "brand_icon": "default_test_icon.png",
      "properties": [
        {
          "property_name": "座位数量",
          "property_type": "string",
          "property_value": "5个座椅"
        },
        {
          "property_name": "窗户数量",
          "property_type": "string",
          "property_value": "9个"
        },
        {
          "property_name": "引擎数量",
          "property_type": "string",
          "property_value": "1个"
        }
      ],
      "mediaInfoList": {
        "banner": [
          {
            "media_type": "banner",
            "media_url": "https://example.org/banner1.png"
          },
          {
            "media_type": "banner",
            "media_url": "https://example.org/banner2.png"
          }
        ],
        "video": [
          {
            "media_type": "video",
            "media_url": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
            'posterImg': 'https://ss0.bdstatic.com/9bA1vGfa2gU2pMbfm9GUKT-w/timg?wisealaddin&sec=1564416979&di=0690d3e498cc04279283a06df15f0172&quality=100&size=f320_180&src=http%3A%2F%2Ft11.baidu.com%2Fit%2Fu%3D1335315754%2C3545763222%26fm%3D171%26s%3D97ACF90413DA0FCC3201A193030080C3%26w%3D975%26h%3D547%26img.JPEG',
          }
        ],
        "360deg": [
          {
            "media_type": "360deg",
            "media_url": "https://example.org/360deg.data"
          }
        ]
      }
    }
  }
];

// 测试数据
const recordList = [
  { "nickname": "../../image/tp.png", "birthday": "1986-01-02" },
  { "nickname": "../../image/tp.png", "birthday": "1986-01-02" },
  { "nickname": "../../image/tp.png", "birthday": "1986-01-02" },
  { "nickname": "../../image/tp.png", "birthday": "1986-01-02" },
  { "nickname": "../../image/tp.png", "birthday": "1986-01-02" }
];

module.exports = {
  goodsDetails: goodsDetails,
  carInfoTitle: carInfoTitle,
  carTitle: carTitle,
  carDescribe: carDescribe,
  footerData: footerData,
  meCenter: meCenter,
  articleCenter: articleCenter,
  contentCenter: contentCenter,
  carShangData: carShangData,
  filtrateCar: filtrateCar,
  filtrateCarTitle: filtrateCarTitle,
  menuData: menuData,
  // brandLetter: brandLetter,
  carBrandList: carBrandList,
  priceData: priceData,
  moreData: moreData,
  carDetail: carDetail,
  recordList: recordList
};