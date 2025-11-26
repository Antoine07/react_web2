import { Link } from "@tanstack/react-router"

function Menu() {
  return (
    <>
      <Link
        to="/"
        className="text-gray-300 hover:text-indigo-300 transition-colors [&.active]:text-indigo-400 [&.active]:border-b-2 [&.active]:border-indigo-500 pb-1"
      >
        Home
      </Link>

      <Link
        to="/prime"
        className="text-gray-300 hover:text-indigo-300 transition-colors [&.active]:text-indigo-400 [&.active]:border-b-2 [&.active]:border-indigo-500 pb-1"
      >
        Prime
      </Link>
      <Link
        to="/fibonacci"
        className="text-gray-300 hover:text-indigo-300 transition-colors [&.active]:text-indigo-400 [&.active]:border-b-2 [&.active]:border-indigo-500 pb-1"
      >
        Fibonacci
      </Link>
      <Link
        to="/about/state_prime"
        className="text-gray-300 hover:text-indigo-300 transition-colors [&.active]:text-indigo-400 [&.active]:border-b-2 [&.active]:border-indigo-500 pb-1"
      >
        About
      </Link>
    </>
  );
}

export default Menu