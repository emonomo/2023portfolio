
//漢堡選單關起
    // 获取菜单项
    const menuItems = document.querySelectorAll('.topbar nav ul li a');

    // 获取汉堡按钮
    const burgerCheckbox = document.getElementById('burger');

    // 为每个菜单项添加点击事件监听器
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // 关闭菜单（取消勾选汉堡按钮）
            burgerCheckbox.checked = false;
        });
    });
 
  //  複製信箱
  function copyEmail() {
    var emailAddress = "joanna881110@gmail.com";
  
    navigator.clipboard.writeText(emailAddress)
      .then(function() {
        alert("Email address copied: " + emailAddress);
      })
      .catch(function(error) {
        console.error("Copy failed: ", error);
      });
  }

     // 設定共有連結
     document.addEventListener("DOMContentLoaded", function() {
      var linkGroups = [
        { className: "btn_project", href: "./index.html#index_marquee" },
        { className: "btn_about", href: "./about.html" },
        { className: "btn_resume", href: "./doc/WuChen Resume.pdf" },
        { className: "btn_linkdin", href: "https://www.linkedin.com/in/wuchenlink" },
        { className: "btn_behance", href: "https://www.behance.net/71abfd33" },
        // 可以继续添加其他类别的链接
      ];
    
      linkGroups.forEach(function(group) {
        var links = document.querySelectorAll("a." + group.className);
        links.forEach (function(link) {
          link.href = group.href;
    
          // 设置 target 属性
          if (group.className === "btn_resume" || group.className === "btn_linkdin" || group.className === "btn_behance") {
            link.target = "_blank"; // 在新标签页中打开链接
          }
        });
      });
    });     
    
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
        $('html,body').animate({scrollTop:0},3000);
      })
  });
    
