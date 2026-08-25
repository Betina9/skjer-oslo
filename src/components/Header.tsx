import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-gray-900">
          SkjerOslo
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a
                href="/"
                className="text-sm font-medium text-gray-700 hover:text-gray-950"
              >
                Utforsk
              </a>
            </li>

            <li>
              <a href="/saved" className="text">
                Mine planer
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
