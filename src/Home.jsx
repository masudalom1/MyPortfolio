import profile from "./assets/profile.jpg";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import Contact from "./Contact";
import About from "./assets/About";
import Work from "./Work";
import Footer from "./Footer";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email,SetOpenEmail]=useState(false);
  return (
    <>
      <div className="bg-custom-gradient h-screen">
        <div className="h-20 flex justify-between text-white">
          <div>
            <h1 className="font-bold text-3xl p-7">Masud,</h1>
          </div>

          <button
            className="md:hidden text-blue-800 p-2 m-4 "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <RxCross1 className="w-10 h-10 " />
            ) : (
              <IoMenu className="w-10 h-10" />
            )}
          </button>

          {isMenuOpen && (
            <div className="absolute inset-0 text-black bg-slate-600 flex justify-center text-3xl font-bold flex-col gap-10 text-center p-10  font-serif  md:hidden z-50 animate-rise">
              <a href="#about" className="hover:text-blue-800 animate-rise">
                About
              </a>
              <a href="#work" className="hover:text-blue-800 animate-rise">
                Work
              </a>
              <a href="#Contact" className="hover:text-blue-800 animate-rise">
                Contact
              </a>
              <a
                href="#"
                className=" p-2  bg-slate-300 border rounded animate-rise"
              >
                <button 
                 onClick={()=>SetOpenEmail(!email)}
                >Get Email</button>
              </a>
              <a href="/"><button className="bg-black text-white p-2 mt-5 rounded">Go back</button></a>
              <button
                className="absolute top-4 right-4 text-2xl font-bold text-blue-800"
                onClick={() => setIsMenuOpen(false)}
              >
                ✖
              </button>
            </div>
          )}
         {
            email && (
                <div className=" absolute inset-0 p-10 bg-white text-black gap-80  z-50 animate-rise">
                    <h3>Email: masudalom4322@gmail.com</h3>
                     <a href="/"><button className="bg-black text-white p-2 mt-5 rounded">Go back</button></a>
                </div>
            )
         }


          

         

          <div className="font-semibold text-2xl p-7 max-sm:hidden">
            <a href="#about">About</a>
            <a className="ml-5" href="#work">
              Work
            </a>
            <a className="ml-5" href="#contact">
              Contact
            </a>
          </div>
          <div className="mr-16 p-7 text-2xl max-sm:hidden">
            <h2>
              <a
                href="#"
                className="pl-7 pr-7 pt-1 pb-1 bg-slate-300 border rounded"
              >
             <button
                onClick={()=>SetOpenEmail(!email)}>
                Get Email
                </button>
              </a>
            </h2>
          </div>
        </div>

        <div className="flex justify-between items-center px-10 mt-32 max-sm:flex-col  ">
          <div>
            <h3 className="text-2xl text-gray-300 animate-rise">Hi, It’s Me</h3>
            <h1 className="text-5xl font-bold text-white animate-rise max-sm:text-4xl">
              MASUD ALOM
            </h1>
            <h4 className="text-2xl text-gray-400 mt-3 animate-rise">
              Full Stack Developer
            </h4>

            <div className="flex mt-5">
              <a
                href="https://linkedin.com/in/masud-alom-054273264"
                className="mr-3 text-blue-500 hover:underline animate-rise"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/masudalom1"
                className="mr-3 text-blue-500 hover:underline animate-rise"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://x.com/Masud___alom"
                className="mr-3 text-blue-500 hover:underline animate-rise"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com/masud___alom/profilecard/?igsh=MXg4bXJidzI2bHdlNA=="
                className="text-blue-500 hover:underline animate-rise"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </div>

            <div className="mt-28 animate-rise max-sm:mt-14">
              <a
                href="/contact"
                className="pl-7 pr-7 pt-3 pb-3 bg-slate-300 border rounded animate-rise"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="mr-28 ">
            <img
              src={profile}
              alt="profile"
              className="w-80 h-80 object-cover rounded-full shadow-lg animate-rise max-sm:h-56 max-sm:mt-16 max-sm:ml-16 "
            />
          </div>
        </div>

      
      </div>

      <About/>
     <Work/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
