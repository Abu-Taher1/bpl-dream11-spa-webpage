import dollarImg from "../../assets/dollar-1.png";

const NavBar = ({coin}) => {
  return (
    <header className="border-b border-base-200 bg-base-100 shadow-sm">
      <div className="navbar mx-auto w-full max-w-312.5 px-4 sm:px-6 lg:px-8">
        <div className="flex-1">
          <a className="btn btn-ghost px-0 text-lg sm:text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <button className="flex items-center gap-2 text-sm sm:text-base">
            <span>{coin} Coin</span>
            <img className="h-5 w-5 sm:h-6 sm:w-6" src={dollarImg} alt="Dollar" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
