import about from '../assets/About-img.png';
import { FaHtml5 } from "react-icons/fa6";
import { MdCss } from "react-icons/md";
import { FaJava } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitSquare } from "react-icons/fa";

function About() {
  return (
    <div id='about' className="bg-custom-gradient text-white p-7">
      {/* Header */}
      <div className="flex justify-center">
        <div className="border-b-2 border-blue-50 w-60 text-center">
          <h1 className="font-bold text-4xl pb-5 max-sm:text-3xl">About</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex p-5 max-sm:flex-col max-sm:items-center">
        {/* Text Section */}
        <div className="w-2/4 mt-20 max-sm:w-full max-sm:mt-10">
          <div>
            <p className="max-sm:text-justify max-sm:px-5 ">
              As a budding full-stack web developer, I'm deeply passionate about
              creating immersive digital experiences. Proficient in a variety
              of technologies, I specialize in utilizing React for dynamic
              front-end development, while harnessing the power of MongoDB for
              robust database management. Also working in Next.js and Express,
              I handle server-side rendering and API integration. Embracing
              modern development practices, I work within monorepo structures,
              utilizing Tailwind CSS for streamlined styling. Eager to continue
              learning and collaborating, I'm excited to contribute to
              cutting-edge projects and drive innovation in the ever-evolving
              landscape of web development.
            </p>
            <div className="border-b-2 border-cyan-50 mt-5 mb-5"></div>
          </div>

          <h2 className="font-bold max-sm:text-center">
            EXPERTISE: Full Stack Development
          </h2>

          {/* Technology Section */}
          <div className="mt-10 pb-10">
            <h3 className="font-bold max-sm:text-center">Technology:</h3>
            <div className="flex gap-7 text-5xl mt-5 max-sm:justify-center max-sm:gap-3 ">
              <FaHtml5 />
              <MdCss />
              <FaJava />
              <FaReact />
              <RiTailwindCssFill />
              <FaNode />
              <SiExpress />
              <SiMongodb />
            </div>
          </div>

          {/* Tools Section */}
          <div className="mt-5">
            <h3 className="font-bold max-sm:text-center">Tools:</h3>
            <div className="flex gap-7 text-5xl mt-5 max-sm:justify-center">
              <FaGithub />
              <FaGitSquare />
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="ml-20 max-sm:ml-0 max-sm:mt-10">
          <img
            className=" max-sm:w-60 max-sm:h-60"
            src={about}
            alt="About"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
