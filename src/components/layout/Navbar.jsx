import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="flex flex-row justify-between items-center">
      <Link to="/" className="nanumsr text-2xl font-extrabold">
        풍요책 계산기
      </Link>
      <nav id="navigation">
        <NavLink to="/spine">책등 계산기</NavLink>
        <NavLink to="/estimate">견적 계산기</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
