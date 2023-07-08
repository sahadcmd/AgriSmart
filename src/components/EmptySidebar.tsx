import homeBtn from "../media/homeBtn.png";
import shopingCartBtn from "../media/shopingCartIcon.png";
import shopBtn from "../media/marketBtn.png";
import { useNavigate } from "react-router-dom";

const EmptySidebar = () => {
  const navigate = useNavigate();
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
          src={homeBtn}
          style={{ width: 30 }}
          onClick={() => navigate("/farmerdashboard")}
        />
        <img
          src={shopingCartBtn}
          style={{ width: 30 }}
          onClick={() => navigate("/farmerdashboard2")}
        />
        <img
          src={shopBtn}
          style={{ width: 30 }}
          onClick={() => navigate("/farmerdashboard3")}
        />
      </div>
    </div>
  );
};

export default EmptySidebar;
