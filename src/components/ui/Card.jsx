import { FaUser, FaFlag } from "react-icons/fa";
import { toast } from "react-toastify";
import fallbackPlayerImg from "../../assets/banner-main.png";

const Card = ({ player, setCoin, coin, selectedCricketers, setSelectedCricketers }) => {

  const isSelected = selectedCricketers.some(
    (selectedPlayer) => selectedPlayer.playerName === player.playerName
  );

  const handleChoosePlayer = () => {
    if (isSelected) {
      return;
    }

    const newCoin = coin - player.price;
    if (newCoin >= 0) {
      setCoin(newCoin);
    }else{
      toast.error("Not enough coins to select this player");
      return;
    }


   toast.success(`${player.playerName} has been selected for $${player.price}`);
   setSelectedCricketers([...selectedCricketers, player]);
  }
  


  return (
    <article className="w-full overflow-hidden rounded-2xl bg-base-100 shadow-sm">
            <figure className="p-4 sm:p-6">
              <div className="aspect-4/3 w-full overflow-hidden rounded-xl bg-base-200">
                <img
                  className="h-full w-full object-contain object-center"
                  src={player.playerImg}
                  alt={player.playerName}
                  onError={(event) => {
                    event.currentTarget.src = fallbackPlayerImg;
                  }}
                />
              </div>
            </figure>

            <div className="card-body p-4 pt-0 sm:p-6 sm:pt-0">
              <h2 className="card-title text-base sm:text-lg">
                <FaUser />
                {player.playerName}
              </h2>

              <div className="flex items-center justify-between gap-3 p-2">
                <div>
                  <FaFlag />
                  <p>{player.playerCountry}</p>
                </div>
                <button className="btn btn-sm shrink-0">{player.playerType}</button>
              </div>

              <div className="card bg-base-300 rounded-full grid h-1 place-items-center"></div>

              <div className="">Rating: {player.rating}</div>

              <div className="flex flex-col gap-1 text-sm sm:flex-row sm:items-center sm:justify-between">
                <h2 className="font-bold">{player.battingStyle}</h2>
                <h2 className="font-bold">{player.bowlingStyle}</h2>
              </div>

              <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold">Price: ${player.price}</p>

                <button onClick = {handleChoosePlayer} disabled={isSelected} className="btn w-full sm:w-auto"> {isSelected ? "Selected" : "Choose player"} </button>
              </div>
            </div>
          </article>
  )
}

export default Card
