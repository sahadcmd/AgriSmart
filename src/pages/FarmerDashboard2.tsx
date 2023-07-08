import FarmerComponent from "../components/FarmerComponent";
import FarmerCreate from "../components/FarmerCreate";
import FarmerSidebar from "../components/FarmerSidebar";
import bgImg from "../media/farmerDashboardbg2.png";

const FarmerDashboard2 = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <img
        src={bgImg}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100vw",
          zIndex: -1,
        }}
      />
      <FarmerSidebar />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
          position: "absolute",
          top: 50,
          left: "90%",
        }}
      >
        <FarmerComponent />
      </div>
      <div
        style={{
          margin: 80,
          marginTop: 36,
          color: "white",
          marginBottom: 81,
          marginLeft: 100,
        }}
      >
        <div className="homeTitleText">Your agricultural assistant</div>
      </div>

      <FarmerCreate />
    </div>
  );
};

export default FarmerDashboard2;
