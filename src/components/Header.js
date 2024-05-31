import "../App.css";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header2">
          <div class="left-elements">
            <img
              className="HeaderLogo"
              src={process.env.PUBLIC_URL + "/img/logo.jpg"}
              alt="ロゴ画像"
            />
            <h3>Rayns Architect LCC.</h3>
          </div>

          <div>
            <nav>
              <ul>
                <li>
                  <a href="#Top">Top</a>
                </li>

                <li>
                  <a href="#Mission">Mission</a>
                </li>
                <li>
                  <a href="#News">News</a>
                </li>
                <li>
                  <a href="#Contact">Contact</a>
                </li>
                <li>
                  <a href="#Recruit">Recruit</a>
                </li>
                <li>
                  <a href="#Member">Member</a>
                </li>
                <li>
                  <a href="#Company">About</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
