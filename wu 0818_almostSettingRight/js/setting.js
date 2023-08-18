// 获取要生成的文本
    // 获取要插入的父容器元素
    const headingContainer = document.getElementById('creativeHeading');

    // 要生成的文本数组
    const texts = ['Explore and Create ', 'Minimal Design.','UI/UX & Artisanal'];

    // 遍历文本数组
    texts.forEach((text) => {
      // 创建一个新的父容器
      const parentDiv = document.createElement('div');
      parentDiv.classList.add('heading', 'title_1');
      headingContainer.appendChild(parentDiv);

      // 遍历文本的每个字符并创建相应的<span>元素
      for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.classList.add('letter');
        span.textContent = text[i];
        parentDiv.appendChild(span);
      }
    });



//index大字母 mouseover random color
        // Colors
        const colors = ["#4FA1BB", "#9FE1D9", "#E6EFF0"];

        // The time it takes for the colors to disappear (in milliseconds)
        const timeout = 3000;

        // The letter class (does not need dot)
        const letter = ".letter";
        const allItem = ".all_item";

        // $(letter).mouseover(function() {
        //     $(this).css("color", colors[Math.floor(Math.random() * colors.length)]);
        // });

        // $(letter).mouseout(function() {
        //     const element = $(this);
        //     setTimeout(function() {
        //         element.css("color", "#333333");
        //     }, timeout);
        // });

        function changeColor() {
          $(this).css("color", colors[Math.floor(Math.random() * colors.length)]);
        }
        
        function resetColor() {
          const element = $(this);
          setTimeout(function() {
            element.css("color", "#333333");
          }, timeout);
        }
        
        $(document).ready(function() {
          $(letter).mouseover(changeColor).mouseout(resetColor);
          $(allItem).each(changeColor);
        });
         //讓letter, allItem都有此變色效果


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
  calculateEyePosition($("#below_bow"), event);
  calculateEyePosition($(".tools_r"), event);
  calculateEyePosition($("#about"), event);
  console.log("enddd")
});

//tools & skill scroll

gsap.registerPlugin(ScrollTrigger);
let toolR = gsap.utils.toArray("#tools .tools_r");

gsap.timeline({
  scrollTrigger: {
    trigger: "#tools",
    start: "59% center",
    end: () => "+=" + document.querySelector(".tools_r").offsetHeight * 1.4, // 计算向上滑动的距离
    scrub: true,
    pin: true,
    anticipatePin: 1 ,// 预先固定，避免闪烁

  }
})
.to(toolR, { y: () => -1 * (toolR[1].offsetHeight -1 ), ease: "none" }); // 20 是一些额外的空间，可以根据实际情况进行调整

// 不再使用ScrollTrigger，改用CSS实现固定效果
    //(也可以，但怪怪的，變成secondToolR跑上來覆蓋)
    // gsap.registerPlugin(ScrollTrigger);
    // let toolR = gsap.utils.toArray("#tools .tools_r");

    // const secondToolR = toolR[1];
    // const secondToolRHeight = secondToolR.offsetHeight;

    // // 添加一个占位元素，用于延长滚动距离
    // const placeholder = document.createElement("div");
    // placeholder.style.height = secondToolRHeight + "px";
    // document.querySelector("#tools").appendChild(placeholder);

    // gsap.timeline({
    //   scrollTrigger: {
    //     trigger: "#tools",
    //     start: "32% center",
    //     end: () => `+=${toolR}`, // 滚动到第二个 .tools_r 完整显示的位置
    //     scrub: true,
    //     anticipatePin: 1,
    //     onEnter: () => {
    //       gsap.to(secondToolR, { y: 0 }); // 停留 3 秒
    //     },
    //     onLeaveBack: () => {
    //       gsap.to(secondToolR, { y: -secondToolRHeight, duration: 1 }); // 解除固定状态时移动回去
    //     }
    //   }
    // });











// // leis 套件
// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)



// document.addEventListener("DOMContentLoaded", function() {
//   const toolsContainer = document.getElementById("tools");
//   const blogHeaderContainer = document.querySelector(".blog-header-container");
//   const toolsElements = document.querySelectorAll(".tools_r");
//   const container = document.querySelector(".container");

//   // 設置第一個GSAP滾動觸發點來固定#tools
//   gsap.registerPlugin(ScrollTrigger);
//   ScrollTrigger.create({
//     trigger: container,
//     start: "top 70px", // 當.container容器頂部觸發滾動時
//     endTrigger: blogHeaderContainer, // 結束點為.blog-header-container
//     end: "bottom top", // 當.blog-header-container頂部觸發滾動時
//     pin: true, // 啟用固定效果
//     pinSpacing: false, // 停留在視口頂部，不添加空間
//   });

//   // 設置第二個GSAP滾動觸發點來處理.blog-header-container裡的.tools_r元素滾動
//   gsap.to(toolsElements, {
//     y: () => {
//       const toolsHeight = toolsContainer.offsetHeight;
//       const distance = container.getBoundingClientRect().top - blogHeaderContainer.getBoundingClientRect().top + 70;
//       return -(distance * (index + 1) / toolsHeight);
//     },
//     ease: "none",
//     scrollTrigger: {
//       trigger: blogHeaderContainer,
//       start: "top 70px",
//       end: "bottom top",
//       scrub: true, // 讓滾動更順滑
//     },
//   });
// });



// 甜甜那般的
$(document).ready(function () {
  //---漢堡按鈕---
    // $('.hamburger').click(function () {
    //     $(this).toggleClass('is-active');
    //     $('.navigation').toggleClass('show');
    // }); 

   //---按鈕按下就跳轉指定的區塊---
    // $(".menu a").click(function(){
    //   var btn = $(this).attr("href");//return取得屬性與值
    //   var pos = $(btn).offset();//抓取相對座標位置
    //   $("html,body").animate({scrollTop:pos.top},1500);//最後面的(1000是一秒)(1500為1.5秒)
    // });

    //滑動置頂
    $('.right_gotop').click(function(){
      $('html,body').animate({scrollTop:0},2500);
    })
    //置頂按鈕淡出淡入
    $(window).scroll(function() {

      if ($(window).scrollTop() > 300) {
          $('.topbar').animate([
            { transform: 'translateY(0)' },
            { transform: 'translateY(-16.6%)' }
          ], {
            duration: 2500, // 动画时长
            easing: 'linear' // 线性动画
          })
      } else {
          $('.topbar').removeClass('follow');
      }
  });

marqueeContainer.addEventListener('mouseleave', function() {
  // 鼠标离开时停止滚动
  marqueeAnimation.pause();
});
  


    // $(window).scroll(function(){
    //   if($(this).scrollTop()>200){
    //     $('#gotop').stop().fadeTo('fast',1);   //.fadeTo(1000,1) => 1000是一秒，沒有給速度的話要給空值 ""(預設為0.4秒)
    //   }else{
    //     $('#gotop').stop().fadeOut();
    //   }
    // })

    //---滑動載入---
    // $('.smoove').smoove({
    //   offset: '30%'
    // });
});