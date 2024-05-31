import "../App.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer2">
          <div class="left-elements">
            <img
              className="FooterLogo"
              src={process.env.PUBLIC_URL + "/img/logo.jpg"}
              alt="ロゴ画像"
            />
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

        <h5>© 2023 RaynsArchitect合同会社.</h5>
      </footer>
    </div>
  );
};
export default Footer;
