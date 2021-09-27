import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
      <div className="flex-1 px-2 mx-2">
        <Link to="/" className="text-2xl hover:grow font-bold">
          Poké-Dex
        </Link>
      </div>
    </div>
  );
}
