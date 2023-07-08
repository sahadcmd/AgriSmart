import tempIcon from "../media/tempIcon.png";
import cloudIcon from "../media/cloudIcon.png";
import dropIcon from "../media/dropIcon.png";
import { api_readSensorData } from "../api/api";
import { useEffect, useState } from "react";
import useTimer from "./hooks/useTimer";

interface IndicatorBoxProps {
  name: string;
  value: string;
  unit: string;
  icon: any;
  text: string;
}

const IndicatorBox = ({ name, value, unit, icon, text }: IndicatorBoxProps) => {
  return (
    <div
      style={{
        background: "#C4DBD8",
        border: "1px solid #C4DBD8",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "30px",
        width: "272px",
        height: "148px",
        padding: 20,
        marginBottom: 60,
      }}
    >
      <div
        style={{
          fontFamily: "'Roboto'",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "20px",
          lineHeight: "23px",
          textAlign: "center",
          marginLeft: 20,
          marginBottom: 10,
          color: "#000000",
        }}
      >
        {name}
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={icon} style={{ width: 36 }} />
        <div
          style={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "40px",
            lineHeight: "47px",
            color: "#000000",
            marginLeft: 20,
          }}
        >
          {value}
        </div>
        <span>{unit}</span>
      </div>

      <div
        style={{
          opacity: "0.75",
          border: "1px solid #000000",
          borderRadius: "75px",
          width: "max-content",
          padding: 5,
          paddingLeft: 28,
          paddingRight: 28,
          marginLeft: "auto",
          marginTop: 15,
        }}
      >
        {text}
      </div>
    </div>
  );
};

const getTemptext = (val: number | string) => {
  val = Number(val);
  let rtnval = "low";
  if (val > 20) {
    rtnval = "medium";
  }
  if (val > 30) {
    rtnval = "high";
  }

  return rtnval;
};

const gethumitext = (val: number | string) => {
  val = Number(val);
  let rtnval = "low";
  if (val > 50) {
    rtnval = "medium";
  }
  if (val > 80) {
    rtnval = "high";
  }

  return rtnval;
};

const getmoistText = (val: number | string) => {
  val = Number(val);
  let rtnval = "low";
  if (val > 50) {
    rtnval = "medium";
  }
  if (val > 80) {
    rtnval = "good";
  }

  return rtnval;
};

const FarmerDashIndicator = () => {
  const [items, setItems] = useState<IndicatorBoxProps[]>([]);
  const [isChecked, setIsChecked] = useState(false);

  const updateData = async () => {
    const item = await api_readSensorData();
    const data: IndicatorBoxProps[] = [
      {
        name: "Temperature",
        value: item[0].temperature,
        unit: "C",
        text: getTemptext(item[0].temperature),
        icon: tempIcon,
      },
      {
        name: "Humidity",
        value: item[0].humidity,
        unit: "%",
        text: gethumitext(item[0].humidity),
        icon: cloudIcon,
      },

      {
        name: "Moisture",
        value: item[0].soil_moisture,
        unit: "%",
        text: getmoistText(item[0].soil_moisture),
        icon: dropIcon,
      },
    ];
    setItems(data);
  };
  useTimer(1000, () => {
    updateData();
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", marginLeft: 225 }}>
      {items.map((item) => (
        <IndicatorBox
          name={item.name}
          value={item.value}
          unit={item.unit}
          icon={item.icon}
          text={item.text}
        />
      ))}

      <div
        style={{
          width: "148px",
          height: "148px",
          background: "#76B3C6",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "30px",
          position: "relative",
          top: -212,
          left: 400,
        }}
      >
        <div
          style={{
            fontFamily: "'Roboto'",
            fontStyle: "normal",
            fontWeight: "600",
            fontSize: "20px",
            lineHeight: "23px",
            color: "#000000",
            marginTop: 25,
            marginBottom: 8,
            textAlign: "center",
          }}
        >
          Sprinkler
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};

export default FarmerDashIndicator;
