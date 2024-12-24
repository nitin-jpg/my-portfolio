// eslint-disable-next-line no-unused-vars
import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <><div id="Contact"
          className=" mb-14 lg:mb-40">
      <h1 className="my-10 text-center text-4xl text-white text-bold-3xl">Contact Me</h1>

      <div className="flex flex-col lg:flex-row items-center lg:justify-center gap-6">
        <div className="flex items-center justify-center rounded bg-blue-950 text-white p-9 h-10 ">
          <img src="https://my-portfolio-mh76-1tinwfgv2-amits-projects-ae7ce805.vercel.app/_next/static/media/gmail.2dcc75a1.svg" alt="" className=" h-11 p-3" />
          <a href="mailto:imnitinnaik911@gmail.com">imnitinnaik911@gmail.com</a>
          <h1 className="text-white">
            
          </h1>
        </div>
        <div className=" flex items-center justify-center  rounded bg-blue-950 text-white py-9 px-12 h-5 ">
          
          <img src="https://t4.ftcdn.net/jpg/01/35/05/71/360_F_135057100_moOPjLlA2ylkLhtt5eZ4NIbT9YHCX83A.webp" alt="" className="h-11 p-3 " />
          <a href="tel:+917259958184">917259958184</a>
          <h1 className="text-white">
           
          </h1>
        </div>
      </div>
    </div><div className=" text-center tracking-tighter">

        <div className=" border-b border-neutral-9 pb-0">
          <h2 className="text-bold text-white"></h2>
          <div className=" text-white py-4 lg:py-50 text-bold ">
            <footer className="bg-gray-800 text-white py-4 text-center">
              <p className="bg-gradient-to-r from-red-200 via-slate-500 to-pink-500">&copy; nitin naik</p>
            </footer>
          </div>

        </div>


      </div></>
       
  )
}

export default Contact