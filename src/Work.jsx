
function Work(){
    return(<>
    <div id="work" className="bg-custom-gradient text-white pt-20 pb-18">
      <div className="flex justify-center">
        <div>
          <h2 className="font-bold text-4xl text-center animate-rise" >Work</h2>
          <div className="border-b-2 w-60 mt-5 animate-rise"></div>
        </div>
        
      </div>
      <div className="flex justify-around mt-20 pb-20 max-sm:flex-col pl-20 max-sm:gap-5 ">
        <div className="h-60 w-60 bg-white rounded-3xl animate-rise hover:bg-zinc-600 hover:text- max-sm:mt-5">
            <a href="/web2"><h1 className="text-black font-bold text-4xl text-center mt-24">Web 2</h1></a>
            <p className="text-black mt-5 text-center ">Click for preview </p>
        </div>
        <div className="h-60 w-60 bg-white rounded-3xl animate-rise  hover:bg-zinc-600">
        <a href="/web3"><h1 className="text-black font-bold text-4xl text-center mt-24">Web 3</h1></a>
        <p className="text-black mt-5 text-center ">Click for preview </p>
        </div>
        <div className="h-60 w-60 bg-white rounded-3xl animate-rise  hover:bg-zinc-600">
        <a href="/app"><h1 className="text-black font-bold text-4xl text-center mt-24">App</h1></a>
        <p className="text-black mt-5 text-center ">Click for preview </p>
        </div>
      </div>
    </div>
    </>)
}

export default Work