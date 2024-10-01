const App = () => {
  return (
    <main className="w-full h-full">
      <div className="w-[586px] h-[878px] bg-[#1AEBB7]"> 
      <div className="w-[1251px] h-[539px] absolute ml-36 mt-16 border shadow-[0_0_15px_rgba(0,0,0,0.3)] ">
        <img src="/image 1 (1).png" alt="logo" className="mt-3 pr-2"/>
      </div>
      <div className="flex flex-col justify-end w-3/5 items-end ml-[650px] pt-44">
        <div className="flex flex-col w-3/5 xl:w-2/5 gap-6 text-center mr-10">
          <h1 className="uppercase text-6xl font-bold text-black/70 pl-28">Login</h1>
          <input
            type="text"
            className="py-2 px-4 text-[20px] border w-[442px] h-[58px] border-black/30"
            placeholder="Username"
          />
          <input
            type="password"
            className="py-2 px-4 text-[20px] border w-[442px] h-[58px] border-black/30"
            placeholder="Password"
          />
          <div className="flex justify-between gap-10">
            <button className=" w-[233px] h-[60px] bg-[#1AEBB7] border border-black/70 text-white text-2xl py-2 px-3 font-semibold uppercase flex-grow">
              Login
            </button>
            <div className=" flex flex-col font-semibold justify-start items-end text-xl gap-3 ml-32">
              <a href="#">
                <p className="w-[179px] h-[28px] text-black/70 ">Forgot Password</p>
              </a>
              <a href="#">
                <p className="w-[96px] h-[28px] text-black/70">Register</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    
    </main>
    
  )
}
export default App