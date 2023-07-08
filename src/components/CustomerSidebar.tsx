import homeBtn from "../media/homeBtn.png";
import shopingCartBtn from "../media/shopingCartIcon.png";
import powerBtn from "../media/powerBtn.png";
import { useLocation, useNavigate } from "react-router-dom";
import { useStore } from "../store";
import circle from "../media/circle.png";

const CustomerSidebar = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);
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
          src={location.pathname == "/customerdashboard" ? circle : homeBtn}
          style={{ width: 30 }}
          onClick={() => navigate("/customerdashboard")}
        />
        <img
          src={location.pathname == "/cart" ? circle : shopingCartBtn}
          style={{ width: 30 }}
          onClick={() => navigate("/cart")}
        />
        <img
          src={powerBtn}
          style={{ width: 30 }}
          onClick={() => {
            setUser(null);
            navigate("/");
          }}
        />
      </div>
    </div>
  );
};

export default CustomerSidebar;
