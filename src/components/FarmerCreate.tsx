import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api_addItem } from "../api/api";
import { useStore } from "../store";

const FarmerCreate = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("fruit");
  const [file, setFile] = useState<File>();
  const user = useStore((state) => state.user);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (user && file) {
      await api_addItem(
        name,
        Number(price),
        Number(quantity),
        type,
        user.name,
        file
      );

      navigate("/farmerdashboard3");
    }
  };

  const onFileSelected = (e: any) => {
    setFile(e.target.files[0]);
  };

  return (
    <div
      style={{
        position: "absolute",
        width: "361px",
        height: "556px",
        left: "156px",
        top: "194px",
        background: "#A1ACAB",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "45px",
        padding: 25,
      }}
    >
      <div className="inputLabel2">Product name</div>
      <input
        className="inputField2"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginBottom: 13 }}
      />

      <div className="inputLabel2">Quantity</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          className="inputField2"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ marginBottom: 13 }}
        />
        <div style={{ marginLeft: 10, fontSize: 20 }}>Kg</div>
      </div>

      <div className="inputLabel2">Amount/kg</div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <input
          className="inputField2"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          style={{ marginBottom: 13 }}
        />
        <div style={{ marginLeft: 10, fontSize: 28 }}>₹</div>
      </div>

      <div className="inputLabel2">Product type</div>
      <select
        className="inputField2"
        value={type}
        onChange={(e) => setType(e.target.value)}
        style={{ marginBottom: 13, width: "100%" }}
      >
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
      </select>

      <div className="inputLabel2">Add Image</div>
      <input
        className="inputField2"
        type="file"
        onChange={(e) => onFileSelected(e)}
      />
      <button className="button2" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default FarmerCreate;
