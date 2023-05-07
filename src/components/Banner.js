import "./Banner.css";
function Banner() {
  return (
    <section className="banner">
      <img src="./banner.png" alt="Welcome banner" />
      <div class="welcome">
        <h2>
          Welcome to <br />
          <span>MarioClub</span>
        </h2>
      </div>
    </section>
  );
}
export default Banner;
