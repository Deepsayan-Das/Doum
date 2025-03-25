'use client'
import React, { useEffect, useState } from 'react'
import { SiFacebook } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link';
import Navbar2 from '../components/Navbar2';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";

function blog() {

     const [style, setStyle] = useState({});
    
      useEffect(() => {
        const updateStyle = () => {
            const width = window.innerWidth;
            if (width >= 768) { // Desktop breakpoint
                setStyle({
                    
                    backgroundImage: "url('/doumXmicrosoft.webp')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    mixBlendMode: 'multiply'
                    
                    
                    
                });
            } else { // Mobile breakpoint
                setStyle({
                    
                    backgroundImage: "url('/doumXmicrosoftM.webp')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top',
                    backgroundSize: 'cover',
                    mixBlendMode: 'multiply'
                    
                });
            }
        };
    
        updateStyle(); // Initial call to set styles
        window.addEventListener('resize', updateStyle);
    
        return () => window.removeEventListener('resize', updateStyle);
      }, []);
  return (
    
    <div className='flex flex-col justify-center items-center w-screen'>
        <div className=' w-full ml-[40vw]'><Navbar2/></div>
        
        <h1 className='text-[#18375d] text-4xl mx-[5vw] md:mx-0 md:text-5xl font-bold font-glacial mt-[10vh] md:mt-[10vh] text-center'>PARTNERSHIP WITH MICROSOFT FOR STARTUPS</h1>
        <div className='h-[70vh] md:h-[110vh] w-[90vw] rounded-3xl  mt-[5vh]' style={style}>
                
        </div>
        <div className='h-[6vh] md:h-[10vh] w-[90vw]  flex mt-[5vh]'>
           <a target="_blank" className='w-1/3 h-full' href='https://www.facebook.com/sharer/sharer.php?u=www.mydoum.com/Blog'> <div className='w-full h-full bg-[#3c5b99] flex justify-center items-center text-3xl'><SiFacebook color='#ffffff'/></div></a>
           <a target="_blank" className='w-1/3 h-full' href='https://twitter.com/intent/tweet?text=www.mydoum.com/Blog'><div className='w-full h-full bg-black flex justify-center items-center text-3xl'><FaSquareXTwitter color='#ffffff' /></div></a> 
           <a target="_blank" className='w-1/3 h-full' href='https://www.linkedin.com/shareArticle?url=https://www.mydoum.com/Blog&source=www.mydoum.com/Blog '><div className='full h-full bg-[#0078b6] flex justify-center items-center text-3xl'><FaLinkedin color='#ffffff' /></div></a> 

        </div>
        <div className='h-[100vh] w-[90vw] text-[#18375d] text-xl font-glacial font-medium mt-[5vh]'>
        We are excited to announce our new strategic partnership with Microsoft and its startup-focused program, Microsoft for Startups!
        <br/>
        <br/>

        <br/>
        Through this collaboration, we will have the opportunity to leverage Microsoft’s powerful technology stack to enhance the development of DOUM, ensuring seamless, tech-driven solutions that transform the home services industry. <br/><br/><br/>

        
        Microsoft for Startups is a global initiative that provides startups with essential resources, including cloud services, technical assistance, networking, and co-selling opportunities. The program empowers startups by offering free Azure credits, expert mentorship, access to enterprise-grade tools, and a global network of investors—helping businesses scale faster and smarter. <br/> <br/> <br/>

        
        At DOUM, we are always looking for strategic partnerships that drive innovation, accelerate growth, and refine our development process. This is a major step forward in our journey to revolutionize home services. <br/> <br/> <br/>


        </div>
        <div className='w-[80%] md:w-[32.5vw] h-[30vh]  rounded-2xl self-center md:self-start mt-[35vh] md:mt-[-20vh] mx-[5vw] md:mx-[5vw]' style={{ backgroundImage: 'url(/microsoftB.webp)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>

        </div>
        <Link href='/'> <div className='flex whitespace-nowrap text-4xl font-medium self-start mt-[8vh] h-[5vh] w-[10vw] ml-[-45vw] text-[#18375d]'>

        
            <div><FaArrowCircleLeft size={40} /> </div> 
       
        </div>
        </Link>
    </div>
    
  )
}

export default blog