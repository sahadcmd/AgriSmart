import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import icon from "../media/agrismart_logo.png";
import searchIcon from "../media/search.png";
import { useStore } from "../store";
import { getCurrentCity } from "../utility";

const CustomerSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState<any>("");
  const setSQ = useStore((state) => state.setSearchQuery);
  const navigate = useNavigate();

  useEffect(() => {
    getCurrentCity().then((city) => setLocation(city));
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: 32,
          alignItems: "center",
        }}
      >
        <div
          className="button3"
          style={{
            paddingLeft: 85,
            paddingRight: 85,
          }}
        >
          {location}
        </div>
        <img src={icon} style={{ width: 190, height: 106, margin: "auto" }} />
        <div
          className="button3"
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={searchIcon}
            style={{ width: 20, height: 20 }}
            onClick={() => {
              setSQ(searchQuery);
              navigate("/searchresults");
            }}
          />
          <input
            className="inputField2"
            style={{ width: 190, padding: 2 }}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div
        style={{
          margin: 60,
          marginTop: 123,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button
          className="button3"
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 85,
            paddingRight: 85,
          }}
          onClick={() => {
            setSQ("fruits");
            navigate("/searchresults");
          }}
        >
          Fruits
        </button>
        <button
          className="button3"
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            paddingLeft: 85,
            paddingRight: 85,
          }}
          onClick={() => {
            setSQ("vegetable");
            navigate("/searchresults");
          }}
        >
          Vegetables
        </button>
      </div>
    </div>
  );
};

export default CustomerSearch;
