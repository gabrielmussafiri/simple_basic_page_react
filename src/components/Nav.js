import "./Nav.css";
function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <a href="/join.html" className="join">
            Join the Club
          </a>
        </li>
        <li>
          <a href="/news.html">Latest News</a>
        </li>
        <li>
          <a href="/games.html">New games</a>
        </li>
        <li>
          <a href="/contact.html">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
