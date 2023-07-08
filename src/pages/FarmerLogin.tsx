import { useNavigate } from "react-router-dom";
import bgImg from "../media/farmerLoginBack.png";
import icon from "../media/agrismart_logo.png";
import { useState } from "react";
import { api_loginUser } from "../api/api";
import { useStore } from "../store";

const InputComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [error, setError] = useState("");
  const setUser = useStore((state) => state.setUser);

  const handleSubmit = async () => {
    if (email == "" || password == "") {
      setError("Please fill all fields");
      return;
    }

    try {
      const user = await api_loginUser(email, password, "farmer");
      setUser({ uid: user.uid, type: "farmer", name: user.name });
      navigate("/farmerdashboard");
    } catch (e) {
      /* handle error */
      setError("Try another email");
    }
  };

  return (
    <div style={{ marginTop: 44 }}>
      <div className="welcomeText">Welcome to AgriSmart</div>
      <div className="loginTitleText">Farmer Login</div>

      <div style={{ marginTop: 42 }}></div>

      {error == "" ? (
        <div className="inputLabel">Email</div>
      ) : (
        <div className="inputLabelError">{error}</div>
      )}

      <input
        className="inputField"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginBottom: 10 }}
      />

      <div className="inputLabel">Password</div>
      <input
        className="inputField"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="buttonGreen"
        style={{ marginTop: 32 }}
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  );
};

const FarmerLogin = () => {
  const navigate = useNavigate();

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
        }}
      >
        <img
          style={{
            left: 0,
            position: "absolute",
            objectFit: "cover",
            minWidth: "50vw",
            height: "100vh",
            zIndex: -1,
          }}
          src={bgImg}
          alt="gg"
        />

        <div
          style={{
            margin: 60,
            marginTop: 36,
            color: "white",
            marginBottom: 81,
          }}
        >
          <div className="homeTitleText">Welcome Farmer</div>
          <div className="homeTitleContentText">
            Experience a better farming techniques and serve the world with
            fresh fruits and vegetables.
          </div>
        </div>
      </div>

      <div style={{ width: "50vw", height: "100vh" }}>
        <div style={{ width: 347, margin: "auto", marginTop: 90 }}>
          <img src={icon} style={{ width: 190, height: 106, margin: "auto" }} />

          <InputComponent />
        </div>

        <div
          style={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            textAlign: "center",
            color: "#616161",
            width: "max-content",
            margin: "auto",
            marginTop: 250,
          }}
        >
          <p>
            Don’t have an account?
            <span
              style={{ color: "#2C5282" }}
              onClick={() => navigate("/farmerregister")}
            >
              Create now
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FarmerLogin;
