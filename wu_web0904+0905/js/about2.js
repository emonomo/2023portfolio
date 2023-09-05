const loader = document.querySelector('.loader--text');

const showDemo = () => {
  // 開始顯示加載畫面
  gsap.to(document.querySelector('.loader'), { autoAlpha: 1 });

  // 監聽 DOMContentLoaded 事件，當 DOM 構建完成後觸發回調函式
  document.addEventListener('DOMContentLoaded', () => {
    // 隱藏加載畫面
    gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

    // 將加載後的處理代碼放在這裡，例如顯示頁面內容等
    // ...



// 触发文字滚动效果2.0
gsap.registerPlugin(ScrollTrigger);

const races = document.querySelector('.wrapper');

function getScrollAnimation() {
  const racesWidth = races.scrollWidth;
  return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
  x: getScrollAnimation,
  duration: 3,
  ease: "none"
});

ScrollTrigger.create({
  trigger: "#text_box",
  start: "-70px top",
  end: () => `${getScrollAnimation() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  toggleActions: "play none none none",
  invalidateOnRefresh: true
});


    
    



    // 數字遞增效果，設置加載進度 0% 到 100% 的過渡
    gsap.to(loader, {
      innerHTML: '100%',
      duration: 3, // 設置持續時間為 3 秒
      ease: 'power1.inOut', // 設置過渡的緩動函式
      onUpdate: function () {
        loader.textContent = this.progress().toFixed(0) + '%';
      }
    });
  });
};

  // 呼叫 showDemo 函式來觸發動畫
  showDemo();

//眼睛轉轉

function calculateEyePosition(eyeContainer, event) {
  var eye = eyeContainer.find(".eye");
  var x = (eye.offset().left) + (eye.width() / 2);
  var y = (eye.offset().top) + (eye.height() / 2);
  var rad = Math.atan2(event.pageX - x, event.pageY - y);
  var rot = (rad * (180 / Math.PI) * -1) + 90;
  eye.css({
    '-webkit-transform': 'rotate(' + rot + 'deg)',
    '-moz-transform': 'rotate(' + rot + 'deg)',
    '-ms-transform': 'rotate(' + rot + 'deg)',
    'transform': 'rotate(' + rot + 'deg)'
  });
}

$(document).mousemove(function(event) {

  calculateEyePosition($("#about"), event);
  console.log("enddd")
});



// 一層一層疊疊樂
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger for .panel_with_a_index (fixed)
ScrollTrigger.create({
  trigger: ".panel_with_a_index",
  start: "top top",
  endTrigger: "#container",
  end: "bottom bottom",
  pin: true,
  markers: true,
  pinSpacing: false,
  onUpdate: (self) => {
    if (self.isDragging) {
      const containerRect = document.querySelector("#container").getBoundingClientRect();
      const aIndexRect = document.querySelector(".a_index").getBoundingClientRect();
      const difference = aIndexRect.top - containerRect.top;
      gsap.set(".a_index", { y: difference });
    }
  }
});

// ScrollTrigger for other .panel elements (scroll)
let panels = gsap.utils.toArray(".panel:not(.panel_with_a_index)");

panels.forEach((panel, i) => {
  const panelTimeline = gsap.timeline();
  panelTimeline.to(panel, {
    duration: 0.5,
    y: "100%",
    opacity: 0,
    ease: "power2.inOut"
  });

  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top 90px" : "bottom bottom",
    animation: panelTimeline
  });

  // 將每個面板的動畫添加到主時間線中
  masterTimeline.add(panelTimeline, i * 0.5);
});




// 在页面加载完成后滚动到顶部
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});


// Fix .a_index in place



