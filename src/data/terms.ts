export interface SolarTerm {
  id: string
  name: string
  date: string
  month: number
  day: number
  season: 'spring' | 'summer' | 'autumn' | 'winter'
  element: string
  spirit: {
    name: string
    emoji: string
    description: string
  }
  features: string
  sanhou: string[]
  customs: string[]
  health: string[]
  blessing: string
}

export const solarTerms: SolarTerm[] = [
  {
    id: 'xiaohan',
    name: '小寒',
    date: '1月5日',
    month: 1,
    day: 5,
    season: 'winter',
    element: '❄️',
    spirit: {
      name: '冰雪精灵',
      emoji: '🧊',
      description: '身披银白霜华，所过之处雪花纷飞'
    },
    features: '天寒地冻，滴水成冰，进入一年中最冷的时节',
    sanhou: ['雁北乡', '鹊始巢', '雉始雊'],
    customs: ['吃糯米饭', '腊八粥', '画图数九'],
    health: ['防寒保暖', '早睡晚起', '适度进补'],
    blessing: '小寒到，雪花飘，愿你被温暖包围，整个冬天都不冷'
  },
  {
    id: 'dahan',
    name: '大寒',
    date: '1月20日',
    month: 1,
    day: 20,
    season: 'winter',
    element: '❄️',
    spirit: {
      name: '极寒精灵',
      emoji: '🌨️',
      description: '掌控冰雪之力，万物静待春归'
    },
    features: '冬之极致，大寒至，春天还会远吗',
    sanhou: ['鸡始乳', '征鸟厉疾', '水泽腹坚'],
    customs: ['除旧布新', '贴年红', '吃八宝饭'],
    health: ['养肾防寒', '艾灸暖身', '喝姜枣茶'],
    blessing: '大寒迎年，万物待春，愿你心怀希望，静待花开'
  },
  {
    id: 'lichun',
    name: '立春',
    date: '2月4日',
    month: 2,
    day: 4,
    season: 'spring',
    element: '🌱',
    spirit: {
      name: '春风精灵',
      emoji: '🌸',
      description: '轻拂大地，万物复苏的第一缕温暖'
    },
    features: '东风解冻，蛰虫始振，春天的第一个节气',
    sanhou: ['东风解冻', '蛰虫始振', '鱼陟负冰'],
    customs: ['咬春', '打春', '贴春联'],
    health: ['养肝护阳', '春捂秋冻', '早睡早起'],
    blessing: '立春到，百花笑，愿你春风得意，好事发生'
  },
  {
    id: 'yushui',
    name: '雨水',
    date: '2月18日',
    month: 2,
    day: 18,
    season: 'spring',
    element: '💧',
    spirit: {
      name: '春雨精灵',
      emoji: '🌧️',
      description: '润物细无声，滋养万物生长'
    },
    features: '冰雪融化，雨水渐增，春雨贵如油',
    sanhou: ['獭祭鱼', '鸿雁来', '草木萌动'],
    customs: ['拉保保', '接寿', '回娘屋'],
    health: ['祛湿健脾', '养阳护肝', '适度运动'],
    blessing: '雨水至，鸿雁归，愿你如春雨般滋润，心田常绿'
  },
  {
    id: 'jingzhe',
    name: '惊蛰',
    date: '3月5日',
    month: 3,
    day: 5,
    season: 'spring',
    element: '⚡',
    spirit: {
      name: '雷鸣精灵',
      emoji: '🌩️',
      description: '春雷惊醒沉睡，唤醒大地生机'
    },
    features: '春雷始鸣，万物复苏，百虫出蛰',
    sanhou: ['桃始华', '仓庚鸣', '鹰化为鸠'],
    customs: ['祭白虎', '打小人', '吃梨'],
    health: ['养肝明目', '防春困', '多晒太阳'],
    blessing: '惊蛰到，春雷响，愿你精神抖擞，好运惊醒'
  },
  {
    id: 'chunfen',
    name: '春分',
    date: '3月20日',
    month: 3,
    day: 20,
    season: 'spring',
    element: '⚖️',
    spirit: {
      name: '阴阳精灵',
      emoji: '🌤️',
      description: '昼夜平分，阴阳相半，平衡之美'
    },
    features: '昼夜等长，春意正浓，燕子归来',
    sanhou: ['玄鸟至', '雷乃发声', '始电'],
    customs: ['竖鸡蛋', '放风筝', '春祭'],
    health: ['平衡阴阳', '疏肝理气', '踏青郊游'],
    blessing: '春分到，昼夜均，愿你生活平衡，幸福相随'
  },
  {
    id: 'qingming',
    name: '清明',
    date: '4月5日',
    month: 4,
    day: 5,
    season: 'spring',
    element: '🌿',
    spirit: {
      name: '清明精灵',
      emoji: '🍃',
      description: '气清景明，踏青寻春的好时光'
    },
    features: '气清景明，万物皆显，扫墓踏青',
    sanhou: ['桐始华', '田鼠化为鴽', '虹始见'],
    customs: ['扫墓祭祖', '踏青', '插柳'],
    health: ['疏肝解郁', '清心明目', '适度运动'],
    blessing: '清明至，春光美，愿你心清目明，前路坦荡'
  },
  {
    id: ' guyu',
    name: '谷雨',
    date: '4月20日',
    month: 4,
    day: 20,
    season: 'spring',
    element: '🌾',
    spirit: {
      name: '谷雨精灵',
      emoji: '🌱',
      description: '雨生百谷，播种希望的时节'
    },
    features: '雨润百谷，萍始生，鸣鸠拂其羽',
    sanhou: ['萍始生', '鸣鸠拂其羽', '戴胜降于桑'],
    customs: ['喝谷雨茶', '走谷雨', '祭海'],
    health: ['健脾祛湿', '养肝护眼', '防过敏'],
    blessing: '谷雨落，春将晚，愿你播下希望，收获满满'
  },
  {
    id: 'lixia',
    name: '立夏',
    date: '5月5日',
    month: 5,
    day: 5,
    season: 'summer',
    element: '☀️',
    spirit: {
      name: '初夏精灵',
      emoji: '🌻',
      description: '夏之初始，万物并秀，荷香初绽'
    },
    features: '夏季开始，万物繁茂，蝼蝈鸣叫',
    sanhou: ['蝼蝈鸣', '蚯蚓出', '王瓜生'],
    customs: ['立夏饭', '称人', '斗蛋'],
    health: ['养心安神', '清淡饮食', '午休养神'],
    blessing: '立夏到，夏日长，愿你热情如火，活力满满'
  },
  {
    id: 'xiaoman',
    name: '小满',
    date: '5月21日',
    month: 5,
    day: 21,
    season: 'summer',
    element: '🌾',
    spirit: {
      name: '盈浆精灵',
      emoji: '🌾',
      description: '小得盈满，万物渐满，即将成熟'
    },
    features: '小麦灌浆，雨水增多，小满未满',
    sanhou: ['苦菜秀', '靡草死', '麦秋至'],
    customs: ['祭车神', '抢水', '吃苦菜'],
    health: ['清热祛湿', '健脾养胃', '适度补水'],
    blessing: '小满到，物盈满，愿你心满意足，幸福相随'
  },
  {
    id: 'mangzhong',
    name: '芒种',
    date: '6月5日',
    month: 6,
    day: 5,
    season: 'summer',
    element: '🌾',
    spirit: {
      name: '稻芒精灵',
      emoji: '🌾',
      description: '麦浪金黄，播种与收获交织'
    },
    features: '有芒的麦子快收，有芒的稻子可种',
    sanhou: ['螳螂生', '鵙始鸣', '反舌无声'],
    customs: ['送花神', '煮青梅', '安苗'],
    health: ['清热利湿', '养心护脾', '防暑降温'],
    blessing: '芒种忙，种希望，愿你收获满满，不负耕耘'
  },
  {
    id: 'xiazhi',
    name: '夏至',
    date: '6月21日',
    month: 6,
    day: 21,
    season: 'summer',
    element: '🌻',
    spirit: {
      name: '荷风精灵',
      emoji: '🪷',
      description: '荷风送香，昼最长，夜最短'
    },
    features: '阳极之至，日长之至，蝉鸣荷香',
    sanhou: ['鹿角解', '蜩始鸣', '半夏生'],
    customs: ['祭神祖', '吃面条', '消夏避伏'],
    health: ['养心安神', '清热解暑', '午睡养心'],
    blessing: '夏至已至，荷风送香，愿你笑容如夏花般灿烂'
  },
  {
    id: 'xiaoshu',
    name: '小暑',
    date: '7月7日',
    month: 7,
    day: 7,
    season: 'summer',
    element: '🔥',
    spirit: {
      name: '温风精灵',
      emoji: '🌬️',
      description: '温风至，小暑来，避暑正当时'
    },
    features: '暑气渐盛，蟋蟀居壁，鹰始鸷',
    sanhou: ['温风至', '蟋蟀居壁', '鹰乃学习'],
    customs: ['晒伏', '吃饺子', '喝暑汤'],
    health: ['清热解暑', '健脾祛湿', '适度运动'],
    blessing: '小暑至，温风起，愿你心静如水，清凉一夏'
  },
  {
    id: 'dashu',
    name: '大暑',
    date: '7月23日',
    month: 7,
    day: 23,
    season: 'summer',
    element: '🔥',
    spirit: {
      name: '炎阳精灵',
      emoji: '☀️',
      description: '炎阳高照，大暑至，极热之时'
    },
    features: '一年最热时节，腐草为萤，土润溽暑',
    sanhou: ['腐草为萤', '土润溽暑', '大雨时行'],
    customs: ['送大暑船', '烧伏香', '半年圆'],
    health: ['防暑降温', '养心安神', '多喝绿豆汤'],
    blessing: '大暑至，萤火明，愿你如夏花般绚烂，不畏炎热'
  },
  {
    id: 'liqiu',
    name: '立秋',
    date: '8月7日',
    month: 8,
    day: 7,
    season: 'autumn',
    element: '🍂',
    spirit: {
      name: '凉风精灵',
      emoji: '🍃',
      description: '云天收夏色，木叶动秋声'
    },
    features: '秋季开始，暑去凉来，梧桐叶落',
    sanhou: ['凉风至', '白露生', '寒蝉鸣'],
    customs: ['晒秋', '贴秋膘', '啃秋'],
    health: ['润肺防燥', '清热养阴', '适度进补'],
    blessing: '立秋到，凉风起，愿你金秋送爽，收获满满'
  },
  {
    id: 'chushu',
    name: '处暑',
    date: '8月23日',
    month: 8,
    day: 23,
    season: 'autumn',
    element: '🍃',
    spirit: {
      name: '秋爽精灵',
      emoji: '🌤️',
      description: '暑气至此而止，秋意渐浓'
    },
    features: '暑气退散，秋老虎仍在，早晚渐凉',
    sanhou: ['鹰乃祭鸟', '天地始肃', '禾乃登'],
    customs: ['出游迎秋', '放河灯', '开渔节'],
    health: ['养阴润燥', '清肺润肺', '早睡早起'],
    blessing: '处暑至，秋意浓，愿你金风送爽，好事频传'
  },
  {
    id: 'bailu',
    name: '白露',
    date: '9月7日',
    month: 9,
    day: 7,
    season: 'autumn',
    element: '💧',
    spirit: {
      name: '露珠精灵',
      emoji: '💧',
      description: '露凝而白，秋意渐深，早晚微凉'
    },
    features: '鸿雁南飞，玄鸟归，群鸟养羞',
    sanhou: ['鸿雁来', '玄鸟归', '群鸟养羞'],
    customs: ['收清露', '酿白露茶', '祭禹王'],
    health: ['养肺润燥', '防寒保暖', '健脾益胃'],
    blessing: '白露至，露凝霜，愿你如露珠般晶莹剔透'
  },
  {
    id: 'qiufen',
    name: '秋分',
    date: '9月23日',
    month: 9,
    day: 23,
    season: 'autumn',
    element: '🍂',
    spirit: {
      name: '金秋精灵',
      emoji: '🌾',
      description: '金风送爽，昼夜均分，硕果累累'
    },
    features: '昼夜等长，秋色平分，蟹肥菊黄',
    sanhou: ['雷始收声', '蛰虫坯户', '水始涸'],
    customs: ['竖鸡蛋', '送秋牛', '吃秋菜'],
    health: ['滋阴润肺', '养胃健脾', '适度运动'],
    blessing: '秋分到，金叶飘，愿你生活如秋，丰盈美好'
  },
  {
    id: 'hanlu',
    name: '寒露',
    date: '10月8日',
    month: 10,
    day: 8,
    season: 'autumn',
    element: '🍁',
    spirit: {
      name: '露寒精灵',
      emoji: '🍁',
      description: '露气寒冷，枫叶渐红，秋深露重'
    },
    features: '露寒气冷，鸿雁来宾，菊有黄华',
    sanhou: ['鸿雁来宾', '雀入大水为蛤', '菊有黄华'],
    customs: ['赏红叶', '饮菊花酒', '吃芝麻'],
    health: ['养阴润燥', '防寒保暖', '养胃健脾'],
    blessing: '寒露至，秋意浓，愿你如红叶般热情似火'
  },
  {
    id: 'shuangjiang',
    name: '霜降',
    date: '10月23日',
    month: 10,
    day: 23,
    season: 'autumn',
    element: '❄️',
    spirit: {
      name: '霜华精灵',
      emoji: '🌫️',
      description: '霜降时节，万物毕成，冬天将至'
    },
    features: '气肃而凝，露结为霜，秋天最后一个节气',
    sanhou: ['豺乃祭兽', '草木黄落', '蛰虫咸俯'],
    customs: ['赏秋菊', '送芋鬼', '吃柿子'],
    health: ['防秋燥', '养肺润喉', '适度进补'],
    blessing: '霜降至，冬将临，愿你被温暖包围，不畏寒冷'
  },
  {
    id: 'lidong',
    name: '立冬',
    date: '11月7日',
    month: 11,
    day: 7,
    season: 'winter',
    element: '❄️',
    spirit: {
      name: '冬临精灵',
      emoji: '🌨️',
      description: '冬之初始，万物收藏，避寒就温'
    },
    features: '冬季开始，水始冰，地始冻，万物收藏',
    sanhou: ['水始冰', '地始冻', '雉入大水为蜃'],
    customs: ['吃饺子', '酿黄酒', '扫疥'],
    health: ['养肾防寒', '早睡晚起', '适度进补'],
    blessing: '立冬至，万物藏，愿你温暖过冬，好事相随'
  },
  {
    id: 'xiaoxue',
    name: '小雪',
    date: '11月22日',
    month: 11,
    day: 22,
    season: 'winter',
    element: '❄️',
    spirit: {
      name: '初雪精灵',
      emoji: '🌨️',
      description: '小雪初降，银装素裹，静谧美好'
    },
    features: '气温下降，雪未盛，虹藏不见',
    sanhou: ['虹藏不见', '天气上升地气下降', '闭塞而成冬'],
    customs: ['腌腊肉', '吃糍粑', '晒鱼干'],
    health: ['温补肾阳', '养心安神', '适度运动'],
    blessing: '小雪至，雪花飘，愿你如雪花般纯洁美丽'
  },
  {
    id: 'daxue',
    name: '大雪',
    date: '12月7日',
    month: 12,
    day: 7,
    season: 'winter',
    element: '❄️',
    spirit: {
      name: '漫天精灵',
      emoji: '❄️',
      description: '雪盛也，银装素裹，天地苍茫'
    },
    features: '雪量增大，鹖鴠不鸣，虎始交',
    sanhou: ['鹖鴠不鸣', '虎始交', '荔挺出'],
    customs: ['观赏封河', '进补', '喝红薯粥'],
    health: ['温补助阳', '养肾藏精', '适度锻炼'],
    blessing: '大雪至，雪漫舞，愿你如雪般纯净，美好相伴'
  },
  {
    id: 'dongzhi',
    name: '冬至',
    date: '12月22日',
    month: 12,
    day: 22,
    season: 'winter',
    element: '❄️',
    spirit: {
      name: '至寒精灵',
      emoji: '🪬',
      description: '阴极之至，阳气始生，数九寒天'
    },
    features: '一年最冷时，数九开始，昼短夜长至极',
    sanhou: ['蚯蚓结', '麋角解', '水泉动'],
    customs: ['吃饺子', '吃汤圆', '祭祖'],
    health: ['防寒保暖', '养肾藏精', '温补为宜'],
    blessing: '冬至到，夜最长，愿你被幸福包围，温暖如春'
  },
]

export const getTermById = (id: string): SolarTerm | undefined => {
  return solarTerms.find(term => term.id === id)
}

export const getTodayTerm = (): SolarTerm | undefined => {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()

  // 节气时间表（简化版：按月份和日期范围判断）
  for (const term of solarTerms) {
    // 特殊处理跨年情况
    if (term.month === 1 || term.month === 2) {
      if (month === 12 && day >= 7) continue // 大雪之后是冬至
      if (month === term.month && day >= term.day) return term
      if (month === term.month && day < term.day - 15) continue
    } else if (month === term.month) {
      if (day >= term.day) return term
    } else if (month === term.month + 1) {
      if (day < term.day) return term
    }
  }

  return undefined
}

export const getTermsBySeason = (season: SolarTerm['season']): SolarTerm[] => {
  return solarTerms.filter(term => term.season === season)
}

export const seasonInfo = {
  spring: { name: '春季', emoji: '🌸', color: 'spring' },
  summer: { name: '夏季', emoji: '🌻', color: 'summer' },
  autumn: { name: '秋季', emoji: '🍂', color: 'autumn' },
  winter: { name: '冬季', emoji: '❄️', color: 'winter' },
}
