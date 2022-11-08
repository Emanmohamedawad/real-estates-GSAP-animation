gsap.from('.hero_sec_text h1', 1, {
   delay: 1,
   y: 250,
   skewY: 20,
   stagger: .8
})
gsap.from('.hero_sec_text p', 1, {
   delay: 1.5,
   y: -30,
   opacity: 0
})
gsap.from('.hero_sec_text > a', 1, {
   ease: Expo.easeOut,
   delay: 2.5,
   x: innerWidth * -1,
   opacity: 0
})

const t1 = gsap.timeline({ repeat: -1 });
t1.from(".hero_sec_img_inner", {
   scale: 0,
   duration: 2,
   delay: 1,
   ease: Elastic.easeOut.config(2, 1),
})


   .from(".block1 , .block3", {
      x: 200,
      duration: 1,
      delay: 1,
   })
   .from(
      ".block2 , .block4",
      {
         x: -200,
         duration: 1,
      },
      "-=1"
   )
   .to(".block1 , .block3", {
      x: 0,
      y: 100,
      duration: 1,
      delay: 1,
   })
   .to(
      ".block2 , .block4",
      {
         x: 0,
         y: -100,
         duration: 1,
      },
      "-=1"
   )
   .to(".block1 , .block3", {
      x: 0,
      y: 100,
      scaleX: -1,
      duration: 1,
   })
   .to(
      ".block2 , .block4",
      {
         x: 0,
         y: -100,
         scaleX: -1,
         duration: 1,
      },
      "-=1"
   )
   .to(".block3", {
      x: 0,
      y: 100,
      scaleX: 1,
      duration: 1,
      delay: 1,
   })
   .to(
      ".block2",
      {
         x: 0,
         y: -100,
         scaleX: 1,
         duration: 1,
      },
      "-=1"
   )
   .to(".block1 , .block3", {
      x: 0,
      y: 0,
      duration: 1,
      delay: 1,
   })
   .to(
      ".block2 , .block4",
      {
         x: 0,
         y: 0,
         duration: 1,
      },
      "-=1"
   )

   .to(".block3", {
      x: 0,
      y: 0,
      scaleX: -1,
      duration: 1,
      delay: 1,
   })
   .to(
      ".block2",
      {
         x: 0,
         y: 0,
         scaleX: -1,
         duration: 1,
      },
      "-=1"
   )
   .to(".hero_sec_img_inner", {
      scale: 0,
      duration: 2,
      delay: 1,
      ease: Back.easeIn.config(4),
   });
