
//text_scroll
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

/*一層一層疊疊樂 panel scroll*/
    // ScrollTrigger.create({
    //   trigger: ".panel_with_a_index",
    //   start: "top top",
    //   endTrigger: "#container",
    //   end: "bottom 110%",
    //   pin: true,
    //   pinSpacing: false,
    //   onUpdate: (self) => {
    //     if (self.isDragging) {
    //       const containerRect = document.querySelector("#container").getBoundingClientRect();
    //       const aIndexRect = document.querySelector(".a_index").getBoundingClientRect();
    //       const difference = aIndexRect.top - containerRect.top;
    //       gsap.set(".a_index", { y: difference });
    //     }
    //   }
    // });

    // // ScrollTrigger for other .panel elements (scroll)
    // let panels = gsap.utils.toArray(".panel:not(.panel_with_a_index)");

    // panels.forEach((panel, i) => {
    //   ScrollTrigger.create({
    //     trigger: panel,
    //     start: () => panel.offsetHeight < window.innerHeight ? "top 90px" : "bottom bottom",
    //     markers:true,
    //     pin: true,
    //     pinSpacing: false,
    //     snap: {
    //       duration: 0.5
    //     }
    //   });
    // });

    // 创建一个ScrollTrigger监听.three元素的离开视口事件


// 一層一層疊疊樂 panel scroll---------rwd:430px------------
  function getScrollTriggerSettings(panel) {
      if (window.innerWidth <= 430) {
        return {
          start: "top top",
          end: "bottom bottom",
          pin: false,
          pinSpacing: false,
          snap:false
        };
      } else {
        return {
          start: () => panel.offsetHeight < window.innerHeight ? "top 90px" : "bottom bottom",
          pin: true,
          pinSpacing: false,
    
          snap: {
            duration: 0.5
          }
        };
      }
    }
    
    let panels = gsap.utils.toArray(".panel:not(.panel_with_a_index)");

    panels.forEach((panel, i) => {
      const settings = getScrollTriggerSettings(panel);
      ScrollTrigger.create({
        trigger: panel,
        ...settings,
      });
    });

    const container = document.getElementById("container");
    ScrollTrigger.create({
      trigger: ".panel_with_a_index",
      start: "top top",
      endTrigger: "#container",
      end: "bottom 110%",
      // markers:true,
      pin: true,
      pinSpacing: false,
      onUpdate: (self) => {
        if (self.isDragging) {
          const containerRect = container.getBoundingClientRect();
          const aIndexRect = document.querySelector(".a_index").getBoundingClientRect();
          const difference = aIndexRect.top - containerRect.top;
          gsap.set(".a_index", { y: difference });
        }
      }
    });

    
    // ScrollTrigger.create({
    //   trigger: ".one",
    //   start: "top top",
    //   end: "bottom bottom",
    //   onLeaveBack: () => {
    //     // ScrollTrigger.getById("panel_with_a_index").disable(); // 禁用.panel_with_a_index的ScrollTrigger
     
    //     ScrollTrigger.getAll(".panel_with_a_index").forEach(trigger => {
    //       trigger.disable();
    //     });
    //   }
    // });

    // ScrollTrigger.create({
    //   trigger: ".one",
    //   start: "top top",
    //   end: "bottom bottom",
    //   onEnterBack: () => {
    //     // ScrollTrigger.getById("panel_with_a_index").enable(); // 重新启用.panel_with_a_index的ScrollTrigger
    //     ScrollTrigger.getAll(".panel_with_a_index").forEach(trigger => {
    //       trigger.enable(); 
    //     });
    //   }
    // });
    
