import { useNavigate } from "react-router-dom";
import bgImg from "../media/customerDashBg1.png";
import bgImg2 from "../media/customerDashBg2.png";
import s1 from "../media/s1.png";
import s2 from "../media/s2.png";
import s3 from "../media/s3.png";
import bg2 from "../media/customerDashBg3.png";
import CustomerSidebar from "../components/CustomerSidebar";
import CustomerSearch from "../components/CustomerSearch";
import { useEffect, useState } from "react";
import useTimer from "../components/hooks/useTimer";
import { useStore } from "../store";
import { isEmailverified } from "../api/api";

const images = [bgImg2, s1, s2, s3];

const SliderImage = () => {
  const [index, setIndex] = useState(0);

  useTimer(2000, () => {
    setIndex((prev) => {
      if (prev + 1 >= images.length) {
        return 0;
      }
      return prev + 1;
    });
  });

  return (
    <img
      className={index % 2 == 0 ? "slideImage" : "sliderImage2"}
      style={{ width: "615px", height: "412px", borderRadius: 15 }}
      src={images[index]}
    />
  );
};

const CustomerDashboard = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser);

  useEffect(() => {
    if (!isEmailverified()) {
      setUser(null);
      navigate("/email");
    }
  }, []);

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
            height: "100vh",
            zIndex: -1,
          }}
          src={bgImg}
          alt="gg"
        />

        <div
          style={{
            marginLeft: 100,
            marginTop: "auto",
            color: "white",
            marginBottom: 81,
          }}
        >
          <div className="homeTitleText">AgriSmart</div>
          <div className="homeTitleContentText">
            Experience quality grocery shopping at your fingertips.
          </div>
        </div>
      </div>
      <CustomerSidebar />
      <img
        src={bg2}
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          width: "50vw",
          height: "100vh",
          zIndex: -1,
        }}
      />
      <div style={{ width: "50vw", height: "100vh" }}>
        <CustomerSearch />
        <SliderImage />
      </div>
    </div>
  );
};

export default CustomerDashboard;
