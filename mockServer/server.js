const express = require("express");
const uuid = require("uuid");

const app = express();

function random(arr) {
  return arr[Math.round(Math.random() * (arr.length - 1))];
}

app.get("/api/cinemaList", (req, res) => {
  console.log("res", res);
  const data = [
    {
      filmId: 5910,
      name: "人生大事",
      poster:
        "https://pic.maizuo.com/usr/movie/591f8b2e99b2b015eb56939cd89d208c.jpg",
      actors: [
        {
          name: "刘江江",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/fefb955a30ff59dfdffce208c872a194.jpg",
        },
        {
          name: "朱一龙",
          role: "莫三妹",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/52ce4957dc2ffbfae2073c572d79ee7b.jpg",
        },
        {
          name: "杨恩又",
          role: "武小文",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/5f9b849d882c15af5c99d0e6a4211050.jpg",
        },
        {
          name: "王戈",
          role: "王建仁",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/01d8fe08b6e7881c1c9f89713f9d4ec0.jpg",
        },
        {
          name: "刘陆",
          role: "银白雪",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/d56b58b6f4f8139bb529e3670575c0f5.jpg",
        },
      ],
      director: "刘江江",
      category: "剧情|家庭",
      synopsis:
        "殡葬师莫三妹（朱一龙 饰）在刑满释放不久后的一次出殡中，遇到了孤儿武小文（杨恩又 饰），小文的出现，意外地改变了莫三妹对职业和生活的态度。",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "中国大陆",
      language: "",
      videoId: "",
      premiereAt: 1648857600,
      timeType: 3,
      runtime: 112,
      grade: "7.5",
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: true,
      isSale: false,
    },
    {
      filmId: 5895,
      name: "神探大战",
      poster:
        "https://pic.maizuo.com/usr/movie/b8b010d46800d865c406a13f042ff66c.jpg",
      actors: [
        {
          name: "韦家辉",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/3db9dc685e1b1407f46da68e6f39923a.jpg",
        },
        {
          name: "刘青云",
          role: "李俊",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/82a5d97e318c447133cd6c8262cee846.jpg",
        },
        {
          name: "蔡卓妍",
          role: "陈仪",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/933262483406de7d0e88f50bc31b44a2.jpg",
        },
        {
          name: "林峯",
          role: "方礼信",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/d0e74fc43012d98a4f4d31dd9e8aa639.jpg",
        },
        {
          name: "李若彤",
          role: "黄欣",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/2d115c48e2ee754062376e74dc53c746.jpg",
        },
      ],
      director: "韦家辉",
      category: "犯罪|动作|悬疑",
      synopsis:
        "连环命案、私刑执法、预告杀人、以暴制暴...一群号称“神探”的团伙掀起了一场香港有史以来最邪恶的犯罪！患有精神疾病的“癫佬神探”李俊（刘青云 饰）为查真凶独闯犯罪现场！以“神探夫妇”陈仪（蔡卓妍 饰）和方礼信（林峯 饰）为首的重案组也开启了与杀戮赛跑的缉凶之路！敌友之间，正邪边缘，死亡审判的真相究竟是什么？真正的“神探”到底是谁？",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "中国香港,中国大陆",
      language: "",
      videoId: "",
      premiereAt: 1648857600,
      timeType: 3,
      runtime: 101,
      grade: "7.9",
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: true,
      isSale: false,
    },
    {
      filmId: 5984,
      name: "侏罗纪世界3",
      poster:
        "https://pic.maizuo.com/usr/movie/5011ee407fb407d47e333a3935ec33d1.jpg",
      actors: [
        {
          name: "科林·特雷沃罗",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/f50e32aaebd649e5cefebbccc2589274.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "克里斯·帕拉特",
          role: "Owen",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/24bda32cf503c197398a6f9180aa2102.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "布莱丝·达拉斯·霍华德",
          role: "Claire",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/7054fbfb119a2527485eb583834672bb.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "杰夫·高布伦",
          role: "Ian Malcolm",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/dbb75929bcae6c2dd9688aefc9347de0.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "劳拉·邓恩",
          role: "Ellie Sattler",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/a38b46a1df20148566170484e0d95096.jpg@1246w_1246h_1l_0e",
        },
      ],
      director: "科林·特雷沃罗",
      category: "科幻|动作|冒险|惊悚",
      synopsis:
        "影片讲述了自从恐龙进入了人类世界，侏罗纪公园已经不复存在的故事。",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "美国",
      language: "",
      videoId: "",
      premiereAt: 1654819200,
      timeType: 3,
      runtime: 147,
      grade: "7",
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: true,
      isSale: false,
    },
    {
      filmId: 6003,
      name: "外太空的莫扎特",
      poster:
        "https://pic.maizuo.com/usr/movie/1f1b00853b0adbcc2a5db64384d30768.jpg",
      actors: [
        {
          name: "陈思诚",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/7bf445ede658a81aa0c4179ae29a3f12.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "黄渤",
          role: "任大望",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/0cbb922ef6b5544f78ebe1a8458e7380.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "荣梓杉",
          role: "任小天",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/063e9d756f45af38ae5da4c7b290fafe.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "莫扎特",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/2b8cb885ec6250ac56dcd22faa46bd3d.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "姚晨",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/4d21b9175295ee3fa48d55c338d4dcff.jpg@1246w_1246h_1l_0e",
        },
      ],
      director: "陈思诚",
      category: "奇幻|喜剧|家庭",
      synopsis:
        "任大望（黄渤 饰）一心想把喜好天文的儿子任小天（荣梓杉 饰）培养成钢琴演奏家，为此父子争吵不断。一天，神秘外星人莫扎特意外出现，从此，莫扎特帮助任小天开启了和爸爸“斗智斗勇”的生活。令任小天没有想到的是，莫扎特来到地球竟另有任务……",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "中国大陆",
      language: "",
      videoId: "",
      premiereAt: 1657843200,
      timeType: 3,
      runtime: 136,
      grade: "7.4",
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: true,
      isSale: false,
    },
    {
      filmId: 5979,
      name: "海底小纵队：洞穴大冒险",
      poster:
        "https://pic.maizuo.com/usr/movie/e6ee44927d2e3370dcf251c2627ef6d4.jpg",
      actors: [
        {
          name: "周沁",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/4d1a108c548abf13808e6dcd76ae1600.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "郭盛",
          role: "巴克队长",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/158d1693bdcc9f5b5084d2fbca23324c.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "苏俣",
          role: "呱唧，章教授，小蓝莓",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/9c9269d70ae3b887e637e7b08af9bc81.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "方宇",
          role: "皮医生",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/93308cb95c3af299379287f49b727480.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "曹凯",
          role: "谢灵通，小鲈鱼",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/d41f742618795d8255a07962fd423ff1.jpg@1246w_1246h_1l_0e",
        },
      ],
      director: "布莱尔·西蒙斯|周沁",
      category: "冒险|动画|喜剧",
      synopsis:
        "海底小纵队的任务是将小章鱼库巴送回到它远在加勒比海的家。但是一场意外的事故将他们困在了尤卡坦半岛的热带雨林中，众人必须通过一个海底的隧道到达加勒比海。一场海底洞穴的潜水大冒险就这样开始了……",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "中国大陆",
      language: "",
      videoId: "",
      premiereAt: 1657324800,
      timeType: 3,
      runtime: 80,
      grade: "7",
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: true,
      isSale: false,
    },
    {
      filmId: 5871,
      name: "隐入尘烟",
      poster:
        "https://pic.maizuo.com/usr/movie/1008f3e50e21d845db63d503ec4fd1e1.jpg",
      actors: [
        {
          name: "李睿珺",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/1b6ac7aaf7d9961bb80385cb6267b755.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "海清",
          role: "曹贵英",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/64598e33347c8ab024a4e22bed0f6b51.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "武仁林",
          role: "马有铁",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/db51ba3dcc9b7913bb95098d7463fb58.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "杨光锐",
          role: "张永福儿子",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/37efcc17e6ef81e6443e34bc0d0c4851.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "王彩兰",
          role: "三娘",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/5d8d4db47eb3385301e0720060842085.jpg@1246w_1246h_1l_0e",
        },
      ],
      director: "李睿珺",
      category: "剧情|爱情|现实|农村",
      synopsis:
        "两个被各自家庭抛弃掉的孤独个体，和庄稼一样沦为大地的孩子。在四季时光的流转中，他们那些散落在别人不解目光中的爱，都在比心洁净的土地里结出果实来……",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "中国大陆",
      language: "",
      videoId: "",
      premiereAt: 1657238400,
      timeType: 3,
      runtime: 133,
      grade: "7.3",
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: true,
      isSale: false,
    },
    {
      filmId: 6015,
      name: "明日战记",
      poster:
        "https://pic.maizuo.com/usr/movie/2dff84a9ce76d52bb70e26d6a746786b.jpg",
      actors: [
        {
          name: "吴炫辉",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/639be3f049696ef40f5b8cfe0d235ed7.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "古天乐",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/3bc65abc84745301e70eef43e8a7ee7f.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "刘青云",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/451e8aa4a24c9de35eb8d8f344ee1435.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "刘嘉玲",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/7c086bdc1c9c120e0b1a97a23c390ab2.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "谢君豪",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/de98486475ca3afde69a45a85020fe5f.jpg@1246w_1246h_1l_0e",
        },
      ],
      director: "吴炫辉",
      category: "动作|科幻|冒险",
      synopsis:
        "华语硬核科幻震撼来袭，中国首部机甲动作爽片燃爆今夏！未来世界，地球因环境污染而千疮百孔，人类家园破败萧条。一颗陨石突然撞击地球，并带来杀伤力极强的外星生物，560万人将因此失去生命。人类命运岌岌可危，总指挥李升（张家辉饰）派出以军人泰来（古天乐饰）为首的精英部队前往执行改造计划，部队却突遭暴力攻击，只有泰来和通讯兵光仔（万国鹏饰）幸存。军官谭冰（刘嘉玲饰）坚持执行PlanB，指挥官郑重生（刘青云饰）反对并找来旧友臭鼬（姜皓文饰）前往支援。拯救家园刻不容缓，但在通讯员小绿（吴倩饰）悄悄提醒下，泰来发现了一个足以毁天灭地的邪恶阴谋……",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "中国大陆,中国香港",
      language: "",
      videoId: "",
      premiereAt: 1660262400,
      timeType: 3,
      runtime: 99,
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: true,
      isSale: false,
    },
    {
      filmId: 5595,
      name: "冲出地球",
      poster:
        "https://pic.maizuo.com/usr/movie/c80cb6f86b6d6cc4d8738ef49e88b02d.jpg",
      actors: [
        {
          name: "胡一泊",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/08d15ba7c4158df4a1cccf8de342e1a8.jpg",
        },
      ],
      director: "胡一泊",
      category: "动画|冒险|科幻",
      synopsis:
        "当地球成为密室，你有办法密室逃脱吗？在宇宙高度文明、星际间可以自由通航的未来世界，一场陨石雨毁掉了大半个地球。高等势力银河眼借保护地球之名，展开了“天墙计划”。岂料，天墙一旦升起，便再也无法打开。而这却仅仅是冰山一角，更大的灾难还在酝酿。少年麦当坚信，即便再可怕的困境，只有冲出去，才有希望！",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "中国大陆",
      language: "",
      videoId: "",
      premiereAt: 1627603200,
      timeType: 3,
      runtime: 0,
      grade: "7",
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: true,
      isSale: false,
    },
    {
      filmId: 5969,
      name: "哆啦A梦：大雄的宇宙小战争2021",
      poster:
        "https://pic.maizuo.com/usr/movie/c151962e41cb282f09b7855261841da7.jpg",
      actors: [
        {
          name: "山口晋",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/70732f61c74c8c6ace4ad76c8e52f145.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "水田山葵",
          role: "Doraemon,",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/5d31b9c38343b57d8f3268340894bcb5.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "嘉数由美",
          role: "Shizuka,",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/67642fc2c248a590962e240d92494a99.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "关智一",
          role: "Suneo,",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/22cc7823acd7fe1871b03a7609bcf3be.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "大原惠美",
          role: "Nobita,",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/ef839ad3ed6a276f0ebf2e5b75c3d0b7.jpg@1246w_1246h_1l_0e",
        },
      ],
      director: "山口晋",
      category: "科幻|冒险|动画",
      synopsis:
        "电影讲述大雄意外结识来自匹里卡星、体形小巧的外星人帕比，并在哆啦A梦的帮助下，与大家一起穿越星际，共同守护友情和星球的宇宙冒险故事。",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "日本",
      language: "",
      videoId: "",
      premiereAt: 1653696000,
      timeType: 3,
      runtime: 110,
      grade: "7.1",
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: true,
      isSale: false,
    },
    {
      filmId: 5591,
      name: "狙击手",
      poster:
        "https://pic.maizuo.com/usr/movie/d57bd15062c75e36fc6e23df74d7e1ef.jpg",
      actors: [
        {
          name: "张艺谋",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/59857ef5e898298dc244fbce26cce81a.jpg",
        },
        {
          name: "张末",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/0f6bb44011715fc9ad4e99321cf396ea.jpg",
        },
        {
          name: "陈永胜",
          role: "大永",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/d0836d15a8d141d567ca63a7b41cd5be.jpg",
        },
        {
          name: "章宇",
          role: "刘文武",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/0c41c7945bb3799b9ea983c748bd7358.jpg",
        },
        {
          name: "刘奕铁",
          role: "亮亮",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/462696a745e3db65c89821520fe87dd9.jpg",
        },
      ],
      director: "张艺谋|张末",
      category: "剧情|战争|历史",
      synopsis:
        '影片根据抗美援朝战争“冷枪冷炮”运动中神枪手群体事迹改编。1952年冬至1953年初，中国人民志愿军与联合国军在朝鲜战场形成僵持，双方发起了低强度的密集狙击战，史称\\\\"冷枪冷炮运动\\\\"。在连长（张译 饰）带领下的狙击五班战士枪法过人，成为敌军的心头大患，班长刘文武（章宇 饰）更成为重点狙击对象。为重创狙击五班，敌方调配精英狙击小队，配以最先进的武器装备，更迫使狙击五班战士大永（陈永胜 饰）等人为救同伴进入其设好的险境之地。但正当敌军打响自己如意算盘之时，他们未料到，被他们当作诱饵的侦察兵亮亮（刘奕铁 饰）身上其实隐藏着更大的秘密......',
      filmType: {
        name: "4D",
        value: 13,
      },
      nation: "中国大陆",
      language: "",
      videoId: "",
      premiereAt: 1643673600,
      timeType: 3,
      runtime: 96,
      grade: "7.4",
      item: {
        name: "4D",
        type: 13,
      },
      isPresale: true,
      isSale: false,
    },
  ];
  res.send({
    results: data,
  });
});
app.get("/api/comingList", (req, res) => {
  console.log("res", res);
  const data = [
    {
      filmId: 6011,
      name: "遇见你",
      poster:
        "https://pic.maizuo.com/usr/movie/dd827665439d53f2273cf689a10c0603.jpg",
      actors: [
        {
          name: "落落",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/fda325cd74f21a7c6f75a8af84b110f7.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "李汶翰",
          role: "周灿",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/100c7f65342dfff0cd14657275ef2179.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "徐若晗",
          role: "余骄阳",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/2415166a9516bbfa0970ab66751d8a40.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "王博文",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/90817613e7660f467e3e12fbcbb267fa.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "高秋梓",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/6962fcc3d945cc51d74f27d7bf33ddd7.jpg@1246w_1246h_1l_0e",
        },
      ],
      director: "落落",
      category: "剧情|爱情",
      synopsis:
        "女孩在最美好的青春里，遇到了一个想要勇敢去爱的男孩。 18岁那年，被同学嘲笑为“垃圾桶”的余骄阳遇见了让她一见钟情的转校生周灿。她帮助周灿实现梦想，将周灿视为命中注定，并努力和周灿考到了一个城市，陪伴周灿成长。步入社会后，工作和生活琐碎逐渐占据了他们的恋爱时光，二人思维和轨迹不再同频， 女孩的期望逐渐变成失望，分手导火索也意外降临...... 一年后，周灿和骄阳再次相遇，种种回忆涌上心头，凝结成了意难平，明明相爱的我们，为何会分开?",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "中国大陆",
      language: "",
      videoId: "",
      premiereAt: 1659571200,
      timeType: 3,
      runtime: 110,
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: false,
      isSale: false,
    },
    {
      filmId: 6015,
      name: "明日战记",
      poster:
        "https://pic.maizuo.com/usr/movie/2dff84a9ce76d52bb70e26d6a746786b.jpg",
      actors: [
        {
          name: "吴炫辉",
          role: "导演",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/639be3f049696ef40f5b8cfe0d235ed7.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "古天乐",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/3bc65abc84745301e70eef43e8a7ee7f.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "刘青云",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/451e8aa4a24c9de35eb8d8f344ee1435.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "刘嘉玲",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/7c086bdc1c9c120e0b1a97a23c390ab2.jpg@1246w_1246h_1l_0e",
        },
        {
          name: "谢君豪",
          role: "演员",
          avatarAddress:
            "https://pic.maizuo.com/usr/movie/de98486475ca3afde69a45a85020fe5f.jpg@1246w_1246h_1l_0e",
        },
      ],
      director: "吴炫辉",
      category: "动作|科幻|冒险",
      synopsis:
        "华语硬核科幻震撼来袭，中国首部机甲动作爽片燃爆今夏！未来世界，地球因环境污染而千疮百孔，人类家园破败萧条。一颗陨石突然撞击地球，并带来杀伤力极强的外星生物，560万人将因此失去生命。人类命运岌岌可危，总指挥李升（张家辉饰）派出以军人泰来（古天乐饰）为首的精英部队前往执行改造计划，部队却突遭暴力攻击，只有泰来和通讯兵光仔（万国鹏饰）幸存。军官谭冰（刘嘉玲饰）坚持执行PlanB，指挥官郑重生（刘青云饰）反对并找来旧友臭鼬（姜皓文饰）前往支援。拯救家园刻不容缓，但在通讯员小绿（吴倩饰）悄悄提醒下，泰来发现了一个足以毁天灭地的邪恶阴谋……",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "中国大陆,中国香港",
      language: "",
      videoId: "",
      premiereAt: 1660262400,
      timeType: 3,
      runtime: 99,
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: true,
      isSale: false,
    },
    {
      filmId: 3451,
      name: "阿凡达2",
      poster:
        "https://pic.maizuo.com/usr/movie/c5da4eddf824824c21f42aebd4f4120f.jpg",
      actors: [
        {
          name: "萨姆·沃辛顿",
          role: "杰克·萨利",
          avatarAddress:
            "https://pic.maizuo.com/usr/100003451/df050071a829cb47d7612e1e4c3f8b37.jpg",
        },
        {
          name: "佐伊·索尔达娜",
          role: "奈蒂莉",
          avatarAddress:
            "https://pic.maizuo.com/usr/100003451/a457d0e419128720688a6d11712db4b4.jpg",
        },
        {
          name: "西格妮·韦弗",
          role: "格蕾丝·奥格斯",
          avatarAddress:
            "https://pic.maizuo.com/usr/100003451/2ebc1d29d21743c960de288930921814.jpg",
        },
        {
          name: "史蒂芬·朗",
          role: "迈尔斯·夸奇上校",
          avatarAddress:
            "https://pic.maizuo.com/usr/100003451/368a975d10ee8e0bf30b5d5906fb6527.jpg",
        },
      ],
      director: "詹姆斯·卡梅隆",
      category: "动作|科幻|奇幻|冒险",
      synopsis:
        "《阿凡达2》的剧情承接自第一部的5年之后。曾经的地球残疾军人杰克·萨利，如今已经是潘多拉星球纳美族一方部族的族长，并且与爱妻娜塔莉共同育有一对可爱的儿女，日子过得平淡而充实。然而某天，有个部族的兄弟在海岸附近巡逻时遭到利器割喉身亡。通过现场勘查，以及作为前海军陆战队员的敏锐直觉，杰克判断已经有人类的阿凡达混入了部落……",
      filmType: {
        name: "2D",
        value: 1,
      },
      nation: "美国",
      language: "英语",
      videoId: "",
      premiereAt: 1671321600,
      timeType: 3,
      runtime: 90,
      item: {
        name: "2D",
        type: 1,
      },
      isPresale: false,
      isSale: false,
    },
  ];
  res.send({
    results: data,
  });
});

app.listen("3006", () => {
  console.log("Server is running on port 3006");
});
