import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
   <div className   ="">
    
    
    <div id="Experience" className="text-left border-b  border-neutral-900 pb-4"> 
    
    <h1 className="my-20 text-left text-4xl text-white lg:text-4xl">Experience</h1>
   
    <div>
        {EXPERIENCES.map ((Experience,index) =>(
          
            <div key={index} className=" text-white mb-8 flex flex-wrap lg-:justify-left">
                <div className="w-full lg:-1/7">
                <p className=" lg:3xl mb-2 text-neutral-400">{Experience.year}</p>
                <div className="flex flex-row bg-custom-dark-four py-3 px-2 lg:pl-4 lg:pr-6 items-center self-start"></div>
                <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{Experience.role} -{""}
                    <span className="text-sm text-purple-100">
                    {Experience.company}
                </span>
              </h6>
              <p className=" text-white mb-4 text-white-neutral-300">{Experience.description}</p>
              
            </div>

                </div>
            </div>
        ) )  }
    </div>
    
    </div>
     </div>
  );
};

export default Experience