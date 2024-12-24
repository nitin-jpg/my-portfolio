const Myskills = () => {
  const allSkills = [ {id: "1", name: "JavaScript",icon: "https://my-portfolio-mh76-1tinwfgv2-amits-projects-ae7ce805.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjavascript.d495ea4e.png&w=128&q=75",},
    {name: "React", icon: "https://my-portfolio-mh76-1tinwfgv2-amits-projects-ae7ce805.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freact-native.05c5c7a5.png&w=128&q=75",},
    {name: "TypeScript",icon: "https://my-portfolio-mh76-1tinwfgv2-amits-projects-ae7ce805.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftypescript.ed75565a.png&w=128&q=75",},
    {name: "React Native",icon: "https://my-portfolio-mh76-1tinwfgv2-amits-projects-ae7ce805.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freact.114a538c.png&w=128&q=75",},
    {name: "Node.js",icon: "https://my-portfolio-mh76-1tinwfgv2-amits-projects-ae7ce805.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnode.265ad929.png&w=128&q=75",},
    {id: '6', name: "python," ,icon:"https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    {name:"html ", icon:"https://my-portfolio-mh76-1tinwfgv2-amits-projects-ae7ce805.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhtml5.490278c5.png&w=128&q=75"},
  ];

  const renderSkills = (skill) => {
    return (
      <div
        key={skill?.name}
        className="flex flex-col justify-around items-center bg-purple-950 
        h-24 lg:h-80 w-24 lg:w-80 mx-1 lg:mx-4 my-6 rounded-2xl 
        hover:bg-custom-text-gold-secondary transition duration-500
        ease-in-out transform hover:-translate-y-1 hover:scale-110">
  <img
   src={skill?.icon}
     alt={skill?.name}
          className="height-10 width-10 mt-8 lg:mt-20"
        />
        <h1 className="mt-4 mb-10 font-medium text-lg lg:text-2xl  text-cyan-200 text-center">
          {skill?.name}
        </h1>
      </div>
    );
  };

  return (
    <div>
      <h2 className="mr-90 text-white h-2px my-20 text-center lg:text-8xl text-4xl">My Skills</h2>
<div className="flex flex-row flex-wrap justify-center">
{allSkills?.map((skill) => renderSkills(skill))}
      </div>
    </div>
  );
};

export default Myskills;
