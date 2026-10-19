
import reactLogo from "../assets/react.svg";
function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black-500 to-orange-500 flex  w-full items-center">
      <div className="flex items-center gap-2">
        <img src={reactLogo} className="w-10 h-10" alt="React logo" />
      </div>
      <ul className="flex gap-4 text-white text-lg font-semibold">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
