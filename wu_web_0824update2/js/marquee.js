// marquee.js
function setupMarqueeAnimation() {
    var marqueeContainers = document.querySelectorAll(".right_gotop");
    var marqueeAnimations = [];
  
    marqueeContainers.forEach(function(marqueeContainer) {
      var animation;
  
      marqueeContainer.addEventListener('mouseenter', function() {
        if (!animation) {
          // 鼠标进入时开始滚动，仅当动画不存在时才创建和播放
          animation = marqueeContainer.querySelector('ul').animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-16.6%)' }
          ], {
            duration: 2500, // 动画时长
            iterations: Infinity, // 无限循环
            easing: 'linear' // 线性动画
          });
        } else {
          // 动画已存在时，继续播放
          animation.play();
        }
      });
  
      marqueeContainer.addEventListener('mouseleave', function() {
        // 鼠标离开时停止滚动
        if (animation) {
          animation.pause();
        }
      });
  
      marqueeAnimations.push(animation);
    });
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    setupMarqueeAnimation();
  });

  // 甜甜那般的
$(document).ready(function () {
    //滑動置頂
    $('.right_gotop').click(function(){
      $('html,body').animate({scrollTop:0},2500);
    })
   
});