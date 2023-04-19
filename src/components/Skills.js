import React from 'react'
import {motion} from 'framer-motion'




const Skill = ({ name, x, y }) => {
  return (
<motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light
 lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:text-bold
 '
    whileHover ={{scale:1.05}}
    initial={{ x:0, y:0 }}
    whileInView={{ x:x, y:y, transition:{duration:1.5} }}
    viewport={{once:true}}
    >

    {name}
    </motion.div>


  )
}

const Skills=() =>{
  return (
    <>
    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'> Web Development Skills </h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    '>

    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
    lg:p-6 md:p-4 xs:text-xs xs:p-2'
    whileHover ={{scale:1.05}}
    >

    Web
    </motion.div>
    <Skill name="HTML5" x="0vw" y="6vw" />
    <Skill name="ES6" x="3vw" y="11.5vw" />
    <Skill name="PostgreSQL" x="-5vw" y="11vw" />
    <Skill name="MySQL" x="-5vw" y="17vw" />

    <Skill name="CSS3" x="10vw" y="2vw" />
    <Skill name="Bootstrap" x="15vw" y="8vw" />
    <Skill name="Tailwind CSS" x="20vw" y="0vw" />
    <Skill name="Framer Motion" x="18vw" y="-15vw" />
    <Skill name="Material UI" x="23vw" y="5vw" />

    <Skill name="Javascript" x="1vw" y="-6vw" />
    <Skill name="Nextjs" x="7vw" y="-17vw" />
    <Skill name="Redux" x="-2vw" y="-17.5vw" />
    <Skill name="React" x="5vw" y="-11.5vw" />
    <Skill name="Nodejs" x="-5vw" y="-11vw" />
    <Skill name="TypeScript" x="-14vw" y="-16vw" />

    <Skill name="Python" x="-10vw" y="0vw" />
    <Skill name="Django" x="-19vw" y="-5vw" />
    <Skill name="Django REST API" x="-19vw" y="5vw" />
   

    

    </div>


    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'> Data Science / ML Skills </h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    '>

    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
    lg:p-6 md:p-4 xs:text-xs xs:p-2'
    whileHover ={{scale:1.05}}
    >

    DS / ML
    </motion.div>
    <Skill name="Python" x="0vw" y="6vw" />
    <Skill name="ES6" x="3vw" y="11.5vw" />
    <Skill name="PostgreSQL" x="-5vw" y="11vw" />
    <Skill name="MySQL" x="-5vw" y="17vw" />

    <Skill name="R" x="10vw" y="2vw" />
    <Skill name="Bootstrap" x="15vw" y="8vw" />
    <Skill name="Tailwind CSS" x="20vw" y="0vw" />
    <Skill name="Framer Motion" x="18vw" y="-15vw" />
    <Skill name="Material UI" x="23vw" y="5vw" />

    <Skill name="SQL" x="1vw" y="-6vw" />
    <Skill name="Nextjs" x="7vw" y="-17vw" />
    <Skill name="Redux" x="-2vw" y="-17.5vw" />
    <Skill name="React" x="5vw" y="-11.5vw" />
    <Skill name="Nodejs" x="-5vw" y="-11vw" />
    <Skill name="TypeScript" x="-14vw" y="-16vw" />

    <Skill name="Visualization" x="-10vw" y="0vw" />
    <Skill name="Matplotlib" x="-19vw" y="-5vw" />
    <Skill name="Seaborn" x="-19vw" y="5vw" />
    <Skill name="Tableau" x="-29vw" y="5vw" />
    <Skill name="PowerBI" x="-30vw" y="-4vw" />
    </div>


    <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'> Skills </h2>
    <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark
    lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
    lg:bg-circularLightLg lg:dark:bg-circularDarkLg
    md:bg-circularLightMd md:dark:bg-circularDarkMd
    sm:bg-circularLightSm sm:dark:bg-circularDarkSm
    '>

    <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light
    lg:p-6 md:p-4 xs:text-xs xs:p-2'
    whileHover ={{scale:1.05}}
    >

    Web
    </motion.div>
    <Skill name="HTML5" x="20vw" y="6vw" />
    <Skill name="CSS3" x="10vw" y="7vw" />
    <Skill name="CSS3" x="21vw" y="9vw" />
    <Skill name="CSS3" x="12vw" y="-10vw" />
    <Skill name="CSS3" x="5vw" y="10vw" />
    <Skill name="CSS3" x="15vw" y="15vw" />
    <Skill name="CSS3" x="4vw" y="12vw" />
    <Skill name="CSS3" x="9vw" y="21vw" />
    <Skill name="CSS3" x="11vw" y="11vw" />
    <Skill name="CSS3" x="-5vw" y="-10vw" />
    <Skill name="CSS3" x="-5vw" y="-10vw" />
    </div>
    </>
    
  )
}

export default Skills