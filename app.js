const lessons = [
  {
    id: "lesson-1",
    number: "第 1 课",
    shortTitle: "算力基础",
    title: "AI 算力基础",
    heroTitle: "先搞懂算力，才看得懂 AI 产业链。",
    lede:
      "这一课用一张图、一段口播、一份讲义，把训练、推理、token、FLOPS、显存和带宽串起来。学完后，你看芯片、服务器、数据中心、电力和云厂商财报，会有一条清晰主线。",
    audio: "assets/audio/lesson-01.m4a",
    visual: [
      ["GPU / ASIC", "算得快", "chip"],
      ["HBM", "喂得饱", "memory"],
      ["网络互联", "连得稳", "network"],
      ["数据中心", "供得上", "power"]
    ],
    chainTitle: "AI 算力不是一颗芯片，而是一条系统链。",
    chain: [
      ["模型需求", "更大模型、更长上下文、更多用户调用，形成算力需求。"],
      ["训练 / 推理", "训练负责“做模型”，推理负责“用模型”。"],
      ["AI 芯片", "GPU 偏通用，ASIC 偏专用，CPU 负责调度。"],
      ["HBM / 显存", "显存容量决定装不装得下，带宽决定喂不喂得饱。"],
      ["AI 服务器", "把芯片、内存、网卡、电源、散热组合成可运行系统。"],
      ["数据中心", "电力、冷却、网络和土地决定算力能否真正上线。"]
    ],
    chapters: [
      [
        "算力在算什么",
        "AI 算力首先要分清两件事：训练和推理。训练是把模型做出来，像建一座工厂；推理是让模型工作，像工厂每天生产。早期 AI 景气度常由训练拉动，因为企业都在训练更大的模型。长期商业化更看推理，因为只要用户持续调用，每一次回答、搜索、代码补全都会消耗算力。"
      ],
      [
        "Token 与成本",
        "大模型不是按句子工作，而是按 token 工作。输入 prompt 会被拆成 token，模型输出答案也是一个 token 一个 token 生成。投资研究里，token 是理解推理成本的入口。一个 AI 应用能否赚钱，最终要看每次调用收入能不能覆盖输入和输出 token 带来的算力成本。"
      ],
      [
        "FLOPS 与可用算力",
        "FLOPS 是每秒浮点运算次数，常用来描述理论算力。但理论算力不等于可用算力，更不等于经济算力。真实世界里还要看 GPU 利用率、显存容量、显存带宽、网络互联、软件生态、电力和散热。真正有价值的是在一定成本下稳定产出的算力。"
      ],
      [
        "显存与带宽",
        "如果说 GPU 是发动机，显存就是离发动机最近的燃料仓。显存容量决定模型和上下文装不装得下，显存带宽决定数据能不能足够快地送到计算单元。带宽不够时，昂贵的 GPU 会等数据，利用率下降，单位 token 成本上升。这就是 HBM 在 AI 产业链里变得关键的原因。"
      ],
      [
        "投资研究视角",
        "看 AI 算力产业链，不要只看参数最大，也不要只看故事最热。核心问题是：谁在解决瓶颈，谁有定价权，谁的产品能提升可用算力，谁能把资本开支转成真实收入和现金流。第一课先记住一句话：AI 算力投资看的不是孤立芯片，而是稳定、低成本、大规模交付可用算力的系统能力。"
      ]
    ],
    conceptsTitle: "五个概念，搭起第一层认知框架。",
    concepts: [
      ["训练", "做模型", "训练：把模型做出来", "训练是把海量文本、图片、代码或视频喂给模型，让模型学习参数。它通常需要大量 GPU 同时协作，对显存、互联、网络和稳定性要求极高。", "训练需求 = 模型竞赛 × 数据规模 × 集群效率"],
      ["推理", "用模型", "推理：让模型真正工作", "推理发生在用户使用时。每次问答、搜索、代码补全、图片生成，都会消耗算力。长期看，推理需求会和用户量、调用频次、输出长度绑定。", "推理成本 = token 数 × 单 token 成本 × 调用次数"],
      ["Token", "工作量", "Token：AI 世界的工作量单位", "模型会把输入和输出拆成 token。上下文越长、回答越长、工具调用越多，token 消耗越高。理解 token，才能理解 AI 应用的边际成本。", "单次请求 token = 输入 token + 输出 token"],
      ["FLOPS", "计算速度", "FLOPS：计算速度，但不是全部", "FLOPS 描述理论计算速度。产业研究更要看可用算力：显存、带宽、网络、软件和电力都会影响理论算力最终能释放多少。", "经济算力 = 可用性能 ÷ 综合成本"],
      ["显存 / 带宽", "效率上限", "显存 / 带宽：决定效率上限", "显存容量决定模型装不装得下，显存带宽决定计算单元能不能被数据喂饱。HBM 的价值就在于更高带宽和更近距离的数据供给。", "算得快 + 喂得饱 = GPU 利用率提升"]
    ],
    compare: [
      ["训练驱动", "早期 AI 景气度更多来自模型竞赛：谁都想训练更大的模型、更强的多模态模型。", ["更看重顶级性能", "更依赖高速互联", "资本开支强度高"]],
      ["推理驱动", "长期商业化更看推理：只要用户持续使用，每一次调用都会消耗算力。", ["更看重单位 token 成本", "更看重延迟和吞吐", "可能更适合专用芯片"]]
    ],
    checklist: [
      "这家公司受益于训练需求，还是推理需求？",
      "它卖的是理论算力，还是可用算力？",
      "它是否解决显存容量、带宽或互联瓶颈？",
      "它的产品会不会提升 GPU 利用率？",
      "它的成本最终能否被客户的 AI 收入覆盖？"
    ]
  },
  {
    id: "lesson-2",
    number: "第 2 课",
    shortTitle: "芯片分工",
    title: "AI 芯片分工图解",
    heroTitle: "GPU 不是孤军作战，AI 芯片是一支分工明确的队伍。",
    lede:
      "这一课讲清 GPU、ASIC、CPU、DPU、网卡和互联分别负责什么。你会开始理解为什么 NVIDIA 的生态强、云厂商为什么自研芯片，以及为什么网络和软件会放大硬件价值。",
    audio: "assets/audio/lesson-02.m4a",
    visual: [
      ["CPU", "管调度", "power"],
      ["GPU", "做并行", "chip"],
      ["ASIC", "降成本", "memory"],
      ["DPU / NIC", "跑网络", "network"]
    ],
    chainTitle: "一次 AI 请求，会经过多种芯片协同。",
    chain: [
      ["CPU", "负责系统控制、任务调度、数据预处理和资源管理。"],
      ["GPU", "负责大规模矩阵计算，是训练和通用推理的主力。"],
      ["HBM", "给加速器提供高带宽数据，避免计算单元空等。"],
      ["DPU / NIC", "处理网络、存储、安全和数据搬运，让 CPU 与 GPU 少做杂活。"],
      ["交换芯片", "让服务器之间高速通信，决定集群训练效率。"],
      ["ASIC", "为特定任务优化，追求更低成本和更高能效。"]
    ],
    chapters: [
      [
        "CPU：系统指挥官",
        "CPU 不是 AI 计算的主角，但它是系统指挥官。它负责操作系统、任务调度、数据预处理、资源管理和异常处理。没有 CPU，GPU 不知道什么时候开始算、拿什么数据算、算完交给谁。投资上要理解：AI 服务器不是只买 GPU，CPU 平台、主板、内存和系统软件也会一起升级。"
      ],
      [
        "GPU：并行计算主力",
        "GPU 的核心优势是大规模并行计算。大模型训练和推理本质上有大量矩阵运算，GPU 可以让很多计算单元同时工作。GPU 的护城河不只来自芯片参数，也来自软件生态、开发者习惯、库、编译器和集群调度工具。"
      ],
      [
        "ASIC：专用效率机器",
        "ASIC 是为特定任务设计的专用芯片。它不像 GPU 那么通用，但在稳定、大规模、重复的任务上，可能做到更低成本和更高能效。云厂商自研 AI 芯片，通常不是为了立刻取代 GPU，而是为了在确定性强的推理和内部工作负载上优化成本结构。"
      ],
      [
        "DPU、网卡与互联",
        "当 GPU 数量变多，瓶颈会从单卡性能扩散到数据搬运和网络通信。DPU、智能网卡、交换芯片、InfiniBand、以太网和光模块，解决的是服务器之间如何高速协同。网络慢，GPU 就会等待，昂贵算力会被浪费。"
      ],
      [
        "投资研究视角",
        "判断 AI 芯片公司，不能只问算力有多高，还要问软件生态是否成熟，客户迁移成本高不高，供应链是否稳定，产品用于训练还是推理，能否降低单位 token 成本。芯片分工越清楚，越能看出哪家公司在卖核心瓶颈，哪家公司只是跟着景气度波动。"
      ]
    ],
    conceptsTitle: "AI 芯片的五个角色。",
    concepts: [
      ["CPU", "调度控制", "CPU：系统指挥官", "CPU 负责通用控制和系统调度。它不负责大规模矩阵计算，但决定服务器资源如何被组织起来。", "CPU 价值 = 平台稳定性 + I/O 能力 + 调度效率"],
      ["GPU", "通用加速", "GPU：训练和通用推理主力", "GPU 适合大量并行计算，通用性强，生态成熟。模型快速变化时，通用 GPU 的适配优势很明显。", "GPU 护城河 = 芯片性能 × 软件生态 × 集群能力"],
      ["ASIC", "专用高效", "ASIC：把确定任务做到极致", "ASIC 针对特定计算模式优化，适合规模化、稳定的内部任务或推理任务。它常常追求单位成本和能效。", "ASIC 适用场景 = 稳定任务 × 大规模调用"],
      ["DPU / NIC", "数据搬运", "DPU / NIC：给集群减负", "DPU 和智能网卡帮助处理网络、存储、安全和数据搬运，让 CPU 和 GPU 把更多时间用于主任务。", "数据搬运效率提升 = GPU 等待时间下降"],
      ["互联", "集群协同", "互联：决定多卡效率", "单卡再强，也需要高速互联把多张卡、多台服务器连成集群。互联效率直接影响训练速度和 GPU 利用率。", "集群效率 = 单卡性能 × 通信效率 × 软件调度"]
    ],
    compare: [
      ["GPU", "更像一把高端万能工具，适合模型快速迭代和多种任务混合。", ["通用性强", "生态成熟", "适合训练和复杂推理"]],
      ["ASIC", "更像专用生产线，适合稳定、重复、高频的任务。", ["能效更优", "单位成本可能更低", "更依赖客户规模和软件适配"]]
    ],
    checklist: [
      "产品主要服务训练、推理，还是两者都做？",
      "客户是否愿意承担迁移和适配成本？",
      "软件生态是否能提高硬件黏性？",
      "网络和互联是否会限制芯片实际利用率？",
      "自研 ASIC 是降低成本，还是只是战略叙事？"
    ]
  },
  {
    id: "lesson-3",
    number: "第 3 课",
    shortTitle: "HBM 与封装",
    title: "HBM 与先进封装",
    heroTitle: "AI 芯片跑得快，前提是数据送得上。",
    lede:
      "这一课讲 HBM、显存带宽、先进封装、良率和产能。你会理解为什么 AI 芯片短缺不只看晶圆，也要看内存、封装和供应链协同。",
    audio: "assets/audio/lesson-03.m4a",
    visual: [
      ["GPU Die", "负责计算", "chip"],
      ["HBM Stack", "高带宽", "memory"],
      ["Interposer", "近距离连接", "network"],
      ["CoWoS / 封装", "系统成品", "power"]
    ],
    chainTitle: "AI 加速器的性能，来自芯片、内存和封装共同决定。",
    chain: [
      ["先进制程", "把计算芯片做得更强、更省电，但成本和复杂度上升。"],
      ["HBM 晶粒", "多层 DRAM 堆叠，提供远高于普通内存的带宽。"],
      ["TSV / 堆叠", "通过垂直连接把多层内存组合起来，考验制造良率。"],
      ["中介层", "让 GPU 和 HBM 高速、短距离通信。"],
      ["先进封装", "把多个芯片和 HBM 组合成可销售的 AI 加速器。"],
      ["系统验证", "封装、散热、供电和可靠性都合格，才能进入服务器。"]
    ],
    chapters: [
      [
        "为什么 HBM 关键",
        "大模型计算时，计算单元需要不断读取参数和中间结果。如果数据送得慢，GPU 就会等待。HBM 的价值在于高带宽、靠近计算芯片、能效更好。它不是普通内存条，而是和 AI 加速器一起封装的核心部件。"
      ],
      [
        "容量与带宽",
        "显存容量决定模型、上下文和 batch size 能不能放进去；显存带宽决定数据能不能快速送到计算单元。容量不够会跑不动，带宽不够会跑不满。AI 芯片评估不能只看算力，也要看 HBM 容量和带宽。"
      ],
      [
        "先进封装在做什么",
        "先进封装把 GPU、HBM 和其他芯片近距离连接起来。传统封装更像把芯片装进外壳，先进封装更像把多个关键部件组成一套高速系统。封装能力不足时，即使晶圆产能足够，AI 加速器也可能交不出来。"
      ],
      [
        "良率与产能",
        "HBM 堆叠、先进封装和系统验证都有良率问题。层数越高、结构越复杂，任何一个环节出问题都会影响最终可交付数量。投资研究要关注的不只是需求，还要看产能扩张速度、良率爬坡和客户认证周期。"
      ],
      [
        "投资研究视角",
        "HBM 和先进封装是 AI 算力链里的硬瓶颈。它们的共同特点是扩产慢、技术门槛高、客户认证严格。如果一家公司能在这些环节持续提升良率、产能和客户份额，通常比普通组装环节更有定价权。"
      ]
    ],
    conceptsTitle: "理解 HBM 与封装的五个关键词。",
    concepts: [
      ["HBM", "高带宽", "HBM：给 GPU 喂数据", "HBM 是高带宽内存，通过堆叠和近距离封装，给 AI 加速器提供高速数据供给。", "HBM 价值 = 带宽 + 容量 + 能效"],
      ["容量", "装得下", "容量：模型能不能放进去", "模型参数、上下文和 batch size 都消耗显存。容量不足会限制模型大小和吞吐。", "容量不足 = 任务受限"],
      ["带宽", "喂得饱", "带宽：GPU 能不能跑满", "带宽决定数据进入计算单元的速度。带宽不足时，理论算力无法充分释放。", "带宽不足 = GPU 等数据"],
      ["封装", "连得近", "先进封装：把芯片变成系统", "先进封装让 GPU 和 HBM 近距离高速连接，是 AI 加速器能高效工作的关键。", "系统性能 = 芯片 × 内存 × 封装"],
      ["良率", "交得出", "良率：从样品到量产的关键", "复杂封装和高层 HBM 都会带来良率挑战。良率提升直接影响成本、交付和利润率。", "可交付产能 = 名义产能 × 良率"]
    ],
    compare: [
      ["普通 DRAM", "适合大容量通用内存，但距离计算芯片较远，带宽和能效不适合顶级 AI 加速器的核心需求。", ["成本较低", "应用广", "带宽相对有限"]],
      ["HBM", "专为高带宽、近距离、高能效数据供给设计，是高端 AI 加速器的重要瓶颈。", ["带宽高", "封装复杂", "扩产和良率更难"]]
    ],
    checklist: [
      "AI 芯片升级是否同步提高 HBM 容量和带宽？",
      "瓶颈在晶圆、HBM、先进封装，还是系统验证？",
      "供应商是否具备稳定良率和客户认证？",
      "扩产周期是否跟得上客户需求？",
      "涨价来自真实瓶颈，还是短期库存周期？"
    ]
  },
  {
    id: "lesson-4",
    number: "第 4 课",
    shortTitle: "数据中心",
    title: "AI 数据中心入门",
    heroTitle: "数据中心不是机房，是 AI 的工业底座。",
    lede:
      "这一课讲电力、PUE、机柜密度、液冷、网络和建设周期。你会理解为什么 AI 产业链的瓶颈正在从芯片扩散到电力、冷却和基础设施。",
    audio: "assets/audio/lesson-04.m4a",
    visual: [
      ["电力", "先批电", "power"],
      ["机柜", "高密度", "chip"],
      ["液冷", "带走热", "memory"],
      ["网络", "连集群", "network"]
    ],
    chainTitle: "AI 数据中心要同时解决供电、散热和通信。",
    chain: [
      ["选址", "靠近电力、网络和客户需求，土地只是第一步。"],
      ["电力接入", "变电站、输配电、备用电源决定能否真正上电。"],
      ["土建与机电", "建设机房、供配电、冷却、消防和安全系统。"],
      ["服务器上架", "AI 服务器功耗高，对机柜、母线和散热要求高。"],
      ["网络互联", "集群训练需要低延迟、高带宽和稳定通信。"],
      ["运营优化", "持续优化 PUE、利用率、故障率和客户合同。"]
    ],
    chapters: [
      [
        "电力是第一瓶颈",
        "AI 数据中心最关键的资源是电。服务器可以买，芯片可以下单，但大规模电力接入、变电站、输配电和审批不是短时间就能解决。判断数据中心项目，先看多少兆瓦、何时上电、是否有稳定电源。"
      ],
      [
        "PUE 与能源效率",
        "PUE 是数据中心总耗电除以 IT 设备耗电。PUE 越接近 1，说明额外用于冷却和供电损耗的电越少。AI 机柜功率密度上升后，冷却和供电效率会变得更重要，因为电费和散热直接影响算力成本。"
      ],
      [
        "机柜密度和液冷",
        "普通数据中心的机柜功率密度较低，风冷可以覆盖很多场景。AI 服务器功耗大幅上升后，高密度机柜更容易需要液冷。冷板式液冷更主流，浸没式液冷更激进。液冷不是装个水管那么简单，它会改变设计、运维和供应链。"
      ],
      [
        "网络决定集群效率",
        "AI 数据中心里，网络不只是让服务器上网，而是让大量 GPU 像一个整体一样协作。训练集群需要高速互联、低延迟和稳定性。网络慢，GPU 等待，利用率下降，资本开支回报变差。"
      ],
      [
        "投资研究视角",
        "看数据中心，不要只看装机规模，要看能否按时上电、机柜密度是否适配 AI、客户合同是否稳定、折旧和电费能否被收入覆盖。数据中心的核心问题是：巨额资本开支能否转化为长期现金流。"
      ]
    ],
    conceptsTitle: "数据中心的五个核心指标。",
    concepts: [
      ["MW", "电力规模", "MW：数据中心规模的第一语言", "数据中心常用兆瓦描述电力容量。AI 时代，能拿到多少稳定电力，往往比有多少土地更关键。", "可上线算力 ≈ 可用电力 × 设备效率"],
      ["PUE", "能源效率", "PUE：衡量电用在了哪里", "PUE 等于总耗电除以 IT 设备耗电。它反映冷却和供电损耗，是数据中心运营效率的重要指标。", "PUE 越低，额外能耗越少"],
      ["机柜密度", "单柜功率", "机柜密度：AI 改造的压力点", "AI 服务器让单柜功率快速上升，传统机房可能需要改造供电、冷却和结构。", "高密度 = 更高供电 + 更强散热"],
      ["液冷", "带走热量", "液冷：高密度算力的散热方案", "液冷用液体更高效地带走热量。冷板式液冷较主流，浸没式液冷更复杂。", "液冷价值 = 支持高功率密度"],
      ["利用率", "现金流核心", "利用率：资本开支能否赚钱", "数据中心建好不等于赚钱。服务器利用率、客户合同和定价决定资本开支能否转成现金流。", "回报 = 上架率 × 利用率 × 单位收入"]
    ],
    compare: [
      ["风冷", "成熟、便宜、运维简单，适合中低功率密度，但面对高密度 AI 机柜压力变大。", ["成熟可靠", "成本较低", "高密度场景受限"]],
      ["液冷", "散热效率更高，适合高功率 AI 服务器，但会提升设计、供应链和运维复杂度。", ["支持高密度", "能效更好", "改造和运维更复杂"]]
    ],
    checklist: [
      "项目是否已经获得足够电力容量？",
      "上电时间和建设周期是否可信？",
      "机柜密度是否适配 AI 服务器？",
      "冷却方案是风冷、冷板液冷，还是浸没式？",
      "客户合同和利用率能否覆盖折旧、电费和融资成本？"
    ]
  }
];

const lessonNav = document.querySelector("#lessonNav");
const heroEyebrow = document.querySelector("#heroEyebrow");
const heroTitle = document.querySelector("#heroTitle");
const heroLede = document.querySelector("#heroLede");
const heroVisual = document.querySelector("#heroVisual");
const chainTitle = document.querySelector("#chainTitle");
const chainList = document.querySelector("#chainList");
const nativeAudio = document.querySelector("#nativeAudio");
const audioSource = document.querySelector("#audioSource");
const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");
const statusEl = document.querySelector("#speechStatus");
const rateRange = document.querySelector("#rateRange");
const rateOutput = document.querySelector("#rateOutput");
const chapterList = document.querySelector("#chapterList");
const chapterTitle = document.querySelector("#chapterTitle");
const chapterText = document.querySelector("#chapterText");
const conceptsTitle = document.querySelector("#conceptsTitle");
const conceptList = document.querySelector("#conceptList");
const conceptCard = document.querySelector("#conceptCard");
const compareList = document.querySelector("#compareList");
const checklist = document.querySelector("#checklistItems");
const footerLesson = document.querySelector("#footerLesson");
const tokenForm = document.querySelector("#tokenForm");
const inputTokens = document.querySelector("#inputTokens");
const outputTokens = document.querySelector("#outputTokens");
const costPerMillion = document.querySelector("#costPerMillion");
const calcResult = document.querySelector("#calcResult");

let currentLessonIndex = 0;
let currentChapter = 0;
let utterance = null;

function normalizeLessonIndex() {
  const hash = window.location.hash.replace("#", "");
  const index = lessons.findIndex((lesson) => lesson.id === hash);
  return index >= 0 ? index : 0;
}

function renderLessonNav() {
  lessonNav.innerHTML = lessons
    .map(
      (lesson, index) => `
        <button class="lesson-tab" type="button" data-lesson="${index}">
          <span>${lesson.number}</span>
          <strong>${lesson.shortTitle}</strong>
        </button>
      `
    )
    .join("");

  lessonNav.querySelectorAll("[data-lesson]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.lesson);
      window.location.hash = lessons[index].id;
      renderLesson(index);
      document.querySelector("#hero").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderHero(lesson) {
  heroEyebrow.textContent = `${lesson.number} · ${lesson.title}`;
  heroTitle.textContent = lesson.heroTitle;
  heroLede.textContent = lesson.lede;
  heroVisual.innerHTML = lesson.visual
    .map(
      ([label, value, className]) => `
        <div class="compute-card ${className}">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `
    )
    .join("");
}

function renderChain(lesson) {
  chainTitle.textContent = lesson.chainTitle;
  chainList.innerHTML = lesson.chain
    .map(
      ([title, body], index) => `
        <article>
          <span class="node-index">${String(index + 1).padStart(2, "0")}</span>
          <h3>${title}</h3>
          <p>${body}</p>
        </article>
      `
    )
    .join("");
}

function renderAudio(lesson) {
  audioSource.src = lesson.audio;
  nativeAudio.load();
  statusEl.textContent = "准备就绪";
  currentChapter = 0;
  chapterList.innerHTML = lesson.chapters
    .map(
      ([title], index) => `
        <button type="button" data-chapter="${index}">
          ${index + 1}. ${title}
        </button>
      `
    )
    .join("");

  chapterList.querySelectorAll("[data-chapter]").forEach((button) => {
    button.addEventListener("click", () => {
      setChapter(Number(button.dataset.chapter));
      stopSpeechOnly();
      statusEl.textContent = "已切换章节";
    });
  });

  setChapter(0);
}

function setChapter(index) {
  const lesson = lessons[currentLessonIndex];
  currentChapter = index;
  chapterTitle.textContent = lesson.chapters[index][0];
  chapterText.textContent = lesson.chapters[index][1];
  chapterList.querySelectorAll("[data-chapter]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.chapter) === index);
  });
}

function renderConcepts(lesson) {
  conceptsTitle.textContent = lesson.conceptsTitle;
  conceptList.innerHTML = lesson.concepts
    .map(
      ([label, sub], index) => `
        <button class="concept" type="button" data-concept="${index}">
          <span>${label}</span>
          <strong>${sub}</strong>
        </button>
      `
    )
    .join("");

  conceptList.querySelectorAll("[data-concept]").forEach((button) => {
    button.addEventListener("click", () => setConcept(Number(button.dataset.concept)));
  });

  setConcept(0);
}

function setConcept(index) {
  const concept = lessons[currentLessonIndex].concepts[index];
  conceptList.querySelectorAll("[data-concept]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.concept) === index);
  });
  conceptCard.innerHTML = `
    <h3>${concept[2]}</h3>
    <p>${concept[3]}</p>
    <div class="formula">${concept[4]}</div>
  `;
}

function renderCompare(lesson) {
  compareList.innerHTML = lesson.compare
    .map(
      ([title, body, items]) => `
        <article>
          <h3>${title}</h3>
          <p>${body}</p>
          <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `
    )
    .join("");
}

function renderChecklist(lesson) {
  checklist.innerHTML = lesson.checklist
    .map((item) => `<label><input type="checkbox" /> ${item}</label>`)
    .join("");
}

function renderLesson(index) {
  stopAllAudio();
  currentLessonIndex = index;
  const lesson = lessons[index];
  document.title = `AI 算力产业链学习 | ${lesson.title}`;
  renderHero(lesson);
  renderChain(lesson);
  renderAudio(lesson);
  renderConcepts(lesson);
  renderCompare(lesson);
  renderChecklist(lesson);
  footerLesson.textContent = `AI 算力产业链系统课 · ${lesson.number}`;

  lessonNav.querySelectorAll("[data-lesson]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.lesson) === index);
  });
}

function getChineseVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  return voices.find((voice) => voice.lang.toLowerCase().startsWith("zh")) || voices[0] || null;
}

function stopSpeechOnly() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
}

function stopAllAudio() {
  stopSpeechOnly();
  nativeAudio.pause();
  nativeAudio.currentTime = 0;
}

function speak() {
  const lesson = lessons[currentLessonIndex];

  if (!("speechSynthesis" in window)) {
    nativeAudio.play();
    statusEl.textContent = "正在播放完整音频";
    return;
  }

  window.speechSynthesis.cancel();
  utterance = new SpeechSynthesisUtterance(
    `${lesson.chapters[currentChapter][0]}。${lesson.chapters[currentChapter][1]}`
  );
  utterance.lang = "zh-CN";
  utterance.rate = Number(rateRange.value);
  const voice = getChineseVoice();
  if (voice) {
    utterance.voice = voice;
  }
  utterance.onstart = () => {
    statusEl.textContent = `正在播放：${lesson.chapters[currentChapter][0]}`;
  };
  utterance.onend = () => {
    statusEl.textContent = "播放完成";
  };
  utterance.onerror = () => {
    nativeAudio.play();
    statusEl.textContent = "章节朗读不可用，已切换到完整音频。";
  };
  window.speechSynthesis.speak(utterance);
}

function updateCost() {
  const totalTokens = Number(inputTokens.value || 0) + Number(outputTokens.value || 0);
  const cost = (totalTokens / 1_000_000) * Number(costPerMillion.value || 0);
  calcResult.textContent = `$${cost.toFixed(4)} / 次`;
}

playButton.addEventListener("click", speak);

pauseButton.addEventListener("click", () => {
  if (!("speechSynthesis" in window)) {
    if (nativeAudio.paused) {
      nativeAudio.play();
      statusEl.textContent = "继续播放完整音频";
    } else {
      nativeAudio.pause();
      statusEl.textContent = "已暂停完整音频";
    }
    return;
  }
  if (window.speechSynthesis.paused) {
    window.speechSynthesis.resume();
    statusEl.textContent = "继续播放";
  } else {
    window.speechSynthesis.pause();
    statusEl.textContent = "已暂停";
  }
});

stopButton.addEventListener("click", () => {
  stopAllAudio();
  statusEl.textContent = "已停止";
});

rateRange.addEventListener("input", () => {
  rateOutput.textContent = `${Number(rateRange.value).toFixed(2)}x`;
});

tokenForm.addEventListener("input", updateCost);

window.addEventListener("hashchange", () => {
  renderLesson(normalizeLessonIndex());
});

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = getChineseVoice;
}

renderLessonNav();
renderLesson(normalizeLessonIndex());
updateCost();
