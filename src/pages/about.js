import AnimatedText from '@/components/AnimatedText'
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Layout from '@/components/Layout'
import Skills from '@/components/Skills';
import TransitionEffect from '@/components/TransitionEffect';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Head from 'next/head'
import Image from 'next/image';
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/developer-pic-2.jpg";


const AnimatedNumbers = ({value}) =>{
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000})
const isInView = useInView(ref ,{once:true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
  
}, [isInView, value, motionValue])

useEffect(() => {
  springValue.on("change",(latest) =>{
    if(ref.current && latest.toFixed(0) <= value ){
        ref.current.textContent = latest.toFixed(0);
    }
  })
}, [springValue, value])





    return <span ref={ref}></span>
}

const about = () => {
    return (
        <>
            <Head>
                <title>Moben Sediqi | About Page</title>
                <meta name='description' content='any desc' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text='Passion Fuels Purpose!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 '/>
                    <div className='grid w-full grid-cols-8 gap-16 sm:gap-8 '>
                        <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>
                                Biography
                            </h2>
                            <p className='font-medium'>
                            Hello, I'm Moben Sediqi, an accomplished Web Developer with extensive experience in Python, Javascript,
                            data science, machine learning and entrepreneurship.
                            </p>
                            <p className='my-2 font-medium'>
                            I specialize in developing complex web applications, from large-scale web applications to machine learning 
                            models and advanced data analysis tools. My expertise in Python and Javascript, along with my experience with
                            popular frameworks (Django, NodeJS, NextJS) and libraries(React, ReactNative), enables me to create robust and scalable web applications that meets the highest
                            quality standards.
                            </p>
                            <p className='my-2 font-medium'>
                            As an experienced entrepreneur, I have founded and led several successful startups, gaining deep insight
                            into the business aspects of software development. My entrepreneurial experience has taught me how to
                            effectively balance the needs of end-users, stakeholders, and development teams to deliver innovative 
                            and value-driven solutions.
                            </p>
                            <p className='my-2 font-medium'>
                            As a data scientist, I have extensive experience with data analysis, modeling, and visualization, 
                            leveraging tools such as NumPy, Pandas, PowerBI, Matplotlib, and Scikit-learn. I'm also skilled in using deep learning 
                            frameworks such as TensorFlow and PyTorch to develop complex neural networks that can solve complex 
                            business problems.
                            </p>
                            <p className='my-2 font-medium'>
                            Finally, as a strategic thinker, I have a proven track record of building high-performing teams and 
                            delivering exceptional software solutions. My strong communication skills and ability to work collaboratively
                            with stakeholders, team members, and partners allow me to deliver innovative and high-quality solutions 
                            that exceed expectations.
                            </p>

                            <p className='font-medium'>
                            In summary, if you're looking for an experienced and highly skilled software engineer with deep expertise 
                            in Python, Javascript, data science, machine learning, entrepreneurship, and advanced software development,
                            then I'd love to connect and discuss your next project.
                            </p>
                        </div>    
                            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8 '>
                               <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light '/>
                               <Image src={profilePic} alt="profile pic" className="w-full h-auto rounded-2xl"
                               
                               priority
                               sizes="(max-width: 768px) 100vw,
                               (max-width: 1200px) 50vw,
                               33vw"
                               
                               />
                            </div>
                            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                                <div className='flex flex-col items-end justify-center xl:items-center '>
                                    <span className='inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl'>
                                        <AnimatedNumbers value={25} />+
                                    </span>
                                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'> Satitifed Clients</h2>
                                </div>
                                <div className='flex flex-col items-end justify-center xl:items-center'>
                                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={10} />+
                                    </span>
                                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'> Projects Compeleted</h2>
                                </div>
                                <div className='flex flex-col items-end justify-center xl:items-center'>
                                    <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                                    <AnimatedNumbers value={4} />+ 
                                    </span>
                                    <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>  Year Of experience</h2>
                                </div>
                            </div>
                        </div>
                        <Skills />
                        <Experience />
                        <Education />
                </Layout>
            </main>
        </>
    )
}

export default about