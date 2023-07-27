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

let panels = gsap.utils.toArray(".panel");
let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
    pin: true, 
    pinSpacing: false 
  });
});

ScrollTrigger.create({
  snap: {
    snapTo: (progress, self) => {
      let panelStarts = tops.map(st => st.start),
          snapScroll = gsap.utils.snap(panelStarts, self.scroll());
      return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
    },
    duration: 0.5
  }
});

gsap.to(".a_index", {
  background: "rgba(0, 0, 0, 1)",
  scrollTrigger: {
    trigger: "main",
    start: "top top",
    endTrigger: "#container .one",
    end: "top top",
    scrub: true,
    zIndex: 9,
    onUpdate: (self) => {
      if (self.isScrubbing()) {
        const containerRect = document.getElementById("container").getBoundingClientRect();
        if (containerRect.top <= window.innerHeight && containerRect.bottom >= 0) {
          gsap.set(".a_index", { background: "rgba(0, 0, 0, 1)" });
        } else {
          gsap.set(".a_index", { background: "rgba(0, 0, 0, 0)" });
        }
        // Calculate the difference between the trigger's top and the container's top
        const triggerTop = self.trigger.getBoundingClientRect().top;
        const containerTop = document.getElementById("container").getBoundingClientRect().top;
        const difference = triggerTop - containerTop;
        gsap.set(".a_index", { y: difference }); // Set the y position of .a_index to the difference
      }
    }
  }
});

// Fix .a_index in place
gsap.to(".a_index", {
  y: 0, // Set the y position to 0 (top position)
  scrollTrigger: {
    trigger: "main", // Set the trigger to be the <main> element
    start: "top top", // Start the animation when the top of <main> is at the top of the viewport
    endTrigger: "#container .one", // End the animation when the first panel in #container is in the viewport
    end: "top top", // End the animation when the first panel's top reaches the top of the viewport
    scrub: true, // Enables smooth scrubbing effect while scrolling
    onUpdate: (self) => {
      // When the scrollTrigger updates (during scrubbing)
      if (self.isScrubbing()) {
        const containerRect = document.getElementById("container").getBoundingClientRect();
        if (containerRect.top <= window.innerHeight && containerRect.bottom >= 0) {
          // If #container is in the viewport, set the y position of .a_index to 0
          gsap.set(".a_index", { y: 0 });
        } else {
          // Otherwise, set the y position of .a_index to the difference between its top and the top of <main>
          const aIndexRect = document.querySelector(".a_index").getBoundingClientRect();
          const mainTop = document.querySelector("main").getBoundingClientRect().top;
          const difference = aIndexRect.top - mainTop;
          gsap.set(".a_index", { y: difference });
        }
      }
    }
  }
});


