import SplashScreenLogo from "../images/Ushnik Logo Splash Screen.png";

const Splash = () => {
  return (
    <div className="splash-screen">
      <img
        style={{ width: "500px", height: "400px" }}
        src={SplashScreenLogo}
        alt="Ushnik Logo"
        class="splash-screen-logo"
      />
    </div>
  );
};

export default Splash;
