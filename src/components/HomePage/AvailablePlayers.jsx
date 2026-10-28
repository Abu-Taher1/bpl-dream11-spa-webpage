import Card from "../ui/Card.jsx";

const AvailablePlayers = ({ players, setCoin, coin, selectedCricketers, setSelectedCricketers }) => {
  
  return (
    <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3">
      {players.map((player, index) => {
        return (
          <Card player={player} key={index} setCoin={setCoin} coin={coin} selectedCricketers={selectedCricketers} setSelectedCricketers={setSelectedCricketers}/>
        );
      })}
    </div>
  );
};

export default AvailablePlayers;
