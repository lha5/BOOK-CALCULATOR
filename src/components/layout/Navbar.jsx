import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="px-4 xl:px-0 py-6 border-b border-b-slate-300 w-full">
      <div className="container mx-auto flex flex-row justify-between items-center">
        <Link to="/" className="nanumsr text-xl lg:text-2xl font-black">
          풍요책 계산기
        </Link>
        <nav
          id="navigation"
          className="flex flex-row justify-end items-center text-gray-700 z-10 text-sm lg:text-base"
        >
          <NavLink to="/spine" className="mr-3 lg:mr-5">
            책등 계산기
          </NavLink>
          <NavLink to="/estimate">견적 계산기</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
