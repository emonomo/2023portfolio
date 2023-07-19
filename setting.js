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

//tools & skill scroll
        // 获取第一个和第二个 tools_r 元素
        var toolsElements = document.querySelectorAll(".tools_r");
        var toolsContainer = document.querySelector(".blog-header-container");

        // 监听鼠标滚轮事件
        toolsContainer.addEventListener("wheel", function(event) {
          // 检查滚动的方向，向上滚动为负值，向下滚动为正值
          var delta = Math.sign(event.deltaY);

          // 获取当前可见的 tools_r 元素的索引
          var visibleIndex = getVisibleElementIndex();

          // 判断滚轮方向和可见元素索引，执行相应的滚动行为
          if (delta > 0 && visibleIndex < toolsElements.length - 1) {
            scrollToElement(visibleIndex + 1);
            event.preventDefault(); // 阻止默认滚动行为
          } else if (delta < 0 && visibleIndex > 0) {
            scrollToElement(visibleIndex - 1);
            event.preventDefault(); // 阻止默认滚动行为
          }
        });

        // 获取当前可见的 tools_r 元素的索引
        function getVisibleElementIndex() {
          for (var i = 0; i < toolsElements.length; i++) {
            if (isElementInViewport(toolsElements[i])) {
              return i;
            }
          }
          return -1;
        }

        // 将指定索引的 tools_r 元素滚动到可见区域
        function scrollToElement(index) {
          toolsElements[index].scrollIntoView({ behavior: "smooth" });
        }

        // 判断元素是否在可见区域内
        function isElementInViewport(element) {
          var rect = element.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
          );
        }
//mouseover 跑馬燈

      var marqueeContainer = document.querySelector(".right_gotop");
      var marqueeAnimation;

      marqueeContainer.addEventListener('mouseenter', function() {
        // 鼠标进入时开始滚动
        marqueeAnimation = marqueeContainer.querySelector('ul').animate([
          { transform: 'translateX(0)' },
          { transform: 'translateX(-16.6%)' }
        ], {
          duration: 2500, // 动画时长
          iterations: Infinity, // 无限循环
          easing: 'linear' // 线性动画
        });
      });

      marqueeContainer.addEventListener('mouseleave', function() {
        // 鼠标离开时停止滚动
        marqueeAnimation.pause();
      });

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