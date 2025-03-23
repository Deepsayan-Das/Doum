'use client'
import '@/app/globals.css'
// Add these imports at the top
import { useState, useRef, useEffect } from 'react';
import { IoCloseCircle } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaPlay } from "react-icons/fa";


import { gsap } from 'gsap'
import { FaArrowCircleRight } from "react-icons/fa";
import Link from 'next/link'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

import { FaTools } from "react-icons/fa";
import { FaUserTag } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { RiCalendarScheduleFill } from "react-icons/ri";
import { MdLocalOffer } from "react-icons/md";
import { IoChatbubblesSharp } from "react-icons/io5";
import { MdPayment } from "react-icons/md";
import { FaClipboardList } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { Form } from 'react-hook-form';
import { BsWhatsapp } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineLinkedin } from "react-icons/ai";
import { CiInstagram } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { supabase } from '../../lib/supabaseClient';
import Iphone from './Iphone';

import MobileAni from './MobileAni';
import Navbar from './Navbar';
import { RiArrowDownDoubleFill } from "react-icons/ri";
import { League_Spartan } from "next/font/google";
import Loading from '../loading';
import IphoneRes from './IphoneRes';

// function Model() {

//    useEffect(()=>{
//     const tlM= gsap.timeline({
//       scrollTrigger:{
//         trigger: modelRef.current,
//         scroller:'body',
//         scrub:1,
//        
//         start: 'top 80%',
//         end: 'bottom 200%'
//       }
//     })

//     tlM.fromTo(modelRef.current.rotation, {  x:-Math.PI/6,y:Math.PI}, {x:Math.PI,y:0,z:Math.PI, duration: 10 , ease:'linear'},'abc')
//       tlM.fromTo(modelRef.current.scale, { x: 3.5, y: 3.5, z: 3.5 }, { x: 1, y: 1, z: 1, duration: 10 }, 0,'abc') // Animate scale
//       tlM.fromTo(modelRef.current.position, { x: 0.2, y: -7, z: 2 }, { x: 0, y: 0, z: 0, duration: 10 }, 0) // Animate position
//    })
//   const result = useLoader(GLTFLoader,'/IP 4.glb')
//   const containerRef = useRef() // Add container ref
//   const modelRef = useRef()
//   return (
//     <div ref={containerRef} className="h-screen w-full">
//       <mesh ref={modelRef}>
//         <primitive object={result.scene}/>
//       </mesh>
//     </div>
//   )


// }
// Add these in your Hero component


// Add this section before the footer

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you need
});


function Hero() {
  const heroRef = useRef()
  const paraRef = useRef()
  const getRef = useRef([])
  const starRef = useRef([])
  const h4Ref = useRef()

  const s1HeadingRef = useRef(null)
  const s1LinkRef = useRef(null)
  const s1ImageRef = useRef(null)
  const s1TextRef = useRef(null)
  const s1ParagraphRef = useRef(null)

  const s2HeadingRef = useRef(null)
  const s2LinkRef = useRef(null)
  const s2ImageRef = useRef(null)
  const s2TextRef = useRef(null)
  const s2ParagraphRef = useRef(null)

  const s3HeadingRef = useRef(null)
  const s3LinkRef = useRef(null)
  const s3ImageRef = useRef(null)
  const s3TextRef = useRef(null)
  const s3ParagraphRef = useRef(null)

  const s4HeadingRef = useRef(null)
  const s4LinkRef = useRef(null)
  const s4ImageRef = useRef(null)
  const s4TextRef = useRef(null)
  const s4ParagraphRef = useRef(null)

  const s5HeadingRef = useRef(null)
  const s5LinkRef = useRef(null)
  const s5ImageRef = useRef(null)
  const s5TextRef = useRef(null)
  const s5ParagraphRef = useRef(null)



//   const [activeVideoIndex, setActiveVideoIndex] = useState(null);
// const scrollContainerRef = useRef(null);
// const videoRefs = useRef([]);

// const testimonials = [
//   { id: 1, video: '/testimonials/video1.mp4' },
//   { id: 2, video: '/testimonials/video1.mp4' },
//   { id: 3, video: '/testimonials/video1.mp4' },
//   { id: 4, video: '/testimonials/video1.mp4' },
//   { id: 5, video: '/testimonials/video1.mp4' },
//   { id: 6, video: '/testimonials/video1.mp4' },
//   { id: 7, video: '/testimonials/video1.mp4' },
//   { id: 8, video: '/testimonials/video1.mp4' },
//   { id: 9, video: '/testimonials/video1.mp4' },
//   { id: 10, video: '/testimonials/video1.mp4' }
// ];

// // Add these handler functions
// const handleVideoClick = (index) => {
//   setActiveVideoIndex(index);
//   // Pause all other videos
//   videoRefs.current.forEach((ref, i) => {
//     if (i !== index && ref) {
//       ref.pause();
//     }
//   });
// };

// const handleClose = () => {
//   setActiveVideoIndex(null);
// };

// const handlePrevVideo = () => {
//   if (activeVideoIndex > 0) {
//     setActiveVideoIndex(activeVideoIndex - 1);
//   }
// };

// const handleNextVideo = () => {
//   if (activeVideoIndex < testimonials.length - 1) {
//     setActiveVideoIndex(activeVideoIndex + 1);
//   }
// };

  
  

  const tl = gsap.timeline()
  useGSAP(() => {
    tl.from(heroRef.current, {
      opacity: 0,
      y: 1000,
      duration: 1,
      delay: 0.2,
    })
    tl.from(starRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: "elastic.out(1,0.3)",
      stagger: 0.2
    }, 'hello')
    tl.from(paraRef.current, {
      opacity: 0,
      y: 600,
      duration: 0.4,
    }, 'hello')
    tl.from(getRef.current[0], {
      opacity: 0,
      y: 400,
      duration: 0.4,
      delay: 0.1
    }, 'hi')
    tl.from(getRef.current[1], {
      opacity: 0,
      y: 400,
      duration: 0.4,
      delay: 0.1
    }, 'hi')
    tl.from(h4Ref.current, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.05,
    }, 'wave')
  }, )
  const [style, setStyle] = useState({});

  useEffect(() => {
    const updateStyle = () => {
        const width = window.innerWidth;
        if (width >= 768) { // Desktop breakpoint
            setStyle({
                
                backgroundImage: "url('/deskotp-platform.webp')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                mixBlendMode: 'multiply'
                
                
                
            });
        } else { // Mobile breakpoint
            setStyle({
                
                backgroundImage: "url('/mobile-platform.webp')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'contain',
                mixBlendMode: 'multiply'
                
            });
        }
    };

    updateStyle(); // Initial call to set styles
    window.addEventListener('resize', updateStyle);

    return () => window.removeEventListener('resize', updateStyle);
  }, []);
  const [style2,setStyle2] = useState({})
  useEffect(() => {
    const updateStyle2 = () => {
        const width = window.innerWidth;
        if (width >= 768) { // Desktop breakpoint
            setStyle2({
                
                backgroundImage: "url('/footer-bg.webp')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover',
                
                
                
                
            });
        } else { // Mobile breakpoint
            setStyle2({
                
                backgroundImage: "url('/footer-bg.webp')",
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                
                
            });
        }
    };

    updateStyle2(); // Initial call to set styles
    window.addEventListener('resize', updateStyle2);
    

    return () => window.removeEventListener('resize', updateStyle2);
  }, []);
  
  const scrollRef = useRef([])
  const conRef = useRef()
  
  
  // useEffect(() => {
  //   const scrollingContent = scrollRef.current
  //   const contentWidth = scrollingContent.scrollWidth
  //   const wrapperWidth = scrollingContent.parentElement.clientWidth

  // //   gsap.to(scrollingContent, {
  // //     x: -contentWidth,
  // //     duration: 20,
  // //     ease: 'steps(9)', // Steps easing with 9 steps
  // //     repeat: -1,
  // //     modifiers: {
  // //       x: gsap.utils.unitize(x => parseFloat(x) % contentWidth)
  // //     }
  // //   })
  // // }, [])
  const services = [
    { id: 1, name: 'AC repairing', image: '/services/AC.webp' },
    { id: 2, name: 'Bathroom Fixture', image: '/services/bathroom fixture.webp' },
    { id: 3, name: 'Carpet Cleaning', image: '/services/carpet cleaning.webp' },
    { id: 4, name: 'Ceiling fan Service', image: '/services/ceiling fan.webp' },
    { id: 5, name: 'Chimney service', image: '/services/chimney.webp' },
    { id: 6, name: 'Cook service', image: '/services/cook.webp' },
    { id: 7, name: 'Electricial service', image: '/services/electrician.webp' },
    { id: 8, name: 'Fridge Servicing', image: '/services/Fridge.webp' },
    { id: 9, name: 'Handyman', image: '/services/Handyman.webp' },
    { id: 10, name: 'home cleaning service', image: '/services/home cleaning service.webp' },
    { id: 11, name: 'home theatre service', image: '/services/home theatre repair.webp' },
    { id: 12, name: 'induction cooktop repair', image: '/services/induction cooktop repair.webp' },
    { id: 13, name: 'inverter & UPS repair', image: '/services/inverter and UPS repair.webp' },
    { id: 14, name: 'laptop & computer repair', image: '/services/laptop and computer repair service.webp' },
    { id: 15, name: 'Microwave servicing', image: '/services/Microwave.webp' },
    { id: 16, name: 'Mover services', image: '/services/Movers and Good Carriers.webp' },
    { id: 17, name: 'Pest Control', image: '/services/pest control.webp' },
    { id: 18, name: 'Plumber Services', image: '/services/Plumbing.webp' },
    { id: 19, name: 'Camera installation', image: '/services/security camera installation service.webp' },
    { id: 20, name: 'Tank Cleaning', image: '/services/Septic Tank Cleaning.webp' },
    { id: 21, name: 'Smart Home service', image: '/services/smart home service.webp' },
    { id: 22, name: 'Sofa cleaning', image: '/services/sofa and upholstery cleaning service.webp' },
    { id: 23, name: 'Solar Panel Installation', image: '/services/Solar Panel Installation and Repair.webp' },
    { id: 24, name: 'Spa & Massage', image: '/services/Spa and Massage.webp' },
    { id: 25, name: 'Switchboard Repair', image: '/services/switchboard.webp' },
    { id: 26, name: 'TV repairing', image: '/services/tv-repair-67a596d70f1eb.webp' },
    { id: 27, name: 'Washing Machine', image: '/services/washing-machine.webp' },
    { id: 28, name: 'Water Purifier', image: '/services/water purifier.webp' },
    { id: 29, name: 'Water Tank Cleaning', image: '/services/water tank cleaning.webp' }
  ];

  // Double the array for infinite scroll
  const doubledServices = [...services, ...services];

  useGSAP(() => {
    const scrollele = conRef.current;
    const xval = scrollele.scrollWidth / 2;  // Half because we doubled the content

    gsap.fromTo(scrollele,
      { x: 0 },
      {
        x: -xval,
        duration: 65,
        ease: 'linear',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize(x => parseFloat(x) % xval)
        }
      }
    );
  }, { scope: conRef });


   const s1Ref = useRef()
   const s2Ref = useRef()
   const s3Ref = useRef()
   const s4Ref = useRef()
   const s5Ref = useRef()
  
   useGSAP(() => {
    gsap.from(s1Ref.current, {
      y: 100,
      duration: 0.7,
      
      opacity: 0,
      ease: 'linear',
      scrollTrigger: {
        trigger: s1Ref.current,
        scroller: 'body',
        
        scrub: 4,
        start: 'top 35%',
        end: 'bottom 120%'
      }
    })
    gsap.from(s2Ref.current, {
      y: 100,
      duration: 0.7,
      
      opacity: 0,
      ease: 'linear',
      scrollTrigger: {
        trigger: s2Ref.current,
        scroller: 'body',
        
        scrub: 4,
        start: 'top 35%',
        end: 'bottom 120%'
      }
    })
    gsap.from(s3Ref.current, {
      y: 100,
      duration: 0.7,
      
      opacity: 0,
      ease: 'linear',
      scrollTrigger: {
        trigger: s3Ref.current,
        scroller: 'body',
        
        scrub: 4,
        start: 'top 35%',
        end: 'bottom 120%'
      }
    })
    gsap.from(s4Ref.current, {
      y: 100,
      duration: 0.7,
      
      opacity: 0,
      ease: 'linear',
      scrollTrigger: {
        trigger: s4Ref.current,
        scroller: 'body',
        
        scrub: 4,
        start: 'top 35%',
        end: 'bottom 120%'
      }
    })
    gsap.from(s5Ref.current, {
      y: 100,
      duration: 0.7,
      
      opacity: 0,
      ease: 'linear',
      scrollTrigger: {
        trigger: s5Ref.current,
        scroller: 'body',
        
        scrub: 4,
        start: 'top 35%',
        end: 'bottom 120%'
      }
    })


   
  }, )
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: s1Ref.current,
        start: "top 60%",
        end: "bottom 150%",
        scrub: 2,
        
      }
    })

    // Wave animation for each element
    tl.from(s1HeadingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(s1LinkRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s1ParagraphRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s1ImageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s1TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    const tl2 =gsap.timeline({
      scrollTrigger: {
        trigger: s2Ref.current,
        start: "top 60%",
        end: "bottom 150%",
        scrub: 2,
        
      }
    })
    tl2.from(s2HeadingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(s2LinkRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s2ParagraphRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s2ImageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s2TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    const tl3 =gsap.timeline({
      scrollTrigger: {
        trigger: s3Ref.current,
        start: "top 60%",
        end: "bottom 150%",
        scrub: 2,
       
      }
    })
    tl3.from(s3HeadingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(s3LinkRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s3ParagraphRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s3ImageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s3TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    const tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: s4Ref.current,
        start: "top 60%",
        end: "bottom 150%",
        scrub: 2,
        
      }
    })

    tl4.from(s4HeadingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(s4LinkRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s4ParagraphRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s4ImageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s4TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    const tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: s5Ref.current,
        start: "top 60%",
        end: "bottom 150%",
        scrub: 2,
        
      }
    })

    tl5.from(s5HeadingRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    })
    .from(s5LinkRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s5ParagraphRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s5ImageRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
    .from(s5TextRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5")
  

    
    
  }, )

  const circleRef = useRef()
  const whyUsRef = useRef()
  const WhyUsImgRef =useRef()

  useGSAP(() => {
    gsap.fromTo(whyUsRef.current,
      {
        opacity: 0
      },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
          
        }
      }
    )
    gsap.fromTo(WhyUsImgRef.current,{
      opacity:0
    },{
      opacity:1,
      duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whyUsRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
          
        }
    })
    gsap.fromTo(circleRef.current,
      {
        scale:0
      },
      {
        scale:1,
        duration: 1,
        delay:1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: circleRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
          
        }
      }
    )
  }, [])
  const step1ConRef = useRef()
  const step1Ref = useRef()
  const step1HeadingRef = useRef()
  const step1ParagraphRef = useRef()

  useGSAP(() => {
    // Ensure DOM elements exist
    if (!step1ConRef.current) return;
  
    const tlstep1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".step1-container", // Use class instead of ref
        start: "top 80%",
        end: "bottom center",
        
        toggleActions: "play none none reverse"
      }
    });
  
    tlstep1.from(step1Ref.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    .from(step1HeadingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")
    .from(step1ParagraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");
  
  });
  const step2ConRef = useRef()
  const step2Ref = useRef()
  const step2HeadingRef = useRef()
  const step2ParagraphRef = useRef()

  useGSAP(() => {
    // Ensure DOM elements exist
    if (!step2ConRef.current) return;
  
    const tlstep2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".step2-container", // Use class instead of ref
        start: "top 80%",
        end: "bottom center",
        
        toggleActions: "play none none reverse"
      }
    });
  
    tlstep2.from(step2Ref.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    .from(step2HeadingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")
    .from(step2ParagraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");
  
    
  }, );

  const step3ConRef = useRef()
  const step3Ref = useRef()
  const step3HeadingRef = useRef()
  const step3ParagraphRef = useRef()

  useGSAP(() => {
    // Ensure DOM elements exist
    if (!step3ConRef.current) return;
  
    const tlstep3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".step3-container", // Use class instead of ref
        start: "top 80%",
        end: "bottom center",
        
        toggleActions: "play none none reverse"
      }
    });
  
    tlstep3.from(step3Ref.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    })
    .from(step3HeadingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3")
    .from(step3ParagraphRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out"
    }, "-=0.3");
  
    
  }, );
  const [isVisible, setIsVisible] = useState(true)
  const howItWorksHeadingRef = useRef(null)

  useGSAP(() => {
    const heading = howItWorksHeadingRef.current
    
    gsap.to(heading, {
      scrollTrigger: {
        trigger: ".how-it-works-container",
        start: "top top",
        endTrigger: ".step3-container", // End at step 3
        end: "bottom center",
        pin: true,
        pinSpacing: false,
        onUpdate: (self) => {
          // Fade out heading when reaching end point
          if (self.progress > 0.99) {
            gsap.to(heading, {
              opacity: 0,
              y: -50,
              duration: 0.3
            })
          } else {
            gsap.to(heading, {
              opacity: 1,
              y: 0,
              duration: 0.3
            })
          }
        }
      }
    })
  
    
  }, )

  const whyDoumRef = useRef()
  const textRefs = useRef([] )
  const imageRefs = useRef([])
  const whyUsData = [
    {
      heading: "Verified Professionals",
      text: "Our experts are thoroughly screened to ensure reliability and skill.With DOUM, you get certified professionals delivering top-notch service every time.",
      image: "/why-us-1.webp"
    },
    {
      heading: "Competitive Pricing",
      text: "Get access to high-quality services at prices that won’t break the bank. We provide transparent, affordable rates with no hidden charges, ensuring the best value for your money.",
      image: "/why-us-2.webp"
    },
    {
      heading: "Real-Time Updates",
      text: "Stay informed throughout your service journey. From booking confirmation to tracking your professional’s arrival, our real-time updates ensure you’re always in the loop.",
      image: "/why-us-3.webp"
    },
    {
      heading: "Seamless Booking",
      text: "Booking has never been easier! With just a few taps, you can schedule services, customize requirements, and confirm your slot. Enjoy a hassle-free and efficient booking experience with DOUM",
      image: "/why-us-4.webp"
    }
  ]

// In your Hero component, modify the useGSAP section for whyUsData:

// Update the useGSAP section for whyUsData:
useGSAP(() => {
  const container = whyDoumRef.current;
  const texts = textRefs.current;
  const images = imageRefs.current;

  // Set initial states - make first item active, others inactive
  texts.forEach((text, index) => {
    if (text) {
      gsap.set(text, {
        scale: index === 0 ? 1.2 : 0.8,
        opacity: index === 0 ? 1 : 0.5,
        color: index === 0 ? "#ffffff" : "#ffffff80"
      });
    }
    if (images[index]) {
      gsap.set(images[index], {
        opacity: index === 0 ? 1 : 0
      });
    }
  });

  let activeIndex = 0; // Track currently active item

  const options = {
    root: container,
    threshold: 0.6, // Single threshold for cleaner transitions
    rootMargin: "-25% 0px -25% 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const index = texts.indexOf(entry.target);
      
      if (entry.isIntersecting) {
        // Deactivate previous active item
        if (activeIndex !== index) {
          if (texts[activeIndex]) {
            gsap.to(texts[activeIndex], {
              scale: 0.8,
              opacity: 0.5,
              color: "#ffffff80",
              duration: 0.5
            });
          }
          if (images[activeIndex]) {
            gsap.to(images[activeIndex], {
              opacity: 0,
              duration: 0.5
            });
          }
        }

        // Activate new item
        gsap.to(entry.target, {
          scale: 1.2,
          opacity: 1,
          color: "#ffffff",
          duration: 0.5
        });
        gsap.to(images[index], {
          opacity: 1,
          duration: 0.5
        });

        activeIndex = index;
      }
    });
  }, options);

  texts.forEach(text => {
    if (text) observer.observe(text);
  });

  return () => {
    texts.forEach(text => {
      if (text) observer.unobserve(text);
    });
  };
}, []);

  useGSAP(() => {
    gsap.from(".Q1Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      
      scrollTrigger: {
        trigger: ".Q1Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A1Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A1Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, [])
  useGSAP(() => {
    gsap.from(".Q2Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q2Container",
        start: "top bottom",
        end: "bottom center",
       
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A2Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      
      scrollTrigger: {
        trigger: ".A2Container",
        start: "top bottom",
        end: "bottom center",
       
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, )
  useGSAP(() => {
    gsap.from(".Q3Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q3Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A3Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A3Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, )
  useGSAP(() => {
    gsap.from(".Q4Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q4Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A4Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A4Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, )
  useGSAP(() => {
    gsap.from(".Q5Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q5Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A5Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A5Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, )
  useGSAP(() => {
    gsap.from(".Q6Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q6Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A6Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A6Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, )
  useGSAP(() => {
    gsap.from(".Q7Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".Q7Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  
    gsap.from(".A7Container", {
      y: 100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.3,
      scrollTrigger: {
        trigger: ".A7Container",
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:2
      }
    })
  }, )
  const featureRefs = useRef([])

// Add useEffect for animations
useGSAP(() => {
  featureRefs.current.forEach((container) => {
    gsap.from(container, {
      scaleX: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom center",
        toggleActions: "play none none reverse",
        scrub:true
      }
    })
  })
}, )
 const mobHoverRef = useRef([])
 useGSAP(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.filter = 'grayscale(0%)';
        entry.target.querySelector('h2').style.opacity = '1';
      } else {
        entry.target.style.filter = 'grayscale(100%)';
        entry.target.querySelector('h2').style.opacity = '0';
      }
    });
  }, { threshold: 0.5 });

  mobHoverRef.current.forEach((el) => {
    if (el) observer.observe(el);
  });

 
}, );

const {
  register,
  handleSubmit,
  watch,
  formState:{erros},
  reset
} = useForm();

// const onSubmit = async (data) => {
//   console.log("Form Data:", data);
//   try{
//     const { error } = await supabase.from('Waitlist').insert([{
//       firstname : data.firstName,
//       lastname : data.lastName,
//       email : data.Email,
//       phoneno : data.mobile,
//       message : data.Message
//     }]) 
//   }
//   catch(error) {
//     console.error(error);
//     toast.error("Error submitting form!", { position: "top-right" });
//   }
  
//   toast.success("Form submitted successfully!", { position: "top-right" });
//   reset(); // Clears the form after successful submission
// };
const onSubmit = async (formData) => {

  
  const { firstName, lastName, Email, mobile, Message } = formData;

  // Perform your API call or other operations with the form data
  console.log('Form data:', { firstName, lastName, Email, mobile ,Message });
  try{
    const {data , error} = await supabase.from('Waitlist').insert([{ FirstName: firstName,LastName: lastName, Email,phoneNo: mobile,Message: Message }])
    
    if(error) {
      toast.error("Error submitting form!", { position: "top-right" });
      console.error(error.message);
      return;
    }
    if(data){
      toast.success("Form submitted successfully!", { position: "top-right" });
      reset(); // Clears the form after successful submission
      console.log(data)
    }
  }
  catch(err){
    toast.error("Error submitting form!", { position: "top-right"});
    console.error(err.message);
  }
};

const onError = () => {
  toast.error("Please fix the errors and try again!", { position: "top-right" });
};
const [isDesktop, setIsDesktop] = useState(false);

useEffect(() => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth >= 768); // Adjust this breakpoint as needed
  };

  // Set initial value
  handleResize();

  // Add event listener
  window.addEventListener('resize', handleResize);

  // Clean up
  return () => window.removeEventListener('resize', handleResize);
}, []);
const stepsRef =useRef()

  useGSAP(() => {
    gsap.set(whyUsRef.current, { opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: whyUsRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        toggleActions: "play reverse play reverse"
      }
    });

    tl.to(whyUsRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    })
    .to(whyUsRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut"
    });

   
  }, );

useGSAP(() => {

  gsap.to('.Faq-container', {
    
    scrollTrigger: {
      trigger: '.Faq-container',
      start: 'bottom bottom',
      end: 'bottom+=100vh bottom',
      toggleActions: 'play none none reverse',
      scrub: true,
       // Optional: Remove or comment out if you don't want to see markers
      onEnter: () => gsap.to('.Faq-container', { opacity: 1, duration: 1 }),
      onLeave: () => gsap.to('.Faq-container', { opacity: 0, duration: 1 }),
      onEnterBack: () => gsap.to('.Faq-container', { opacity: 1, duration: 1 }),
      onLeaveBack: () => gsap.to('.Faq-container', { opacity: 1, duration: 1 })
    }
  });


});
const hoverCircle=useRef()
const hoverh11 = useRef()
const hoverh12 = useRef()
useGSAP(() => {
  const htl = gsap.timeline({
    scrollTrigger: {
      trigger: hoverCircle.current,
      start: 'center bottom', // Changed from 'bottom bottom'
      end: 'center center',   // Changed from 'top top'
      toggleActions: 'play none none reverse',
      scrub: 1,              // Reduced from 4 for smoother animation
          }
  });

  htl.from(hoverCircle.current, {
    scale: 0,
    duration: 1,
    ease: "back.out(1.7)"    // Added easing for pop effect
  });

  htl.from([hoverh11.current, hoverh12.current], {
    opacity: 0,
    duration: 1,
    stagger: 0.2             // Added stagger for sequential fade-in
  });

  
});
useGSAP(() => {
  const htl = gsap.timeline({
    scrollTrigger: {
      trigger: ".circleConMob",
      start: 'center bottom', // Changed from 'bottom bottom'
      end: 'center center',   // Changed from 'top top'
      toggleActions: 'play none none reverse',
      scrub: 1,              // Reduced from 4 for smoother animation
          }
  });

  htl.from(".circleConMob", {
    scale: 0,
    duration: 1,
    ease: "back.out(1.7)"    // Added easing for pop effect
  });

  htl.from(".circleConMob", {
    opacity: 0,
    duration: 1,
    stagger: 0.2             // Added stagger for sequential fade-in
  });

  
});

useGSAP(() => {
  const htl = gsap.timeline({
    scrollTrigger: {
      trigger: ".formCircle",
      start: "top 85%",  // Triggers earlier (was 'center bottom')
      end: "top 100%", // Ends earlier (was 'bottom center')
      toggleActions: "play none none reverse",
      scrub: 1,          
    },
  });

  htl.from('.formCircle', {
    scale: 0,
    duration: 1,
    ease: "back.out(1.7)"    // Added easing for pop effect
  });

  htl.from(['.headingCon','.contact-info','.whatsapp','.address'], {
    opacity: 0,
    duration: 1,
    stagger: 0.2             // Added stagger for sequential fade-in
  });

  
}, );
const videoConRef =useRef()
const videoRef= useRef()
const handleMouseEnter = () => {
  if (videoRef.current) {
    videoRef.current.muted = false;
    
  }
};

const handleMouseLeave = () => {
  if (videoRef.current) {
    videoRef.current.muted = true;
  }
};
const [isLoading, setIsLoading] = useState(true);
 
useEffect(() => {
  setTimeout(() => setIsLoading(false), 2000); // example
}, []);

{/*scroll snapping animation */}

// const SECTION_MARGINS = [30, 10, 10, 10, 10, 10, 10, 0, 30, 30, 30, 50, 10, 0, 0, 30, 30, 0];
//   const WHEEL_TIMEOUT = 0; // Increased to reduce sensitivity

//   useEffect(() => {
//     let isScrolling = false;
//     let currentIndex = 0;
//     let lastWheelTime = Date.now();

//     // Add smooth scroll behavior to html element
//     document.documentElement.style.scrollBehavior = 'smooth';
  
//     const getElementOffset = (el) => {
//       const rect = el.getBoundingClientRect();
//       const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//       return rect.top + scrollTop;
//     };

//     const isElementInView = (el, index) => {
//       const rect = el.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const topMargin = windowHeight * (SECTION_MARGINS[index] / 100);
      
//       if (rect.height > windowHeight) {
//         return Math.abs(rect.bottom - windowHeight) < 50;
//       }
      
//       return Math.abs(rect.top - topMargin) < 50;
//     };

//     const scrollToElement = (element, index) => {
//       if (isScrolling) return;
      
//       isScrolling = true;
//       const elementOffset = getElementOffset(element);
//       const elementHeight = element.offsetHeight;
//       const windowHeight = window.innerHeight;
//       const topMargin = windowHeight * (SECTION_MARGINS[index] / 100);
      
//       let scrollTarget;
      
//       if (elementHeight > windowHeight) {
//         scrollTarget = elementOffset + elementHeight - windowHeight;
//       } else {
//         scrollTarget = elementOffset - topMargin;
//       }

//       window.scrollTo({
//         top: scrollTarget,
//         behavior: 'smooth'
//       });

//       // Reset isScrolling after animation completes
//       setTimeout(() => {
//         isScrolling = false;
//       }, 1500); // Matches typical CSS smooth scroll duration
//     };

//     const handleWheel = (event) => {
//       const now = Date.now();
//       if (now - lastWheelTime < WHEEL_TIMEOUT) {
//         event.preventDefault();
//         return;
//       }
//       lastWheelTime = now;

//       if (isScrolling) {
//         event.preventDefault();
//         return;
//       }

//       const elements = document.querySelectorAll('.scrollele');
//       const direction = event.deltaY > 0 ? 1 : -1;
//       let targetIndex = currentIndex;

//       if (direction > 0) {
//         if (currentIndex < elements.length - 1) {
//           targetIndex = currentIndex + 1;
//         }
//       } else {
//         if (currentIndex > 0) {
//           targetIndex = currentIndex - 1;
//         }
//       }

//       if (targetIndex !== currentIndex) {
//         event.preventDefault();
//         currentIndex = targetIndex;
//         scrollToElement(elements[targetIndex], targetIndex);
//       }
//     };

//     const handleScroll = () => {
//       if (!isScrolling) {
//         const elements = document.querySelectorAll('.scrollele');
//         elements.forEach((element, index) => {
//           if (isElementInView(element, index)) {
//             currentIndex = index;
//           }
//         });
//       }
//     };

//     window.addEventListener('wheel', handleWheel, { passive: false });
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('wheel', handleWheel);
//       window.removeEventListener('scroll', handleScroll);
//       document.documentElement.style.scrollBehavior = '';
//     };
//   }, []);

 const [aniWidth,setAniWidth] = useState(0)
 useEffect(() => {
  // Set initial width
  setAniWidth(window.innerWidth)
  
  // Handle resize
  function handleResize() {
    setAniWidth(window.innerWidth)
  }
  
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
}, [])
useEffect(() => {
  window.scrollTo(0, 0);
}, []);

const toServices=(e)=>{
  e.preventDefault();
    
    // Get the services element
    const services = document.getElementById('services');
    
    if (services) {
      services.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const toHome = (e) => {
    e.preventDefault();
  
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toHowItWorks=(e)=>{
    e.preventDefault();
      
      // Get the services element
      const howItWorks = document.getElementById('howItWorks');
      
      if (howItWorks) {
        howItWorks.scrollIntoView({ behavior: 'smooth' });
      }
    };
    const toWhyUs=(e)=>{
        e.preventDefault();
          
          // Get the services element
          const whyUs = document.getElementById('whyUs');
          
          if (whyUs) {
            whyUs.scrollIntoView({ behavior: 'smooth' });
          }
        };
        const toFAQ=(e)=>{
            e.preventDefault();
              
              // Get the services element
              const faq = document.getElementById('faq');
              
              if (faq) {
                faq.scrollIntoView({ behavior: 'smooth' });
              }
            };

            const toWaitlist = (e) => {
              e.preventDefault();
          
              const waitlist = document.getElementById('waitlist');
          
              if (waitlist) {
                const isMobile = window.innerWidth < 768;
                const margin = isMobile ? 0 : window.innerHeight * 0.4;
                  
          
                  window.scrollTo({
                      top: waitlist.offsetTop - margin,
                      behavior: 'smooth'
                  });
              }
          };

   // Add this ref at the top with your other refs
const scrollPromptRef = useRef();

// Add this useGSAP animation with your other animations
useGSAP(() => {
  // Show earlier from hero section until step1ConRef
  ScrollTrigger.create({
    trigger: "#heroRef", // Changed from #services to start earlier
    endTrigger: step1ConRef.current,
    start: "top center", // Changed to show earlier
    end: "bottom center",
    onEnter: () => gsap.to(scrollPromptRef.current, {opacity: 1, duration: 0.3}),
    onLeave: () => gsap.to(scrollPromptRef.current, {opacity: 0, duration: 0.3}),
    onEnterBack: () => gsap.to(scrollPromptRef.current, {opacity: 1, duration: 0.3}),
    onLeaveBack: () => gsap.to(scrollPromptRef.current, {opacity: 0, duration: 0.3})
  });

  // Bounce animation
  gsap.to(scrollPromptRef.current.querySelector('.arrow'), {
    y: 2,
    repeat: -1,
    yoyo: true,
    duration: 0.5,
    ease: "power1.inOut"
  });
});
useGSAP(() => {
  // Create an infinite bounce animation
  gsap.to(".arrow", {
    y: 8, // Move down by 10 pixels
    duration: 0.5,
    repeat: -1, // Infinite repeat
    yoyo: true, // Bounce back
    ease: "power1.inOut",
  });
}, []);


 
  return (
    <>



{isLoading && <Loading />} 

    
      {/*3d model*/}

    
      <div className='modelSec fixed flex justify-center items-center h-[150vh] w-[100vw] z-[15] pointer-events-none' style={{pointerEvents:'none'}}>
        {aniWidth > 768 ? <IphoneRes/> : <MobileAni />}
        </div>
       
       {/* <div className='modelSec fixed flex justify-center items-center h-[150vh] w-[100vw] z-[15] pointer-events-none' style={{pointerEvents:'none'}}>
       <IphoneRes/>
        </div> */}

      {/* video */}
      <div
      ref={videoConRef}
      className={`fixed bottom-4 right-4 w-[40vw] md:w-[20vw] h-[7vh] md:h-[10vh] hover:h-[90%] hover:md:h-[80%] hover:w-[90%] hover:md:w-[85%] overflow-hidden 
                  transition-all duration-500 ease-in-out rounded-full hover:rounded-lg shadow-lg bg-transparent z-[50] 
                 invisible md:visible  `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover  transition-all duration-500 ease-in-out"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>    
    <div
      ref={videoConRef}
      className={`fixed bottom-4 right-4 w-[40vw] md:w-[20vw] h-[7vh] md:h-[10vh] hover:h-[20%] hover:md:h-[20%] hover:w-[90%] hover:md:w-[90%] overflow-hidden 
                  transition-all duration-500 ease-in-out rounded-full hover:rounded-lg shadow-lg bg-transparent z-[20] mb-[0] hover:mb-[30vh]
                 visible md:invisible `}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="w-full h-full object-cover  transition-all duration-500 ease-in-out"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>  
          
     {/* hero */}
     
    <div className='scrollele md:h-[300vh] w-full bg-[#e1eefd] relative flex flex-col items-center justify-start gap-4' ref={heroRef}>
      <div className='h-12 w-12 absolute top-[75vh] left-[15vw] invisible md:visible' style={{ backgroundImage: "url(/star.webp)", backgroundSize: 'contain', mixBlendMode:"multiply" }} ref={el => starRef.current[0] = el}></div>
      
      <div className='h-12 w-12  absolute top-[20vh] left-[80vw]' style={{ backgroundImage: "url(/star.webp)", backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: 'center', mixBlendMode:"multiply" }} ref={el => starRef.current[1] = el}></div>
      <div className='mt-[0vh] md:mt-[20vh] h-[40vh] md:h-[10%] w-[90vw] min-w-[320px]' style={{ backgroundImage: 'url(/Hero-text.webp)', backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: 'center', mixBlendMode: 'multiply' }}></div>
      <div className='mt-[-15vh] md:mt-[-5vh]  h-16 w-400 overflow-hidden'><h4 className='text-lg md:text-2xl lg:text-3xl text-[#18375d] font-semibold font-glacial'>
      All Your Home Services, One Tap Away!
      </h4></div>
      <div className='w-[50vw] md:w-[40vw] h-[25vh] flex flex-col md:flex-row justify-evenly md:justify-between items-center mb-[0] md:mb-[200vh] mt-[0vh] md:mt-[-10vh]'>
        <div className='download w-full md:w-[50%] h-[45%] md:h-[80%] rounded-3xl' style={{ backgroundImage: 'url(/playstore.webp)',  backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply' }} ref={el => getRef.current[0] = el}></div>
        <div className='download w-full md:w-[50%] h-[45%] md:h-[80%] rounded-3xl ' style={{ backgroundImage: 'url("/applestore.webp")',  backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply' }} ref={el => getRef.current[1] = el}></div>
        
      </div>
      <Link href='/Blog'> <div className='w-[80vw] h-[12vh] relative mt-[-205vh] hidden md:block' style={{ backgroundImage: 'url("/microsoftIcon.webp")', backgroundSize:"contain" , backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply' }}>

      </div></Link>
     <Link href='/Blog'> <div className='block md:hidden h-[15vh] w-[70vw] ml-[-35vw]  absolute z-[20] mt-[-5vh]'style={{ backgroundImage: 'url("/microsoftIcon.webp")', backgroundSize:"contain" , backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply' }}>

      </div> </Link>

    </div>
    
    {/* platform */}
    <div className='w-full h-[150rem] md:h-[112.5rem] relative z-0 mt-[10vh] md:mt-[-220vh] flex flex-col justify-center items-center 'style={style} >
    
    <div className='w-[70%] md:w-[40%] h-[17%] mt-[-85rem] md:mt-[0rem] platform-text'>
             {/*scroller*/}
             <div id='scroller'
     className='scrollele scrollContainer w-[3775vw] md:w-[1600vw] h-[35vh] md:h-[160%] relative ml-[-15vw] md:ml-[-30vw] mt-[20vh] md:mt-[40vh] flex items-center justify-center gap-12 overflow-x-hidden'
     ref={conRef}
>
  {doubledServices.map((service, index) => (
    <div
      key={`${service.id}-${index}`}
      className='scrollingContent h-[70%] md:h-[90%] w-[25%] md:w-[25%] rounded-2xl flex flex-col bg-[#e1eefd] text-[#18375d]'
      style={{
        aspectRatio: '4/5'
      }}
    >
      <div 
        className='h-[80%] w-full rounded-t-2xl'
        style={{
          backgroundImage: `url("${service.image}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className='h-[20%] w-full flex items-center justify-center text-base md:text-2xl font-bold capitalize'>
        {service.name}
      </div>
    </div>
  ))}
</div>
          </div>

          <div 
  ref={scrollPromptRef}
  className="fixed bottom-8 left-8 flex flex-row items-center justify-center gap-2 md:hidden z-50 opacity-0 pointer-events-none"
>
  <p className="text-sm font-glacial text-[#18375d] font-medium">Keep Scrolling</p>
  <RiArrowDownDoubleFill className="arrow text-[#18375d] text-2xl" />
</div>
    </div>
        

    <div 
  ref={scrollPromptRef}
  className="fixed bottom-8 left-8 flex flex-row items-center justify-center gap-2 md:hidden z-50 opacity-0 pointer-events-none"
>
  <p className="text-sm font-glacial text-[#18375d] font-medium">Keep Scrolling</p>
  <RiArrowDownDoubleFill className="arrow text-[#18375d] text-2xl" />
</div>


    {/* services */}
    <div id='services' className='h-[600vh] w-full bg-[#e1eefd] relative flex flex-col items-center justify-start gap-4'>
      {/* service1*/}
      <div ref={s1Ref} className='scrollele service1 h-[100vh] w-full flex mt-[-170vh] md:mt-[0vh] items-center justify-between'>
      <div className='left flex flex-col items-start justify-center h-full w-[50%] ml-[-5vw] md:ml-[0] mt-0 md:mt-[-20vh]'>
        <h1 ref={s1HeadingRef} className='font-light h-[10vh] md:h-[20vh] w-[40vw] md:w-[35vw] ml-12 text-2xl md:text-4xl text-[#18375d] absolute'>
          Finding Skilled Experts Just Got Easier!
        </h1>
        <div ref={s1LinkRef} className='linkCon flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-3xl font-light items-center ml-[-3vw] md:ml-[-1vw] whitespace-nowrap justify-start absolute mt-[20vh] md:mt-[20vh] z-[50]'>
          <Link href='#waitlist' className='flex mx-16 items-center gap-4 text-[#18375d] p-0 mt-[15vh] md:mt-[-5vh] font-agrandirW text-lg md:text-2xl 'onClick={toWaitlist}>Join Waitlist <FaArrowCircleRight color='#18375d' /></Link>
        </div>
        <div ref={s1ImageRef} className='imageContainer h-[27vh] w-[48vw] mt-[7vh] md:mt-[65vh] ml-[55vw] md:ml-0 rounded-xl' style={{ backgroundImage: 'url(/services1.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
        <p ref={s1TextRef} className='text-[#18375d] font-glacial ml-[55vw] md:ml-[13vw] mt-[-10vw] md:mt-0 whitespace-nowrap text-sm'>Anytime, Anywhere...</p>
      </div>
      <div ref={s1ParagraphRef} className='right h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] mr-0 md:mr-[5vw] mt-[20vh] md:mt-[40vh] text-right invisible md:visible'>
        <p>With DOUM, access certified and verified professionals instantly. Say goodbye to long searches and unreliable services—get the right expert for your needs in no time, right at your doorstep</p>
      </div>
    </div>
      {/*service2*/}
      <div ref={s2Ref} className='scrollele service2 h-[100vh] w-full flex mt-[30vh] md:mt-[0vh] items-center justify-between'>
              <div  ref={s2ParagraphRef} className='left h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] ml-0 md:ml-[5vw] mt-[20vh] md:mt-[40vh] text-left invisible md:visible'>
              <p>
              Our user-friendly app ensures hassle-free bookings. Choose your desired service, customize your requirements, and confirm your slot—all with just a few clicks. Convenience and efficiency made seamless for you
             </p>
              </div>
              <div className='right h-[100%] w-[50%]'>
                <div className='headinCon w-full h-[25%] flex flex-col text-right items-end justify-around mt-[7vh] md:mt-[35vh] pr-2 '>
                  <h1 ref={s2HeadingRef} className=' font-light h-[5vh] md:h-[20vh] w-[40vw] md:w-[35vw] mr-0 md:mr-12 text-2xl md:text-4xl text-[#18375d] '>Book Services in Just a Few Taps!</h1>
                <div ref={s2LinkRef}  className='linkCon flex flex-row w-[15rem] md:w-80 h-16 text-lg md:text-2xl font-light items-center mr-[-10vw] md:mr-[-2vw] whitespace-nowrap justify-start  mt-[-10vh] md:mt-[-20vh] font-agrandirW '><Link href='/' className='flex mx-16 items-center gap-4 text-[#18375d] p-0 mt-[25vh] md:mt-[6rem]'onClick={toWaitlist}>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
              </div>
              

            <div ref={s2ImageRef} className='imageContainer h-[27vh] w-[48vw] md:w-[30vw] mt-[-20vh] md:mt-[15vh] ml-[-45vw] md:ml-[15vw] rounded-xl  md:relative' style={{ backgroundImage: 'url(/services2.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p ref={s2TextRef} className='text-[#18375d] font-glacial ml-[-45vw] md:ml-[19vw] mt-[-10vw] md:mt-0 whitespace-nowrap  md:relative   '>A Few Steps...</p>
              </div>
      </div>
      {/* service 3 */}
      <div ref={s3Ref} className='scrollele service1 h-[100vh] w-full flex mt-[-40vh] md:mt-[0vh] items-center justify-between'>
            <div className='left flex flex-col items-start justify-center h-full w-[50%] ml-[-5vw] md:ml-[0] mt-0 md:mt-[-20vh]'>
                <h1 ref={s3HeadingRef} className=' font-light h-[10vh] md:h-[20vh] w-[40vw] md:w-[35vw] ml-12 text-2xl md:text-4xl text-[#18375d] absolute'>Track Real-Time Updates for Every Booking!</h1>
            <div ref={s3LinkRef}  className='linkCon flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-2xl font-light items-center ml-[-3vw] md:ml-[-1vw] whitespace-nowrap justify-start absolute mt-[20vh] md:mt-[3vh] font-agrandirW '><Link href='/'onClick={toWaitlist} className='flex mx-16 items-center gap-4 text-[#18375d] p-0 mt-[25vh] md:mt-[5rem]'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
            <div ref={s3ImageRef} className='imageContainer h-[27vh] w-[48vw] mt-[7vh] md:mt-[65vh] ml-[55vw] md:ml-0 rounded-xl' style={{ backgroundImage: 'url(/services3.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p  ref={s3TextRef} className='text-[#18375d] font-glacial ml-[55vw] md:ml-[13vw] mt-[-10vw] md:mt-0 whitespace-nowrap'>Real-Time Tracking</p>
            </div>
            <div  ref={s3ParagraphRef} className='right  h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] mr-0 md:mr-[5vw] mt-[20vh] md:mt-[40vh] text-right invisible md:visible'>
                       <p>
                       Stay informed every step of the way. Track your service provider's location, estimated arrival time, and job progress in real time, ensuring transparency and peace of mind throughout the process.
                       </p>
            </div>
            </div>
      {/*service4*/}
      <div ref={s4Ref} className='scrollele service2 h-[100vh] w-full flex mt-[60vh] md:mt-[0vh] items-center justify-between'>
              <div  ref={s4ParagraphRef} className='left h-[20vh] md:h-[35vh] x-[60vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] ml-0 md:ml-[5vw] mt-[20vh] md:mt-[40vh] text-left invisible md:visible'>
              <p>
              No hidden costs or surprises!DOUM provides clear, upfront pricing for every service.Choose your preferred payment method—cashless or cash—and enjoy a smooth, worry-free transaction experience every time.
             </p>
              </div>
              <div className='right h-[100%] w-[50%]'>
                <div className='headinCon w-full h-[40vh] md:h-[25%] flex flex-col text-right items-end justify-around mt-[7vh] md:mt-[35vh] pr-2 '>
                  <h1 ref={s4HeadingRef} className=' font-light h-[5vh] md:h-[20vh] w-[40vw] md:w-[35vw] mr-0 md:mr-12 text-2xl md:text-4xl text-[#18375d] '>Transparent Pricing and Hassle-Free Payments!</h1>
                <div ref={s4LinkRef}  className='linkCon flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-2xl font-light items-center mr-[-10vw] md:mr-[-2vw] whitespace-nowrap justify-start  mt-[0vh] md:mt-[-5vh] font-agrandirW '><Link href='/'onClick={toWaitlist} className='flex mx-16 items-center gap-4 text-[#18375d] p-0'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
              </div>
              

            <div ref={s4ImageRef} className='imageContainer h-[27vh] w-[48vw] md:w-[30vw] mt-[-32vh] md:mt-[15vh] ml-[-45vw] md:ml-[15vw] rounded-xl  md:relative' style={{ backgroundImage: 'url(/services4.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p ref={s4TextRef} className='text-[#18375d] font-glacial ml-[-45vw] md:ml-[19vw] mt-[-10vw] md:mt-0 whitespace-nowrap  md:relative '>Transparent Pricing</p>
              </div>
      </div>
      {/*services 5*/}
      <div ref={s5Ref} className='scrollele service1 h-[100vh] w-full flex mt-[-40vh] md:mt-[0vh] items-center justify-between'>
            <div className='left flex flex-col items-start justify-center h-full w-[50%] ml-[-5vw] md:ml-[0] mt-0 md:mt-[-20vh]'>
                <h1 ref={s5HeadingRef} className=' font-light h-[10vh] md:h-[20vh] w-[40vw] md:w-[35vw] ml-12 text-2xl md:text-4xl text-[#18375d] absolute'>Expert Services, Anytime, Anywhere!</h1>
            <div ref={s5LinkRef}  className='linkCon flex flex-row w-[15rem] md:w-80 h-16 text-xl md:text-2xl font-light items-center ml-[-3vw] md:ml-[-1vw] whitespace-nowrap justify-start absolute mt-[35vh] md:mt-[20vh] font-agrandirW '><Link href='/' onClick={toWaitlist} className='flex mx-16 items-center gap-4 text-[#18375d] p-0'>Join Waitlist <FaArrowCircleRight color='#18375d' /> </Link></div> 
            <div ref={s5ImageRef} className='imageContainer h-[27vh] w-[48vw] mt-[7vh] md:mt-[65vh] ml-[55vw] md:ml-0 rounded-xl' style={{ backgroundImage: 'url(/services5.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
            <p ref={s5TextRef} className='text-[#18375d] font-glacial ml-[55vw] md:ml-[13vw] mt-[-15vw] md:mt-0 whitespace-nowrap'>Get Top-notch services instantly...</p>
            </div>
            <div  ref={s5ParagraphRef} className='right  h-[20vh] md:h-[35vh] x-[60vw] w-[10vw] md:w-[20vw] font-glacial text-lg md:text-xl text-[#18375d] mr-0 md:mr-[5vw] mt-[20vh] md:mt-[40vh] text-right invisible md:visible'>
                       <p>
                       Our skilled professionals are always ready to help, whether it’s fixing appliances or deep cleaning your home. From big cities to small towns, DOUM ensures expert services are accessible everywhere,anytime.
                       </p>
            </div>
            </div>
     

    </div>
       {/* how it works */}

       <div id='howItWorks' ref={whyUsRef} className='scrollele why-us-start h-[100vh] w-[100vw] bg-[#18375d] flex justify-center items-center bg-fixed'>
       <div ref={circleRef} className='h-[40vw] w-[40vw] rounded-full absolute -z-2 self-center'style={{ backgroundImage: 'url(/circle.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', opacity:'0.45' }}></div>
          <div ref={WhyUsImgRef} className='image-container  h-[50%] w-[100%] md:w-[60%] relative z-50' style={{ backgroundImage: 'url(/Screenshot_2025-02-01_092629-removebg-preview_upscayl_4x_realesrgan-x4plus.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            
             
          </div>

       </div>

       {/*how it works container */}
       <div ref={stepsRef} className='h-[550vh] w-[100%] bg-[#e1eefd] flex flex-col justify-between items-center'>
         <h1 ref={howItWorksHeadingRef} className=' font-glacial text-[#18375d] text-xl md:text-4xl sticky top-[15vh] md:top-[25vh] mb-20 mt-[5vh] md:mt-[10vh]  whitespace-nowrap font-medium ' >
           Book an Expert in 3 Easy steps
         </h1>
         <div className='md:hidden h-[2.5%] w-[15%] rounded-full bg-transparent border-2 border-[#18375d] flex flex-col justify-start items-center mt-[25%] overflow-hidden relative bottom-[-10%]'>
  <RiArrowDownDoubleFill className="arrow text-[#18375d] text-4xl transform transition-transform" />
</div>
        
          {/* how it works 1 container*/}
          <div className='h-[100vh] w-[100vw] flex justify-center items-center  mt-[100vh]'>
                {/*step 1*/}
                 <div ref={step1ConRef} className='scrollele step1-container w-[80%] md:w-[40%] h-[60%] md:h-[75%] mt-[20vh] mr-[0] md:mr-[15vw] rounded-2xl flex flex-col justify-center items-center bg-[#bbd7f4]'>
                  <div>
                     <div ref={step1Ref} className='bg-[#18375d] rounded-full w-[40vw] md:w-[10vw] h-[8vh] md:h-[10Vh] whitespace-nowrap flex justify-center items-center font-glacial text-white font-bold text-2xl md:text-3xl ml-[5%] mt-4'>

                           Step 01
                     </div>
                     <br/>
                     <h1 ref={step1HeadingRef} className='font-glacial text-[#18375d] text-2xl md:text-3xl font-bold ml-[5%]'>Select a Service</h1>
                     <br/>
                     <div ref={step1ParagraphRef} className='w-[60%] text-xl  md:text-2xl/8  font-glacial text-[#18375d] font-medium ml-[5%] space-y-6  mb-4'>
                    
                     Open the DOUM app, browse through available services, and choose the one you need.
                     </div>
                       
                  </div>

                 </div>
          </div>
           {/* how it works 2 container*/}
           <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
                {/*step 2*/}
                 <div ref={step2ConRef} className='scrollele step2-container w-[80%] md:w-[40%] h-[60%] md:h-[75%] mt-[20vh] ml-[0] md:ml-[15vw] rounded-2xl flex flex-col justify-center items-center bg-[#bbd7f4]'>
                  <div>
                     <div ref={step2Ref} className='bg-[#18375d] rounded-full w-[40vw] md:w-[10vw] h-[8vh] md:h-[10Vh] whitespace-nowrap flex justify-center items-center font-glacial text-white font-bold text-2xl md:text-3xl ml-[5%] mt-[10%] md:mt-[5%]'>

                           Step 02
                     </div>
                     <br/>
                     <h1 ref={step2HeadingRef} className='font-glacial text-[#18375d] text-2xl md:text-3xl font-bold ml-[5%]'>Choose an Expert & Schedule</h1>
                     <br/>
                     <div ref={step2ParagraphRef} className=' w-[80%] md:w-[70%] text-xl  md:text-2xl/8  font-glacial text-[#18375d] font-medium ml-[5%] space-y-6  mb-4'>
                    
                     View expert profiles, check ratings, and select the best one. Pick a date & time that suits you
                     </div>
                       
                  </div>

                 </div>
          </div>
           {/* how it works 3 container*/}
           <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
                {/*step 3*/}
                 <div ref={step3ConRef} className='scrollele step3-container w-[80%] md:w-[40%] h-[60%] md:h-[75%] mt-[20vh] mr-[0] md:mr-[15vw] rounded-2xl flex flex-col justify-center items-center bg-[#bbd7f4]'>
                  <div>
                     <div ref={step2Ref} className='bg-[#18375d] rounded-full w-[40vw] md:w-[10vw] h-[8vh] md:h-[10Vh] whitespace-nowrap flex justify-center items-center font-glacial text-white font-bold text-2xl md:text-3xl ml-[5%] mt-[10%] md:mt-[8%]'>

                           Step 03
                     </div>
                     <br/>
                     <h1 ref={step3HeadingRef} className='font-glacial text-[#18375d] text-2xl md:text-3xl font-bold ml-[5%]'>Confirm & Relax</h1>
                     <br/>
                     <div ref={step3ParagraphRef} className='w-[80%] md:w-[80%] text-xl  md:text-2xl/8  font-glacial text-[#18375d] font-medium ml-[5%] space-y-6  mb-4 md:mb-8'>
                    
                     Complete your booking, make payment if required, and let our expert handle the job while you sit back!
                     </div>
                       
                  </div>

                 </div>
          </div>
          {/*why us*/}
               {/*main text part*/}
 <div id='whyUs' className='scrollele mt-0 md:mt-[100vh] h-[100vh] w-[100vw] bg-[#e1eefd] flex justify-center items-center '>
                         <h1 className='text-[#18375d] text-3xl font-bold font-glacial mt-0 md:mt-[20%]' >WHY CHOOSE DOUM</h1>
              </div>
              {/*data container part */}
              <div className='h-[100vh] w-[100vw] bg-[#e1eefd] flex flex-col justify-end items-center z-[5]'>
              <div ref={whyDoumRef} className=' h-[85%] w-[90%] md:w-[75%] bg-[#18375d] rounded-2xl flex'>
    <div className=" scrollele yus w-full md:w-1/2 flex flex-col justify-start gap-20  pl-6 md:pl-10 overflow-y-scroll overflow-x-hidden">
      
    
      <div className="h-[50vh]"></div>
      <div className="h-[50vh]"></div>
      <div className="h-[50vh]"></div>
           
      {whyUsData.map((item, index) => (
        <div
          key={index}
          ref={el => textRefs.current[index] = el}
          className="transition-all duration-300 w-full px-12 lg:mt-[20%]"
          
        >
          <h3 className="text-2xl font-bold text-white/50">{item.heading}</h3>
          <p className="text-white/30">{item.text}</p>
        </div>
      ))}
      <div className="h-[50vh]"></div>
      <div className="h-[50vh]"></div>
      <div className="h-[50vh]"></div>
      <div className="h-[50vh]"></div>
    </div>
    <div className="invisible md:visible w-0  md:w-1/2  relative flex items-center justify-center">
  {whyUsData.map((item, index) => (
    <div
      key={index}
      ref={el => imageRefs.current[index] = el}
      className="absolute inset-0 mx-[10%] w-[150%] md:w-[80%] h-full rounded-3xl"
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        opacity: index === 0 ? 1 : 0
      }}
    />
  ))}
</div>
  </div>

              </div>
       </div>

       {/*More features */}
       <div className='empty-space h-[50vh] w-[100vw] bg-[#e1eefd]'>

       </div>

       <div className=' scrollele feature-wrapper w-[80%] md:w-[55%] h-[150vh] flex flex-col justify-evenly items-center mx-[10%] md:mx-[22%]'>
        <h1 className='text-[#18375d] text-2xl md:text-3xl whitespace-nowrap font-glacial font-bold'>All features that you can enjoy</h1>
        <div className='w-full h-[90%] flex flex-col justify-evenly items-center '>
          <div className='feature-container w-[110%] md:w-[60%] h-[7%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-2xl'><FaTools color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-md md:text-xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Service Selection Made Easy</div>

          </div>

          <div ref={el => featureRefs.current[0] = el} className='feature-container  w-[110%] md:w-[60%] h-[7%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-2xl'><FaUserTag color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-md md:text-xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Verified Professionals</div>

          </div>

          <div ref={el => featureRefs.current[1] = el} className='feature-container  w-[110%] md:w-[60%] h-[7%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-2xl'><FaLocationDot color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-md md:text-xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Real-Time Tracking</div>

          </div>

          <div ref={el => featureRefs.current[2] = el} className='feature-container  w-[110%] md:w-[60%] h-[7%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-2xl'><RiMoneyRupeeCircleFill color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-md md:text-xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Transparent Pricing</div>

          </div>

          <div ref={el => featureRefs.current[3] = el} className='feature-container  w-[110%] md:w-[60%] h-[7%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-xl'><RiCalendarScheduleFill color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-md md:text-xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Flexible Scheduling</div>

          </div>

          <div ref={el => featureRefs.current[4] = el} className='feature-container  w-[110%] md:w-[60%] h-[7%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-2xl'><MdLocalOffer color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-md md:text-xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Personalized Offers and Discounts</div>

          </div>

          <div ref={el => featureRefs.current[5] = el} className='feature-container  w-[110%] md:w-[60%] h-[7%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-2xl'><IoChatbubblesSharp color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-md md:text-xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>In-App Communication</div>

          </div>

          <div ref={el => featureRefs.current[6] = el} className='feature-container  w-[110%] md:w-[60%] h-[7%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-2xl'><MdPayment color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-md md:text-xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Multiple Payment Options</div>

          </div>

          <div ref={el => featureRefs.current[7] = el} className='feature-container w-[110%] md:w-[60%] h-[7%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-2xl'><FaClipboardList color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-md md:text-xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>Service History</div>

          </div>

          <div ref={el => featureRefs.current[8] = el} className='feature-container  w-[110%] md:w-[60%] h-[7%] bg-[#18375d] rounded-2xl flex'>
            <div className='icon-container w-[15%] h-full  flex justify-center items-center text-2xl'><RiReactjsLine color='#e1eefd' /></div>
            <div className='text-container w-[85%] h-full flex justify-center items-center text-md md:text-xl font-semibold font-glacial text-[#e1eefd] mr-[7%]'>AI-Powered Assistance</div>

          </div>

        </div>

       </div>
       {/*FAQ */}

       <div className='transition-gap h-[50vh] w-[100vw] bg-[#e1eefd]'>


       </div>
       <div id='faq' className='scrollele Faq-container h-[510vh] w-[100vw] overflow-auto overflow-y-visible bg-[#19375d] flex flex-col items-center justify-evenly  relative z-10  pb-[100vh]'>
         <div className='headings h-[80vh] w-full flex flex-col justify-center items-center gap-[5vh] text-center'>
         <h1 className= {`text-4xl md:text-5xl font-bold font-glacial text-white ${leagueSpartan.className}`} >FREQUENTLY ASKED QUESTION</h1>
         <h4 className='text-3xl md:text-4xl font-thin text-white font-glacial'>know us further</h4>
        <div className='flex w-[70vh] justify-center items-center text-xl md:text-2xl font-thin text-white font-glacial opacity-[0.7]'><h5 className='text-2xl font-thin text-white font-glacial opacity-[0.7] whitespace-nowrap'> Scroll down slowly</h5> <RiArrowDownDoubleFill /></div> 
         </div>
         
          <div className='FAQS w-full h-[95%]  flex flex-col justify-evenly items-center overflow-hidden gap-8 relative z-10  bottom-0 '>
            <div className='QnA1 h-[15%] w-full flex flex-col justify-between pt-[5vh]'>
               <div className='Q1Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-16 w-16 md:h-20 md:w-20 rounded-full bg-gray-400'></div>
                     <div className='Q1 h-full w-[70%] md:w-[40%] bg-[#bbd7f4] rounded-3xl text-[#18375d] font-glacial font-light flex items-center justify-center px-[2%] mr-[11vw] text-sm md:text-base'>
                     Hi, I’m new to DOUM and have a lot of questions about how it works. Can you help?

                     </div>
               </div>
               <div className='A1Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A1 h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left text-sm md:text-base'>
                     Of course! I’m here to assist. Ask me anything.


                     </div>
                     <div className='employeedp h-16 w-16 md:h-20 md:w-20  rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA2 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q2Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-16 w-16 md:h-20 md:w-20   rounded-full bg-gray-400'></div>
                     <div className='Q2 text-sm md:text-base h-full w-[70%] md:w-[40%] bg-[#bbd7f4] rounded-3xl text-[#18375d] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     What is DOUM?

                     </div>
               </div>
               <div className='A2Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A2 text-sm md:text-base h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     DOUM is an all-in-one home services platform connecting users with verified experts for repairs, cleaning, plumbing, spa and more — all within 10 minutes


                     </div>
                     <div className='employeedp h-16 w-16 md:h-20 md:w-20  rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA3 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q3Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-16 w-16 md:h-20 md:w-20   rounded-full bg-gray-400'></div>
                     <div className='Q3 text-sm md:text-base h-full w-[70%] md:w-[40%] bg-[#bbd7f4] rounded-3xl text-[#18375d] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     Okay. So, do you offer regular or subscription-based services?


                     </div>
               </div>
               <div className='A3Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A3 text-sm md:text-base h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     Yes, we offer both one-time services and subscriptionbased plans. You can choose weekly, bi-weekly, or monthly visits for services like cleaning, pest control, or maintenance tasks


                     </div>
                     <div className='employeedp h-16 w-16 md:h-20 md:w-20  rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA4 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q4Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-16 w-16 md:h-20 md:w-20   rounded-full bg-gray-400'></div>
                     <div className='Q4 text-sm md:text-base h-full w-[70%] md:w-[40%] bg-[#bbd7f4] rounded-3xl text-[#18375d] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     What happens if an expert doesn’t show up on time?

                     </div>
               </div>
               <div className='A4Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A4 text-sm md:text-base h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     Punctuality is our priority. In rare cases of delays, we let you know immediately. You can track the expert’s real-time location or contact our support team for quick assistance.


                     </div>
                     <div className='employeedp h-16 w-16 md:h-20 md:w-20  rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA5 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q5Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-16 w-16 md:h-20 md:w-20   rounded-full bg-gray-400'></div>
                     <div className='Q5 text-sm md:text-base h-full w-[70%] md:w-[40%] bg-[#bbd7f4] rounded-3xl text-[#18375d] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     Amazing. So, are there any charges for cancelling or rescheduling bookings?

                     </div>
               </div>
               <div className='A5Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A5 text-sm md:text-base h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     You can cancel or reschedule for free if done within 1 hour before the service time. However, last-minute cancellations may incur minimal charges. Refer to Cancellation Policy.


                     </div>
                     <div className='employeedp h-16 w-16 md:h-20 md:w-20  rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA6 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q6Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-16 w-16 md:h-20 md:w-20   rounded-full bg-gray-400'></div>
                     <div className='Q6 text-sm md:text-base h-full w-[70%] md:w-[40%] bg-[#bbd7f4] rounded-3xl text-[#18375d] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     What happens if I’m not satisfied with the service?

                     </div>
               </div>
               <div className='A6Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%]  '>
                     
                     <div className='A6 text-sm md:text-base h-full w-[70%] md:w-[40%] bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     If you’re unsatisfied, you can report the issue via the app or contact our support team. We’ll work to resolve your concern promptly.



                     </div>
                     <div className='employeedp h-16 w-16 md:h-20 md:w-20  rounded-full bg-gray-900'></div>
               </div>

            </div>
            <div className='QnA7 h-[50vh] w-full flex flex-col justify-between'>
               <div className='Q7Container h-[40%] w-[100%] flex justify-center items-end gap-[1%] '>
                     <div className='userdp h-16 w-16 md:h-20 md:w-20   rounded-full bg-gray-400'></div>
                     <div className='Q7 text-sm md:text-base h-full w-[70%] md:w-[40%] bg-[#bbd7f4] rounded-3xl text-[#18375d] font-glacial font-light flex items-center justify-start p-[2%]  mr-[11vw]'>
                     Got It. What if I require an instant service?


                     </div>
               </div>
               <div className='A7Container h-[40%] w-[100%] flex justify-center items-end  gap-[1%] pb-[2vh]  '>
                     
                     <div className='A7 text-sm md:text-base h-full w-[70%] md:w-[40%]  bg-[#5187c0] rounded-3xl text-[#e1eefd] font-glacial font-light flex items-center justify-start px-[2%] ml-[11vw] text-left'>
                     Currently, we only provide service scheduling. Soon we will be adding instant services in under 10 minutes.



                     </div>
                     <div className='employeedp h-16 w-16 md:h-20 md:w-20  rounded-full bg-gray-900'></div>
               </div>

            </div>
            


          </div>
          

       </div>
       <div className='transition-gap h-[50vh] w-[100vw] bg-[#e1eefd] '>

       </div>

       {/* Card Hover */}
       <div className='h-[160vh] w-[100%] bg-[#e1eefd] overflow-y-hidden m-[0%] flex flex-col justify-center text-center'>
        <div ref={hoverCircle} className=' h-[140vw] md:h-[80vw] w-[140vw] md:w-[80vw] mt-[-140vh] md:mt-[-60vw] rounded-full bg-[#004aad] flex flex-col mx-[-20vw] md:mx-[12vw] absolute -z-9'></div>
        <h1 ref={hoverh11} className='text-4xl md:text-5xl px-4 font-bold font-glacial text-[#e1eefd]  mt-[-15vh] relative  z-5'>We’re more than just an app,</h1>
        <h1 ref={hoverh12} className='text-4xl md:text-5xl font-bold font-glacial text-[#e1eefd]  mt-[5vh] relative  z-5 ml-[2vw]'>we’re your trusted home partner!</h1>
        <div className= 'scrollele hover container w-full h-[80vh] self-center mt-[20vh] relative z-[15] flex justify-center items-center gap-[1%] invisible md:visible overflow-x-hidden '>
           <div className= 'hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow text-start mega_shadow_pc' style={{ backgroundImage: 'url(/hover/8.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>Beyond Bookings,We Build Trust </div>
           <div className=' hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow text-start mega_shadow_pc' style={{ backgroundImage: 'url(/hover/9.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>More Than Service,We Offer Care</div>
           <div className=' hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow text-start mega_shadow_pc' style={{ backgroundImage: 'url(/hover/10.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>Not Just an App,a Helping Hand </div>
           <div className=' hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow text-start mega_shadow_pc' style={{ backgroundImage: 'url(/hover/11.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>Your Home,Our Responsibility </div>
           <div className=' hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow text-start mega_shadow_pc' style={{ backgroundImage: 'url(/hover/12.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>Service with a Personal Touch </div>
           <div className=' hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow text-start mega_shadow_pc' style={{ backgroundImage: 'url(/hover/13.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>Here for Every Home, Every Need </div>
           <div className='hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow text-start mega_shadow_pc' style={{ backgroundImage: 'url(/hover/14.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>From Quick Fixes to Lasting Trust </div>
           <div className='hovCon bg-red-600 w-[10%] h-[95%] grayscale hover:grayscale-0 text-opacity-0 hover:text-opacity-100 text-3xl flex flex-col justify-end items-start px-[3%] py-[3%] rounded-2xl hover:w-[27%] hover:bg-emerald-600 transition-all duration-700 flex-1 hover:text-shadow text-start mega_shadow_pc' style={{ backgroundImage: 'url(/hover/15.webp)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>A Relationship, Not Just a Transaction </div>
          
            

        </div>
        </div>
        
        <div className='mobHoverContainer w-full h-[430vh] mt-[-100vh] flex md:hidden flex-col justify-evenly items-center relative'>
  {[
    { image: '/hover/8.webp', text: 'Beyond Bookings, We Build Trust' },
    { image: '/hover/9.webp', text: 'More Than Service, We Offer Care' },
    { image: '/hover/10.webp', text: 'Not Just an App, a Helping Hand' },
    { image: '/hover/11.webp', text: 'Your Home, Our Responsibility' },
    { image: '/hover/12.webp', text: 'Service with a Personal Touch' },
    { image: '/hover/13.webp', text: 'Here for Every Home, Every Need' },
    { image: '/hover/14.webp', text: 'From Quick Fixes to Lasting Trust' },
    { image: '/hover/15.webp', text: 'A Relationship, Not Just a Transaction' }
  ].map((item, index) => (
    <div 
      key={index}
      ref={el => mobHoverRef.current[index] = el} 
      className='w-[90%] h-[40vh] rounded-3xl flex items-end justify-start text-left transition-all duration-300 overflow-hidden'
      style={{
        backgroundImage: `url(${item.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        filter: 'grayscale(100%)'
      }}
    >
      <h2 className='text-white text-2xl font-bold opacity-0 transition-opacity duration-300 text-left mb-[3vh] px-4 mega_shadow'>{item.text}</h2>
    </div>
  ))}
</div>
<div className='circleConMob flex md:hidden bg-[#004aad] rounded-full h-[120vw] w-[120vw] ml-[-8.75vw] justify-center items-center text-center'>
        <h1 className='text-[#e1eefd] text-xl font-glacial font-bold px-[10%] pr-[12%]  '>
              Be among the First 100 to enjoy a FREE service along with Exciting Surprise Gifts! Don't miss out!
              </h1>
        </div>

        {/* waitlist form */}
        <div id='waitlist' className='scrollele form-section h-[140vh] w-[100vw]  flex justify-between z-[20] '>
        <Toaster />
        <div className='circleCon md:h-full md:w-[25%] ml-[-35vw] overflow-x-visible hidden md:inline-block'> <div className='formCircle h-[175vh] w-[175vh]  rounded-full bg-[#004aad] flex flex-col items-end justify-center gap-[3vh]'>
             <div className='headingCon  mr-[22vh] h-[25%] w-[40%] mt-[-8vh]'>
              <h1 className='text-[#e1eefd] text-4xl font-glacial font-bold '>
              Be among the First 100 to enjoy a FREE service along with Exciting Surprise Gifts! Don't miss out!
              </h1>
              </div>  
             <div className='contact-info h-[8%] w-[30%] mr-[39vh] mb-[0vh] mt-[-12vh] '>
             
             <a href='mailto:helpdesk@mydoum.com' className='font-glacial text-[#e1eefd] text-2xl font-light'> helpdesk@mydoum.com</a>
             </div>
             <div className='whatsapp h-[5%] w-[35%] mr-[17vh] mt-[-10vh]' >
              <a href='https://wa.me/918967908081' className='font-glacial text-[#e1eefd] text-2xl font-thin whitespace-nowrap flex items-center justify-start gap-4 ml-[-13vh]   '>Need help? Message us! <div><BsWhatsapp color='#e1eefd' /></div>  </a> </div>
              <div className='address font-glacial text-[#e1eefd] text-2xl font-light h-[10%] w-[40%] mr-[22vh] mt-[-5vh] '>Salt Lake City, Kolkata,Kolkata 700091,West Bengal, India</div>

            

            </div></div>
                

          <div className='FormCon h-[60%] md:h-full w-full md:w-[65%] mt-[-35vh]  md:mt-[10vh] flex justify-center items-center flex-col '>
            <form className='ml:0 md:ml-[10vw] h-[50%] md:h-[40%] mt-0 md:mt-[5vh] w-[90%] md:w-[65%] bg-[#bbd7f47a] rounded-2xl mb-[2vh] drop-shadow-2xl flex flex-col items-center justify-evenly'onSubmit={handleSubmit(onSubmit,onError)} id='myForm'>
            
              <div className='names flex h-[20%] w-[90%]  items-center justify-between '>
                <div className='firstname h-full w-[45%] flex flex-col'>
                  <label className='font-glacial text-[#18375d] text-lg font-medium'>First Name</label>
                  <input type='text' name='firstname' required placeholder='First Name'  className='h-[60%] w-full rounded-lg bg-[#a2c1e7] focus:border-2 focus:border-[#18375d] placeholder-[#18375d] px-[1rem]' {...register('firstName')}/>

                </div>
                <div className='lastname h-full w-[45%]  flex flex-col'>
                  <label className='font-glacial text-[#18375d] text-lg font-medium'>Last Name</label>
                  <input type='text' name='lastname' required placeholder='Last Name'  className='h-[60%] w-full rounded-lg bg-[#a2c1e7] focus:border-2 focus:border-[#18375d] placeholder-[#18375d] px-[1rem]' {...register('lastName')} />

                </div>
              </div>
              <div className='Email flex h-[20%] w-[90%]  items-start justify-between flex-col '>
              <label className='font-glacial text-[#18375d] text-lg font-medium'>Email</label>
              <input type='text' name='Email' required placeholder='Name@gmail.com'  className='h-[60%] w-full rounded-lg bg-[#a2c1e7] focus:border-2 focus:border-[#18375d] placeholder-[#18375d] px-[1rem]'   {...register('Email', {
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Enter a valid email",
    },
  })}/>

              </div>
              <div className='phone no flex h-[20%] w-[90%]  items-start justify-between flex-col '>
              <label className='font-glacial text-[#18375d] text-lg font-medium'>Phone no.</label>
              <div className="w-full h-[60%] flex justify-between">
  <div className="w-[20%] h-[90%] mt-[0.75%] md:mt-0 md:h-[100%] bg-[#a2c1e7] rounded-lg flex justify-center items-center text-[#18375d] text-lg gap-2">
    <div
      className="h-[20%] w-[20%]"
      style={{
        backgroundImage: "url(/india.webp)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
    +91
  </div>
  <input
    type="tel"
    name="phone"
    required
    placeholder="Enter Phone Number"
    className="h-full w-[75%] rounded-lg bg-[#a2c1e7] focus:border-2 focus:border-[#18375d] placeholder-[#18375d] px-[1rem]"
    {...register("mobile", {
      pattern: {
        value: /^[6-9]\d{9}$/,
        message: "Enter a valid 10-digit Indian mobile number",
      },
    })}
  />
</div>

              </div>
              <div className='Message flex h-[30%] w-[90%]  items-start justify-between flex-col '>
              <label className='font-glacial text-[#18375d] text-lg font-medium'>Message</label>
              <input type='text' name='Message'  placeholder='Enter Your Message'  className='h-[70%] w-full rounded-lg bg-[#a2c1e7] focus:border-2 focus:border-[#18375d] placeholder-[#18375d] px-[1rem]' {...register('Message')}/>

              </div>
              

            </form>
            <button  
  type="submit"  
  className="ml:0 md:ml-[10vw] bg-gradient-to-br from-[#1CE7FF] via-[#0045FF] to-[#00C6FF] text-[#e1eefd] text-lg font-glacial font-medium w-[50%] h-[7.5%] md:h-[5%] rounded-2xl"
  onClick={() => document.getElementById('myForm').requestSubmit()}
>
  Claim Your Spot Now
</button>

          </div>

        </div>

   {/*testimonials */}    
{/* <div className="testimonials-section relative h-[70vh] w-full bg-[#e1eefd] md:px-8 overflow-hidden py-12 top-[-90vh] md:top-[-10vh] md:mt-0">
  <h2 className="text-4xl font-bold text-[#18375d] text-center mb-8">What Our Customers Say</h2>
  
  <div 
    ref={scrollContainerRef}
    className="flex gap-4 overflow-x-auto px-4 snap-x snap-mandatory scroll-smooth"
    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
  >
    {testimonials.map((testimonial, index) => {
      const videoRef = useRef(null);
      videoRefs.current[index] = videoRef.current;

      return (
        <div
          key={testimonial.id}
          className="flex-none w-[200px] h-[300px] relative snap-center cursor-pointer group"
          onClick={() => handleVideoClick(index)}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover rounded-lg"
            src={testimonial.video}
            muted
            onLoadedMetadata={(e) => {
              // Set video to 1 second for thumbnail
              e.target.currentTime = 1;
            }}
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 rounded-lg">
            <FaPlay className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-4xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
          </div>
        </div>
      );
    })}
  </div>
    
  //active video modal
   
  {activeVideoIndex !== null && (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="relative w-[90vw] md:w-[80vw] aspect-video max-h-[90vh]">
        <video
          src={testimonials[activeVideoIndex].video}
          className="w-full h-full object-contain"
          controls
          autoPlay
        />
        
        <button
          onClick={handleClose}
          className="absolute top-0 right-0 text-white text-4xl hover:text-gray-300 transition-colors"
        >
          <IoCloseCircle />
        </button>

        {activeVideoIndex > 0 && (
          <button
            onClick={handlePrevVideo}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors"
          >
            <IoIosArrowBack />
          </button>
        )}

        {activeVideoIndex < testimonials.length - 1 && (
          <button
            onClick={handleNextVideo}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl hover:text-gray-300 transition-colors"
          >
            <IoIosArrowForward />
          </button>
        )}
      </div>
    </div>
  )}
</div> */}
                        {/*footer */}
   <div className='scrollele footer h-auto min-h-[75vh] w-[100%] md:w-[100%] mt-[-80vh] md:mt-[20vh] mb-[-20vh] mix-blend-multiply flex flex-wrap items-start justify-evenly bg-black gap-8 md:py-8 z-[11] mx-0 md:mx-[0%]' style={style2} >
   <div className='col1 h-auto w-full md:w-[25%] flex flex-col justify-center mt-6 md:mt-12 px-4' >
      <div className='logo h-[100px] w-[80%] items-start mx-auto md:mx-0 mt[0] md:mt-[5vh]' style={{ backgroundImage: 'url(/DOUM-logo-removebg-preview.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', mixBlendMode: 'multiply' }}> </div>
      <br/>
      <div className='text-container text-xl text-[#ffffff] md:text-[#063281] mega_shadow font-glacial font-extralight text-center md:text-left'>
      Salt Lake City, Kolkata, Kolkata 700091, West Bengal, India
      </div>
      <br/>
      <div className='links flex justify-center md:justify-start gap-4 text-[#ffffff] md:text-[#063281]  mega_shadow'>
        <Link target="_blank" href='https://www.linkedin.com/company/letsdoumit/'><AiOutlineLinkedin  size={40} /></Link>
        <Link target="_blank" href='https://www.instagram.com/letsdoum?igsh=MWY2YXNyODRhZG51aw=='><CiInstagram  size={40}  /></Link>
        <Link target="_blank" href='https://www.facebook.com/'><AiOutlineFacebook  size={40}  /></Link>
        <Link target="_blank" href='https://x.com/'><FaXTwitter  size={40}  /></Link>
      </div>
   </div>
   <div className='col2 h-auto w-full md:w-[20%] flex flex-col justify-evenly items-center mt-6 md:mt-20 px-4'>
      <h1 className='text-[#ffffff] md:text-[#063281]  mega_shadow font-glacial font-bold text-xl mb-4'>Navigation</h1>
      <Link href='/' className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281]  mega_shadow mb-2' onClick={toHome}>Home</Link>
      <Link href='/'className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281] mega_shadow mb-2'onClick={toHowItWorks} >How it works</Link>
      <Link href='/' className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281]  mega_shadow mb-2'onClick={toWhyUs}>why us</Link>
      <Link href='/' className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281]  mega_shadow mb-2'onClick={toFAQ}>FAQs</Link>
      <Link href='/' className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281]  mega_shadow mb-2'onClick={toWaitlist}>Join Waitlist</Link>
   </div>
   <div className='col3 h-auto w-full md:w-[20%] flex flex-col justify-evenly items-center md:items-start mt-6 md:mt-20 px-4'>
      <h1 className='text-[#ffffff] md:text-[#063281]  mega_shadow font-glacial font-bold text-xl mb-4'>Get in Touch</h1>
      <a href='mailto:helpdesk@mydoum.com' className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281]  mega_shadow mb-2'>helpdesk@mydoum.com</a>
      <h1 className='text-[#ffffff] md:text-[#063281]  mega_shadow font-glacial font-bold text-xl mt-4 mb-2'>Enquire</h1>
      <Link href='/' className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281]  mega_shadow mb-2'>+91 8967908081</Link>
      <h1 className='text-[#ffffff] md:text-[#063281]  mega_shadow font-glacial font-bold text-xl mt-4 mb-2'>Support</h1>
      <Link href='/' className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281]  mega_shadow mb-2'>+91 8420385246</Link>
   </div>
   <div className='col4 h-auto w-full md:w-[20%] flex flex-col justify-evenly items-center md:items-start mt-6 md:mt-20 px-4'>
  <h1 className='text-[#ffffff] md:text-[#063281] mega_shadow font-glacial font-bold text-xl mb-4'>Legal</h1>
  <Link href='/legal/terms-of-use' className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281] mega_shadow mb-2'>
    Terms of Use
  </Link>
  <Link href='/legal/privacy-policy' className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281] mega_shadow mb-2'>
    Privacy Policy
  </Link>
  <Link href='/legal/equal-oppurtunity-policy' className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281] mega_shadow mb-2'>
    Equal Opportunity Policy
  </Link>
  <Link href='/legal/refund-and-cancellation' className='font-light font-glacial text-md text-[#ffffff] md:text-[#063281] mega_shadow mb-2'>
    Refund and Cancellation Policy
  </Link>
</div>
   <div className='w-full text-center text-[#ffffff] md:text-[#063281] font-glacial font-light mt-8'>
    <p>&copy; 2025 DOUM. All rights reserved.</p>
  </div>
   </div>     

      

    </>
  )
}

export default Hero