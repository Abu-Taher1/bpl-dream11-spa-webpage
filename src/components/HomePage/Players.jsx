import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayers from "./SelectedPlayers";
import { toast } from "react-toastify";

const Players = ({playersPromise, setCoin, coin}) => {
   // console.log(playersPromise);
    const data = use(playersPromise);
    // console.log(players);
    const [selectedPlayers, setSelectedPlayers] = useState("available");

    const [selectedCricketers, setSelectedCricketers] = useState([]);

    const handleRemovePlayer = (playerToRemove) => {
      setSelectedCricketers((players) =>
        players.filter((player) => player.playerName !== playerToRemove.playerName)
      );
      setCoin((currentCoin) => currentCoin + playerToRemove.price);
      toast.info(`${playerToRemove.playerName} was removed from your team`);
    };
    
  return (
    <div>

      <div className="mt-8 mb-6 flex flex-col gap-4 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
        { selectedPlayers === "available" ? <h2 className="text-2xl text-[#101010] font-bold">Available Players</h2> : <h2 className="text-2xl font-bold text-[#101010]">Selected Players</h2> }

        <div className="flex w-full sm:w-auto">
          <button onClick={() => setSelectedPlayers("available")} className={`btn min-h-10 flex-1 ${selectedPlayers === "available" ? "bg-[#E7FE29]" : "bg-amber-50"} rounded-l-2xl rounded-r-none sm:flex-none`}>Available</button>
          <button onClick={() => setSelectedPlayers("selected")} className={`btn min-h-10 flex-1 ${selectedPlayers === "selected" ? "bg-[#E7FE29]" : "bg-amber-50"} rounded-r-2xl rounded-l-none sm:flex-none`}>Selected<span>({selectedCricketers.length})</span></button>
        </div>

      </div>   

      <div>
        { selectedPlayers === "available" ? (<AvailablePlayers selectedCricketers={selectedCricketers} setSelectedCricketers={setSelectedCricketers} players={data} setCoin={setCoin} coin={coin}/>) : ( <SelectedPlayers selectedCricketers={selectedCricketers} onRemovePlayer={handleRemovePlayer} /> )} 
      </div>
        
    </div> 
    
  )
}

export default Players
