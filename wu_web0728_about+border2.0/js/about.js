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

    // 觸發文字滾動效果
    // gsap.utils.toArray('section').forEach((section, index) => {
    //   const w = section.querySelector('.wrapper');
    //   const wrapperWidth = w.scrollWidth; // 取得 .wrapper 的寬度
    //   const sectionWidth = section.offsetWidth; // 取得 section 的寬度
    //   const [x, xEnd] = index % 2 ? [`+=${wrapperWidth + sectionWidth}px`, 0] : [0, `-=${wrapperWidth + sectionWidth}px`];

    //   gsap.fromTo(w, { x }, {
    //     x: xEnd,
    //     scrollTrigger: {
    //       trigger: section,
    //       scrub: 0.5,
    //       pin: true,
    //       end: () => `+=${wrapperWidth}px` // 根據 .wrapper 寬度和 section 寬度計算滾動距離
    //     }
    //   });
    // });

    // 觸發文字滾動效果2.0

    



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


/*一層一層疊疊樂 */
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger for .panel_with_a_index (fixed)
ScrollTrigger.create({
  trigger: ".panel_with_a_index",
  start: "top top",
  endTrigger: "#container",
  end: "bottom bottom",
  pin: true,
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
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top 90px" : "bottom bottom",
    pin: true,
    pinSpacing: false,
    snap: {
      // snapTo: 1, // Snap to the start of each section
      duration: 0.5
    }
  });
});

// 在页面加载完成后滚动到顶部
window.addEventListener('load', () => {
  window.scrollTo(0, 0);
});


// Fix .a_index in place



