import { useNavigate } from "react-router-dom";
import bellIcon from "../media/bellIcon.png";
import powerBtn from "../media/powerBtn.png";
import { useStore } from "../store";

const FarmerComponent = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  return (
    <div
      style={{
        background: "#AAFADD",
        border: "3px solid #2B342D",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "120px",
        display: "flex",
        padding: 10,
        marginLeft: "auto",
        width: "max-content",
      }}
    >
      <img src={bellIcon} style={{ width: 25, marginRight: 29 }} />
      <img
        src={powerBtn}
        style={{ width: 25, marginRight: 29 }}
        onClick={() => {
          setUser(null);
          navigate("/");
        }}
      />
      <div
        style={{ background: "white", width: 25, height: 25, borderRadius: 12 }}
      />
    </div>
  );
};

export default FarmerComponent;
