import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Hero from "./components/HomePage/Hero";
import NavBar from "./components/HomePage/NavBar"
import Players from "./components/HomePage/Players";


const fetchPlayers = async () => {
  const res = await fetch("/data.json")
  return res.json();
}

const playersPromise = fetchPlayers();

function App() {

  const [coin, setCoin] = useState(50000000);
  

  return (
    <div className="min-h-screen font-sora">
      <NavBar coin={coin}/>
      <Hero />
      <ToastContainer position="top-right" autoClose={3000} />
      <Suspense fallback = {<span className="loading loading-dots loading-xl"></span>} >
        <main className="mx-auto w-full max-w-312.5 px-4 pb-8 sm:px-6 lg:px-8">
          <Players playersPromise={playersPromise} setCoin={setCoin} coin={coin}/>
        </main>
      </Suspense>
      

    </div>
    
  );
};

export default App
