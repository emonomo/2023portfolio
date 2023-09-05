// const loader = document.querySelector('.loader--text');

// const showDemo = () => {
//   // 開始顯示加載畫面
//   gsap.to(document.querySelector('.loader'), { autoAlpha: 1 });

//   // 監聽 DOMContentLoaded 事件，當 DOM 構建完成後觸發回調函式
//   document.addEventListener('DOMContentLoaded', () => {
//     // 隱藏加載畫面
//     gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

//     // 將加載後的處理代碼放在這裡，例如顯示頁面內容等
//     // ...




    
     // 觸發文字滾動效果2.0
    //  gsap.registerPlugin(ScrollTrigger);

    //  let races = document.querySelector('.wrapper') ;
    //  function getScrollAnimation(){
    //    let racesWidth = races.scrollWidth;
    //      return -(racesWidth - window.innerWidth) ;
    //  }
    
    //  const tween = gsap.to(races, {
    //     x: getScrollAnimation,
    //     duration:5,
    //     ease:"none",
        
    //  });


    // ScrollTrigger.create({
    //   trigger:"#text_box",
    //   start:"-70px top",
    //   end:() => `${getScrollAnimation() * -1 +"px"}`,
    //   pin: true,
    //   animation:tween,
    //   pinSpacing: false, // 将pinSpacing属性设置为false
    //   scrub:1,
    //   // markers:true,
    //   invalidateOnRefresh :true
    // })
    
    gsap.registerPlugin(ScrollTrigger);

const wrapper = document.querySelector('.wrapper');
const textWidth = wrapper.scrollWidth - window.innerWidth; // 文本宽度减去屏幕宽度

gsap.to(wrapper, {
  x: -textWidth,
  ease: 'none',
  scrollTrigger: {
    trigger: '#text_box',
    start: 'top top',
    end: `+=${textWidth}`,
    scrub: true,
  },
});
    



    // 數字遞增效果，設置加載進度 0% 到 100% 的過渡
//     gsap.to(loader, {
//       innerHTML: '100%',
//       duration: 3, // 設置持續時間為 3 秒
//       ease: 'power1.inOut', // 設置過渡的緩動函式
//       onUpdate: function () {
//         loader.textContent = this.progress().toFixed(0) + '%';
//       }
//     });
//   });
// };

  // 呼叫 showDemo 函式來觸發動畫
  // showDemo();

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
});

/*一層一層疊疊樂 */


// ScrollTrigger for .panel_with_a_index (fixed)
ScrollTrigger.create({
  trigger: ".panel_with_a_index",
  start: "top top",
  endTrigger: "#container",
  end: "bottom 110%",
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
// window.addEventListener('load', () => {
//   window.scrollTo(0, 0);
// });



          // const masterTimeline = gsap.timeline();

            // const fitting = gsap.timeline({ paused: true });
            // fitting.to("#articleTwo", { yPercent: -20, duration: 20 }, 'step2');
            // masterTimeline.add(fitting);
            
            // // ... 其他代码 ...
            
            // // 动画控制 .three 的 ScrollTrigger
            // ScrollTrigger.create({
            //   trigger: ".three",
            //   start: "top 9%",
            //   end: "+=1500",
            //   pin: true,
            //   markers: true,
            //   pinSpacing: false,
            //   onEnter: () => {
            //     fitting.play();
            //   },
            //   onLeaveBack: () => {
            //     fitting.reverse();
            //   }
            // });
            
            // // 动画控制 .two 的 ScrollTrigger
            // const twoTrigger = ScrollTrigger.create({
            //   animation: masterTimeline,
            //   trigger: ".two",
            //   start: "top 9%",
            //   end: "+=1500",
            //   scrub: true,
            //   pin: true,
            //   anticipatePin: 1,
            //   pinSpacing: true,
            //   onUpdate: (self) => {
            //     if (self.progress >= 0.8) {
            //       ScrollTrigger.getById(".three").disable();
            //     } else {
            //       ScrollTrigger.getById(".three").enable();
            //     }
            //   }
            // });
            
            
            
            
// Fix .a_index in place



