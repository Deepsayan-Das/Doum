'use client'
import React, { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useLoader, useThree } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Loading from '../loading'
import { Html } from '@react-three/drei'
gsap.registerPlugin({ScrollTrigger})

function Model() {
    const getScrollOffset = () => {
        return window.innerHeight < 700 ? window.innerHeight * 0.5 : 0; // 50vh offset for smaller screens
    };

    const setInitialState = () => {
        ScrollTrigger.getAll().forEach(st => {
            st.scroll(window.scrollY);
            st.refresh();
        });
    }
    const modelRef = useRef()
    const model2Ref = useRef()
    const result = useLoader(GLTFLoader, '/IP 4.glb')
    const result2 = useLoader(GLTFLoader, '/IP 5.glb')
    setInitialState();
    requestAnimationFrame(setInitialState);
    
    
    useEffect(() => {
        // Ensure first model is visible and second is hidden initially
        if (modelRef.current && model2Ref.current) {
            modelRef.current.visible = true
            model2Ref.current.visible = false
        }
    }, [])
    
    useGSAP(() => {
        if (!modelRef.current || !model2Ref.current) return

        const heightOffset = getScrollOffset();

        ScrollTrigger.config({
            syncInterval: 0.1,  // Sync more frequently
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // Optimize refresh events
            limitCallbacks: true
        });
        
        // Set initial visibility
        modelRef.current.visible = true
        model2Ref.current.visible = false
        
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'top top',
                end: `+=${window.innerHeight*3/2}`,
                
                scrub: {
                    ease: "power1.out",
                    smoothing: 0.5,
                    duration: 0.5
                },
                preventOverlaps: true,
                fastScrollEnd: true,
                immediateRender: false,
                invalidateOnRefresh: true, // Recalculate on resize/refresh
                fastScrollEnd: true, // Better handling of fast scrolling
            }
        })
        const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'top 30%',
                end: 'bottom 60%',
                scrub: {
                    ease: "power1.out",
                    smoothing: 0.5,
                    duration: 0.5
                },
                preventOverlaps: true,
                fastScrollEnd: true,
                immediateRender: false,
                invalidateOnRefresh: true, // Recalculate on resize/refresh
  fastScrollEnd: true, // Better handling of fast scrolling
            }
        })
        const tlR = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${window.innerHeight * 2.0}`, // -150vh
                end: `top+=${(window.innerHeight * 3.0)+heightOffset}`, // -250vh
                scrub: {
                    ease: "power1.out",
                    smoothing: 0.5,
                    duration: 0.5
                },
                preventOverlaps: true,
                fastScrollEnd: true,
                immediateRender: false,
                invalidateOnRefresh: true, // Recalculate on resize/refresh
  fastScrollEnd: true, // Better handling of fast scrolling
                
            }
        })
        const tlR2 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${window.innerHeight * 4.0}`, // -150vh
                end: `top+=${(window.innerHeight * 5.0)+heightOffset}`, // -250vh
                scrub: {
                    ease: "power1.out",
                    smoothing: 0.5,
                    duration: 0.5
                },
                preventOverlaps: true,
                fastScrollEnd: true,
                immediateRender: false,
                invalidateOnRefresh: true, // Recalculate on resize/refresh
  fastScrollEnd: true, // Better handling of fast scrolling
                
                onUpdate: (self) => {
                    // Get scroll direction and progress
                    const progress = self.progress;
                    const direction = self.getVelocity() >= 0 ? 1 : -1;
                    const currentRotation = modelRef.current.rotation.y;

                    // Scrolling down
                    if (direction > 0 && currentRotation < 0.6 * Math.PI && !model2Ref.current.visible) {
                        modelRef.current.visible = false;
                        model2Ref.current.visible = true;
                    }
                    // Scrolling up
                    else if (direction < 0 && currentRotation > 0.4 * Math.PI && model2Ref.current.visible) {
                        modelRef.current.visible = true;
                        model2Ref.current.visible = false;
                    }
                }
            }
        })
        const tlR3 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${window.innerHeight * 5.0}`, // -150vh
                end: `top+=${window.innerHeight * 6.0}`, // -250vh
                scrub: {
                    ease: "power1.out",
                    smoothing: 0.5,
                    duration: 0.5
                },
                preventOverlaps: true,
                fastScrollEnd: true,
                immediateRender: false,
                invalidateOnRefresh: true, // Recalculate on resize/refresh
  fastScrollEnd: true, // Better handling of fast scrolling
                
            }
        })
        const tlR4 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${window.innerHeight * 6.0}`, // -150vh
                end: `top+=${window.innerHeight * 7.0}`, // -250vh
                scrub: {
                    ease: "power1.out",
                    smoothing: 0.5,
                    duration: 0.5
                },
                preventOverlaps: true,
                fastScrollEnd: true,
                immediateRender: false,
                invalidateOnRefresh: true, // Recalculate on resize/refresh
  fastScrollEnd: true, // Better handling of fast scrolling
                
            }
        })
        const tlR5 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${window.innerHeight * 7.0}`, // -150vh
                end: `top+=${window.innerHeight * 8.0}`, // -250vh
                scrub: {
                    ease: "power1.out",
                    smoothing: 0.5,
                    duration: 0.5
                },
                preventOverlaps: true,
                fastScrollEnd: true,
                immediateRender: false,
                invalidateOnRefresh: true, // Recalculate on resize/refresh
  fastScrollEnd: true, // Better handling of fast scrolling
                
            }
        })
        const tl3 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${window.innerHeight * 8.0}`, // -150vh
                end: `top+=${window.innerHeight * 9.0}`, // -250vh
                scrub: {
                    ease: "power1.out",
                    smoothing: 0.5,
                    duration: 0.5
                },
                preventOverlaps: true,
                fastScrollEnd: true,
                immediateRender: false,
                invalidateOnRefresh: true, // Recalculate on resize/refresh
  fastScrollEnd: true, // Better handling of fast scrolling
            }
        })
        const tl4 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${window.innerHeight * 9.0}`, // -150vh
                end: `top+=${window.innerHeight * 9.0}`, // -250vh
                scrub: {
        ease: "power1.out",
        smoothing: 0.5,
        duration: 0.5
    },
    preventOverlaps: true,
    fastScrollEnd: true,
    immediateRender: false,
                invalidateOnRefresh: true, // Recalculate on resize/refresh
  fastScrollEnd: true, // Better handling of fast scrolling
                
            }
        })
        const fadeOut = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${window.innerHeight * 9.0}`, // -150vh
                end: `top+=${window.innerHeight * 9.4}`, // -250vh
                scrub: {
                    ease: "power1.out",
                    smoothing: 0.5,
                    duration: 0.5
                },
                preventOverlaps: true,
                fastScrollEnd: true,
                immediateRender: false,
                invalidateOnRefresh: true,
                fastScrollEnd: true,
                onUpdate: (self) => {
                    const progress = self.progress;
                    [modelRef, model2Ref].forEach(ref => {
                        if (ref.current) {
                            ref.current.traverse((node) => {
                                if (node.material) {
                                    node.material.transparent = true;
                                    node.material.opacity = 1 - progress;
                                    node.material.needsUpdate = true;
                                }
                            });
                        }
                    });

                    // If progress is complete, hide the models
                    if (progress === 1) {
                        modelRef.current.visible = false;
                        model2Ref.current.visible = false;
                    }
                },
                onLeave: () => {
                    modelRef.current.visible = false;
                    model2Ref.current.visible = false;
                },
                onEnterBack: () => {
                    // Only make visible if we're not at the end of the animation
                    
                        if (model2Ref.current.visible) {
                            model2Ref.current.visible = true;
                        } else {
                            modelRef.current.visible = true;
                        }
                    
                }
            }
        });
        tl.fromTo([modelRef.current.scale, model2Ref.current.scale], {
            x: 18,
            y: 18,
            z: 18
        }, {
            x: 10,
            y: 10,
            z: 10,
            immediateRender: false
            
        }, 'hi')
        .fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
            x: -Math.PI/4,
            y: Math.PI,
            z: 0
        }, {
            x: 0,
            y: Math.PI,
            z: 0,
            immediateRender: false
        }, '-=1')
        // .fromTo([modelRef.current.scale, model2Ref.current.scale], {
        //     x: 10,
        //     y: 10,
        //     z: 10
        // }, {
        //     x: 9,
        //     y: 9,
        //     z: 9,
        //     immediateRender: false
        // })

        tl2.fromTo([modelRef.current.position, model2Ref.current.position], {
            x: 0,
            y: -50,
            z: -15
        }, {
            x: 3,
            y: 6,
            z: -25,
            immediateRender: false
        })

        tlR.fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
            x: 0,
            y: Math.PI,
            z: 0,  
        }, {
            x: 0,
            y: 2*Math.PI/3,
            z: 0,
        }, 'kbc')
        .fromTo([modelRef.current.scale, model2Ref.current.scale], {
            x: 9,
            y: 9,
            z: 9,  
        }, {
            x: 6.5,
            y: 6.5,
            z: 6.5,
        }, 'kbc')
        
        tlR2.fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
            x: 0,
            y: 2*Math.PI/3,
            z: 0,  
        }, {
            x: 0,
            y: Math.PI/2,
            z: 0,
        })

        tlR3.fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
            x: 0,
            y: Math.PI/2,
            z: 0,
        }, {
            x: 0,
            y: Math.PI/4,
            z: 0,
        })

        tlR4.fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
            x: 0,
            y: Math.PI/4,
            z: 0,
        }, {
            x: 0,
            y: 0,
            z: 0,
        })

        tlR5.fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
            x: 0,
            y: 0,
            z: 0,
        }, {
            x: 0,
            y: -Math.PI,
            z: 0,
        })
        tl3.fromTo(model2Ref.current.scale,{
            x: 6.5,
            y: 6.5,
            z: 6.5,     
        },{
            x: 35,y:35,z: 35,
        },'hy')
        tl3.fromTo(model2Ref.current.position,{
            x: 3,
            y: 6,
            z: -25
        },{
            x: 0,
            y: 6,
            z: -25
        })
        fadeOut.fromTo(model2Ref.current,{
            opacity:1
        },{
            opacity:0
        })

    }, [modelRef.current, model2Ref.current])
    useEffect(() => {
        // Set initial transform when the component mounts
        if (modelRef.current) {
            modelRef.current.scale.set(18, 18, 18);
            modelRef.current.rotation.set(-Math.PI/4, Math.PI, 0);
            modelRef.current.position.set(3, -50, -15);
        }
    }, []);

    return (
        <>
            <primitive 
                object={result.scene} 
                scale={[18, 18, 18]} 
                position={[3,-50,-15]}
                rotation={[-Math.PI/4,Math.PI,0]}
                ref={modelRef}
            />
            <primitive 
                object={result2.scene} 
                scale={[0.5, 0.5, 0.5]} 
                ref={model2Ref}
            />
        </>
    )
}
 function Model2(){

    const getScrollOffset = () => {
        // return window.innerHeight < 700 ? window.innerHeight*0.3 : 0; // 50vh offset for smaller screens
        
        if(window.innerHeight<650)
            return window.innerHeight*0.3
        if(window.innerHeight<700)
            return window.innerHeight*0.05
        if(window.innerHeight<750){
            const hVal = window.innerHeight
          const offset = hVal * 0.01 *-1
          
          return offset
            
        }
        if(window.innerHeight<1000){
            const hVal = window.innerHeight
          const offset = hVal * 7.5 *-1
          console.log(offset)
          return offset
        }
        return 0 
        }
       
   
    
    const setInitialState = () => {
        ScrollTrigger.getAll().forEach(st => {
            st.scroll(window.scrollY);
            st.refresh();
        });
    }
    const modelRef = useRef()
    const model2Ref = useRef()
    const model3Ref = useRef()
    const model4Ref = useRef()
    const result = useLoader(GLTFLoader, '/IP 1.glb')
    const result2 = useLoader(GLTFLoader, '/IP 2.glb')
    const result3 = useLoader(GLTFLoader, '/IP 3.glb' )
    const result4 = useLoader(GLTFLoader, '/IP 6.glb')

    setInitialState();
    requestAnimationFrame(setInitialState);
    useEffect(() => {
        // Ensure first model is visible and second is hidden initially
        if (modelRef.current && model2Ref.current&& model3Ref.current.visible) {
            modelRef.current.visible = false
            model2Ref.current.visible = false
            model3Ref.current.visible = false
            model4Ref.current.visible = false

        
        }
    }, [])

    useGSAP(()=>{
        
        

        if(!modelRef.current||!model2Ref.current||!model3Ref) return
        const heightOffset = getScrollOffset();
        ScrollTrigger.config({
            syncInterval: 0.1,  // Sync more frequently
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize", // Optimize refresh events
            limitCallbacks: true
        });
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${(window.innerHeight * 8.7)+heightOffset}`, // -150vh
                end: `top+=${(window.innerHeight * 11.2)+heightOffset}`, // -250vh
                
                scrub: {
        ease: "power1.out",
        smoothing: 0.5,
        duration: 0.5
    },
    preventOverlaps: true,
    fastScrollEnd: true,
    immediateRender: false,
                onEnter: ()=>{
                    modelRef.current.visible = true
                    model2Ref.current.visible = false
                    model3Ref.current.visible = false
                },
                onEnterBack: ()=>{
                    modelRef.current.visible = true
                    model2Ref.current.visible = false
                    model3Ref.current.visible = false
                },
                onLeave:()=>{
                    modelRef.current.visible = true
                    model2Ref.current.visible = false
                    model3Ref.current.visible = false
                },
                onLeaveBack:()=>{
                    modelRef.current.visible = false
                    model2Ref.current.visible = false
                    model3Ref.current.visible = false
                }
            }
        })
        

        
        tl.fromTo([modelRef.current.rotation, model2Ref.current.rotation,model3Ref.current.rotation], {
            x: -Math.PI/4,
            y: Math.PI,
            z: 0
        }, {
            x: 0,
            y: Math.PI,
            z: 0,
        }, 'hi')
        .fromTo([modelRef.current.scale, model2Ref.current.scale,model3Ref.current.scale,model4Ref.current.scale], {
            x: 10,
            y: 10,
            z: 10
        }, {
            x: 6,
            y: 6,
            z: 6,
        },'hi')
        .fromTo([modelRef.current.rotation, model2Ref.current.rotation,model3Ref.current.rotation], {
            x: -Math.PI/4,
            y: Math.PI,
            z: 0
        }, {
            x: 0,
            y: 5*Math.PI/6,
            z: 0,
        }, 'hi')
        .fromTo([modelRef.current.position, model2Ref.current.position,model3Ref.current.position], {
            x: 0,
            y: -55,
            z: 15
        }, {
            x: 15,
            y: 5,
            z: -25,
        },'hi')

        const tl2 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${(window.innerHeight * 11.2)+heightOffset}`, // -150vh
                end: `top+=${(window.innerHeight * 11.9)+heightOffset}`, // -250vh
                
                scrub: {
        ease: "power1.out",
        smoothing: 0.5,
        duration: 0.5
    },
    preventOverlaps: true,
    fastScrollEnd: true,
    immediateRender: false,
                onEnter: ()=>{
                    modelRef.current.visible = false
                    model2Ref.current.visible = true
                    model3Ref.current.visible = false
                },
                onEnterBack: ()=>{
                    modelRef.current.visible =false
                    model2Ref.current.visible = true
                    model3Ref.current.visible = false
                },
                onLeave:()=>{
                    modelRef.current.visible = false
                    model2Ref.current.visible = false
                    model3Ref.current.visible = false
                },
                onLeaveBack:()=>{
                    modelRef.current.visible = true
                    model2Ref.current.visible = false
                    model3Ref.current.visible = false
                }
            }
        })

        tl2.fromTo([modelRef.current.position, model2Ref.current.position,model3Ref.current.position], {
            x: 15,
            y: 5,
            z: -25,
        }, {
            x: -15,
            y: 5,
            z: -25,
        },'hi')
        .fromTo([modelRef.current.rotation, model2Ref.current.rotation,model3Ref.current.rotation], {
            x: 0,
            y:  5*Math.PI/6,
            z: 0
        }, {
            x: 0,
            y: -5*Math.PI/6,
            z: 0,
        }, 'hi')

        const tl3 = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${(window.innerHeight * 11.9)+heightOffset}`, // -150vh
                end: `top+=${(window.innerHeight * 12.5)+heightOffset}`, // -250vh
                
                scrub: {
        ease: "power1.out",
        smoothing: 0.5,
        duration: 0.5
    },
    preventOverlaps: true,
    fastScrollEnd: true,
    immediateRender: false,
                onEnter: ()=>{
                    modelRef.current.visible = false
                    model2Ref.current.visible = false
                    model3Ref.current.visible = true
                },
                onEnterBack: ()=>{
                    modelRef.current.visible =false
                    model2Ref.current.visible = false
                    model3Ref.current.visible = true
                    model4Ref.current.visible = false
                },
                onLeave:()=>{
                    modelRef.current.visible = false
                    model2Ref.current.visible = false
                    model3Ref.current.visible = false
                    model4Ref.current.visible = true
                },
                onLeaveBack:()=>{
                    modelRef.current.visible = false
                    model2Ref.current.visible = true
                    model3Ref.current.visible = false
                }
            }
        })
        tl3.fromTo([modelRef.current.position, model2Ref.current.position,model3Ref.current.position,model4Ref.current.position], {
            x: -15,
            y: 5,
            z: -25,
        }, {
            x: 15,
            y: 5,
            z: -25,
        },'hi')
        .fromTo([modelRef.current.rotation, model2Ref.current.rotation,model3Ref.current.rotation,model4Ref.current.rotation], {
            x: 0,
            y: -5*Math.PI/6,
            z: 0,
        }, {
            x: 0,
            y: 5*Math.PI/6,
            z: 0,
        }, 'hi')
        const tl4= gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${(window.innerHeight * 12.6)+heightOffset}`, // -150vh
                end: `top+=${(window.innerHeight * 13.1)+heightOffset}`, // -250vh
                
                scrub: {
        ease: "power1.out",
        smoothing: 0.5,
        duration: 0.5
    },
    preventOverlaps: true,
    fastScrollEnd: true,
    immediateRender: false,
                onEnter: ()=>{
                    model4Ref.visible = true
                },
                onEnterBack: ()=>{
                    model4Ref.visible = true
                },
                onLeave:()=>{
                    model4Ref.visible = false
                },
                onLeaveBack:()=>{
                    model4Ref.visible = false
                }
            }
        })

        tl4.fromTo(model4Ref.current.rotation,{ 
            x: 0,
            y: -5*Math.PI/6,
            z: 0,
        },{
            x: 0,
            y: Math.PI,
            z: Math.PI/2,
        },'hola'

        )
        tl4.fromTo(model4Ref.current.scale,{ 
            
                x: 6,
                y: 6,
                z: 6,
            
        },{
            x: 24,
            y: 30,
            z: 30,
        },'hola'

        )
        tl4.to(model4Ref.current.position,{
            x:5,y:5,z:-25
        },'hola')

        const fadeOut = gsap.timeline({
            scrollTrigger: {
                trigger: "#model-section",
                start: `top+=${(window.innerHeight * 14.1)+heightOffset}`, // -150vh
                end: `top+=${(window.innerHeight * 14.2)+heightOffset}`, // -250vh
                
                scrub: {
                    ease: "power1.out",
                    smoothing: 0.5,
                    duration: 0.5
                },
                preventOverlaps: true,
                fastScrollEnd: true,
                immediateRender: false,
                onUpdate: (self) => {
                    // Only use this method if your model has materials
                    if (model4Ref.current) {
                        model4Ref.current.traverse((node) => {
                            if (node.isMesh && node.material) {
                                // Make sure material is set to transparent
                                node.material.transparent = true;
                                node.material.needsUpdate = true;
                                node.material.opacity = 1 - self.progress;
                            }
                        });
                    }
                },
                onUpdate: (self) => {
                    const progress = self.progress;
                    [modelRef, model2Ref].forEach(ref => {
                        if (ref.current) {
                            ref.current.traverse((node) => {
                                if (node.material) {
                                    node.material.transparent = true;
                                    node.material.opacity = 1 - progress;
                                    node.material.needsUpdate = true;
                                }
                            });
                        }
                    });

                    // If progress is complete, hide the models
                    if (progress === 1) {
                        modelRef.current.visible = false;
                        model2Ref.current.visible = false;
                        model3Ref.current.visible = false;
                        model4Ref.current.visible = false;
                    }
                },
                
                onEnter: () => {
                    model4Ref.current.visible = true;
                },
                onEnterBack: () => {
                    model4Ref.current.visible = true;
                },
                onLeave: () => {
                    modelRef.current.visible = false;
                    model2Ref.current.visible = false;
                    model3Ref.current.visible = false;
                    model4Ref.current.visible = false;
                },
                onLeaveBack: () => {
                    modelRef.current.visible = false;
                    model2Ref.current.visible = false;
                    model3Ref.current.visible = false;
                    model4Ref.current.visible = false;
                }
            }
        });
    })
   

    return(
        <>
        <primitive 
            object={result.scene} 
            scale={[0.5, 0.5, 0.5]} 
            ref={modelRef}
            visible={false}
        />
        <primitive 
            object={result2.scene} 
            scale={[0.5, 0.5, 0.5]} 
            ref={model2Ref}
            visible={false}
        />
        <primitive
         object={result3.scene}
         scale={[0.5, 0.5, 0.5]}
         ref={model3Ref} visible={false} />
         <primitive
         object={result4.scene}
         scale={[0.5, 0.5, 0.5]}
         ref={model4Ref} visible={false}/>
    </>
    )


    
 }

 function Model3(){
    const modelRef = useRef()
    const result = useLoader(GLTFLoader, '/IP 7.glb')

    useGSAP(()=>{
        ScrollTrigger.config({
            syncInterval: 0.1,  // Sync more frequently
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // Optimize refresh events
            limitCallbacks: true
        });
        const tl =gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: `top+=${window.innerHeight * 17}`, // -150vh
                end: `top+=${window.innerHeight * 18}`, // -250vh
                
                scrub: 1
                
            }
        })

        tl.fromTo(modelRef.current.position,{
            x:0,
            y:-35,
            z:-25
        },{
            x:0,
            y:-25,
            z:-25
        },'bruh')
        tl.fromTo(modelRef.current.rotation,{
            x:0,
            y:0,
            z:0
        },{
            x:0,
            y:Math.PI,
            z:0
        },'bruh')
        tl.fromTo(modelRef.current.scale,{
            x:8,
            y:8,
            z:8
        },{
            x:35,
            y:35,
            z:35
        },'bruh')
        const fadeOut = gsap.timeline({
            scrollTrigger: {
                trigger: "#model-section",
                start: 'bottom -1650%',
                end: 'bottom -1680%',
                
                scrub: {
                    ease: "power1.out",
                    smoothing: 0.5,
                    duration: 0.5
                },
                preventOverlaps: true,
                fastScrollEnd: true,
                immediateRender: false,
                once: true,
                onUpdate: (self) => {
                    // Only use this method if your model has materials
                    if (modelRef.current) {
                        modelRef.current.traverse((node) => {
                            if (node.isMesh && node.material) {
                                // Make sure material is set to transparent
                                node.material.transparent = true;
                                node.material.needsUpdate = true;
                                node.material.opacity = 1 - self.progress;
                            }
                        });
                    }
                },
                onEnter: () => {
                    modelRef.current.visible = true;
                },
                onEnterBack: () => {
                    modelRef.current.visible = false ;
                },
                onLeave: () => {
                    modelRef.current.visible = false;
                },
                onLeaveBack: () => {
                    modelRef.current.visible = false;
                }
            }
        });
    })


    return(
        <primitive 
        object={result.scene} 
        scale={[0.5, 0.5, 0.5]} 
        ref={modelRef}
    />
    )

 }

 const OptimizedMobileLighting = () => {
    const { camera } = useThree();
    
    return (
      <>
        {/* Main directional light - simulates sunlight */}
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        
        {/* Ambient light to prevent completely dark shadows */}
        <ambientLight intensity={0.4} />
        
        {/* Fill light for softer shadows */}
        <pointLight 
          position={[-5, 0, -5]} 
          intensity={0.2} 
        />
        
        {/* Optional rim light for depth */}
        <spotLight
          position={[0, 5, -5]}
          intensity={0.3}
          angle={0.5}
          penumbra={1}
        />
      </>
    );
  };


  
  
  function IphoneRes() {
    useEffect(() => {
        ScrollTrigger.config({
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
            refreshPriority: 1,
            ignoreMobileResize: true // Prevents refresh on mobile keyboard appear/disappear
        });
        
        // Force recalculation on load
        ScrollTrigger.refresh(true);
        
        return () => {
            ScrollTrigger.getAll().forEach(st => st.kill());
        };
    }, []);
    useEffect(() => {
        // Function to handle fullscreen changes
        const handleFullscreenChange = () => {
          // Small delay to ensure DOM updates are complete
          setTimeout(() => {
            ScrollTrigger.refresh(true);
          }, 100);
        };
    
        // Function to handle resize
        const handleResize = () => {
          ScrollTrigger.refresh(true);
        };
    
        // Configure ScrollTrigger
        ScrollTrigger.config({
          autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
          refreshPriority: 1,
          ignoreMobileResize: true
        });
    
        // Add event listeners for fullscreen and resize
        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);
        document.addEventListener('MSFullscreenChange', handleFullscreenChange);
        window.addEventListener('resize', handleResize);
    
        // Initialize ScrollTrigger
        ScrollTrigger.refresh(true);
    
        // Cleanup
        return () => {
          document.removeEventListener('fullscreenchange', handleFullscreenChange);
          document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
          document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
          document.removeEventListener('MSFullscreenChange', handleFullscreenChange);
          window.removeEventListener('resize', handleResize);
          ScrollTrigger.getAll().forEach(st => st.kill());
        };
      }, []);
    return (
        <div id="model-section" className="h-full w-full flex justify-center items-center relative">
            <Canvas style={{pointerEvents:"none"}}>
                <Suspense >
                    <OptimizedMobileLighting/>
                    <Model />
                    <Model2/>
                    <Model3/>
                </Suspense>
            </Canvas>
        </div>
    )
}

export default IphoneRes