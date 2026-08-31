import { Link, NavLink } from "react-router-dom";

interface HeaderProps {
  savedCount: number;
}

function Header({ savedCount }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="rounded-md text-xl font-bold text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          Skjer<span className="text-red-600">Oslo</span>
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `border-b-2 pb-1 text-sm font-medium transition hover:border-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:border-red-500 ${
                    isActive
                      ? "border-red-500 text-gray-950"
                      : "border-transparent text-gray-700"
                  }`
                }
              >
                Utforsk
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/saved"
                className={({ isActive }) =>
                  `border-b-2 pb-1 text-sm font-medium transition hover:border-red-500 hover:text-gray-950 focus-visible:outline-none focus-visible:border-red-500 ${
                    isActive
                      ? "border-red-500 text-gray-950"
                      : "border-transparent text-gray-700"
                  }`
                }
              >
                Mine planer {savedCount > 0 && `(${savedCount})`}
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
