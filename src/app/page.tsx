import Image from "next/image";
import "./styles/globals.css";
export default function Home() {
  return (
    <main className="min-h-auto min-w-auto">
      <div className="p-3 rounded-full top-0 sticky wx-auto container bg-white mx-auto flex flex-row justify-between border-box border-border place-items-center content-center items-center w-full">
        {/* Services should be the main selling point, HIGHLIGHT IT! */}
        
        <div className="text-black px-2 font-bold">
          <Image 
            src="/ABM_logo.png"
            alt="ABM Logo"
            width={60} 
            height={0}
            layout="intrinsic" />
        </div>

        <div className="flex gap-8">
          <button className="bg-[var(--accent1)] text-white font-bold p-2 rounded-full px-5 transition-transform duration-3000 hover:bg-[var(--accent-activated)]">Services<b>.</b></button>
          <button className="bg-[var(--accent2)] font-normal p-2 rounded-full px-5">About us<b>.</b></button>
          <button className="bg-[var(--accent2)] font-normal p-2 rounded-full px-5">Contact<b>.</b></button>
        </div>


        <div className="text-black px-5">
        <Image 
            src="/ABM_logo.png"
            alt="ABM Logo"
            width={60} 
            height={0}
            layout="intrinsic" />
        </div>

      </div>

      <div className="flex gap-4 flex-col bg-[url('/titlescreen.jpg')] bg-cover bg-center h-[75vh] w-[100%] justify-center text-center">
        
        <div className="text-2xl font-bold">
          <span className="text-white text-6xl px-5">Tired of </span>
          <span className="rotating-text text-6xl">unfinished jobs?</span>
          <span className="rotating-text text-6xl">delays?</span>
          <span className="rotating-text text-6xl">the mess?</span>
        </div>
        <div>
        </div>
        <button className="rounded-full bg-[var(--accent1)] mx-auto px-5 p-2 text-2xl text-white font-bold transition-transform duration-3000 hover:bg-[var(--accent-activated)]">
          Call Now!
        </button>
      </div>

      <div className="bg-[var(--background)] h-[25vh] w-full">
      <p>asasds</p>
      </div>
    </main>
  );
}
