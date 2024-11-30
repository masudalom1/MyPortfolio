import profile from './assets/profile.jpg';

function Footer() {
  return (
    <>
      <div className="bg-black flex flex-col md:flex-row justify-center items-center pb-10 md:pb-20 px-5">
        <div className="text-center md:text-left">
          <img 
            className="h-32 w-32 md:h-48 md:w-48 rounded-full mt-5 md:mt-10 mx-auto md:ml-10" 
            src={profile} 
            alt="profile" 
          />
          <h3 className="text-white font-semibold text-lg md:text-2xl mt-5">
            Hi 👍 I'm Masud Alom. <br /> Thanks For Your Love 👌
          </h3>
        </div>
        <a 
          className="text-white text-center pt-5 md:pt-0 font-bold md:ml-20 mt-5 md:mt-0" 
          href="#top"
        >
          <h1 className="text-xl md:text-2xl underline hover:no-underline">GO UP</h1>
        </a>
      </div>
    </>
  );
}

export default Footer;
