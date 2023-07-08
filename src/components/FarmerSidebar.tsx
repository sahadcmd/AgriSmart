import homeBtn from "../media/homeBtn.png";
import createBtn from "../media/createBtn.png";
import shopBtn from "../media/marketBtn.png";
import circle from "../media/circle.png";
import { useLocation, useNavigate } from "react-router-dom";

const FarmerSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div
      style={{
        position: "absolute",
        width: "104px",
        height: "100vh",
        left: "-22px",
        top: "0px",
        background: "#C4C4C4",
        borderRadius: "30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 45,
          justifyContent: "space-between",
          height: 400,
        }}
      >
        <img
          src={location.pathname == "/farmerdashboard" ? circle : homeBtn}
          style={{ width: 30 }}
          onClick={() => navigate("/farmerdashboard")}
        />
        <img
          src={location.pathname == "/farmerdashboard2" ? circle : createBtn}
          style={{ width: 30 }}
          onClick={() => navigate("/farmerdashboard2")}
        />
        <img
          src={location.pathname == "/farmerdashboard3" ? circle : shopBtn}
          style={{ width: 30 }}
          onClick={() => navigate("/farmerdashboard3")}
        />
      </div>
    </div>
  );
};

export default FarmerSidebar;
