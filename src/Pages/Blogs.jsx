import React from 'react'
import learn from "../assets/service_icon/learnmore.png"
import img1 from "../assets/blog1.jpg"
import img2 from "../assets/blog2.jpg"
import img3 from "../assets/blog3.jpg"
import { Link } from 'react-router-dom'


const Blogs = () => {
    const cards = [
        { id: 1, img: img1, date: "3 April 2021", news: "Collaborating to innovate" },
        { id: 2, img: img2, date: "3 April 2021", news: "Collaborating to innovate" },
        { id: 3, img: img3, date: "3 April 2021", news: "Collaborating to innovate" },  
    ]
    return (
        <div className='flex flex-col items-center '>

            <h1 className='text-3xl font-semibold '><span className='text-3xl font-light'>Our</span> Recent Articles</h1>
            <div className='grid grid-cols-1 place-items-center sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-3  max-w-[1200px]'>
                {cards.map((card)=>(
                    <div key={card.id} className='w-[300px] h-[300px] bg-slate-200 rounded-tl-3xl m-10'>
                    <img src={card.img} className='w-full h-[200px] rounded-tl-3xl' />
                    <p className='text-slate-500 font-bold text-xs my-1'>{card.date}</p>
                    <p className=' text-slate-900 text-sm font-bold tracking-wide my-2'>{card.news}</p>
                   
                    <div className='flex my-4'>
                        <button className='text-[#0F766E]'>Learn More</button>
                        <img src={learn} className='mx-2 my-1' />
                    </div>
                </div>
                ))}
            </div>
             <Link to="BlogsPage">
           <button className='bg-[#0F766E] text-white p-2 rounded-xl font-normal'>View all articles</button></Link>


        </div>
    )
}

export default Blogs
