import { useNavigate } from "react-router-dom";
import bgImg from "../media/bg_landing.png";
import icon from "../media/agrismart_logo.png";
import { useStore } from "../store";
import { useEffect } from "react";

const Home = () => {
  const navigate = useNavigate();
  const user = useStore((state) => state.user);

  useEffect(() => {
    if (user) {
      if (user.type == "farmer") {
        navigate("/farmerdashboard");
      } else {
        navigate("/customerdashboard");
      }
    }
  }, [user]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        overflowY: "hidden",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img
          style={{
            left: 0,
            position: "absolute",
            objectFit: "cover",
            minWidth: "50vw",
            minHeight: "100vh",
            zIndex: -1,
          }}
          src={bgImg}
          alt="gg"
        />

        <div
          style={{
            margin: 60,
            marginTop: "auto",
            color: "white",
            marginBottom: 81,
          }}
        >
          <div className="homeTitleText">AgriSmart</div>
          <div className="homeTitleContentText">
            Welcome to the whole new world of purchasing farm fresh items
            directly from the creators iteself!!
          </div>
        </div>
      </div>

      <div style={{ width: "50vw", height: "100vh" }}>
        <div style={{ width: 347, margin: "auto", marginTop: 140 }}>
          <img src={icon} style={{ width: 190, height: 106, margin: "auto" }} />

          <div style={{ marginTop: 44 }}>
            <div className="welcomeText">Welcome to AgriSmart</div>
            <div className="loginTitleText">Select your login option</div>

            <button
              className="buttonGreen"
              style={{ marginTop: 32 }}
              onClick={() => navigate("/farmerlogin")}
            >
              Farmer
            </button>

            <button
              className="buttonDark"
              onClick={() => navigate("/customerlogin")}
              style={{ marginTop: 16 }}
            >
              Customer
            </button>
          </div>
        </div>

        <div
          style={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            textAlign: "center",
            color: "#156A60",
            width: 150,
            margin: "auto",
            marginTop: 250,
          }}
        >
          <p>Help?</p>
          <p>About Us</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
