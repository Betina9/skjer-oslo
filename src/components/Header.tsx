import { Link } from "react-router-dom";

interface HeaderProps {
  savedCount: number;
}

function Header({ savedCount }: HeaderProps) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-xl font-bold text-gray-900">
          SkjerOslo
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="/"
                className="text-sm font-medium text-gray-700 hover:text-gray-950"
              >
                Utforsk
              </Link>
            </li>

            <li>
              <Link
                to="/saved"
                className="text-sm font-medium text-gray-700 hover:text-gray-950"
              >
                Mine planer {savedCount > 0 && `(${savedCount})`}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
