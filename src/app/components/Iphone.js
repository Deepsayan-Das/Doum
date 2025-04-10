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
                end: 'bottom -50%',
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
                start: 'top -150%',
                end: 'bottom -250%',
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
                start: 'bottom -250%',
                end: 'bottom -350%',
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
                start: 'bottom -350%',
                end: 'bottom -450%',
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
                start: 'bottom -450%',
                end: 'bottom -550%',
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
                start: 'bottom -550%',
                end: 'bottom -650%',
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
                start: 'bottom -650%',
                end: 'bottom -750%',
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
                start: 'bottom -750%',
                end: 'bottom -750%',
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
                start: 'bottom -750%',
                end: 'bottom -790%',
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
        }, 'hi')
        .fromTo([modelRef.current.rotation, model2Ref.current.rotation], {
            x: -Math.PI/4,
            y: Math.PI,
            z: 0
        }, {
            x: 0,
            y: Math.PI,
            z: 0,
        }, '-=1')
        .fromTo([modelRef.current.scale, model2Ref.current.scale], {
            x: 10,
            y: 10,
            z: 10
        }, {
            x: 9,
            y: 9,
            z: 9,
        })

        tl2.fromTo([modelRef.current.position, model2Ref.current.position], {
            x: 8,
            y: -55,
            z: -15
        }, {
            x: 3,
            y: 6,
            z: -25,
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

    return (
        <>
            <primitive 
                object={result.scene} 
                scale={[18, 18, 18]} 
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
        ScrollTrigger.config({
            syncInterval: 0.1,  // Sync more frequently
            autoRefreshEvents: "visibilitychange,DOMContentLoaded,load", // Optimize refresh events
            limitCallbacks: true
        });
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: "#model-section",
                start: 'bottom -800%',
                end: 'bottom -1000%',
                
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
                start: 'bottom -1000%',
                end: 'bottom -1075%',
                
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
                start: 'bottom -1075%',
                end: 'bottom -1140%',
                
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
                start: 'bottom -1150%',
                end: 'bottom -1190%',
                
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
                start: 'bottom -1270%',
                end: 'bottom -1280%',
                
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
                start: 'bottom -1550%',
                end: 'bottom -1650%',
                
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
                start: 'bottom -1630%',//prev -1650
                end: 'bottom -1650%',//prev-1680
                
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


  
  
  function Iphone() {
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

export default Iphone