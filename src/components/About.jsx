import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaFigma,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiC,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { DiVisualstudio } from "react-icons/di";
import { IoLogoNpm, IoLogoVercel } from "react-icons/io5";

const About = () => {
  return (
    <div id="about" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#fe5617]">
          About Me
        </h1>

        {/* About Me Section */}
        <p className="text-lg md:text-xl text-gray-700 text-center leading-relaxed">
          I’m <span className="font-bold text-[#fe5617]">Nithish Kumar R</span>,
          To work in an innovative position that allows me to utilize my knowledge, talents and ideas in developing and learning new
          things which would, in turn, help me contribute to growth of the organization and to the growth of my career as well as the
          development of myself as a person.
        </p>

        {/* Skills Section */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-[#343434] text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Skill Icons */}
            <div className="flex flex-col items-center space-y-2">
              <FaHtml5 size={40} className="text-[#e34c26]" />
              <span className="font-bold">HTML5</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaCss3Alt size={40} className="text-[#264de4]" />
              <span className="font-bold">CSS</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJsSquare size={40} className="text-[#f7df1e]" />
              <span className="font-bold">JavaScript</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiBootstrap size={40} className="text-[#563d7c]" />
              <span className="font-bold">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiTailwindcss size={40} className="text-[#38bdf8]" />
              <span className="font-bold">Tailwind CSS</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaReact size={40} className="text-[#61dbfb]" />
              <span className="font-bold">React.js</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <SiMongodb size={40} className="text-[#47a248]" />
              <span className="font-bold">MongoDB</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaFigma size={40} className="text-[#F24E1E]" />
              <span className="font-bold">Figma</span>
            </div>
            {/* Added C and Java Skills */}
            <div className="flex flex-col items-center space-y-2">
              <SiC size={40} className="text-blue-600" />
              <span className="font-bold">C</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <FaJava size={40} className="text-red-600" />
              <span className="font-bold">Java</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;