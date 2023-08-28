    // 觸發文字滾動效果2.0
    let races = document.querySelector('.wrapper') ;
    function getScrollAnimation(){
      let racesWidth = races.scrollWidth;
        return -(racesWidth - window.innerWidth) ;
    }
   
    const tween = gsap.to(races, {
       x: getScrollAnimation,
       duration:3,
       ease:"none"
    });
   ScrollTrigger.create({
     trigger:"#text_box",
     start:"-70px top",
     end:() => `${getScrollAnimation() * -1}`,
     pin: true,
     animation:tween,
     scrub:1,
     markers:true,
     invalidateOnRefresh :true
   })
   