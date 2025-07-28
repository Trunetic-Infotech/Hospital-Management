import React from 'react'
import learn from "../assets/service_icon/learnmore.png"
import img1 from "../assets/blog1.jpg"
import img2 from "../assets/blog2.jpg"
import img3 from "../assets/blog3.jpg"
import { Link } from 'react-router-dom'





const BlogsPage = () => {

    const blogs = [
        {id: 1, img: img1, date: "3 April 2021", news: "Collaborating to innovate"},
        {id: 2, img: img2, date: "3 April 2021", news: "Collaborating to innovate"},
        {id: 3, img: img3, date: "3 April 2021", news: "Collaborating to innovate"},
        {id: 4, img: img3, date: "3 April 2021", news: "Collaborating to innovate"},
        {id: 5, img: img3, date: "3 April 2021", news: "Collaborating to innovate"},
        {id: 6, img: img3, date: "3 April 2021", news: "Collaborating to innovate"},
        {id: 7, img: img3, date: "3 April 2021", news: "Collaborating to innovate"},
        {id: 8, img: img3, date: "3 April 2021", news: "Collaborating to innovate"},
    ]
    return (
        <div className=' max-w-[1500px] mx-auto' >
            <h1 className='text-3xl font-bold font-serif text-[#25524d] text-center my-10'>OUR LATEST BLOGS</h1>
            <div className=' my-10 flex flex-wrap gap-5 justify-center px-5'>
                {blogs.map((blog) => (
                    <div key={blog.id} className='w-[350px] h-[300px] bg-slate-200 rounded-tl-3xl'>
                        <img src={blog.img} className='w-full h-[200px] rounded-tl-3xl'/>
                        <p className='text-slate-500 font-bold text-xs my-1'>{blog.date}</p>
                        <p className=' text-slate-900 text-sm font-bold tracking-wide my-2'>{blog.news}</p>
                        <div className='flex my-4'>
                            <button className='text-[#0F766E]'>Learn More</button>
                            <img src={learn} className='mx-2 my-1'/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BlogsPage
