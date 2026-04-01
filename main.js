// ========== LECTURE DATA（顺序与《设计史论》课程思政研究报告·八讲框架一致）==========
const L = [
{n:1,title:'设计史怎么被书写？',sub:'史学方法论与批评框架导论（元方法论）',icon:'📜',color:'#6366f1',
 keywords:['五大史学流派','知识—权力','历史他者','中国设计史主体性'],
 desc:'以“设计史的书写方式本身即是一种知识权力实践”为核心命题，建立叙事预设识别与史学流派辨析能力；对照王受之式通史与杭间式本土路径，为全课程提供元批评工具箱。'},
{n:2,title:'前现代造物',sub:'中西传统造物体系的哲学比较',icon:'🏺',color:'#059669',
 keywords:['考工记四者','天工开物','用之美','伊斯兰几何'],
 desc:'以道器关系、柳宗悦“用之美”、行会与工匠知识论为工具，比较中、日、欧、伊斯兰四大造物逻辑；《考工记》“合此四者然后可以为良”与可持续设计的系统性思维同构。'},
{n:3,title:'现代设计的诞生',sub:'改革运动、乌托邦冲动与近代中国工艺',icon:'⚙️',color:'#dc2626',
 keywords:['水晶宫1851','莫里斯矛盾','1914科隆论战','实业救国'],
 desc:'从工艺美术运动到新艺术、制造联盟与功能主义，把握艺术劳动论、装饰即罪恶与类型化张力；并联晚清南洋劝业会与“中学为体西学为用”的工艺困境。'},
{n:4,title:'包豪斯神话的建立与解构',sub:'现代主义、修正史学与民国设计教育',icon:'🔺',color:'#f59e0b',
 keywords:['三任校长','冷战包豪斯','修正史学','庞薰琹张光宇雷圭元'],
 desc:'解析包豪斯三阶段与“神话的包豪斯”；以修正史学揭示机器美学、性别与殖民维度；并联庞薰琹、张光宇、雷圭元与中央工艺美院的历史坐标。'},
{n:5,title:'战后消费与设计民主',sub:'符号价值、地方性回应与新中国设计',icon:'🛒',color:'#8b5cf6',
 keywords:['有计划废止','符号价值','拉姆斯十原则','社会主义设计观'],
 desc:'美国消费逻辑与鲍德里亚符号价值；意大利/北欧/日本多重路径；对照1949—1976年以耐用、可修、人民为中心的另一套现代设计可能。'},
{n:6,title:'后现代转向',sub:'反叛、文化政治与改革开放设计转型',icon:'🌀',color:'#ec4899',
 keywords:['元叙事终结','双重编码','帕帕内克','深圳设计'],
 desc:'利奥塔、詹克斯、孟菲斯与帕帕内克的设计伦理；后现代被时尚收编的悖论；并联改革开放后设计角色转变与深圳“设计之都”地理想象。'},
{n:7,title:'全球化与本土性',sub:'身份政治、事理学与社会创新',icon:'🌐',color:'#0891b2',
 keywords:['文化混杂性','中国制造到中国设计','南方国家话语','曼奇尼'],
 desc:'从“中国制造”到“中国设计”的叙事建构；柳冠中“事理学”、曼奇尼社会创新与对设计帝国主义的批判；辨析“新中式”符号移植与价值激活。'},
{n:8,title:'数字化转型与设计伦理',sub:'可持续三代、超级App与双碳议程',icon:'🔮',color:'#7c3aed',
 keywords:['UED与黑暗模式','推测设计','再生设计','生态文明'],
 desc:'诺曼用户中心、推测设计与绿色—生态—再生的可持续范式跃迁；中国互联网设计生态与双碳目标下的责任追问；呼应终讲“知识的良知”。'}
];

// ========== 课程文档一致：每讲史学信息、工具箱、精读与研讨（摘自《设计史论》课程思政研究报告）==========
const DOC_META = [
  { stage:'元方法论（跨越所有历史阶段）', thesis:'设计史不是中立的记录，而是充满立场与权力的叙事建构', goals:'建立史学方法论的元批评意识，为后续七讲提供批评工具箱', tools:[
    { t:'工具一｜史学流派识别框架', d:'用于后续各讲识别文献的方法论立场——阅读任何设计史文本前先问：作者站在哪个方法论传统中？' },
    { t:'工具二｜"知识—权力"分析框架（福柯）', d:'谁有权命名"好设计"、确定哪段历史"重要"？标准生产本身即是权力场域，而非价值中立的学术判断。' },
    { t:'工具三｜"历史他者"的识别', d:'被系统性遮蔽的群体与文化——非西方传统、女性设计师、无名工匠、使用者——缺席是叙事选择，而非历史真实。' }
  ]},
  { stage:'前工业时代（中国：先秦至明清；欧洲：中世纪至文艺复兴）', thesis:'现代设计的"断裂"背后，是数千年造物智慧被重新编码而非真正消失', goals:'建立前现代造物传统的比较认知框架；理解"设计意识"作为历史连续体存在', tools:[
    { t:'工具一｜"道器关系"分析框架', d:'形而上之"道"与形而下之"器"的辩证统一——造物是哲学观念的物质化，器物承载礼制秩序与社会表达。' },
    { t:'工具二｜"用之美"（民艺美学）', d:'柳宗悦：美在日常使用的无名器物里，反对精英审美对美的垄断，为工匠传统提供美学依据。' },
    { t:'工具三｜"技术知识论"', d:'帕梅拉·朗：工匠实践性知识（knowhow）为何长期被排除于正式知识史之外？揭示前现代造物被现代设计史忽视的根源。' }
  ]},
  { stage:'19世纪后半叶至20世纪初（约1850—1914）', thesis:'现代设计从对机器文明的道德愤怒中诞生，却最终与它所批判的力量达成和解', goals:'理解现代设计改革运动的思想根源与社会背景；掌握路斯—莫里斯—穆特修斯三角张力', tools:[
    { t:'工具一｜"装饰即罪恶"（路斯）', d:'装饰的道德化批判及其隐含的阶级政治；极简亦可成为精英品味的区分机制。' },
    { t:'工具二｜"艺术劳动论"（莫里斯）', d:'手工艺作为对工业异化劳动的抵抗——改革运动的社会主义底色与市场现实之间的根本矛盾。' },
    { t:'工具三｜"类型化与标准化"（穆特修斯）', d:'工业设计标准化逻辑——技术理性对设计个性的压制，亦是20世纪功能主义的直接前身。' },
    { t:'工具四｜"乌托邦冲动"', d:'设计改革何以常以道德语言表述？"好设计能改善社会"的信念及其历史局限。' }
  ]},
  { stage:'1919—1960年代', thesis:'包豪斯既是20世纪最重要的设计教育实验，也是被过度神话化的设计意识形态', goals:'掌握现代主义设计的核心逻辑与历史局限；能够对"包豪斯神话"进行批判性分析', tools:[
    { t:'工具一｜"全面艺术作品"（Gesamtkunstwerk）', d:'整合艺术、手工艺与技术的乌托邦理想，及其在不同校长时期的诠释与变形。' },
    { t:'工具二｜"形式追随功能"的解构', d:'沙利文原句的历史语境与误用；福蒂："功能"从来不是中立技术概念，而是阶级品味与意识形态的编码。' },
    { t:'工具三｜修正史学视角', d:'历史的包豪斯（内部矛盾、性别不平等、政治压力）vs 神话的包豪斯（西方现代设计的圣地）。' },
    { t:'工具四｜"冷战包豪斯"', d:'流亡美国后神话被包装为"自由民主设计价值观"以对抗苏联——叙事如何服务于政治意识形态。' }
  ]},
  { stage:'1945—1970年代', thesis:'战后设计是资本主义消费逻辑最精密的物质表达，也遭遇了来自欧洲、亚洲与社会主义阵营的多元地方性抵抗', goals:'理解消费社会理论与战后设计意识形态关系；能够对"设计民主化"话语进行批判性分析', tools:[
    { t:'工具一｜"有计划的废止制度"', d:'哈利·厄尔与年度款式更新——设计异化为刺激欲望、加速更替的工具。' },
    { t:'工具二｜鲍德里亚的"符号价值"理论', d:'使用价值→交换价值→符号价值；人们购买的常是身份符号与生活方式想象。' },
    { t:'工具三｜"设计民主化"话语的阶级分析', d:'福利国家语境下的进步意义 vs 宜家全球扩张中将特定中产阶级审美普世化。' },
    { t:'工具四｜"冷战设计地理"', d:'战后设计地理在很大程度上是冷战意识形态竞争的物质化表达。' }
  ]},
  { stage:'1970年代—1990年代', thesis:'后现代设计既是对现代主义独裁的集体反叛，也在无意中成为消费资本主义最成熟的自我更新机制', goals:'理解后现代主义的哲学基础及其设计转化；掌握设计批评的主要理论工具与写作范式', tools:[
    { t:'工具一｜"元叙事的终结"（利奥塔）', d:'大叙事失去合法性；功能主义的"普世标准"本身是一种权力产物。' },
    { t:'工具二｜"双重编码"（詹克斯）', d:'同时向专业精英与普通大众发言；历史引用与形式游戏实现多重意义叠加。' },
    { t:'工具三｜"反设计"与"激进设计"', d:'超级工作室、阿基佐姆等以设计否定设计本身，批判消费社会与设计工业共谋。' },
    { t:'工具四｜设计批评的写作范式', d:'马戈林《设计话语》：将历史分析、理论工具与价值判断整合为学术批评写作。' }
  ]},
  { stage:'1990年代—2010年代', thesis:'全球化并未带来设计的同质化，而是激发了更剧烈的文化身份博弈与多元现代性的创造性实践', goals:'掌握全球化语境下设计身份政治的理论工具；能够批判性分析"中国设计"话语的学术建构', tools:[
    { t:'工具一｜"文化混杂性"（霍米·巴巴）', d:'非西方设计既非"纯粹本土"也非"简单西化"，而是文化接触中生成的"第三空间"。' },
    { t:'工具二｜曼奇尼的"社会创新设计"', d:'设计师从"问题的解决者"转向"可能性的连接者"；社区与本地知识成为创新核心资源。' },
    { t:'工具三｜柳冠中"事理学"', d:'设计对象是"事"（行为、关系、系统）而非"物"，对包豪斯物本主义构成超越性回应。' },
    { t:'工具四｜"南方国家设计话语"', d:'邦西耶佩、埃斯科瓦尔等对设计帝国主义与西方中心知识生产的后殖民批判。' }
  ]},
  { stage:'2000年代—当代（约2010年代至今）', thesis:'数字化重新定义了"设计是什么"，也以前所未有的迫切方式追问"设计究竟为了什么"', goals:'理解数字化转型对设计边界与方法论的重构；建立设计伦理的基本批评框架', tools:[
    { t:'工具一｜"以用户为中心的设计"（诺曼）', d:'可供性、反馈、映射、约束等认知原则，将评价标准从物转向人与物的交互认知。' },
    { t:'工具二｜"推测设计"（邓恩与拉比）', d:'设计作为批评与质疑的工具；通过可能的未来揭示当下技术路径的价值预设与风险。' },
    { t:'工具三｜"可持续设计三代进化"', d:'绿色设计→生态设计（LCA）→再生设计：从修补损害到积极修复社会—技术—生态系统。' },
    { t:'工具四｜"黑暗模式"（Dark Pattern）', d:'哈里·布里格纳尔：利用认知偏差操控决策的界面设计；设计知识与伦理的深层张力。' }
  ]}
];

const DOC_APPENDIX = [
  { readings:[
    '尼古拉斯·佩夫斯纳，《现代设计的先驱：从威廉·莫里斯到格罗皮乌斯》序言（1960年修订版）。中译本：王申祜、王晓京译，中国建筑工业出版社，2004年。',
    '阿德里安·福蒂，《欲望之物：设计与社会（1750年至今）》第一章《导言》，泰晤士与哈德逊出版社，1986年。中译本：肖凡译，译林出版社，2014年。',
    '杭间，《中国工艺美学史》绪论，人民美术出版社，2007年。',
    '约翰·沃克，《设计史与设计的历史》导论，普鲁托出版社，1989年。（暂无中译本，建议关键段落教师译文讲义）'
  ], questions:[
    '四位作者各自如何定义"设计"？这些定义预设了怎样的知识边界？',
    '佩夫斯纳与福蒂在描述同一历史时期的设计时，选取的案例有何不同？这种差异揭示了什么？',
    '杭间与前两位西方学者相比，其问题意识与叙事框架有何根本性差异？'
  ], seminar:{ core:'"谁的设计史？为谁书写？"', layers:[
    { k:'识别', t:'上述四种叙事框架各自预设了怎样的理想读者与核心价值观？若你是非洲设计师、中国农村手艺人、当代女性产品设计师，分别阅读这四本书会有怎样的体验？' },
    { k:'分析', t:'当我们在课堂、论文与职业实践中评价设计"好"或"重要"，无意识中援引的是哪种史学判断标准？这种标准如何内化进设计教育？' },
    { k:'建构', t:'中国学者书写中国设计史，与西方学者书写"中国设计"，知识论立场有何根本差异？前者的学术主体性体现在哪些具体方法论选择上？' }
  ]}},
  { readings:[
    '《考工记·总序》选段（先秦，原典），建议闻人军注译版《考工记译注》，上海古籍出版社，1993年。',
    '柳宗悦，《工艺文化》第一章《工艺之美》，岩波书店，1942年。中译本：徐艺乙译，广西师范大学出版社，2006年。',
    '帕梅拉·朗，《开放、保密、著作权：文艺复兴时期的技术、知识与知识产权》导论选段，约翰·霍普金斯大学出版社，2001年。（暂无中译本，教师译文讲义）'
  ], questions:[
    '《考工记》的"天时、地气、材美、工巧"与当代设计流程哪些环节对应？是表面类比还是深层结构同构？',
    '柳宗悦"用之美"与现代主义功能美学有何相似与根本差异？',
    '朗的研究揭示了前现代工匠知识的何种认识论地位问题？与当代设计知识学科化有何关联？'
  ], seminar:{ core:'"前现代造物中有\'设计\'吗？"', layers:[
    { k:'概念质疑', t:'"设计"作为有意识、前置的规划活动，是否是现代西方工业文明的产物？将其投射到《考工记》作者、行会工匠、民艺匠人身上是否构成时代错置？是否存在超越时期的"设计意识"连续体？' },
    { k:'价值追问', t:'传统造物追求的"整体性"在现代专业分工体制中如何断裂？效率之外失去了什么？' },
    { k:'当代转化', t:'传统造物智慧最有价值的遗产是形式语言还是哲学方法论？二者在今日各自的转化路径有何不同？' }
  ]}},
  { readings:[
    '威廉·莫里斯，《装饰艺术》（The Lesser Arts，1877年演讲），收入《莫里斯文集》；可选用许平等编译中文选集。',
    '阿道夫·路斯，《装饰与罪恶》（1908年），收入《建筑随笔》等中译本。',
    '穆特修斯与凡·德·费尔德，1914年德意志制造联盟科隆年会辩论记录节选（教师编译讲义）。'
  ], questions:[
    '莫里斯与路斯道德批判方向相反，各自隐含怎样的阶级立场与美学意识形态？',
    '路斯"装饰是罪恶"在逻辑上是否自洽？今日重读哪些论点仍有力、哪些已失效？',
    '穆特修斯—凡·德·费尔德的辩论在今日数字化语境中是否仍有意义？"平台标准化"与"设计师个性"是否是当代版本？'
  ], seminar:{ core:'"设计改革是审美革命还是道德运动？"', layers:[
    { k:'历史分析', t:'工艺美术运动、新艺术、制造联盟均宣称"好设计能够改善社会"。这一信念的历史根源与理论假设是什么？' },
    { k:'批判性反思', t:'莫里斯乌托邦理想与实践的结构性矛盾——如何从结构层面而非道德层面分析？' },
    { k:'当代延伸', t:'"社会创新设计""设计思维"等当代信念与莫里斯时代相比，延续与变化各有哪些？' }
  ]}},
  { readings:[
    '瓦尔特·格罗皮乌斯，《包豪斯宣言》（1919年）全文；可配合王受之编译版本并批判性阅读。',
    '阿德里安·福蒂，《欲望之物》功能主义章节，译林出版社2014年中译本。',
    '柳冠中，《"事理学"论纲》选段，湖南科学技术出版社，2006年。'
  ], questions:[
    '《包豪斯宣言》理想与历史实践之间有哪些根本性落差？',
    '福蒂如何论证"功能主义"并非中立技术原则？论证是否令人信服？可反驳处何在？',
    '柳冠中"设计的对象是\'事\'而非\'物\'"对包豪斯功能主义构成何种根本性挑战？'
  ], seminar:{ core:'"包豪斯是普世设计语言，还是特定历史的意识形态产物？"', layers:[
    { k:'神话解构', t:'功能主义真的"没有风格"吗？无衬线、白墙、钢管家具是否本身就是强烈美学与阶级符号？' },
    { k:'地理政治', t:'"冷战包豪斯"如何将充满矛盾的实体改造为"自由民主创造力"的象征？对全球设计教育影响何在？' },
    { k:'本土反思', t:'当代中国设计高等教育在多大程度上仍是包豪斯模式的直接继承？合理性与局限性各是什么？对未来方向意味着什么？' }
  ]}, paperNote:'第四讲结束后一周内提交选题意向（500字）：对象界定、核心问题、史学方法框架（至少一种本课流派）、不少于5条文献。范式：历史个案研究型 / 理论批评型 / 跨文化比较型。' },
  { readings:[
    '让·鲍德里亚，《消费社会》第一章，刘成富、全志钢译，南京大学出版社，2014年。',
    '万斯·帕卡德，《废物制造者》第一章（教师编译讲义或节译）。',
    '迪特·拉姆斯，"好设计十原则"，与鲍德里亚并置阅读，感受功能主义理想与消费主义现实的张力。'
  ], questions:[
    '鲍德里亚"符号价值"在今日社交媒体与晒单文化中是否更显著？设计角色发生了怎样的变化？',
    '拉姆斯"好设计"与消费主义设计之间是真实冲突还是市场定位差异？',
    '新中国社会主义设计观与斯堪的纳维亚"设计民主化"表面相似何在？制度基础与价值根源有何根本差异？'
  ], seminar:{ core:'"好设计服务于谁？"', layers:[
    { k:'机制分析', t:'宜家"民主设计"是真实的设计民主化，还是将斯堪的纳维亚中产阶级审美强制推广为普遍标准？' },
    { k:'比较研究', t:'中国社会主义设计体系是否提供了不同的"为谁服务"答案？价值与局限？对当代"设计为社会"有何参照？' },
    { k:'当代追问', t:'当苹果以精美设计支撑高溢价、快时尚以"民主化"制造浪费——"好"是否须建立在对物完整生命周期的系统评价之上？' }
  ]}, paperNote:'第五讲结束后一周内提交提纲与文献（1500字）：研究问题、三级论证框架、不少于10条参考文献（含至少3条英文与3条中文）。' },
  { readings:[
    '维克多·帕帕内克，《为真实世界设计》序言与第一章，周博译，中信出版社，2013年。',
    '查尔斯·詹克斯，《后现代建筑语言》导论（建议建工社相关中译本）。',
    '维克多·马戈林，《设计话语》编者前言，芝加哥大学出版社，1989年。（教师译文讲义）'
  ], questions:[
    '帕帕内克对工业设计师的激烈批判，在数字产品、算法推荐语境下哪些更有力、哪些需修正？',
    '詹克斯"双重编码"能否用于分析今日中国设计市场中的"新中式"？有效性与限制何在？',
    '马戈林将设计批评定义为"对设计的价值判断"——与媒体评论、设计师自述、消费者体验有何本质区别？'
  ], seminar:{ core:'"少即是多"vs"少即是乏味"——现代主义与后现代之争的实质', layers:[
    { k:'哲学层面', t:'对立是美学趣味差异，还是关于"什么是好设计"的根本价值冲突？"元叙事终结"是解放了可能性还是取消了批评标准？' },
    { k:'政治经济层面', t:'孟菲斯被迅速收编揭示了什么？后现代颠覆了消费资本主义还是为其提供更精密的更新机制？"批评"与"商品化"对今日社会创新、可持续话语是否同样适用？' },
    { k:'中国语境', t:'中国"未完成现代主义"与"后现代话语场域"并存的处境是障碍还是优势？如何建立既不重复西方现代主义、也不简单追随西方后现代的独立视角？' }
  ]}},
  { readings:[
    '埃齐奥·曼奇尼，《设计，在人人设计的时代》选章，钟芳、马谨译，电子工业出版社，2016年。',
    '柳冠中，《设计文化与文化设计》，《装饰》，CNKI可检索。',
    '圭·邦西耶佩，"Design and Democracy"，《设计议题》Vol.22 No.2，2006年。（JSTOR，教师译文讲义）'
  ], questions:[
    '曼奇尼"人人都在设计"与专业设计师的"设计"有何本质区别？对学科知识边界意味着什么？',
    '柳冠中"事理学"与曼奇尼"社会创新设计"有何深层共鸣与根本差异？',
    '邦西耶佩对"设计帝国主义"的批判是否适用于当前中国设计教育与国际评价体系？中国是受害者还是也可能成为实践者？'
  ], seminar:{ core:'"什么是中国设计？"', layers:[
    { k:'概念辨析', t:'独特性根植于文化符号、技术路径、价值观体系还是对用户语境的洞察？几者之间是支撑还是竞争？' },
    { k:'批评性审视', t:'"文化自信"在设计领域是否存在商业化、表面化、空洞化风险？"国潮"作为资本策略时，学者如何建立比市场话语更严格的批评标准？' },
    { k:'学术定位', t:'南方国家设计话语兴起对中国学界意味着什么？中国能否、是否应在全球知识重构中发挥超越"亚洲代表"的更主动作用？' }
  ]}},
  { readings:[
    '唐纳德·诺曼，《设计心理学》第一章，梅琼译，中信出版社，2015年修订版。',
    '安东尼·邓恩与菲奥娜·拉比，《推测性一切》导论，MIT Press，2013年。（教师译文讲义）',
    '中国"双碳目标"与可持续设计相关政策文件节选（任课教师按最新政策指定）。'
  ], questions:[
    '诺曼"心理可供性"在数字界面与物理产品中的应用有何异同？数字环境是否根本改变了人与设计物的认知关系？',
    '推测设计将设计定位为"批评工具"而非"解决方案工具"，对设计研究生教育意味着什么？是否须同时具备解题能力与质疑框架的能力？',
    '"双碳"政策话语如何在不丧失学术严格性的前提下转化为原创性设计研究问题？何种框架能既回应政策又保持独立性？'
  ], seminar:{ core:'"设计师是问题的解决者，还是问题的制造者？"', layers:[
    { k:'案例分析', t:'短视频黏性界面（无限滚动、自动播放、精准推荐）既是出色UX也是对注意力的系统性剥削。如何在学术层面表述这一矛盾，而非简单归罪技术或免责设计？' },
    { k:'伦理框架', t:'当"好的设计体验"与用户长期福祉冲突时，设计师伦理边界何在？行业自律是否足够？是否需要类似医疗职业伦理的外部约束？设计师责任与平台商业模式如何在分析中分清？' },
    { k:'中国语境', t:'"超级App"整合数字生活在便利与数据垄断、注意力捕获之间的张力下，如何建立兼具本土视角与全球对话能力的数字设计伦理研究框架？' }
  ]}}
];

function renderTeachingMetaBanner(i){
  const m = DOC_META[i];
  if(!m) return '';
  return `<div class="rounded-2xl border border-ink-200 bg-white/95 p-6 mb-8 shadow-sm shadow-ink-900/5">
    <p class="font-mono text-[10px] text-amber-700 tracking-widest uppercase mb-3">本讲文档信息 · 与研究报告一致</p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm">
      <div><span class="text-ink-500 text-xs">史学阶段</span><p class="text-ink-800 mt-1 leading-relaxed">${m.stage}</p></div>
      <div><span class="text-ink-500 text-xs">核心命题</span><p class="text-ink-800 mt-1 leading-relaxed">${m.thesis}</p></div>
    </div>
    <div class="mt-5 pt-5 border-t border-ink-200/80"><span class="text-ink-500 text-xs">教学目标</span><p class="text-ink-700 mt-2 leading-relaxed text-sm">${m.goals}</p></div>
  </div>`;
}

function renderToolBoxDoc(i){
  const m = DOC_META[i];
  if(!m||!m.tools) return '';
  return `${sectionTitle('核心理论工具箱（课程文档）')}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
    ${m.tools.map(x=>`<div class="concept-box border-amber-500/20"><h4 class="text-amber-900 font-bold text-sm mb-2">${x.t}</h4><p class="text-ink-600 text-xs leading-relaxed">${x.d}</p></div>`).join('')}
  </div>`;
}

function renderReadingSeminar(i){
  const d = DOC_APPENDIX[i];
  if(!d) return '';
  const layers = d.seminar.layers.map((L,idx)=>`<div class="mb-4 pl-4 border-l-2 border-ink-200"><span class="text-xs font-bold text-ink-500">第${['一','二','三'][idx]}层（${L.k}）</span><p class="text-sm text-ink-700 mt-1 leading-relaxed">${L.t}</p></div>`).join('');
  return `${sectionTitle('指定精读文献')}
  <ol class="list-decimal pl-5 space-y-3 text-sm text-ink-700 leading-relaxed mb-8">${d.readings.map(r=>`<li>${r}</li>`).join('')}</ol>
  ${subTitle('精读引导问题')}
  <div class="space-y-3 mb-8">${d.questions.map((q,j)=>`<div class="flex gap-3"><span class="text-amber-700 font-mono text-xs flex-shrink-0">${j+1}.</span><p class="text-sm text-ink-700 leading-relaxed">${q}</p></div>`).join('')}</div>
  ${subTitle('研讨议题（约50分钟）')}
  <p class="text-sm font-medium text-ink-800 mb-4">核心议题：${d.seminar.core}</p>
  ${layers}`;
}

function renderPaperNoteAfterCivic(i){
  const d = DOC_APPENDIX[i];
  if(!d||!d.paperNote) return '';
  return `<div class="rounded-lg border border-amber-500/30 bg-amber-50/50 p-5 mt-8 text-sm text-ink-700 leading-relaxed"><span class="font-bold text-amber-900">★ 论文节点（文档要求）</span> ${d.paperNote}</div>`;
}

// SVG patterns for cards
const patterns = [
  `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="60" cy="60" r="35" fill="none" stroke="currentColor" stroke-width=".5"/><circle cx="60" cy="60" r="20" fill="none" stroke="currentColor" stroke-width=".5"/><line x1="10" y1="60" x2="110" y2="60" stroke="currentColor" stroke-width=".5"/><line x1="60" y1="10" x2="60" y2="110" stroke="currentColor" stroke-width=".5"/></svg>`,
  `<svg viewBox="0 0 120 120"><rect x="20" y="20" width="80" height="80" fill="none" stroke="currentColor" stroke-width="1"/><rect x="35" y="35" width="50" height="50" fill="none" stroke="currentColor" stroke-width=".5" transform="rotate(45 60 60)"/></svg>`,
  `<svg viewBox="0 0 120 120"><path d="M60 10 L110 90 L10 90 Z" fill="none" stroke="currentColor" stroke-width="1"/><path d="M60 30 L95 85 L25 85 Z" fill="none" stroke="currentColor" stroke-width=".5"/></svg>`,
  `<svg viewBox="0 0 120 120"><polygon points="60,10 95,35 95,85 60,110 25,85 25,35" fill="none" stroke="currentColor" stroke-width="1"/><line x1="60" y1="10" x2="60" y2="110" stroke="currentColor" stroke-width=".3"/></svg>`,
  `<svg viewBox="0 0 120 120"><circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" stroke-width=".8"/><circle cx="80" cy="80" r="30" fill="none" stroke="currentColor" stroke-width=".8"/><line x1="40" y1="40" x2="80" y2="80" stroke="currentColor" stroke-width=".5"/></svg>`,
  `<svg viewBox="0 0 120 120"><path d="M10 60 Q35 10 60 60 Q85 110 110 60" fill="none" stroke="currentColor" stroke-width="1"/><path d="M10 60 Q35 110 60 60 Q85 10 110 60" fill="none" stroke="currentColor" stroke-width=".5"/></svg>`,
  `<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" fill="none" stroke="currentColor" stroke-width=".5" stroke-dasharray="4 4"/><line x1="10" y1="10" x2="110" y2="110" stroke="currentColor" stroke-width=".5"/><line x1="110" y1="10" x2="10" y2="110" stroke="currentColor" stroke-width=".5"/><rect x="30" y="30" width="60" height="60" fill="none" stroke="currentColor" stroke-width=".8"/></svg>`,
  `<svg viewBox="0 0 120 120"><path d="M60 10 L110 40 L110 80 L60 110 L10 80 L10 40 Z" fill="none" stroke="currentColor" stroke-width="1"/><circle cx="60" cy="60" r="25" fill="none" stroke="currentColor" stroke-width=".5"/></svg>`
];

// ========== RENDER HOME CARDS ==========
function renderCards(){
  const g=document.getElementById('card-grid');
  g.innerHTML=L.map((l,i)=>`
  <div class="lecture-card bg-white border border-ink-200 rounded-xl p-6 relative shadow-sm shadow-ink-900/5" onclick="showLecture(${i})" style="animation-delay:${i*70}ms">
    <div class="lec-num">${String(l.n).padStart(2,'0')}</div>
    <div class="card-pattern" style="color:${l.color}">${patterns[i]}</div>
    <div class="relative z-10">
      <div class="flex items-center gap-3 mb-3">
        <span class="text-2xl">${l.icon}</span>
        <span class="font-mono text-xs text-ink-500 tracking-wider">第${['一','二','三','四','五','六','七','八'][i]}讲</span>
      </div>
      <h3 class="font-bold text-lg text-ink-800 mb-1">${l.title}</h3>
      <p class="text-sm text-amber-700 mb-3">${l.sub}</p>
      <p class="text-xs text-ink-600 leading-relaxed mb-4 line-clamp-3">${l.desc}</p>
      <div class="flex flex-wrap gap-1.5">
        ${l.keywords.map(k=>`<span class="px-2 py-0.5 rounded text-[10px] bg-ink-50 text-ink-600 border border-ink-200/80">${k}</span>`).join('')}
      </div>
    </div>
  </div>`).join('');
}

// ========== NAVIGATION ==========
function showHome(){
  document.getElementById('page-detail').classList.remove('active');
  document.getElementById('page-home').classList.add('active');
  window.scrollTo(0,0);
  history.pushState(null,null,'#');
}
function showLecture(i){
  document.getElementById('page-home').classList.remove('active');
  const dp=document.getElementById('page-detail');
  dp.classList.add('active');
  document.getElementById('detail-content').innerHTML=renderDetail(i);
  window.scrollTo(0,0);
  history.pushState(null,null,'#lec'+(i+1));
  setTimeout(()=>initCharts(i),200);
  initAccordions();
}

// ========== HELPER FUNCTIONS ==========
function theoristCard(name,dates,role,contribution){
  return `<div class="theorist-card"><div class="flex items-start gap-3"><div class="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-800 font-display font-bold text-lg flex-shrink-0">${name[0]}</div><div><h4 class="text-ink-800 font-bold text-sm">${name}</h4><p class="text-ink-500 text-xs">${dates}</p><p class="text-amber-800/90 text-xs mt-0.5">${role}</p></div></div><p class="text-ink-600 text-xs mt-3 leading-relaxed">${contribution}</p></div>`;
}
function quoteBox(text,author){
  return `<div class="quote-callout my-6"><p class="text-ink-700 text-sm leading-relaxed pl-6">${text}</p><p class="text-amber-800/80 text-xs mt-2 pl-6 not-italic">—— ${author}</p></div>`;
}
function conceptBox(title,text){
  return `<div class="concept-box mb-4"><h4 class="text-amber-800 font-bold text-sm mb-2">${title}</h4><p class="text-ink-600 text-xs leading-relaxed">${text}</p></div>`;
}
function sectionTitle(text){
  return `<h2 class="text-2xl font-display font-bold text-ink-800 mt-12 mb-6 flex items-center gap-3"><span class="w-6 h-[2px] bg-amber-600"></span>${text}</h2>`;
}
function subTitle(text){
  return `<h3 class="text-lg font-bold text-ink-800 mt-8 mb-4">${text}</h3>`;
}
function para(text){
  return `<p class="text-ink-600 text-sm leading-relaxed mb-4">${text}</p>`;
}
function accordion(title,content){
  return `<div class="border border-ink-200 rounded-lg mb-3 overflow-hidden bg-white/80"><div class="accordion-header flex items-center justify-between p-4 bg-ink-50/90" onclick="toggleAccordion(this)"><span class="text-sm font-medium text-ink-800">${title}</span><svg class="chevron w-4 h-4 text-ink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg></div><div class="accordion-body"><div class="p-4 pt-0 text-sm text-ink-600 leading-relaxed">${content}</div></div></div>`;
}
function dataTable(headers,rows){
  return `<div class="overflow-x-auto my-6 rounded-lg border border-ink-200 bg-white/90"><table class="data-table"><thead><tr>${headers.map(h=>`<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function toggleAccordion(el){
  el.classList.toggle('open');
  el.nextElementSibling.classList.toggle('open');
}
function initAccordions(){
  document.querySelectorAll('.accordion-header').forEach(h=>{ h.classList.remove('open'); h.nextElementSibling.classList.remove('open'); });
}

// ========== DETAIL HEADER ==========
function detailHeader(i){
  const l=L[i];
  const cn=['一','二','三','四','五','六','七','八'][i];
  return `
  <div class="hero-pattern py-12 px-6">
    <div class="max-w-5xl mx-auto">
      <a class="back-btn mb-8 inline-flex" onclick="showHome()">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
        返回课程首页
      </a>
      <div class="flex items-center gap-3 mb-4">
        <span class="text-3xl">${l.icon}</span>
        <span class="font-mono text-xs text-amber-700 tracking-[.15em]">第${cn}讲 · LECTURE ${l.n}</span>
      </div>
      <h1 class="font-display text-4xl lg:text-5xl font-bold text-ink-800 mb-3">${l.title}</h1>
      <p class="text-xl text-amber-800/95 mb-4">${l.sub}</p>
      <p class="text-ink-600 text-sm max-w-2xl leading-relaxed">${l.desc}</p>
      <div class="flex flex-wrap gap-2 mt-6">${l.keywords.map(k=>`<span class="px-3 py-1 rounded-full text-xs bg-white text-ink-700 border border-ink-200 shadow-sm">${k}</span>`).join('')}</div>
    </div>
  </div>`;
}

// ===================================================================
// ========== DETAIL RENDERERS FOR EACH LECTURE ==========
// ===================================================================
function renderDetail(i){
  const fns=[renderL1,renderL2,renderL3,renderL4,renderL5,renderL6,renderL7,renderL8];
  return detailHeader(i) + `<div class="max-w-5xl mx-auto px-6 py-10 pb-16 bg-[#f5f0e8]">${renderTeachingMetaBanner(i)}${renderToolBoxDoc(i)}${fns[i]()}</div>`;
}

// ==================== LECTURE 1 ====================
function renderL1(){
  return `
  ${sectionTitle('引言：为什么设计史不只是"过去发生了什么"')}
  ${para('设计史作为一门学科，其研究对象表面上是已经发生的历史事件与历史现象，但任何有方法论自觉的研究者都清楚：历史书写从来不是对过去的中立记录，而是在特定的认识论框架下，对特定史料进行特定方式的选择、组织与阐释的主动建构过程。')}
  ${quoteBox('设计史不是一个中性的知识积累过程，而是一个充满价值判断、利益关系与权力运作的学术话语场域。历史学家所做的每个叙事选择都携带着某种意识形态的指向。','约翰·沃克（John A. Walker）《设计史与设计的历史》1989')}
  ${para('本讲的根本目标不在于传授具体的历史知识，而在于为后续七讲提供一套可操作的方法论工具箱——使学生在进入任何设计史文本时，均能自动追问：这是谁的叙事？依据何种方法论？遮蔽了哪些声音？')}

  ${sectionTitle('设计史的学科化历程')}
  <div id="chart-l1-timeline" style="width:100%;height:300px;" class="my-6 rounded-xl bg-white/95 border border-ink-200 shadow-sm p-2"></div>
  ${para('设计史作为独立学科的形成，是一个相对晚近的事件。在其学科化之前，设计史的论述以三种附属形式存在：附属于艺术史、附属于技术史、附属于社会经济史。')}
  ${quoteBox('设计史研究者往往在无意识中援引艺术史的研究范式，而艺术史的方法论预设（精英作者、形式分析、审美评价）恰恰不适合理解设计的社会性与技术性维度。','克莱夫·迪尔诺特（Clive Dilnot）《设计史的现状》1984')}

  ${subTitle('设计学的三元知识结构')}
  <div class="flex flex-col md:flex-row items-center justify-center gap-4 my-8">
    <div class="concept-box text-center flex-1"><p class="text-amber-700 font-bold mb-1">设计史</p><p class="text-xs text-ink-600">历史事实的梳理与解释</p></div>
    <div class="text-amber-700 text-xl">⟷</div>
    <div class="concept-box text-center flex-1"><p class="text-amber-700 font-bold mb-1">设计理论</p><p class="text-xs text-ink-600">方法论与认识论框架</p></div>
    <div class="text-amber-700 text-xl">⟷</div>
    <div class="concept-box text-center flex-1"><p class="text-amber-700 font-bold mb-1">设计批评</p><p class="text-xs text-ink-600">当代实践的价值判断</p></div>
  </div>
  ${para('三者并非等级关系，而是相互支撑的知识生态：没有史学基础的理论是无根之木；没有理论工具的历史是盲目的陈列；没有批评介入的史论研究则丧失了与当代实践的对话能力。')}

  ${sectionTitle('五大史学流派')}
  <div id="chart-l1-radar" style="width:100%;height:380px;" class="my-6 rounded-xl bg-white/95 border border-ink-200 shadow-sm p-2"></div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
    ${conceptBox('英雄天才史观','以杰出设计师个人为叙事中心，以作品归属与风格演化为核心方法。代表：佩夫斯纳《现代设计的先驱》。局限：遮蔽了无名设计者与社会语境。')}
    ${conceptBox('社会史批判','将设计置于阶级、性别、种族等社会权力关系中分析。代表：阿德里安·福蒂《欲望之物》。强调设计物的意识形态功能。')}
    ${conceptBox('物质文化研究','以"物"本身——而非设计师——为分析中心，关注物在使用语境中的意义建构。代表：朱迪·阿特菲尔德。超越设计师中心主义。')}
    ${conceptBox('全球史视角','质疑欧美中心主义叙事框架，建立多元文明设计史的平行叙事。代表：马戈林《世界设计史》。回应知识地理的不对称性。')}
    ${conceptBox('设计批评独立范畴','主张设计批评应建立不同于艺术批评的独立评价标准与概念工具。设计不能被简化为"应用艺术"的子类。')}
  </div>
  ${subTitle('五大流派方法论比较表（文档）')}
  ${dataTable(['流派','核心问题','研究对象','方法论优势','关键局限'],[
    ['英雄天才史观','谁创造了好设计？','精英设计师与风格演化','叙事清晰、人物鲜活','遮蔽社会语境与无名者'],
    ['社会史批判','设计如何编码社会关系？','设计物的意识形态功能','揭示权力与阶级维度','过度结构决定论'],
    ['物质文化研究','人与物如何相互构成？','使用者与器物关系','激活使用者能动性','历史纵深不足'],
    ['全球史与多元现代性','谁的设计史？谁被遮蔽？','非西方设计实践','知识解放与去中心化','方法论体系尚不成熟'],
    ['设计批评','当代设计的价值判断','设计话语与实践','当代介入性强','缺乏历史纵深']
  ])}

  ${sectionTitle('王受之式通史与本土路径：中国设计史书写的自主性（文档）')}
  ${para('王受之《世界现代设计史》在院校中使用广泛，其叙事框架基本沿袭佩夫斯纳英雄史观，以欧美为主线，中国内容常以附录出现——这本身是值得分析的史学立场问题。杭间、李砚祖等学者以中国工艺美学史、设计艺术学为核心，建构具有独立问题意识的本土叙事。"中国设计史"与"设计的中国史"表述隐含不同立场：前者以中国实践与文化逻辑为主体；后者可能仍以西方"设计"概念为框，将中国经验填入其中（文档）。')}

  ${sectionTitle('代表理论家')}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    ${theoristCard('尼古拉斯·佩夫斯纳','1902—1983','英雄天才史观代表','《现代设计的先驱》（1936）确立了现代主义设计史的经典叙事：从莫里斯到格罗皮乌斯的线性进步史观，以少数杰出设计师为主角的英雄叙事。')}
    ${theoristCard('约翰·沃克','1938—','社会史方法论倡导者','《设计史与设计的历史》（1989）提出设计史需要建立不同于艺术史的独立方法论，强调设计史不是中性的知识积累。')}
    ${theoristCard('阿德里安·福蒂','1948—','社会史批判代表','《欲望之物》（1986）以社会史方法重写日常设计物的历史，揭示设计如何为社会权力关系提供物质基础。')}
    ${theoristCard('克莱夫·迪尔诺特','','学科反思先驱','《设计史的现状》（1984）对设计史学科进行了最深刻的方法论反思，指出设计史需要摆脱对艺术史范式的无意识依赖。')}
    ${theoristCard('柳冠中','1943—','中国设计学理论建构者','提出"事理学"理论框架，将中国传统造物思想与当代设计方法论对接，为中国设计学科的自主性建构提供了重要的本土理论资源。')}
  </div>

  ${sectionTitle('元批评工具箱')}
  ${para('阅读任何设计史文本时，应自动启动以下批评性追问：')}
  <div class="space-y-3 my-6">
    ${['这是谁的叙事？作者的学术训练与文化位置是什么？','依据何种方法论？属于五大流派中的哪一个或哪几个？','遮蔽了哪些声音？哪些设计实践、哪些地区、哪些群体被排除在叙事之外？','叙事服务于何种价值主张？是否存在隐含的意识形态指向？','在中国语境中如何定位？西方叙事框架对中国设计经验的解释力与盲区各是什么？'].map((t,i)=>`<div class="flex items-start gap-3 p-3 rounded-lg bg-white/95 border border-ink-200 shadow-sm"><span class="w-6 h-6 rounded-full bg-amber-500/20 text-amber-700 text-xs flex items-center justify-center font-bold flex-shrink-0">${i+1}</span><p class="text-sm text-ink-700">${t}</p></div>`).join('')}
  </div>

  ${renderReadingSeminar(0)}
  ${sectionTitle('课程思政专栏：史学话语权与文化主体性')}
  ${para('佩夫斯纳将现代设计的正统起源定位于英国工艺美术运动，这一叙事本身就是一种文化建构——它将发端锁定在欧洲特定时空，由此系统遮蔽同时期东亚、南亚、伊斯兰世界丰富而具有内在逻辑的造物传统。这不是个人偏见，而是结构性叙事机制：当欧洲经验被普世化为人类设计进步的唯一路径，其他文明的经验便只能以"延迟的现代化"或"异国情调补充"进入叙事。')}
  ${para('书写设计史从来不是纯粹的学术行为，而是对文化遗产的主权申明。正视这一点，是理解为何中国需要建立自身设计史叙事体系的学术起点——不是出于民族情绪，而是出于史学基本诚实，以及对知识生产之权力关系的清醒认知。这一认知，是本课程全部学术讨论的起点，也是每一位设计学研究生进入该领域时应有的基本学术自觉。')}
  `;
}

// ==================== LECTURE 2 ====================
function renderL2(){
  return `
  ${sectionTitle('引言：为什么从"前现代"开始？')}
  ${para('以佩夫斯纳为代表的主流叙事将现代设计起点定位于19世纪中叶的工艺美术运动。这使之前数千年造物历史成为不具独立学术价值的"前现代背景"。本讲的核心命题：现代设计的断裂背后，是数千年造物智慧被重新编码而非真正消失。')}
  ${quoteBox('理解历史，不是将自身从历史中抽离出来以获得客观视角，而是承认自身处于历史之中——历史的意义，只有在与当下的对话中才得以彰显。','汉斯-格奥尔格·伽达默尔（Gadamer）')}

  ${sectionTitle('中国传统造物体系：道器合一')}
  ${subTitle('《考工记》四维框架')}
  <div class="flex flex-col md:flex-row items-center justify-center gap-3 my-8">
    <div class="concept-box text-center px-6 py-4"><p class="text-amber-700 font-bold text-lg">天时</p><p class="text-xs text-ink-600 mt-1">时间条件</p></div>
    <div class="text-amber-700">+</div>
    <div class="concept-box text-center px-6 py-4"><p class="text-amber-700 font-bold text-lg">地气</p><p class="text-xs text-ink-600 mt-1">地理环境</p></div>
    <div class="text-amber-700">+</div>
    <div class="concept-box text-center px-6 py-4"><p class="text-amber-700 font-bold text-lg">材美</p><p class="text-xs text-ink-600 mt-1">材料特性</p></div>
    <div class="text-amber-700">+</div>
    <div class="concept-box text-center px-6 py-4"><p class="text-amber-700 font-bold text-lg">工巧</p><p class="text-xs text-ink-600 mt-1">工艺技巧</p></div>
    <div class="text-amber-700">=</div>
    <div class="concept-box text-center px-6 py-4 border-amber-500/40"><p class="text-ink-800 font-bold text-lg">良</p><p class="text-xs text-ink-600 mt-1">优良之器</p></div>
  </div>
  ${quoteBox('天有时，地有气，材有美，工有巧，合此四者，然后可以为良。','《考工记》（约公元前5—前3世纪）')}
  ${para('这一四维框架揭示了中国传统造物思想的根本特质：整体性（holism）。与西方现代设计中普遍存在的分析性思维方式形成了鲜明的认识论对照。')}

  ${subTitle('宋应星与《天工开物》')}
  ${theoristCard('宋应星','1587—约1666','《天工开物》作者','技术不是对自然的征服与改造，而是对自然规律的理解与顺应，是在天然秩序中开辟人类生活可能性的智慧实践。这与同时期欧洲培根式科学精神形成了深刻的认识论对照。')}
  ${theoristCard('杭间','1961—','中国工艺美学史学术建构者','《中国工艺美学史》提出"美用合一"的分析框架，系统论证中国传统工艺的美学核心在于功能、材料、工艺与使用方式高度整合后自然呈现的境界状态。')}

  ${sectionTitle('日本民艺传统：柳宗悦与"用之美"')}
  ${theoristCard('柳宗悦','1889—1961','日本民艺运动创始人','核心美学概念"用之美"：美在使用而非孤立观赏；无名性是民艺美的条件；集体传统是民艺美的来源。深受禅宗与净土真宗影响的存在论美学。')}
  ${quoteBox('一只被长期使用的陶碗，在釉面磨损与岁月留痕中，呈现出比刻意追求的精美更为深沉与真实的美。','柳宗悦"用之美"理论')}

  ${sectionTitle('欧洲行会传统与技术知识论')}
  ${theoristCard('帕梅拉·朗','','技术知识认识论研究者','揭示了欧洲知识史的重要盲区：前现代工匠所积累的实践性技术知识，因"理论知识优于实践知识"的认识论等级确立，被系统性地降格与边缘化。')}
  ${para('欧洲中世纪行会通过严格师徒制度、学徒期限、"杰作"（masterpiece）制度等规范工艺标准，也建立知识垄断。文艺复兴时期"艺术家—工匠"身份分裂，当"自由艺术"与"机械艺术"建立等级，手工艺被降格为次等知识形式，预埋了19世纪工艺美术运动将要回应的根本矛盾（文档）。')}

  ${sectionTitle('官作与民作、伊斯兰几何装饰（文档）')}
  ${para('中国传统造物在制度层面呈现"官作"与"民作"双轨并行：官营手工业（宫廷造办处、御窑厂等）以礼制需求为核心，追求工艺极致与等级秩序的物质化；民间工艺以功能实用与审美满足为主导，在日常生活的广阔场域中积累无名工匠的集体智慧。')}
  ${para('伊斯兰视觉文化中的几何装饰体系与欧洲透视主义传统截然不同：教义对偶像崇拜的禁止使创造力导向几何图案的无限变奏——数学的严格秩序与宗教精神的超验追求在装饰中融合。它揭示：设计的形式语言与文化—宗教—哲学语境深度捆绑，没有脱离文化土壤的"普世形式语言"；这一认识将在讨论现代主义"普世性"时提供反驳视角（文档）。')}

  ${sectionTitle('四大文明造物哲学比较')}
  <div id="chart-l2-compare" style="width:100%;height:400px;" class="my-6 rounded-xl bg-white/95 border border-ink-200 shadow-sm p-2"></div>
  ${dataTable(['维度','中国','日本','欧洲','伊斯兰'],[
    ['造物核心','道器合一','用之美','技艺征服','数学神圣'],
    ['美学理想','天人合一','无我显现','个人天才','秩序折射'],
    ['知识传承','师徒+文献','师徒无名','行会等级','工匠数学'],
    ['设计意识','系统整合','材料顺应','形式赋予','几何理性'],
    ['与自然关系','顺应参与','谦逊显现','征服改造','秩序映射']
  ])}

  ${sectionTitle('传统转化的两条路径')}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    ${conceptBox('路径一：符号移植','将传统器物的视觉符号直接移植到当代产品外观设计之上。在市场层面具有可操作性，但在学术层面仅处理传统的表皮。')}
    ${conceptBox('路径二：价值激活','将传统造物哲学的核心认识论原则内化为当代设计的方法论原则。难度更高，但知识价值与文化说服力远超前者。')}
  </div>

  ${renderReadingSeminar(1)}
  ${sectionTitle('课程思政专栏：造物传统作为活的设计资源')}
  ${para('《考工记》不是博物馆文物，而是一套至今仍具生命力的设计方法论系统。"天有时，地有气，材有美，工有巧，合此四者，然后可以为良"将环境条件、材料特性、技艺水准与整体协调纳入同一决策框架，其结构与当代可持续设计中"系统性思维"的核心逻辑高度同构。这不是牵强的历史比附，而是人类造物智慧中确实存在的深层结构性连续。')}
  ${para('中国传统造物智慧的当代转化，须区分风格移植（纹样、器型、色彩的表皮消费）与价值激活（将系统整合、材料尊重、功能美学的统一内化为方法论原则）。前者是符号的消费，后者是智慧的传承；唯有理解这一区别，才能在"文化自信"话语下建立真正有学术深度的研究视角，而非停留于文化符号堆砌。')}
  `;
}

// ==================== LECTURE 3 ====================
function renderL3(){
  return `
  ${sectionTitle('引言：一场关于"好设计"的道德战争')}
  ${para('1851年伦敦水晶宫世界工业博览会暴露了深层矛盾：大工业批量生产的商品在数量上史无前例地丰富，却在质量与审美上令人触目惊心地低劣。这直接催生了此后半个多世纪的设计改革运动。')}

  ${subTitle('三大运动的历史逻辑')}
  <div class="flex flex-col md:flex-row items-center gap-2 my-8 flex-wrap justify-center">
    <div class="concept-box text-center px-5 py-4 min-w-[160px]"><p class="text-red-600 font-bold text-sm">工艺美术运动</p><p class="text-[10px] text-ink-500 mt-1">1880s · 回归手工艺</p></div>
    <div class="flow-arrow">→</div>
    <div class="concept-box text-center px-5 py-4 min-w-[160px]"><p class="text-green-600 font-bold text-sm">新艺术运动</p><p class="text-[10px] text-ink-500 mt-1">1890s · 有机形式</p></div>
    <div class="flow-arrow">→</div>
    <div class="concept-box text-center px-5 py-4 min-w-[160px]"><p class="text-blue-600 font-bold text-sm">德意志制造联盟</p><p class="text-[10px] text-ink-500 mt-1">1907 · 理性标准化</p></div>
    <div class="flow-arrow">→</div>
    <div class="concept-box text-center px-5 py-4 min-w-[160px]"><p class="text-amber-700 font-bold text-sm">功能主义</p><p class="text-[10px] text-ink-500 mt-1">形式追随功能</p></div>
  </div>

  ${subTitle('新艺术运动的地理差异（文档）')}
  ${para('新艺术运动在1890—1910年间席卷欧洲，但在不同地理与文化语境中形态逻辑不同：法国—比利时传统以赫克托·吉马尔的巴黎地铁站、维克托·霍尔塔的布鲁塞尔建筑为代表，以有机植物曲线强调流动性与室内外整体统一；维也纳分离派在吸收新艺术有机主义的同时逐渐趋向更为克制的几何形式，维也纳工坊（Wiener Werkstätte，1903）是这一转变的制度体现，也是后来包豪斯精神的重要前身。同一时代精神可在不同土壤中生长出迥异设计语言——这是反对形式风格决定论、支持文化语境分析的有力例证。')}
  ${para('亨利·科尔与理查德·雷德格雷夫等对1851年展览品问题的批判回应，推动了南肯辛顿博物馆体系（今维多利亚与艾尔伯特博物馆）的创建，确立了"通过设计教育改善工业制品质量"的政策框架——现代设计教育体系的最早制度原型之一。')}
  ${subTitle('中国线索：南洋劝业会与“实业救国”（文档）')}
  ${para('1851年伦敦举办世界博览会时，中国正深陷鸦片战争后的历史创伤与社会动荡。在设计与工艺领域，"实业救国"催生工艺改良举措。1910年南京南洋劝业会是中国有史以来第一次大规模工业与工艺展览，常被视为中国的"水晶宫时刻"——以展示迫使近代设计与工艺面对自身与工业文明之间的落差。"中学为体，西学为用"在工艺领域折射的问题——技术能否单独引进，审美与价值观是否须一并接受——在今日全球化语境中仍具尖锐性。')}

  ${sectionTitle('工艺美术运动：审美改革即道德改革')}
  ${theoristCard('约翰·拉斯金','1819—1900','道德美学的奠基人','核心论点：哥特式建筑之美源于工匠自由；工业分工是对工人人性的系统性摧毁；设计改革是社会改革的前提。"我们精细化分工的时候，不是在分工，而是在碎裂人性。"')}
  ${quoteBox('一块陶器或一块珐琅上的错误，正是人类内心挣扎的证据，这比它完美的正确更为珍贵。','约翰·拉斯金《威尼斯之石》')}
  ${theoristCard('威廉·莫里斯','1834—1896','实践者的理想与矛盾','核心理念："不要在家里放任何你认为无用或不美的东西。" 莫里斯的历史贡献恰恰在于他的矛盾是真实的——为穷人设计却只有富人买得起。这一矛盾促使后继者转向接受机器生产。')}

  ${sectionTitle('德意志制造联盟与路斯')}
  ${theoristCard('赫尔曼·穆特修斯','1861—1927','标准化的理论奠基人','"唯有通过标准化，才能将设计提升至全民可及的文化水准。标准不是对创造力的限制，而是文明进步的结晶。"')}
  ${theoristCard('阿道夫·路斯','1870—1933','"装饰即罪恶"的激进宣言','三个论点：装饰是文化进化的落后标志；装饰是对劳动与材料的浪费；现代文明的美在于形式的逻辑纯粹。但路斯自身大量使用稀有大理石——以材料奢华取代形式装饰。')}
  ${quoteBox('形式永远追随功能（Form ever follows function）。','路易斯·沙利文，1896')}

  ${subTitle('1914年科隆论战')}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    <div class="concept-box border-blue-500/30">
      <h4 class="text-blue-600 font-bold text-sm mb-2">穆特修斯 · 标准化</h4>
      <p class="text-ink-600 text-xs leading-relaxed">制造联盟应推动工业设计标准化与类型化，以批量生产优良典型为目标。艺术家的个人风格应服从工业生产的客观需求。</p>
    </div>
    <div class="concept-box border-pink-500/30">
      <h4 class="text-pink-600 font-bold text-sm mb-2">凡·德·维尔德 · 个性化</h4>
      <p class="text-ink-600 text-xs leading-relaxed">标准化是对艺术家创造个性的摧毁。设计的生命力来自艺术家的个人精神力量，类型化将导致平庸主义的胜利。</p>
    </div>
  </div>

  ${sectionTitle('中国设计的现代化转型')}
  ${theoristCard('庞薰琹','1906—1985','中国第一代现代设计教育家','1925年赴法留学，回国后参与创办中央工艺美术学院。核心思想"中西会通"：在深度理解中国传统装饰造型逻辑的基础上，融入现代设计的组织原则与功能意识。')}
  ${theoristCard('雷圭元','1906—1989','中国现代图案学的系统建构者','《中国图案作法初探》是迄今最具系统性的中国传统装饰图案研究专著。与庞薰琹共同奠定了中国设计教育的两翼。')}

  ${renderReadingSeminar(2)}
  ${sectionTitle('课程思政专栏：技术现代化与文化主体性的历史张力')}
  ${para('晚清中国面对工业文明冲击时，"中学为体，西学为用"折射出深刻历史困境：文明在军事与技术层面遭遇压倒性优势时，能否在引进技术的同时保持文化价值观主体性？技术现代化是否必然携带特定的文化现代化路径？')}
  ${para('设计处于技术（如何制造）与文化（为何制造、为谁制造）的交汇处——它既是技术问题，也是美学与价值观问题。"技术可以引进，设计不能复制"不是民族主义拒绝姿态，而是对设计文化本质的清醒认知。中国设计在20世纪的历史起伏，正是这一命题的反复实验与深化；理解这段历史，是当代中国设计学者建立学术主体性的重要基础。')}
  `;
}

// ==================== LECTURE 4 ====================
function renderL4(){
  return `
  ${sectionTitle('引言：包豪斯是一所学校，还是一个神话？')}
  ${para('包豪斯在20世纪设计史标准叙事中占据几乎无可撼动的中心位置。然而，这种制度化的崇高地位本身就是一个需要被历史分析的现象。一所存在仅十四年、学生总计不过一千余人的学校，如何在战后成为设计史的核心坐标？')}
  ${quoteBox('包豪斯在话语上宣扬机器美学，但在实践中却常常以手工艺方式生产"看起来像机器产品"的物品。这是现代主义叙事中最核心的一个悖论。','雷纳·班纳姆（Reyner Banham）1960')}

  ${sectionTitle('包豪斯的三个历史阶段')}
  <div id="chart-l4-timeline" style="width:100%;height:280px;" class="my-6 rounded-xl bg-white/95 border border-ink-200 shadow-sm p-2"></div>
  ${dataTable(['阶段','时间','城市','校长','核心特征'],[
    ['魏玛阶段','1919—1925','魏玛','格罗皮乌斯','表现主义+手工艺浪漫主义，伊顿预科课程'],
    ['德绍阶段','1925—1932','德绍','格罗皮乌斯→迈耶','"艺术与技术：新统一"，工业理性主义转向'],
    ['柏林阶段','1932—1933','柏林','密斯·凡·德·罗','政治压力下勉强维持，1933年被迫解散']
  ])}

  ${sectionTitle('核心人物')}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    ${theoristCard('瓦尔特·格罗皮乌斯','1883—1969','包豪斯创始人','从手工艺浪漫主义到工业理性主义的转变。1937年移居美国，在哈佛主导包豪斯叙事的全球传播。"一切创造活动的终极目标是建筑！"')}
    ${theoristCard('约翰内斯·伊顿','1888—1967','预科课程创立者','创立包豪斯最具影响力的教学创新——预科课程（Vorkurs）。材料研究、形式分析、色彩理论、历史分析四大板块。因神秘主义倾向与格罗皮乌斯产生路线冲突。')}
    ${theoristCard('拉兹洛·莫霍利-纳吉','1895—1946','技术乌托邦实践者','"新视觉"：借助现代技术扩展人类感知范围。移居芝加哥创立"新包豪斯"。1946年因白血病早逝，年仅51岁。')}
    ${theoristCard('保罗·克利','1879—1940','造型哲学的深度探索者','"艺术不是再现可见的，而是使不可见的变为可见。"《教学笔记》与《造型思维》是20世纪最深刻的造型哲学文献之一。')}
    ${theoristCard('瓦西里·康定斯基','1866—1944','抽象艺术理论奠基者','《点线面》（1926）建立了视觉元素系统分析理论。"内在必然性"——每一个造型决策都必须能在精神层面获得真实的内在理由。')}
    ${theoristCard('密斯·凡·德·罗','1886—1969','"少即是多"的极简主义','自学成才的石匠之子。巴塞罗那德国馆是20世纪建筑史上最被广泛引用的作品之一。"少即是多"并不意味着廉价——他的设计使用极为昂贵的材料。')}
  </div>

  ${sectionTitle('修正史学：三大悖论')}
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div class="concept-box border-red-500/20">
      <h4 class="text-red-600 font-bold text-sm mb-2">悖论一：机器美学 vs 手工艺</h4>
      <p class="text-ink-600 text-xs leading-relaxed">包豪斯在话语上宣称拥抱机器生产，但大多数工坊实际上是手工生产。勃兰特的台灯是手工打造的单件原型，而非工业设计方案。</p>
    </div>
    <div class="concept-box border-pink-500/20">
      <h4 class="text-pink-600 font-bold text-sm mb-2">悖论二：性别平等 vs 性别隔离</h4>
      <p class="text-ink-600 text-xs leading-relaxed">创立宣言声称欢迎不分性别的申请者，但女性学生被系统性引导进入纺织工坊，而非金属、木工、建筑等"严肃"工坊。</p>
    </div>
    <div class="concept-box border-purple-500/20">
      <h4 class="text-purple-600 font-bold text-sm mb-2">悖论三：历史客观 vs 神话建构</h4>
      <p class="text-ink-600 text-xs leading-relaxed">神话化由三大制度力量驱动：流亡知识分子的话语掌控、冷战文化政治、MoMA的制度性推广。</p>
    </div>
  </div>

  ${sectionTitle('三任校长、政治语境与国际扩散（文档）')}
  ${para('包豪斯历史不是同质化的现代主义实验，而是三种现代主义路线在教育机构中的更替：格罗皮乌斯时期以《包豪斯宣言》提出"全面艺术作品"理想，早期师傅制度双轨教学试图重建理论与实践整合。汉斯·迈耶（1928—1930）以功能主义与集体主义取代个人主义，强调设计服务于社会大众而非精英趣味，"形式服从功能"在此变为"形式服从社会需求"的激进主张，因其左翼色彩成为被迫离职的重要原因。密斯（1930—1933）将包豪斯引向高度纯化的美学，以"少即是多"将功能主义推向近乎唯美主义极致，与早期民主设计理想已相去甚远。')}
  ${para('纳粹以"文化布尔什维克主义"指控打压包豪斯——国际主义、反民族主义与左翼师资使其成为文化政策眼中钉；1933年关闭是政治迫害。教师流亡美国后在哈佛、芝加哥、麻省理工等重建阵地。冷战中美方将包豪斯包装为"自由世界设计创造力"以对抗苏联社会主义现实主义，原本充满矛盾的历史被简化为艺术自由对抗政治压制的英雄叙事。')}
  ${para('瑞士国际主义平面设计（约瑟夫·米勒—布罗克曼与格网系统）将秩序美学推向印刷媒介；乌尔姆造型学院（1953—1968）在托马斯·马尔多纳多领导下将设计建立在系统论、信息论与符号学基础上，与布劳恩合作孕育拉姆斯的理性主义语言。日本战后在接受现代主义的同时将其与传统美学整合，"优良设计奖"（1957年）是重要制度标志。')}
  ${para('社会史维度上，福蒂指出"功能"从来不是中立技术概念。殖民主义维度上，勒·柯布西耶在阿尔及利亚的规划以"理性""卫生"为名将欧洲现代主义强加于传统城市肌理——功能理性与殖民文化征服深度共谋，是现代主义国际扩张的系统性特征之一。')}

  ${sectionTitle('中国第一代设计教育家：被遮蔽的平行历史')}
  ${para('与包豪斯几乎同时，庞薰琹、张光宇、雷圭元、陈之佛等第一代接受过西方（主要是法国与日本）现代艺术与设计教育的知识分子，在战火纷飞中建构本土现代设计教育框架；1956年中央工艺美术学院成立是制度性节点。这段历史在全球叙事中几近缺席——不是学术价值不足，而是话语权结构性不平等。')}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    ${theoristCard('张光宇','1900—1965','现代中国视觉语言探索者','以民间美术、戏曲造型、装饰传统为基础探索"东方现代主义"；《西游漫记》等为代表。')}
    ${theoristCard('陈之佛','1896—1962','工艺美术设计教育的建构者','1918年赴日，第一位系统学习西方现代工艺美术的留学生，建立以图案学为核心的工艺美术设计教育体系。')}
    ${theoristCard('雷圭元','1906—1989','中国现代图案学奠基人','《中国图案作法初探》等著作将传统纹样研究与现代设计教育结合，与庞薰琹共同奠定图案学体系。')}
    ${theoristCard('庞薰琹','1906—1985','中央工艺美术学院筹建者之一','留法归国后以少数民族民间美术为基础探索现代中国图案学体系，融汇中西。')}
  </div>

  ${renderReadingSeminar(3)}
  ${sectionTitle('课程思政专栏：现代性的多元路径与知识遮蔽的历史机制')}
  ${para('包豪斯神话的建立，是通过叙事权力实施文化霸权的历史案例——将欧洲某一历史时刻、特定阶层的设计实践，经冷战意识形态二次包装，普世化为"人类现代设计的唯一正确答案"。在这一机制下，庞薰琹、张光宇、雷圭元等工作几乎从全球叙事中蒸发——不是学术价值不足，而是话语体系未为其预留位置。')}
  ${para('这种"自觉"不是民族主义自我封闭，而是对设计知识生产权力结构的清醒认知，以及在此基础上建立更诚实、更完整的全球设计史叙事的学术努力。每一位中国设计学研究生，都是这一知识重建工程的潜在参与者。')}
  ${renderPaperNoteAfterCivic(3)}
  `;
}

// ==================== LECTURE 5 ====================
function renderL5(){
  return `
  ${sectionTitle('引言：设计为谁服务？')}
  ${para('1945年二战结束后，消费成为维持工业生产规模的答案。现代产品设计获得了在资本主义体系中最重要的制度性功能：设计不再仅仅是解决功能问题的技术手段，更是生产消费欲望的文化机制。')}
  ${quoteBox('发达工业社会通过消费品的丰富与舒适在人们内心制造了一种虚假的满足：这种满足使人们丧失了对现实进行批判性思考的能力。','赫伯特·马尔库塞《单向度的人》1964')}

  ${sectionTitle('有计划废止：欲望生产的设计机制')}
  ${theoristCard('凡斯·帕卡德','1914—1996','消费主义的道德批评者','《废物制造者》（1960）系统揭露"有计划废止"机制。三部代表作直接促进了1960年代美国消费者保护运动与环境保护运动的兴起。')}
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    ${conceptBox('功能性废止','产品被设计为技术上可更新的形态，使旧版本在功能上迅速落后。当代典型：软件版本升级强制旧硬件淘汰。')}
    ${conceptBox('质量性废止','产品被有意设计为在特定使用周期后物理损坏。历史案例：1924年灯泡卡特尔将灯泡寿命限定在1000小时。')}
    ${conceptBox('风格性废止','产品外观风格被周期性更换，使功能完好的旧款在视觉上显得过时。典型：通用汽车年度车型更新策略。')}
  </div>

  ${subTitle('美国消费主义：年度款式与流线型（文档）')}
  ${para('战后美国经济高速扩张，以消费主义为核心动力。通用汽车在设计总监哈利·厄尔（Harley Earl）主导下确立的"年度款式更新"体系，是消费主义设计逻辑的制度性结晶：通过每年对汽车外观进行有限度改款，在技术性能未有实质提升的情况下，制造消费者对既有产品的"过时感"，从而驱动新一轮购买欲望。')}
  ${theoristCard('雷蒙德·罗维','1893—1986','美国工业设计的时代符号','流线型美学（Streamlining）以空气动力学形态为外壳，横跨交通工具、家电、消费品与企业形象，成为战后美国消费社会的视觉符号。罗维对设计的定义极为直白："最美的曲线是销售上升的曲线"——这不是设计伦理的沦丧，而是对消费主义设计逻辑的诚实表述。')}

  ${sectionTitle('鲍德里亚的符号价值理论')}
  ${theoristCard('让·鲍德里亚','1929—2007','符号经济的理论家','家族中第一个接受大学教育的人。从马克思价值理论出发，引入第三维度——符号价值：消费不是对使用价值的消费，而是对符号的消费。')}
  <div class="flex flex-col md:flex-row items-center justify-center gap-4 my-8">
    <div class="concept-box text-center px-6 py-4"><p class="text-green-600 font-bold">使用价值</p><p class="text-[10px] text-ink-500 mt-1">功能属性·马克思</p></div>
    <div class="text-ink-500">+</div>
    <div class="concept-box text-center px-6 py-4"><p class="text-blue-600 font-bold">交换价值</p><p class="text-[10px] text-ink-500 mt-1">货币价值·马克思</p></div>
    <div class="text-ink-500">+</div>
    <div class="concept-box text-center px-6 py-4 border-amber-500/30"><p class="text-amber-700 font-bold">符号价值</p><p class="text-[10px] text-ink-500 mt-1">身份标识·鲍德里亚</p></div>
  </div>

  ${sectionTitle('好设计运动与拉姆斯十原则')}
  ${theoristCard('迪特·拉姆斯','1932—','功能主义美学的最后大师','在博朗公司连续工作40余年。将"好设计"系统化为十项原则。第十项"少，但更好"是对密斯"少即是多"的谦逊回应。乔纳森·艾夫公开承认其对苹果设计的决定性影响。')}
  <div class="space-y-2 my-6">
    ${['好的设计是创新的','好的设计使产品有用','好的设计是美的','好的设计使产品易于理解','好的设计是谦逊的','好的设计是诚实的','好的设计是持久的','好的设计贯彻到每个细节','好的设计是关注环境的','好的设计是尽可能少的设计'].map((p,i)=>`<div class="flex items-center gap-3 p-3 rounded-lg bg-white/95 border border-ink-200 shadow-sm"><span class="w-7 h-7 rounded bg-amber-500/15 text-amber-700 text-xs flex items-center justify-center font-mono font-bold flex-shrink-0">${String(i+1).padStart(2,'0')}</span><p class="text-sm text-ink-700">${p}</p></div>`).join('')}
  </div>

  ${sectionTitle('欧洲的多元路径与日本战后设计（文档）')}
  ${para('意大利"设计奇迹"在工业基础薄弱背景下，以小规模精密制造业与深厚人文艺术传统为基础，发展出强调诗意、优雅与材料感知的设计美学；阿基勒·卡斯蒂廖尼的"再设计"（redesign）将现成工业品转化为新的设计语境，是意大利设计创造力的典型表达。')}
  ${para('斯堪的纳维亚"设计民主化"在北欧福利国家政策框架下获得真实制度支撑——国家通过公共采购、设计标准与设计教育补贴，系统性地将优质设计引入普通家庭。宜家是这一传统全球影响力最大的商业化体现，但其全球扩张也引发"民主化"话语的内在矛盾：将斯堪的纳维亚中产阶级审美推广为全球"好品味"标准，是民主还是新的文化同质化？')}
  ${para('日本战后设计是20世纪最引人注目的产业升级案例之一：索尼以特立斯顿便携式收音机（TR-55，1955年）开创日本消费电子的全球化路径；本田以摩托车与汽车设计证明日本制造在技术可靠性与设计合理性上超越西方原型的能力。深层逻辑不仅是技术追赶，更是将"间""侘寂""素材感"等美学概念内化进工业产品形态——形式上符合国际市场对"现代"的预期，精神气质上保留无可替代的文化辨识度。"优良设计奖"体系（1957年）是日本设计现代化的制度性标志。')}

  ${sectionTitle('新中国工业设计（1949—1976年）')}
  ${para('新中国形成了一套与西方消费主义根本不同的设计价值导向：以人民使用需求为中心、耐用品质作为核心价值、设计的大众普及性。')}
  ${dataTable(['维度','新中国"三大件"','消费主义设计'],[
    ['设计目标','满足使用需求','刺激消费欲望'],
    ['产品寿命','尽可能延长','有计划缩短'],
    ['可维修性','用户可自行维修','趋向封闭不可修'],
    ['风格更新','功能不变形态稳定','周期性视觉更新'],
    ['价值导向','以人民为中心','以市场为中心']
  ])}
  <div id="chart-l5-radar" style="width:100%;height:380px;" class="my-6 rounded-xl bg-white/95 border border-ink-200 shadow-sm p-2"></div>

  ${renderReadingSeminar(4)}
  ${sectionTitle('课程思政专栏：社会主义设计观的历史坐标与当代意义')}
  ${para('新中国设计在冷战语境下被西方主流设计史系统排斥于视野之外。将这段历史重新纳入全球框架，不是民族情感的护卫，而是史学诚实——一个数亿人口国家在特定条件下如何组织设计生产、定义价值、建立教育体系，本身就是20世纪全球设计史不可或缺的一章。')}
  ${para('更重要的是价值参照：当西方消费主义以"有计划的废止"持续制造欲望、加速消耗时，以人民使用需求为导向、以耐用品质为目标的社会主义设计观，在今日生态危机与可持续设计语境中具有超越怀旧的方法论参照价值。重建这段历史的学术可见性，是中国学者向全球知识共同体贡献原创洞见的重要领域。')}
  ${renderPaperNoteAfterCivic(4)}
  `;
}

// ==================== LECTURE 6 ====================
function renderL6(){
  return `
  ${sectionTitle('引言：功能主义的危机')}
  ${quoteBox('我爱建筑的复杂性与矛盾性……我更偏爱"两者兼顾"而非"非此即彼"。活力源于不洁的统一。','罗伯特·文丘里《建筑的复杂性与矛盾性》1966')}
  ${para('文丘里将密斯的"少即是多"翻转为"少即是枯燥"（Less is a Bore）。后现代设计的历史由此开幕。危机根源：现代主义建成环境的社会失败、消费社会的意义需求、知识论基础的动摇。')}

  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
    <div class="concept-box border-blue-500/30 text-center py-6">
      <p class="text-blue-600 font-display text-2xl font-bold italic">"Less is More"</p>
      <p class="text-ink-500 text-xs mt-2">密斯·凡·德·罗 · 现代主义</p>
    </div>
    <div class="concept-box border-pink-500/30 text-center py-6">
      <p class="text-pink-600 font-display text-2xl font-bold italic">"Less is a Bore"</p>
      <p class="text-ink-500 text-xs mt-2">罗伯特·文丘里 · 后现代转向</p>
    </div>
  </div>

  ${sectionTitle('历史主义的回归')}
  ${theoristCard('罗伯特·文丘里','1925—2018','复杂性的辩护者','意大利裔费城人，普林斯顿建筑系训练。《建筑的复杂性与矛盾性》与《向拉斯维加斯学习》两部著作，从理论层面重建了历史主义装饰与象征意义的合法性。')}
  ${theoristCard('查尔斯·詹克斯','1939—2019','后现代建筑语言的命名者','《后现代建筑的语言》（1977）首次系统阐述了后现代建筑的理论框架。将1972年普鲁伊特-艾戈住宅区被炸毁宣布为"现代建筑的死亡日期"。')}

  ${sectionTitle('激进设计实践：孟菲斯集团')}
  ${theoristCard('埃托·索特萨斯','1917—2007','孟菲斯集团创始人','1981年创立孟菲斯集团，以鲜艳色彩、不规则几何、廉价材料的刻意组合，直接挑衅"好设计"的功能主义教条。这不是混乱，而是有目的的规则颠覆。')}
  ${para('利奥塔在《后现代知识状况》（1979）中宣告"元叙事"失去合法性——宗教救赎史观、启蒙理性进步论、功能主义普世原则均不再自明。孟菲斯以"坏品味"为批评工具，却极短时间内被时尚与奢侈品市场收编——"反风格"成为最炙手可热的新风格。这一被收编的历史，是后现代与消费资本主义深层共谋的注脚：资本主义不怕反叛，它把反叛变成商品。超级工作室（Superstudio）与阿基佐姆（Archizoom）等则以乌托邦/反乌托邦视觉叙事，批判消费社会与设计工业的共谋（文档）。')}

  ${sectionTitle('维克多·帕帕内克：设计伦理的奠基者')}
  ${theoristCard('维克多·帕帕内克','1923—1998','设计伦理的先知','维也纳出生的犹太难民，以《为真实世界的设计》（1971）对设计职业发起了最严厉的道德指控："工业设计师是仅次于广告设计师的最有害的职业。"')}
  ${quoteBox('在所有职业中，工业设计所犯下的罪行最为深重——它为消费者创造出一大堆毫无意义的物品，将有限的地球资源变成无用的垃圾。','帕帕内克《为真实世界的设计》1971')}

  ${sectionTitle('女性主义设计批评')}
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
    ${theoristCard('彭妮·斯帕克','1948—','日常设计的女性主义史学家','《只要亲吻就好》（As Long as It\'s Pink，1995）揭示现代设计史叙事的性别政治：女性设计贡献被系统性压制。家庭空间被贬低为"非设计"领域。')}
    ${theoristCard('朱迪·阿特菲尔德','1943—2006','物质文化研究的女性主义转向','《日常之物》（Wild Things，2000）将研究焦点从精英设计物转向日常使用物，揭示物在使用过程中被赋予的多重意义。')}
  </div>

  ${sectionTitle('改革开放初期中国设计的转型')}
  ${para('1978年改革开放标志着中国设计的根本转折：设计从计划经济下"生产组织的服务工具"转向市场经济下"市场竞争的差异化手段"，这一功能转变在极短时间内完成，活跃与混乱并存。')}
  ${para('深圳经济特区为当代设计提供了最重要实验场：内地设计人才在高度市场竞争下发展出兼具模仿速度与本土适应的工作方式。深圳从制造业城市向"设计之都"（UNESCO创意城市网络）的演变，是改革时代中国设计转型的代表性地理叙事。中国在后现代话语场域中的特殊处境亦值得讨论：当西方反思解构现代主义时，中国设计才大规模接受现代主义教育——这种"时差"既是历史错位，也可能构成独特创造的结构性条件（文档）。')}
  ${para('柳冠中"事理学"的提出，是在上述语境中建构中国本土设计理论的重要学术尝试。')}

  ${renderReadingSeminar(5)}
  ${sectionTitle('课程思政专栏：批评的勇气与学术独立性')}
  ${para('帕帕内克在1971年将矛头直指商业设计体系，在当时承担了真实的职业代价。他的批评并非价值虚无主义，而是对设计伦理的强烈承诺："设计应当为真实的人类需求服务"在今日仍是一块试金石。')}
  ${para('批评性思维不是否定一切，而是持续追问"为谁设计、谁在受益、谁被系统性忽视"的学术诚实。对中国设计学界而言，这种精神须同时指向两个方向：对西方中心设计话语霸权保持清醒批判，对国内话语中可能的表面化、商业化、去批判化倾向保持同样警觉。真正的学术主体性，不是拒绝批评，而是具备批评自身的能力。')}
  `;
}

// ==================== LECTURE 7 ====================
function renderL7(){
  return `
  ${sectionTitle('引言：两场同时发生的设计革命')}
  ${para('1989年柏林墙倒塌，1991年万维网诞生，1992年邓小平南巡讲话。三个事件共同开启了全球化新秩序，设计面临两场同时发生的根本性革命：设计的地理政治重构与数字技术的范式颠覆。')}
  ${quoteBox('我们不是缺少创新与技术，而是缺少方向感——在一个技术可能性远超人类理解速度的世界里，设计的根本任务是提供意义，而非提供解决方案。','约翰·萨卡拉《泡沫之中》2005')}

  ${sectionTitle('全球设计知识地理')}
  ${theoristCard('维克多·马戈林','1941—2019','全球设计史的书写者','伊利诺伊大学教授，《设计议题》创刊编辑，两卷本《世界设计史》（2015）是迄今规模最大的设计通史。系统挑战"设计史即欧美现代主义历史"的叙事框架。')}

  ${sectionTitle('"中国设计"的叙事建构（文档）')}
  ${para('从"中国制造"到"中国设计"的转变不仅是经济升级，更是文化主权议题。国际奖项（红点、iF等）中中国作品的变化、国际期刊中中国设计研究的比例、UNESCO创意城市网络中北京、上海、深圳、武汉等的参与，勾勒出"走向国际"的轮廓，也提出深层问题：在评价框架仍由西方机构主导时，"走向国际"是真正的文化对话，还是进入他人设定的评价框架？')}

  ${sectionTitle('南方国家话语与"新中式"辨析（文档）')}
  ${para('圭·邦西耶佩的"设计帝国主义"揭示：发达国家以"设计援助"名义输出标准、审美与教育体系时，不仅是技术转移，更是文化价值观的单向植入。印度全国设计学院（NID，1961，乌尔姆协助建立）的现代主义制度移植与甘地手工纺纱传统之间的张力，是全球南方语境中"现代设计"与"民族传统"博弈的鲜明案例。')}
  ${para('"新中式"须区分：符号移植路径将纹样、器型、色彩系统直接用于外观差异化，市场有效不等于学术深度；价值激活路径将道器合一、"天有时地有气材有美工有巧"等原则内化为方法论，在现代技术语境中生长新形态，难度更高而文化说服力更持久。')}
  ${para('柳冠中、娄永琪、许平、何人可等学者代表中国学界在理论原创与史论建构上的不同侧面；娄永琪团队将曼奇尼社会创新与中国城乡在地实践结合，形成具全球对话能力的路径（文档）。')}

  ${sectionTitle('设计方法论的系统化重建')}
  ${theoristCard('克劳斯·克里彭多夫','1932—2023','产品语义学创立者','《设计的意义》提出"语义学转向"：设计不是为物赋予功能，而是为人赋予理解——产品的形态应当传达其使用方式与文化意义。')}

  ${subTitle('布坎南设计四象限')}
  ${theoristCard('理查德·布坎南','1942—','设计四象限理论','将设计问题从"符号"扩展至"物"、"行动"、"系统"四个象限，为设计超越传统造物范畴进入复杂社会系统问题提供了理论合法性。')}
  <div class="grid grid-cols-2 gap-3 my-6 max-w-md mx-auto">
    <div class="concept-box text-center py-4"><p class="text-green-600 font-bold text-sm">符号</p><p class="text-[10px] text-ink-500">视觉传达设计</p></div>
    <div class="concept-box text-center py-4"><p class="text-blue-600 font-bold text-sm">物</p><p class="text-[10px] text-ink-500">产品与工业设计</p></div>
    <div class="concept-box text-center py-4"><p class="text-pink-600 font-bold text-sm">行动</p><p class="text-[10px] text-ink-500">交互与服务设计</p></div>
    <div class="concept-box text-center py-4"><p class="text-amber-700 font-bold text-sm">系统</p><p class="text-[10px] text-ink-500">组织与社会系统设计</p></div>
  </div>

  ${sectionTitle('批判性设计与思辨设计')}
  ${theoristCard('安东尼·邓恩与菲奥纳·拉比','','思辨设计的创立者','《思辨一切》（Speculative Everything，2013）提出设计不只是为当下问题提供解决方案，更可以作为对未来可能性的批判性探索工具——设计物可以是"关于世界的论点"。')}

  ${sectionTitle('社会创新设计')}
  ${theoristCard('埃佐·曼奇尼','1945—','社会创新设计理论家','米兰理工大学教授。《日常的设计》提出设计师的角色从"为用户解决问题"转向"使社区自身的创新能力得以涌现并获得支持"。')}

  ${sectionTitle('数字设计范式演变')}
  <div class="flex flex-col md:flex-row items-center gap-2 my-8 flex-wrap justify-center">
    <div class="concept-box text-center px-4 py-3"><p class="text-green-600 font-bold text-xs">GUI时代</p><p class="text-[10px] text-ink-500">1980s·图形界面</p></div>
    <div class="flow-arrow">→</div>
    <div class="concept-box text-center px-4 py-3"><p class="text-blue-600 font-bold text-xs">Web时代</p><p class="text-[10px] text-ink-500">1990s·信息架构</p></div>
    <div class="flow-arrow">→</div>
    <div class="concept-box text-center px-4 py-3"><p class="text-pink-600 font-bold text-xs">移动时代</p><p class="text-[10px] text-ink-500">2007+·触控交互</p></div>
    <div class="flow-arrow">→</div>
    <div class="concept-box text-center px-4 py-3"><p class="text-amber-700 font-bold text-xs">AI时代</p><p class="text-[10px] text-ink-500">2022+·生成式设计</p></div>
  </div>

  ${sectionTitle('中国设计的全球话语位置重构')}
  ${para('深圳从"山寨之都"到"全球硬件创新中心"的转型，是21世纪全球设计知识地理重构最显著的标志性事件之一。深圳的开放式硬件创新生态，挑战了硅谷模式作为唯一创新范式的话语垄断。')}

  ${renderReadingSeminar(6)}
  ${sectionTitle('课程思政专栏：设计话语权是文化话语权的有机组成部分')}
  ${para('当全球主流设计奖项评审、设计教育认证、批评话语框架仍由少数西方机构主导时，"中国设计走向世界"不仅是经济话题，更是文化主权与学术话语权的深层命题——谁定义"好设计"，就在一定程度上决定何种价值观与生活方式想象在全球获得合法性。')}
  ${para('设计学研究生的每一篇严肃论文，都在具体而微地参与知识权力的重新分配：将中国设计的历史经验、理论创新与当代实践，以学术共同体可接受的方式纳入国际知识体系。这不是民族主义宣示，而是对全球知识生产结构性不平等的清醒回应；目标不是以新中心取代旧中心，而是推动真正多元、平等、相互尊重的全球设计知识共同体。')}
  `;
}

// ==================== LECTURE 8 ====================
function renderL8(){
  return `
  ${sectionTitle('引言：三重危机与设计的历史性考验')}
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
    <div class="concept-box border-green-500/20 text-center py-6">
      <p class="text-3xl mb-2">🌍</p>
      <p class="text-green-600 font-bold">生态危机</p>
      <p class="text-xs text-ink-600 mt-2">设计师的工作是否在系统性地加速灾难？</p>
    </div>
    <div class="concept-box border-blue-500/20 text-center py-6">
      <p class="text-3xl mb-2">🤖</p>
      <p class="text-blue-600 font-bold">AI冲击</p>
      <p class="text-xs text-ink-600 mt-2">什么是设计师不可替代的核心能力？</p>
    </div>
    <div class="concept-box border-purple-500/20 text-center py-6">
      <p class="text-3xl mb-2">🌐</p>
      <p class="text-purple-600 font-bold">话语权重组</p>
      <p class="text-xs text-ink-600 mt-2">谁来定义"好设计"的标准？</p>
    </div>
  </div>
  ${quoteBox('设计史在很大程度上是一部加速消耗的历史。每一个被誉为设计突破的时刻，同时也是资源消耗加速的时刻。我们必须停止将这种历史轨迹视为进步。','凯特·弗莱彻（Kate Fletcher）')}

  ${sectionTitle('生态危机与设计的价值重建')}
  ${subTitle('可持续设计三阶段演变')}
  <div class="flex flex-col md:flex-row items-center gap-2 my-8 flex-wrap justify-center">
    <div class="concept-box text-center px-5 py-4"><p class="text-green-600 font-bold text-sm">减少危害</p><p class="text-[10px] text-ink-500">1970—1990s · 减法逻辑</p></div>
    <div class="flow-arrow">→</div>
    <div class="concept-box text-center px-5 py-4"><p class="text-blue-600 font-bold text-sm">系统性可持续</p><p class="text-[10px] text-ink-500">1990—2010s · 重构逻辑</p></div>
    <div class="flow-arrow">→</div>
    <div class="concept-box text-center px-5 py-4 border-amber-500/30"><p class="text-amber-700 font-bold text-sm">再生设计</p><p class="text-[10px] text-ink-500">2010s至今 · 修复共生</p></div>
  </div>
  ${theoristCard('凯特·弗莱彻','','可持续时尚理论权威','提出"慢时尚"框架：从"数量消费"转向"使用质量"，从"新鲜感追求"转向"长期使用关系建立"。核心是恢复消费者与衣物之间被快时尚系统摧毁的情感连接。')}

  ${sectionTitle('人工智能与设计的认识论关系')}
  ${theoristCard('凯斯·多斯特','1968—','框架创新理论建构者','《框架创新》（2015）提出设计师最不可替代的核心能力是"框架创新"——在旧框架失效、新框架尚未存在的时刻，创造性地建构新的意义框架。这是本质上反数据驱动的认知能力。')}

  ${dataTable(['能力维度','人类设计师','AI系统'],[
    ['框架创造','能创造全新问题框架','只能在已有框架内生成'],
    ['同理心','深度理解使用者生活语境','基于数据模式识别'],
    ['伦理判断','评估方案的社会后果','无内在道德标准'],
    ['知识整合','跨学科统一判断','领域受限于训练数据'],
    ['历史意识','理解设计决策的知识谱系','无历史语境理解'],
    ['执行生成','速度有限','秒级海量生成']
  ])}

  ${sectionTitle('交互、服务设计与数字伦理（文档）')}
  ${para('唐纳德·诺曼《设计心理学》（1988）将评价标准从物本身转向交互过程中的认知体验。从HCI到UX的演化，是认知设计逻辑在数字领域的扩展——屏幕为主媒介时，设计师首先是认知、行为与信息架构的规划者。')}
  ${para('服务设计将边界扩至无形服务：服务蓝图、顾客旅程、利益相关者地图等工具将设计定位为体验系统的规划。英国设计委员会"双钻模型"强调"正确定义问题"与"解决问题"同等重要——解决错误的问题比错误地解决问题更危险。')}
  ${para('可持续设计在21世纪从绿色设计（局部减害）经生态设计（LCA全链条）走向再生设计（积极修复生态系统与社会关系）。欧盟循环经济行动计划与中国"双碳目标"为设计研究提供政策驱动的研究议程（文档）。')}
  ${para('黑暗模式（Dark Pattern）指利用认知偏差将界面设计为操控工具；说服性设计在无限滚动、点赞与推送中的伦理边界，揭示同一认知原则既可服务体验也可剥夺注意力自主权。"超级App"将多种功能整合于单一界面，在西方语境中罕见，反映中国数字用户文化与基础设施特质，亦包含便利与数据垄断、注意力捕获之间的张力（文档）。')}

  ${sectionTitle('中国设计研究的学科前沿')}
  ${theoristCard('娄永琪','','设计驱动社会创新的中国路径','同济大学设计创意学院院长。发展出"设计驱动社会创新"的中国实践模式，以上海四平路社区更新为代表。同时保持与国际前沿的深度接轨和对中国社会问题的在地理解。')}

  ${sectionTitle('全课程方法论总结：八维批评工具箱')}
  <div id="chart-l8-tools" style="width:100%;height:400px;" class="my-6 rounded-xl bg-white/95 border border-ink-200 shadow-sm p-2"></div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 my-6">
    ${[
      ['工具一（第一讲）','叙事立场识别：这是谁的叙事？服务于哪种价值主张？遮蔽了哪些声音？'],
      ['工具二（第二讲）','传统知识的认识论评估：区分"符号移植"与"价值激活"两种路径。'],
      ['工具三（第三讲）','历史逻辑的辩证追踪：每一阶段是对上一阶段矛盾的回应，同时孕育新矛盾。'],
      ['工具四（第四讲）','话语权力的制度性分析：叙事在什么制度条件下被建构？哪些声音被压制？'],
      ['工具五（第五讲）','政治经济学与符号学的交叉分析：使用价值、交换价值、符号价值三维解读。'],
      ['工具六（第六讲）','性别视角与使用者中心主义：将使用者而非设计师置于分析中心。'],
      ['工具七（第七讲）','全球化语境的不对称分析：识别话语权力的不对称结构。'],
      ['工具八（第八讲）','当代危机的历史性解读：在历史纵深中追踪危机的形成逻辑。']
    ].map(([t,d])=>`<div class="flex items-start gap-3 p-3 rounded-lg bg-white/95 border border-ink-200 shadow-sm"><div><h4 class="text-amber-700 text-xs font-bold mb-1">${t}</h4><p class="text-ink-600 text-xs leading-relaxed">${d}</p></div></div>`).join('')}
  </div>

  ${renderReadingSeminar(7)}
  ${sectionTitle('课程思政专栏（终讲）：生态文明理念与设计价值观的系统性重构')}
  ${para('可持续设计在西方语境中常是对工业资本主义"增长即善"逻辑的外部批判，须克服市场与产业的结构性阻力。中国的"生态文明建设"则提供不同制度逻辑：将生态可持续性提升为国家文明战略核心，通过顶层政策为可持续设计创造系统性制度空间。')}
  ${para('这一条件既带来机遇也意味着责任与风险：如何在国家政策话语与学术研究独立性之间保持创造性张力——既回应政策议题又不沦为注脚，既扎根中国语境又与全球可持续学术共同体保持实质对话。将"绿水青山就是金山银山"转化为可操作的设计研究方法论，将"双碳目标"转化为有学术深度的设计系统研究，是当代中国学者可做出不可替代贡献的战略领域。')}
  ${sectionTitle('终讲寄语：知识的良知与历史的责任')}
  ${para('设计历史的书写是关于过去的叙述，也是关于未来的选择——我们记住什么、遮蔽什么、以何种方式传递给下一代，深刻决定下一代设计师的知识基础。每一位设计史研究者都承担不可推卸的叙事责任。')}
  ${quoteBox('希望本课程所建立的批评性史学工具箱，能够在诸位同学此后漫长的学术生涯中，持续提供方法论的清醒与历史的勇气。','课程结语')}
  `;
}

// ========== ECHARTS INITIALIZATION ==========
function initCharts(lecIdx){
  if(lecIdx===0) initL1Charts();
  if(lecIdx===1) initL2Charts();
  if(lecIdx===3) initL4Charts();
  if(lecIdx===4) initL5Charts();
  if(lecIdx===7) initL8Charts();
}

function initL1Charts(){
  // Timeline
  const t=document.getElementById('chart-l1-timeline');
  if(t){
    const c=echarts.init(t,null,{renderer:'svg'});
    c.setOption({
      backgroundColor:'transparent',
      title:{text:'设计史学科化关键节点',textStyle:{color:'#a16207',fontSize:14,fontFamily:'Noto Sans SC'}},
      tooltip:{trigger:'axis'},
      xAxis:{type:'category',data:['1977','1982','1984','1989','1995','2000s','2015'],axisLabel:{color:'#64748b',fontSize:11},axisLine:{lineStyle:{color:'#cbd5e1'}}},
      yAxis:{show:false},
      series:[{type:'line',data:[20,40,60,70,75,85,95],smooth:true,
        lineStyle:{color:'#d4a853',width:2},
        areaStyle:{color:{type:'linear',x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:'rgba(212,168,83,.3)'},{offset:1,color:'rgba(212,168,83,.02)'}]}},
        itemStyle:{color:'#d4a853'},
        label:{show:true,position:'top',fontSize:10,color:'#64748b',
          formatter:function(p){return['设计史学会\n成立','《设计议题》\n筹备','Design Issues\n创刊','沃克方法论\n著作','福蒂《欲望\n之物》','全球史\n转向','马戈林\n世界设计史'][p.dataIndex]}}
      }]
    });
    window.addEventListener('resize',()=>c.resize());
  }
  // Radar
  const r=document.getElementById('chart-l1-radar');
  if(r){
    const c=echarts.init(r,null,{renderer:'svg'});
    c.setOption({
      backgroundColor:'transparent',
      title:{text:'五大史学流派方法论特征比较',textStyle:{color:'#a16207',fontSize:14,fontFamily:'Noto Sans SC'}},
      tooltip:{},
      radar:{indicator:[
        {name:'精英设计师关注',max:10},{name:'社会语境分析',max:10},{name:'物质文化深度',max:10},{name:'全球视野广度',max:10},{name:'批评独立性',max:10}
      ],axisName:{color:'#64748b',fontSize:11},splitLine:{lineStyle:{color:'rgba(100,120,170,.15)'}},splitArea:{areaStyle:{color:['rgba(60,75,115,.06)','rgba(60,75,115,.11)']}}},
      series:[{type:'radar',data:[
        {value:[10,2,3,2,3],name:'英雄天才史观',lineStyle:{color:'#f59e0b'},itemStyle:{color:'#f59e0b'},areaStyle:{color:'rgba(245,158,11,.1)'}},
        {value:[3,10,6,5,7],name:'社会史批判',lineStyle:{color:'#ec4899'},itemStyle:{color:'#ec4899'},areaStyle:{color:'rgba(236,72,153,.1)'}},
        {value:[2,6,10,4,6],name:'物质文化研究',lineStyle:{color:'#06b6d4'},itemStyle:{color:'#06b6d4'},areaStyle:{color:'rgba(6,182,212,.1)'}},
        {value:[3,7,5,10,6],name:'全球史视角',lineStyle:{color:'#8b5cf6'},itemStyle:{color:'#8b5cf6'},areaStyle:{color:'rgba(139,92,246,.1)'}},
        {value:[4,5,5,5,10],name:'设计批评独立',lineStyle:{color:'#22c55e'},itemStyle:{color:'#22c55e'},areaStyle:{color:'rgba(34,197,94,.1)'}}
      ]}],
      legend:{data:['英雄天才史观','社会史批判','物质文化研究','全球史视角','设计批评独立'],bottom:0,textStyle:{color:'#64748b',fontSize:10}}
    });
    window.addEventListener('resize',()=>c.resize());
  }
}

function initL2Charts(){
  const el=document.getElementById('chart-l2-compare');
  if(el){
    const c=echarts.init(el,null,{renderer:'svg'});
    c.setOption({
      backgroundColor:'transparent',
      title:{text:'四大文明造物哲学特征对比',textStyle:{color:'#a16207',fontSize:14,fontFamily:'Noto Sans SC'}},
      tooltip:{trigger:'axis',axisPointer:{type:'shadow'}},
      legend:{data:['中国','日本','欧洲','伊斯兰'],bottom:0,textStyle:{color:'#64748b',fontSize:11}},
      xAxis:{type:'category',data:['整体性思维','自然顺应','工艺精度','数学理性','美用统一','知识体系化'],axisLabel:{color:'#64748b',fontSize:10},axisLine:{lineStyle:{color:'#cbd5e1'}}},
      yAxis:{type:'value',max:10,axisLabel:{color:'#64748b'},splitLine:{lineStyle:{color:'rgba(100,120,170,.1)'}}},
      series:[
        {name:'中国',type:'bar',data:[10,9,7,5,9,7],itemStyle:{color:'#d4a853'}},
        {name:'日本',type:'bar',data:[8,9,9,4,10,5],itemStyle:{color:'#06b6d4'}},
        {name:'欧洲',type:'bar',data:[4,3,8,6,5,8],itemStyle:{color:'#ec4899'}},
        {name:'伊斯兰',type:'bar',data:[6,5,8,10,6,7],itemStyle:{color:'#8b5cf6'}}
      ]
    });
    window.addEventListener('resize',()=>c.resize());
  }
}

function initL4Charts(){
  const el=document.getElementById('chart-l4-timeline');
  if(el){
    const c=echarts.init(el,null,{renderer:'svg'});
    c.setOption({
      backgroundColor:'transparent',
      title:{text:'包豪斯三阶段历史进程（1919—1933）',textStyle:{color:'#a16207',fontSize:14,fontFamily:'Noto Sans SC'}},
      tooltip:{trigger:'item'},
      xAxis:{type:'value',min:1918,max:1935,axisLabel:{color:'#64748b',formatter:'{value}'},splitLine:{show:false},axisLine:{lineStyle:{color:'#cbd5e1'}}},
      yAxis:{type:'category',data:['包豪斯'],axisLabel:{show:false},axisLine:{show:false},axisTick:{show:false}},
      series:[
        {type:'bar',stack:'t',data:[{value:[1919,1925],itemStyle:{color:'rgba(245,158,11,.4)'}}],encode:{x:[0,1]},barWidth:40,label:{show:true,position:'inside',formatter:'魏玛阶段',color:'#1e293b',fontSize:12}},
      ],
      graphic:[
        {type:'rect',left:'12%',top:'35%',shape:{width:200,height:40,r:4},style:{fill:'rgba(245,158,11,.3)'}},
        {type:'text',left:'14%',top:'42%',style:{text:'魏玛 1919-1925',fill:'#d4a853',fontSize:13}},
        {type:'rect',left:'42%',top:'35%',shape:{width:200,height:40,r:4},style:{fill:'rgba(6,182,212,.3)'}},
        {type:'text',left:'44%',top:'42%',style:{text:'德绍 1925-1932',fill:'#06b6d4',fontSize:13}},
        {type:'rect',left:'75%',top:'35%',shape:{width:80,height:40,r:4},style:{fill:'rgba(236,72,153,.3)'}},
        {type:'text',left:'76%',top:'42%',style:{text:'柏林 32-33',fill:'#ec4899',fontSize:13}}
      ]
    });
    window.addEventListener('resize',()=>c.resize());
  }
}

function initL5Charts(){
  const el=document.getElementById('chart-l5-radar');
  if(el){
    const c=echarts.init(el,null,{renderer:'svg'});
    c.setOption({
      backgroundColor:'transparent',
      title:{text:'两种设计体制价值导向对比',textStyle:{color:'#a16207',fontSize:14,fontFamily:'Noto Sans SC'}},
      tooltip:{},
      radar:{indicator:[
        {name:'耐久性',max:10},{name:'可维修性',max:10},{name:'全民可及',max:10},{name:'创新驱动',max:10},{name:'审美多样',max:10},{name:'用户反馈',max:10}
      ],axisName:{color:'#64748b',fontSize:11},splitLine:{lineStyle:{color:'rgba(100,120,170,.15)'}},splitArea:{areaStyle:{color:['rgba(60,75,115,.06)','rgba(60,75,115,.11)']}}},
      series:[{type:'radar',data:[
        {value:[9,9,9,3,2,3],name:'新中国设计逻辑',lineStyle:{color:'#dc2626',width:2},itemStyle:{color:'#dc2626'},areaStyle:{color:'rgba(220,38,38,.15)'}},
        {value:[3,3,5,9,9,8],name:'消费主义设计逻辑',lineStyle:{color:'#3b82f6',width:2},itemStyle:{color:'#3b82f6'},areaStyle:{color:'rgba(59,130,246,.15)'}}
      ]}],
      legend:{data:['新中国设计逻辑','消费主义设计逻辑'],bottom:0,textStyle:{color:'#64748b',fontSize:11}}
    });
    window.addEventListener('resize',()=>c.resize());
  }
}

function initL8Charts(){
  const el=document.getElementById('chart-l8-tools');
  if(el){
    const c=echarts.init(el,null,{renderer:'svg'});
    c.setOption({
      backgroundColor:'transparent',
      title:{text:'八维批评工具箱——课程方法论综合能力图谱',textStyle:{color:'#a16207',fontSize:14,fontFamily:'Noto Sans SC'}},
      tooltip:{},
      radar:{indicator:[
        {name:'叙事立场识别',max:10},{name:'传统知识评估',max:10},{name:'辩证逻辑追踪',max:10},{name:'话语权力分析',max:10},
        {name:'政经符号交叉',max:10},{name:'性别使用者视角',max:10},{name:'全球不对称分析',max:10},{name:'危机历史解读',max:10}
      ],axisName:{color:'#64748b',fontSize:10},splitLine:{lineStyle:{color:'rgba(100,120,170,.15)'}},splitArea:{areaStyle:{color:['rgba(60,75,115,.06)','rgba(60,75,115,.11)']}}},
      series:[{type:'radar',data:[
        {value:[9,8,9,9,8,7,8,9],name:'课程目标能力',lineStyle:{color:'#d4a853',width:2},itemStyle:{color:'#d4a853'},areaStyle:{color:'rgba(212,168,83,.15)'}}
      ]}]
    });
    window.addEventListener('resize',()=>c.resize());
  }
}

// ========== INIT ==========
renderCards();
// Hash routing
function handleHash(){
  const h=location.hash;
  if(h.startsWith('#lec')){
    const n=parseInt(h.replace('#lec',''))-1;
    if(n>=0&&n<8) showLecture(n);
  } else {
    document.getElementById('page-detail').classList.remove('active');
    document.getElementById('page-home').classList.add('active');
  }
}
window.addEventListener('hashchange',handleHash);
if(location.hash) handleHash();