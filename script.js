const scaleLabels = [
    { val: 1, text: "น้อยที่สุด" },
    { val: 2, text: "น้อย" },
    { val: 3, text: "ปานกลาง" },
    { val: 4, text: "มาก" },
    { val: 5, text: "มากที่สุด" }
];

const surveyPages = [
    {
        headerTitle: "PART I", mainTitle: "ข้อมูลทั่วไป", subDesc: "กรุณาเลือกตอบตามความเป็นจริง",
        questions: [
            { id: "q1", num: "QUESTION 01", text: "เพศ", type: "choice", options: ["ชาย", "หญิง", "LGBTQ+", "ไม่ประสงค์ระบุ"] },
            { id: "q2", num: "QUESTION 02", text: "อายุ", type: "choice", options: ["18–25 ปี", "26–35 ปี", "36–45 ปี", "46–55 ปี", "56 ปีขึ้นไป"] },
            { id: "q3", num: "QUESTION 03", text: "ระดับการศึกษา", type: "choice", options: ["ต่ำกว่าปริญญาตรี", "ปริญญาตรี", "ปริญญาโท", "ปริญญาเอก", "อื่น ๆ"] },
            { id: "q4", num: "QUESTION 04", text: "อาชีพ", type: "choice", options: ["นักเรียน/นักศึกษา", "ข้าราชการ/รัฐวิสาหกิจ", "พนักงานบริษัทเอกชน", "ธุรกิจส่วนตัว/เจ้าของธุรกิจ", "ว่างงาน", "อื่น ๆ"] }
        ]
    },
    {
        headerTitle: "PART I", mainTitle: "ข้อมูลทั่วไป (ต่อ)", subDesc: "กรุณาเลือกตอบตามความเป็นจริง",
        questions: [
            { id: "q5", num: "QUESTION 05", text: "รายได้เฉลี่ยต่อเดือน", type: "choice", options: ["ต่ำกว่า 15,000 บาท", "15,001–30,000 บาท", "30,001–50,000 บาท", "มากกว่า 50,001 บาท"] },
            { id: "q6", num: "QUESTION 06", text: "ภูมิลำเนา", type: "choice", options: ["ภาคเหนือ", "ภาคตะวันออกเฉียงเหนือ", "ภาคกลาง", "ภาคตะวันออก", "ภาคตะวันตก", "ภาคใต้", "กรุงเทพมหานคร", "ภูมิภาคอื่น ๆ/นอกประเทศไทย"] },
            { id: "q7", num: "QUESTION 07", text: "โดยปกติแล้วท่านเดินทางท่องเที่ยวพักผ่อนกี่ครั้งต่อปี", type: "choice", options: ["1–2 ครั้ง", "3–5 ครั้ง", "6–10 ครั้ง", "มากกว่า 10 ครั้ง", "ไม่ได้เดินทางเพื่อการพักผ่อน"] },
            { id: "q8", num: "QUESTION 08", text: "โดยทั่วไป ท่านสนใจหัวข้อใดมากที่สุด", type: "choice", options: ["ประวัติศาสตร์", "วัฒนธรรม", "การท่องเที่ยว", "สงครามและความขัดแย้ง", "ภัยพิบัติทางธรรมชาติ", "เรื่องลึกลับและเหตุการณ์ที่อธิบายไม่ได้", "อาชญากรรมและเรื่องจริง", "อื่น ๆ"] }
        ]
    },
    {
        headerTitle: "PART II", mainTitle: "การรับรู้", subDesc: "การรับรู้เกี่ยวกับประสบการณ์ที่เกี่ยวข้องกับความตาย โศกนาฏกรรม และสถานที่ประวัติศาสตร์สงคราม",
        questions: [
            { id: "q9", num: "QUESTION 01", text: "ท่านเคยพบเห็นหรือเคยรับรู้เกี่ยวกับสถานที่ท่องเที่ยวลักษณะดังกล่าวหรือไม่", type: "choice", options: ["เคย", "ไม่เคย", "ไม่แน่ใจ"] },
            { id: "q10", num: "QUESTION 02", text: "ก่อนทำแบบสอบถามนี้ ท่านเคยได้ยินคำว่า “การท่องเที่ยวเชิงมืด (Dark Tourism)” มาก่อนหรือไม่", type: "choice", options: ["เคย และเข้าใจความหมาย", "เคย แต่ไม่แน่ใจหมายถึงอะไร", "เคยเห็นหรือได้ยินผ่านๆแต่่ไม่ทราบว่าเรียกว่าอะไร", "ไม่เคยได้ยินคำนี้มาก่อน"] },
            { id: "q11", num: "QUESTION 03", text: "ท่านรู้จักหรือรับทราบข้อมูลเกี่ยวกับแหล่งท่องเที่ยวประวัติศาสตร์สงครามมากน้อยเพียงใด", type: "choice", options: ["ไม่รู้จักเลย", "รู้จักเล็กน้อย", "รู้จักพอสมควร", "รู้จักดี", "รู้จักเป็นอย่างดี"] },
            { id: "q12", num: "QUESTION 04", text: "ท่านเคยติดตามข่าวสาร/ข้อมูลเกี่ยวกับสงคราม ความขัดแย้ง เหตุการณืทางประวัติศาสตร์ บ่อยเพียงใด", type: "choice", options: ["ไม่เคย", "นาน ๆ ครั้ง", "บางครั้ง", "บ่อยครั้ง", "เป็นประจำ"] }
        ]
    },
    {
        headerTitle: "PART II", mainTitle: "การรับรู้สถานที่ท่องเที่ยว (ต่อ)", subDesc: "การรับรู้เกี่ยวกับประสบการณ์ที่เกี่ยวข้องกับความตาย โศกนาฏกรรม และสถานที่ประวัติศาสตร์สงคราม",
        questions: [
            { id: "q13", num: "QUESTION 05", text: "ท่านเคยเดินทางไปเยี่ยมชมสถานที่ที่มีลักษณะดังกล่าวหรือไม่", type: "choice", options: ["เคย", "ไม่เคย", "ไม่แน่ใจ"] },
            { id: "q14", num: "QUESTION 06", text: "หากเคย ท่านเคยเยี่ยมชมสถานที่ประเภทใดบ้าง (เลือกได้หลายข้อ)", type: "multi", options: ["สนามรบ/พื้นที่เคยเกิดการสู้รบ", "อนุสรณ์สถานสงคราม", "พิพิธภัณฑ์สงคราม/ประวัติศาสตร์", "สุสานทหาร", "ค่ายเชลยศึก", "สถานที่เกิดเหตุการณ์โศกนาฏกรรม", "ภัยพิบัติ", "อื่น ๆ"] },
            { id: "q15", num: "QUESTION 07", text: "ท่านเคยได้รับข้อมูลเกี่ยวกับแหล่งท่องเที่ยวเชิงมืดจากแหล่งใดบ้าง", type: "multi", options: ["Facebook", "TikTok", "YouTube", "Instagram", "เว็บไซต์ท่องเที่ยว", "ข่าว/สื่อ", "เพื่อน/ครอบครัว", "สถานศึกษา", "อื่น ๆ"] },
            { id: "q16", num: "QUESTION 08", text: "หากท่านเคยเยี่ยมชมสถานที่ที่เกี่ยวข้องกับสงครามหรือโศกนาฏกรรม เหตุผลใดที่ทำให้ท่านสนใจเดินทางไปสถานที่ดังกล่าว", type: "multi", options: ["ได้รับความรู้หรือความเข้าใจประวัติศาสตร์มากขึ้น", "รู้สึกอยากเรียนรู้เกี่ยวกับเหตุการณ์นั้นเพิ่มเติม", "รู้สึกเห็นอกเห็นใจผู้ที่ได้รับผลกระทบ", "รู้สึกตระหนักถึงคุณค่าของชีวิตมากขึ้น", "รู้สึกเคารพต่อความทรงจำของผู้ที่ได้รับผลกระทบ", "รู้สึกเศร้าหรือสะเทือนใจ", "รู้สึกว่าการได้เห็นสถานที่จริงช่วยให้เข้าใจมากขึ้น", "อื่น ๆ"] }
        ]
    },
    {
        headerTitle: "PART III", mainTitle: "ด้านความสนใจประวัติศาสตร์ของท่าน", subDesc: "แบบสอบถามนี้จัดทำเพื่อรับฟังความคิดเห็นเกี่ยวกับความสนใจประวัติศาสตร์ โปรดคลิกตัวเลือกหรือข้อความที่กับความคิดของท่านต่อประเด็นต่อไปนี้มากที่สุด",
        questions: [
            { id: "q17", num: "QUESTION 01", text: "ฉันสนใจเรียนรู้ประวัติศาสตร์ผ่านการเดินทาง", type: "scale", category: 0 },
            { id: "q18", num: "QUESTION 02", text: "ฉันชอบเยี่ยมชมสถานที่ที่มีความสำคัญทางประวัติศาสตร์", type: "scale", category: 0 },
            { id: "q19", num: "QUESTION 03", text: "ฉันชอบศึกษาประวัติหรือเรื่องราวของสถานที่ก่อนเดินทาง", type: "scale", category: 0 },
            { id: "q20", num: "QUESTION 04", text: "การเรียนรู้เรื่องราวในอดีตเป็นแรงจูงใจให้ฉันเดินทาง", type: "scale", category: 0 },
            { id: "q21", num: "QUESTION 05", text: "ฉันเห็นว่าการเยี่ยมชมสถานที่จริงช่วยให้เข้าใจประวัติศาสตร์ได้มากขึ้น", type: "scale", category: 0 }
        ]
    },
    {
        headerTitle: "PART IV", mainTitle: "ด้านอิทธิพลของสื่อสังคมและสื่อออนไลน์ของท่าน", subDesc: "แบบสอบถามนี้จัดทำเพื่อรับฟังความคิดเห็นเกี่ยวกับอิทธิพลของสื่อสังคมและสื่อออนไลน์ โปรดคลิกตัวเลือกหรือข้อความที่กับความคิดของท่านต่อประเด็นต่อไปนี้มากที่สุด",
        questions: [
            { id: "q21", num: "QUESTION 01", text: "ฉันมักพบข้อมูลแหล่งท่องเที่ยวที่เกี่ยวข้องกับประวัติศาสตร์สงครามผ่านสื่อออนไลน์", type: "scale", category: 3 },
            { id: "q22", num: "QUESTION 02", text: "รีวิว/วิดีโอในสื่อออนไลน์ทำให้ฉันสนใจแหล่งท่องเที่ยวประเภทนี้มากขึ้น", type: "scale", category: 3 },
            { id: "q23", num: "QUESTION 03", text: "สื่อออนไลน์ช่วยให้ฉันรู้จักแหล่งท่องเที่ยวที่เกี่ยวข้องกับประวัติศาสตร์สงครามมากขึ้น", type: "scale", category: 3 },
            { id: "q24", num: "QUESTION 04", text: "ฉันมักค้นหาข้อมูลเกี่ยวกับแหล่งท่องเที่ยวผ่านสื่อออนไลน์ก่อนตัดสินใจเดินทาง", type: "scale", category: 3 },
            { id: "q25", num: "QUESTION 05", text: "ข้อมูลที่เกี่ยวกับแหล่งท่องเที่ยวจากสื่อออนไลน์มีอิทธิพลต่อการตัดสินใจเดินทางของฉัน", type: "scale", category: 3 }
        ]
    },
    {
        headerTitle: "PART V", mainTitle: "ด้านความอยากรู้อยากเห็นของท่าน, subDesc: "แบบสอบถามนี้จัดทำเพื่อรับฟังความคิดเห็นเกี่ยวกับความอยากรู้อยากเห็น โปรดคลิกตัวเลือกหรือข้อความที่กับความคิดของท่านต่อประเด็นต่อไปนี้มากที่สุด",
        questions: [
            { id: "q26", num: "QUESTION 01", text: "ฉันอยากเห็นสถานที่จริงที่เคยเกิดเหตุการณ์สำคัญ", type: "scale", category: 1 },
            { id: "q27", num: "QUESTION 02", text: "ฉันสนใจเรื่องราวเบื้องหลังของสถานที่ที่เกี่ยวข้องกับเหตุการณ์ในอดีต", type: "scale", category: 1 },
            { id: "q28", num: "QUESTION 03", text: "ฉันอยากสัมผัสบรรยากาศของสถานที่จริงที่มีทางประวัติศาสตร์", type: "scale", category: 1 },
            { id: "q29", num: "QUESTION 04", text: "เมื่อได้รับรู้เรื่องราว ฉันมักอยากไปเห็นสถานที่ด้วยตนเอง", type: "scale", category: 1 },
            { id: "q30", num: "QUESTION 05", text: "ฉันมักค้นหาข้อมูลเพิ่มเติมเกี่ยวกับสถานที่ที่มีเรื่องราวทางประวัติศาสตร์", type: "scale", category: 1 }
        ]
    },
    {
        headerTitle: "PART VI", mainTitle: "ความตั้งใจในการเดินทาง", subDesc: "แบบสอบถามนี้จัดทำเพื่อรับฟังความคิดเห็นเกี่ยวกับความตั้งใจเดินทาง โปรดคลิกตัวเลือกหรือข้อความที่กับความคิดของท่านต่อประเด็นต่อไปนี้มากที่สุด",
        questions: [
            { id: "q31", num: "QUESTION 01", text: "ฉันตั้งใจจะเดินทางไปยังแหล่งท่องเที่ยวประวัติศาสตร์สงครามในอนาคต", type: "scale", category: 2 },
            { id: "q32", num: "QUESTION 02", text: "หากมีโอกาส ฉันจะเลือกเดินทางไปสถานที่ประเภทนี้", type: "scale", category: 2 },
            { id: "q33", num: "QUESTION 03", text: "ฉันมีแนวโน้มจะวางแผนเดินทางไปยังแหล่งท่องเที่ยวที่เกี่ยวข้องกับประวัติศาสตร์สงคราม", type: "scale", category: 2 },
            { id: "q34", num: "QUESTION 04", text: "ฉันมีความต้องการเดินทางไปสถานที่ประเภทนี้", type: "scale", category: 2 },
            { id: "q35", num: "QUESTION 05", text: "ฉันยินดีใช้เวลาและค่าใช้จ่ายเพื่อเดินทางไปสถานที่ท่องเที่ยวดังกล่าว", type: "scale", category: 2 }
        ]
    },
    {
        headerTitle: "PART VII", mainTitle: "ข้อเสนอแนะเชิงคุณภาพและข้อเสนอเพิ่มเติม", subDesc: "เราอยากรับฟังความคิดเห็นและข้อเสนอแนะสำหรับการพัฒนาจากท่าน โปรดพิมพ์ความคิดเห็นของท่านในช่องด้านล่าง",
        questions: [
            { id: "q36", num: "QUESTION 01", text: "ท่านมีความคิดเห็นหรือความรู้สึกอย่างไร ต่อการเดินทางท่องเที่ยวไปยังสถานที่เกี่ยวกับสงคราม ความตาย หรือโศกนาฏกรรม", type: "text" },
            { id: "q37", num: "QUESTION 02", text: "อะไรคือเหตุผลสำคัญที่ทำให้ท่านสนใจ หรือไม่สนใจ เดินทางไปแหล่งท่องเที่ยวเชิงมืดประเภทพื้นที่สงครามในประเทศไทย", type: "text" },
            { id: "q38", num: "QUESTION 03", text: "ท่านคิดว่าการนำเสนอเรื่องราวเกี่ยวกับสงคราม ความตาย หรือโศกนาฏกรรมควรมีลักษณะอย่างไร เพื่อความเหมาะสมและเคารพต่อผู้ที่ได้รับผลกระทบ", type: "text" },
            { id: "q39", num: "QUESTION 04", text: "ท่านมีข้อเสนอแนะเพิ่มเติมสำหรับการพัฒนาแหล่งท่องเที่ยวเชิงมืดประเภทพื้นที่สงครามในประเทศไทยอย่างไร", type: "text", optional: true },
            { id: "q40", num: "QUESTION 05", text: "ข้อเสนอแนะอื่น ๆ ", type: "text", optional: true }
        ]
    }
];

let currentPage = 0;
let answersData = {};
let popupShown = false;
const totalPages = surveyPages.length;

const cover = document.getElementById("cover");
const intro = document.getElementById("intro");
const survey = document.getElementById("survey");
const matching = document.getElementById("matching");
const result = document.getElementById("result");
const thankyou = document.getElementById("thankyou");

const startButton = document.getElementById("startButton");
const beginSurveyButton = document.getElementById("beginSurveyButton");
const nextButton = document.getElementById("nextButton");
const backButton = document.getElementById("backButton");
const continuePopupButton = document.getElementById("continuePopupButton");
const goToUnansweredButton = document.getElementById("goToUnansweredButton");
const continueResultButton = document.getElementById("continueResultButton");
const restartButton = document.getElementById("restartButton");
const soundButton = document.getElementById("soundButton");

let soundOn = true;
let audioContext = null;
let ambientOsc1 = null, ambientOsc2 = null, ambientGain = null;

function initMysteriousAmbient(){
    if(!soundOn) return;
    try{
        if(!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if(audioContext.state === "suspended") audioContext.resume();

        if(!ambientGain){
            ambientGain = audioContext.createGain();
            ambientGain.gain.setValueAtTime(0.04, audioContext.currentTime);

            ambientOsc1 = audioContext.createOscillator();
            ambientOsc2 = audioContext.createOscillator();

            ambientOsc1.type = 'sine';
            ambientOsc2.type = 'triangle';

            ambientOsc1.frequency.setValueAtTime(65.41, audioContext.currentTime);
            ambientOsc2.frequency.setValueAtTime(98.00, audioContext.currentTime);

            ambientOsc1.connect(ambientGain);
            ambientOsc2.connect(ambientGain);
            ambientGain.connect(audioContext.destination);

            ambientOsc1.start();
            ambientOsc2.start();
        }
    }catch(e){}
}

function clickSound(){
    if(!soundOn) return;
    try{
        if(!audioContext) audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if(audioContext.state === "suspended") audioContext.resume();
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        oscillator.frequency.value = 160;
        gain.gain.value = .05;
        oscillator.connect(gain);
        gain.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + .05);
    }catch(e){}
}

function showPage(page){
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    page.classList.add("active");
}

startButton.addEventListener("click", () => { initMysteriousAmbient(); clickSound(); showPage(intro); });
beginSurveyButton.addEventListener("click", () => { initMysteriousAmbient(); clickSound(); currentPage = 0; showPage(survey); renderSurveyPage(); });

function renderSurveyPage(){
    const pageData = surveyPages[currentPage];

    document.getElementById("pageProgressText").textContent = String(currentPage + 1).padStart(2,"0") + " / " + String(totalPages).padStart(2,"0") + " หน้า";
    const percent = Math.round(((currentPage + 1) / totalPages) * 100);
    
    document.getElementById("progressBar").style.width = percent + "%";
    document.getElementById("walkerIcon").style.left = percent + "%";

    document.getElementById("sectionHeaderTitle").textContent = pageData.headerTitle;
    document.getElementById("sectionMainTitle").textContent = pageData.mainTitle;
    document.getElementById("sectionSubDesc").textContent = pageData.subDesc;

    const contentBox = document.getElementById("surveyContent");
    contentBox.innerHTML = "";

    pageData.questions.forEach((q) => {
        const qBox = document.createElement("div");
        qBox.className = "q-card-box";
        qBox.id = "box-" + q.id;

        const isDone = isQuestionAnswered(q);

        const meta = document.createElement("div");
        meta.className = "q-top-meta";
        meta.innerHTML = `
            <div class="q-num-label">${q.num}</div>
            <div class="q-status-icon ${isDone ? 'done' : ''}">${isDone ? '✓' : ''}</div>
        `;
        qBox.appendChild(meta);

        const title = document.createElement("div");
        title.className = "q-title-text";
        title.innerHTML = q.text + (q.optional ? "" : ' <span class="req-tag">จำเป็น</span>');
        qBox.appendChild(title);

        if(q.type === "scale"){
            const grid = document.createElement("div");
            grid.className = "rating-grid";

            scaleLabels.forEach((sc) => {
                const btn = document.createElement("div");
                btn.className = "rating-btn";

                const curVal = answersData[q.id];
                if(curVal && curVal.score === sc.val){
                    btn.classList.add("active");
                }

                btn.innerHTML = `
                    <div class="rating-val">${sc.val}</div>
                    <div class="rating-lbl">${sc.text}</div>
                `;

                btn.addEventListener("click", () => {
                    answersData[q.id] = { score: sc.val, category: q.category };
                    clickSound();
                    renderSurveyPage();
                });

                grid.appendChild(btn);
            });

            qBox.appendChild(grid);
        }

        if(q.type === "choice"){
            const list = document.createElement("div");
            list.className = "choice-list";

            q.options.forEach((option) => {
                const item = document.createElement("div");
                item.className = "choice-item";

                const isOther = option.includes("อื่น ๆ");
                const currentAns = answersData[q.id];

                let isSelected = false;
                if(typeof currentAns === 'object' && currentAns !== null && isOther && currentAns.type === "อื่น ๆ"){
                    isSelected = true;
                } else if(currentAns === option){
                    isSelected = true;
                }

                if(isSelected) item.classList.add("selected");

                item.innerHTML = `
                    <span>${option}</span>
                    <div class="radio-circle"><div class="radio-inner"></div></div>
                `;

                item.addEventListener("click", () => {
                    if(isOther){
                        answersData[q.id] = { type: "อื่น ๆ", detail: "" };
                    } else {
                        answersData[q.id] = option;
                    }
                    clickSound();
                    renderSurveyPage();
                });

                list.appendChild(item);

                if(isOther && typeof currentAns === 'object' && currentAns !== null && currentAns.type === "อื่น ๆ"){
                    const input = document.createElement("input");
                    input.type = "text";
                    input.className = "other-input";
                    input.placeholder = "โปรดระบุรายละเอียด...";
                    input.value = currentAns.detail || "";
                    input.addEventListener("input", (e) => {
                        answersData[q.id].detail = e.target.value;
                    });
                    list.appendChild(input);
                }
            });

            qBox.appendChild(list);
        }

        if(q.type === "multi"){
            const list = document.createElement("div");
            list.className = "choice-list";
            const selectedList = Array.isArray(answersData[q.id]) ? answersData[q.id] : [];

            q.options.forEach(option => {
                const item = document.createElement("div");
                item.className = "choice-item";

                const isOther = option.includes("อื่น ๆ");
                const existingOther = selectedList.find(it => typeof it === 'object' && it.type === "อื่น ๆ");
                const isSelected = isOther ? !!existingOther : selectedList.includes(option);

                if(isSelected) item.classList.add("selected");

                item.innerHTML = `
                    <span>${option}</span>
                    <div class="radio-circle"><div class="radio-inner"></div></div>
                `;

                item.addEventListener("click", () => {
                    let currentList = Array.isArray(answersData[q.id]) ? [...answersData[q.id]] : [];
                    if(isOther){
                        if(existingOther){
                            currentList = currentList.filter(it => !(typeof it === 'object' && it.type === "อื่น ๆ"));
                        } else {
                            currentList.push({ type: "อื่น ๆ", detail: "" });
                        }
                    } else {
                        if(currentList.includes(option)){
                            currentList = currentList.filter(it => it !== option);
                        } else {
                            currentList.push(option);
                        }
                    }
                    answersData[q.id] = currentList;
                    clickSound();
                    renderSurveyPage();
                });

                list.appendChild(item);

                if(isOther && existingOther){
                    const input = document.createElement("input");
                    input.type = "text";
                    input.className = "other-input";
                    input.placeholder = "โปรดระบุรายละเอียด...";
                    input.value = existingOther.detail || "";
                    input.addEventListener("input", (e) => {
                        existingOther.detail = e.target.value;
                    });
                    list.appendChild(input);
                }
            });

            qBox.appendChild(list);
        }

        if(q.type === "text"){
            const textarea = document.createElement("textarea");
            textarea.className = "text-answer";
            textarea.placeholder = q.optional ? "สามารถระบุข้อเสนอแนะเพิ่มเติมได้..." : "พิมพ์ความคิดเห็นของคุณ...";
            textarea.value = answersData[q.id] || "";
            textarea.addEventListener("input", () => {
                answersData[q.id] = textarea.value;
            });
            qBox.appendChild(textarea);
        }

        contentBox.appendChild(qBox);
    });

    updateNavigation();
}

function isQuestionAnswered(q){
    const val = answersData[q.id];

    if(q.optional) return true;

    if(q.type === "choice"){
        if(!val) return false;
        if(typeof val === 'object' && val.type === "อื่น ๆ") return val.detail.trim() !== "";
        return true;
    }

    if(q.type === "scale"){
        return val && val.score !== undefined;
    }

    if(q.type === "multi"){
        if(!Array.isArray(val) || val.length === 0) return false;
        const otherObj = val.find(it => typeof it === 'object' && it.type === "อื่น ๆ");
        if(otherObj && otherObj.detail.trim() === "") return false;
        return true;
    }

    if(q.type === "text"){
        return val !== undefined && val !== null && String(val).trim() !== "";
    }

    return false;
}

function updateNavigation(){
    backButton.disabled = currentPage === 0;
    nextButton.textContent = (currentPage === totalPages - 1) ? "ส่งคำตอบ ✦" : "ถัดไป →";
}

nextButton.addEventListener("click", () => {
    clickSound();
    
    const currentQuestions = surveyPages[currentPage].questions;
    const unansweredQuestions = currentQuestions.filter(q => !isQuestionAnswered(q));

    if(unansweredQuestions.length > 0){
        document.getElementById("unansweredCountText").textContent = "เหลืออีก " + unansweredQuestions.length + " ข้อในหน้านี้";
        document.getElementById("unansweredPopup").classList.add("active");
        
        unansweredQuestions.forEach(q => {
            const el = document.getElementById("box-" + q.id);
            if(el) el.classList.add("unanswered-highlight");
        });
        return;
    }

    if(!popupShown && currentPage === 1){
        popupShown = true;
        document.getElementById("darkTourismPopup").classList.add("active");
        return;
    }

    if(currentPage < totalPages - 1){
        currentPage++;
        renderSurveyPage();
        document.getElementById("questionCard").scrollTop = 0;
    } else {
        finishSurvey();
    }
});

goToUnansweredButton.addEventListener("click", () => {
    clickSound();
    document.getElementById("unansweredPopup").classList.remove("active");

    const currentQuestions = surveyPages[currentPage].questions;
    const firstUnanswered = currentQuestions.find(q => !isQuestionAnswered(q));

    if(firstUnanswered){
        const el = document.getElementById("box-" + firstUnanswered.id);
        if(el){
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
});

backButton.addEventListener("click", () => {
    if(currentPage <= 0) return;
    clickSound();
    currentPage--;
    renderSurveyPage();
    document.getElementById("questionCard").scrollTop = 0;
});

continuePopupButton.addEventListener("click", () => {
    clickSound();
    document.getElementById("darkTourismPopup").classList.remove("active");
    currentPage++;
    renderSurveyPage();
    document.getElementById("questionCard").scrollTop = 0;
});

const characters = [
    { name: "THE HISTORIAN", icon: "📜", description: "คุณคือผู้ค้นหาอดีต คุณเดินทางเพื่อทำความเข้าใจประวัติศาสตร์ เหตุการณ์ และเรื่องราวที่เกิดขึ้นในสถานที่นั้นอย่างลึกซึ้ง." },
    { name: "THE OBSERVER", icon: "👁️", description: "คุณคือผู้เฝ้ามอง คุณสนใจรายละเอียด บรรยากาศ สื่อออนไลน์ และเรื่องราวเบื้องหลังที่ซ่อนอยู่ของสถานที่." },
    { name: "THE WANDERER", icon: "🧭", description: "คุณคือนักเดินทางผู้แสวงหาประสบการณ์ใหม่ คุณมีแรงจูงใจสูงที่จะเปิดโลกและก้าวไปยังสถานที่แห่งความทรงจำ." },
    { name: "THE STORYTELLER", icon: "📷", description: "คุณคือผู้ถ่ายทอดเรื่องราว คุณนำความสนใจด้านสื่อและประสบการณ์ประวัติศาสตร์มาเรียงร้อยเพื่อส่งต่อ." },
    { name: "THE MEMORIAL", icon: "🕯️", description: "คุณคือผู้รำลึก คุณให้คุณค่ากับความทรงจำ ความสูญเสีย ความเห็นอกเห็นใจ และความหมายของชีวิตที่เชื่อมโยงกับสถานที่." }
];

function calculateResult(){
    const score = [0, 0, 0, 0, 0];

    Object.values(answersData).forEach((ans) => {
        if(!ans) return;

        if(typeof ans === 'string' || Array.isArray(ans) || (typeof ans === 'object' && ans.type === "อื่น ๆ")){
            const text = Array.isArray(ans) 
                ? ans.map(a => typeof a === 'object' ? a.detail : a).join(" ")
                : (typeof ans === 'object' ? ans.detail : String(ans));

            if(text.includes("ประวัติศาสตร์") || text.includes("สงคราม") || text.includes("ความรู้")) score[0] += 3;
            if(text.includes("เรื่องราว") || text.includes("บรรยากาศ") || text.includes("ลึกลับ")) score[1] += 3;
            if(text.includes("ประสบการณ์") || text.includes("การท่องเที่ยว") || text.includes("เดินทาง")) score[2] += 3;
            if(text.includes("Facebook") || text.includes("TikTok") || text.includes("YouTube") || text.includes("Instagram") || text.includes("ข่าว")) score[3] += 3;
            if(text.includes("ความสูญเสีย") || text.includes("เห็นอกเห็นใจ") || text.includes("เคารพ") || text.includes("ตระหนัก")) score[4] += 3;
        }

        if(typeof ans === 'object' && ans.score !== undefined){
            score[ans.category] += ans.score;
        }
    });

    let bestIdx = 0;
    for(let i = 1; i < score.length; i++){
        if(score[i] > score[bestIdx]) bestIdx = i;
    }

    return characters[bestIdx];
}

function finishSurvey(){
    clickSound();
    showPage(matching);
    setTimeout(() => {
        const resultChar = calculateResult();
        document.getElementById("resultIcon").textContent = resultChar.icon;
        document.getElementById("resultName").textContent = resultChar.name;
        document.getElementById("resultDescription").textContent = resultChar.description;
        showPage(result);
    }, 3000);
}

continueResultButton.addEventListener("click", () => { clickSound(); showPage(thankyou); });
restartButton.addEventListener("click", () => { clickSound(); answersData = {}; currentPage = 0; popupShown = false; showPage(cover); });

soundButton.addEventListener("click", () => {
    soundOn = !soundOn;
    soundButton.textContent = soundOn ? "🔊" : "🔇";
    if(ambientGain){
        ambientGain.gain.setValueAtTime(soundOn ? 0.04 : 0, audioContext.currentTime);
    }
});

renderSurveyPage();