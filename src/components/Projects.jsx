import React from 'react'
import Cards from './Cards'
import studynotion from  '../assets/studynotion.png'
import Twitter_trends from "../assets/Twitter-Trends-Scraper.png"
import ToddleImage from "../assets/ToddleImg.png"
import commingSoon from "../assets/comingsoon.jpeg"
import portfolio from "../assets/portfolio.png"

const Projects = () => {

    const projectJson = [
        {
          title: 'Study-Notion',
          desc: 'StudyNotion is a comprehensive ed-tech platform designed to bridge the gap between learners and instructors.',
          image: studynotion,
          live: "https://study-notion-an-online-education-platform-8gei.vercel.app/",
          github: "https://github.com/Aaryan120/StudyNotion-An-Online-Education-Platform"
        },
        {
          title: 'Twitter-Trends-Scraper',
          desc: 'A Flask web application that fetches and displays the top 5 trending topics from Twitter using Selenium for web scraping and MongoDB for data storage.',
          image: Twitter_trends,
          live: "#",
          github: "https://github.com/Aaryan120/Twitter_Trends_Scraper"
        },
        {
          title: 'PortFolio',
          desc: '',
          image: portfolio,
          live: "https://youtube-clone-93300.netlify.app/",
          github: "https://github.com/rohitsingh93300/YouTube-clone"
        },
        {
          title: 'Toddle_Wall',
          desc: 'Toddle Digital Wall is a React-based application that allows users to create, update, and manage boards for sharing thoughts in the form of posts.',
          image: ToddleImage,
          live: "#",
          github: "https://github.com/Aaryan120/Toddle_wall"
        },
        {
          title: 'LostAndFoundBIT',
          desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
          image: commingSoon,
          live: "#",
          github: "#"
        },
      ];

  return (
    <section id='projects' className='relative bg-gray-700 py-10 px-4'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <h2 className='text-3xl font-bold mb-8 text-white border-b border-red-500 w-max pb-4'>My Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10'>
            {projectJson.map((items)=> {
                return <Cards item={items}/>
            })}
        </div>
      </div>
    </section>
  )
}

export default Projects
