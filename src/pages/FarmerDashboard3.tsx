import FarmerAvailableProducts from "../components/FarmerAvailableProducts";
import FarmerComponent from "../components/FarmerComponent";
import FarmerSidebar from "../components/FarmerSidebar";
import bgImg from "../media/farmerDashboardbg3.png";

const FarmerDashboard3 = () => {
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
          margin: 80,
          marginTop: 36,
          color: "white",
          marginBottom: 81,
          marginLeft: 100,
        }}
      ></div>

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
          position: "absolute",
          width: "720px",
          height: "700px",
          left: "165px",
          top: "161px",
          background: "#616161",
          border: "1px solid #616161",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "45px",
        }}
      >
        <div
          style={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "34px",
            lineHeight: "40px",
            color: "#FFFFFF",
            marginTop: 20,
          }}
        >
          Available products
        </div>

        <FarmerAvailableProducts />
      </div>
    </div>
  );
};

export default FarmerDashboard3;
