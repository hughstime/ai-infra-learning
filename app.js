const chapters = [
  {
    title: "算力在算什么",
    text:
      "AI 算力首先要分清两件事：训练和推理。训练是把模型做出来，像建一座工厂；推理是让模型工作，像工厂每天生产。早期 AI 景气度常由训练拉动，因为企业都在训练更大的模型。长期商业化更看推理，因为只要用户持续调用，每一次回答、搜索、代码补全都会消耗算力。"
  },
  {
    title: "Token 与成本",
    text:
      "大模型不是按句子工作，而是按 token 工作。输入 prompt 会被拆成 token，模型输出答案也是一个 token 一个 token 生成。投资研究里，token 是理解推理成本的入口。一个 AI 应用能否赚钱，最终要看每次调用收入能不能覆盖输入和输出 token 带来的算力成本。"
  },
  {
    title: "FLOPS 与可用算力",
    text:
      "FLOPS 是每秒浮点运算次数，常用来描述理论算力。但理论算力不等于可用算力，更不等于经济算力。真实世界里还要看 GPU 利用率、显存容量、显存带宽、网络互联、软件生态、电力和散热。真正有价值的是在一定成本下稳定产出的算力。"
  },
  {
    title: "显存与带宽",
    text:
      "如果说 GPU 是发动机，显存就是离发动机最近的燃料仓。显存容量决定模型和上下文装不装得下，显存带宽决定数据能不能足够快地送到计算单元。带宽不够时，昂贵的 GPU 会等数据，利用率下降，单位 token 成本上升。这就是 HBM 在 AI 产业链里变得关键的原因。"
  },
  {
    title: "投资研究视角",
    text:
      "看 AI 算力产业链，不要只看参数最大，也不要只看故事最热。核心问题是：谁在解决瓶颈，谁有定价权，谁的产品能提升可用算力，谁能把资本开支转成真实收入和现金流。第一课先记住一句话：AI 算力投资看的不是孤立芯片，而是稳定、低成本、大规模交付可用算力的系统能力。"
  }
];

const concepts = {
  training: {
    title: "训练：把模型做出来",
    body:
      "训练是把海量文本、图片、代码或视频喂给模型，让模型学习参数。它通常需要大量 GPU 同时协作，对显存、互联、网络和稳定性要求极高。",
    formula: "训练需求 = 模型竞赛 × 数据规模 × 集群效率"
  },
  inference: {
    title: "推理：让模型真正工作",
    body:
      "推理发生在用户使用时。每次问答、搜索、代码补全、图片生成，都会消耗算力。长期看，推理需求会和用户量、调用频次、输出长度绑定。",
    formula: "推理成本 = token 数 × 单 token 成本 × 调用次数"
  },
  token: {
    title: "Token：AI 世界的工作量单位",
    body:
      "模型会把输入和输出拆成 token。上下文越长、回答越长、工具调用越多，token 消耗越高。理解 token，才能理解 AI 应用的边际成本。",
    formula: "单次请求 token = 输入 token + 输出 token"
  },
  flops: {
    title: "FLOPS：计算速度，但不是全部",
    body:
      "FLOPS 描述理论计算速度。产业研究更要看可用算力：显存、带宽、网络、软件和电力都会影响理论算力最终能释放多少。",
    formula: "经济算力 = 可用性能 ÷ 综合成本"
  },
  memory: {
    title: "显存 / 带宽：决定效率上限",
    body:
      "显存容量决定模型装不装得下，显存带宽决定计算单元能不能被数据喂饱。HBM 的价值就在于更高带宽和更近距离的数据供给。",
    formula: "算得快 + 喂得饱 = GPU 利用率提升"
  }
};

const chapterTitle = document.querySelector("#chapterTitle");
const chapterText = document.querySelector("#chapterText");
const chapterButtons = Array.from(document.querySelectorAll("[data-chapter]"));
const playButton = document.querySelector("#playButton");
const pauseButton = document.querySelector("#pauseButton");
const stopButton = document.querySelector("#stopButton");
const statusEl = document.querySelector("#speechStatus");
const rateRange = document.querySelector("#rateRange");
const rateOutput = document.querySelector("#rateOutput");
const nativeAudio = document.querySelector("#nativeAudio");
let currentChapter = 0;
let utterance = null;

function setChapter(index) {
  currentChapter = index;
  chapterTitle.textContent = chapters[index].title;
  chapterText.textContent = chapters[index].text;
  chapterButtons.forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.chapter) === index);
  });
}

function getChineseVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  return voices.find((voice) => voice.lang.toLowerCase().startsWith("zh")) || voices[0] || null;
}

function speak() {
  if (!("speechSynthesis" in window)) {
    nativeAudio.play();
    statusEl.textContent = "正在播放完整音频";
    return;
  }

  window.speechSynthesis.cancel();
  utterance = new SpeechSynthesisUtterance(
    `${chapters[currentChapter].title}。${chapters[currentChapter].text}`
  );
  utterance.lang = "zh-CN";
  utterance.rate = Number(rateRange.value);
  const voice = getChineseVoice();
  if (voice) {
    utterance.voice = voice;
  }
  utterance.onstart = () => {
    statusEl.textContent = `正在播放：${chapters[currentChapter].title}`;
  };
  utterance.onend = () => {
    statusEl.textContent = "播放完成";
  };
  utterance.onerror = () => {
    statusEl.textContent = "朗读被中断，请再点一次播放。";
  };
  window.speechSynthesis.speak(utterance);
}

chapterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setChapter(Number(button.dataset.chapter));
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    statusEl.textContent = "已切换章节";
  });
});

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
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  nativeAudio.pause();
  nativeAudio.currentTime = 0;
  statusEl.textContent = "已停止";
});

rateRange.addEventListener("input", () => {
  rateOutput.textContent = `${Number(rateRange.value).toFixed(2)}x`;
});

const conceptButtons = Array.from(document.querySelectorAll("[data-concept]"));
const conceptCard = document.querySelector("#conceptCard");

conceptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const concept = concepts[button.dataset.concept];
    conceptButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    conceptCard.innerHTML = `
      <h3>${concept.title}</h3>
      <p>${concept.body}</p>
      <div class="formula">${concept.formula}</div>
    `;
  });
});

const tokenForm = document.querySelector("#tokenForm");
const inputTokens = document.querySelector("#inputTokens");
const outputTokens = document.querySelector("#outputTokens");
const costPerMillion = document.querySelector("#costPerMillion");
const calcResult = document.querySelector("#calcResult");

function updateCost() {
  const totalTokens = Number(inputTokens.value || 0) + Number(outputTokens.value || 0);
  const cost = (totalTokens / 1_000_000) * Number(costPerMillion.value || 0);
  calcResult.textContent = `$${cost.toFixed(4)} / 次`;
}

tokenForm.addEventListener("input", updateCost);

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = getChineseVoice;
}

setChapter(0);
updateCost();
