import { FaTrash } from "react-icons/fa";
import fallbackPlayerImg from "../../assets/banner-main.png";

const SelectedPlayers = ({ selectedCricketers, onRemovePlayer }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold">
        Selected Players<span>({selectedCricketers.length})</span>
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-4">
        {selectedCricketers.map((player) => (
          <div
            key={player.playerName}
            className="flex items-center gap-3 rounded-2xl border border-gray-300 bg-base-100 p-3 shadow-sm sm:gap-4 sm:p-4"
          >
            <img
              className="h-16 w-16 shrink-0 rounded-xl object-cover sm:h-20 sm:w-20"
              src={player.playerImg}
              alt={player.playerName}
              onError={(event) => {
                event.currentTarget.src = fallbackPlayerImg;
              }}
            />
            <div className="min-w-0 flex-1">
              <h3 className="truncate font-bold">{player.playerName}</h3>
              <p className="text-sm text-gray-500">{player.playerCountry}</p>
            </div>
            <div className="flex shrink-0 flex-col items-end gap-2">
              <p className="text-sm font-semibold sm:text-base">${player.price}</p>
              <button
                type="button"
                onClick={() => onRemovePlayer(player)}
                className="btn btn-ghost btn-sm text-error"
                aria-label={`Remove ${player.playerName}`}
              >
                <FaTrash />
                <span className="hidden sm:inline">Remove</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectedPlayers;
