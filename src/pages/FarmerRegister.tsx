import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_registerUSer } from "../api/api";
import icon from "../media/agrismart_logo.png";
import { useStore } from "../store";

const FarmerRegister = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [number, setNumber] = useState("");
  const setUser = useStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (email == "" || password == "" || name == "") {
      setError("Please fill all fields");
      return;
    }
    if (Number(number) < 1000000000 || Number(number) > 9999999999) {
      setError("Please input valid phone number");
      return;
    }

    try {
      const uid = await api_registerUSer(name, "", email, password);
      setUser({ uid: uid, type: "farmer", name: name });
      navigate("/farmerdashboard");
    } catch (e) {
      /* handle error */
      setError("Try another email");
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh", paddingTop: 90 }}>
      <div>
        <img src={icon} style={{ width: 190, height: 106, margin: "auto" }} />
        <div className="welcomeText">Welcome to AgriSmart</div>
        <div className="loginTitleText"> Create an account</div>
      </div>

      <div style={{ width: 350, margin: "auto", marginTop: 45 }}>
        <div className="inputLabel">Farmer name</div>
        <input
          className="inputField"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: 10 }}
        />

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
          style={{ marginBottom: 10 }}
        />

        <div className="inputLabel">Mobile</div>
        <input
          className="inputField"
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          style={{ marginBottom: 10 }}
        />

        <div className="inputLabel">Document</div>
        <input className="inputField" type="file" />

        <button
          className="buttonGreen"
          style={{ marginTop: 32 }}
          onClick={handleSubmit}
        >
          Register
        </button>
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
          Already have an account?
          <span
            style={{ color: "#2C5282" }}
            onClick={() => navigate("/farmerlogin")}
          >
            Login now
          </span>
        </p>
      </div>
    </div>
  );
};

export default FarmerRegister;
