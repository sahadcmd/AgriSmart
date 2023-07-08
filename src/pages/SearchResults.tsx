import { useState, useEffect } from "react";
import { api_getItems } from "../api/api";
import icon from "../media/agrismart_logo.png";
import icon2 from "../media/shopingCartIcon.png";
import bg from "../media/customerDashBg3.png";
import { useStore } from "../store";
import { FarmItemProps } from "../types";
import Fuse from "fuse.js";
import CustomerSidebar from "../components/CustomerSidebar";
import viewIcon from "../media/viewIcon.png";
import { useNavigate } from "react-router-dom";

const FarmItem = ({
  name,
  farmerName,
  quantity,
  price,
  image,
  uid,
  location,
  type,
}: FarmItemProps) => {
  const setSelectedItem = useStore((state) => state.setSelectedItem);
  const navigate = useNavigate();
  return (
    <div
      style={{
        position: "relative",
        background: "#A1ACAB",
        border: "1px solid #3A5C58",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
        width: 536,
        height: 320,
        paddingLeft: 32,
        marginBottom: 60,
      }}
    >
      <div
        style={{
          fontFamily: "'Roboto'",
          fontStyle: "normal",
          fontWeight: "400",
          fontSize: "32px",
          lineHeight: "38px",
          color: "#000000",
        }}
      >
        {name}
      </div>

      <div style={{ width: 161 }}>
        <div className="inputLabel2">Quantity</div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="inputField2"
            value={quantity}
            style={{ marginBottom: 13 }}
          />
          Kg
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            className="inputField2"
            value={price}
            style={{ marginBottom: 13 }}
          />
          /Kg
        </div>

        <div className="inputLabel2">Farmer name</div>
        <input
          className="inputField2"
          value={farmerName}
          style={{ marginBottom: 13 }}
        />
      </div>

      <img
        src={image}
        style={{
          position: "absolute",
          top: 37,
          left: 332,
          width: 180,
          height: 180,
          borderRadius: 90,
          objectFit: "cover",
        }}
      />

      <img
        src={viewIcon}
        style={{
          width: 20,
          height: 11,
          position: "absolute",
          left: "92.99%",
          right: "55.66%",
          top: "89%",
          bottom: "9.72%",
        }}
        onClick={() => {
          setSelectedItem({
            name: name,
            farmerName: farmerName,
            quantity: quantity,
            price: price,
            image: image,
            uid: "",
            location: location,
            type: type,
          });
          navigate("/view");
        }}
      />
    </div>
  );
};

const FarmItemSideMenu = ({
  name,
  farmerName,
  quantity,
  price,
  image,
  uid,
  location,
  type,
}: FarmItemProps) => {
  const [amount, setAmount] = useState<string | number>("1");
  const [total, setTotal] = useState("");
  const addTocart = useStore((state) => state.addItem);

  return (
    <div
      style={{
        width: "297px",
        height: 290,
        background: "#A1ACAB",
        border: "1px solid #3A5C58",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        borderRadius: "20px",
        padding: 15,
      }}
    >
      <div className="inputLabel2">Required quantity</div>
      <input
        className="inputField2"
        type="number"
        value={amount}
        style={{ marginBottom: 13 }}
        onChange={(e) => {
          const num = Number(e.target.value);
          const num2 = Number(quantity);
          setAmount(num > num2 ? num2 : num);
        }}
      />

      <div className="inputLabel2">Total Amount</div>
      <input
        type="number"
        className="inputField2"
        value={Number(amount) * Number(price)}
        style={{ marginBottom: 13 }}
        onChange={(e) => setTotal(e.target.value)}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <button className="button2">Buy</button>
        <img
          src={icon2}
          style={{ height: 20, width: 20 }}
          onClick={() =>
            addTocart({
              name,
              farmerName,
              quantity,
              price,
              image,
              uid,
              location,
              type,
            })
          }
        />
      </div>
    </div>
  );
};

const SearchResults = () => {
  const [products, setProducts] = useState<FarmItemProps[]>([]);
  const searchQuery = useStore((state) => state.searchQuery);

  useEffect(() => {
    api_getItems().then((items) => {
      const options = {
        keys: ["name", "type"],
      };

      const fuse = new Fuse(items, options);
      const itms: any[] = fuse.search(searchQuery).map((item) => item.item);
      console.log(itms);
      setProducts(itms);
    });
  }, []);

  return (
    <div style={{ width: "100vw", height: "100vh", paddingTop: 28 }}>
      <CustomerSidebar />
      <img
        src={bg}
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
      <img src={icon} style={{ width: 190, height: 106, margin: "auto" }} />

      <div
        style={{
          background: "#A1ACAB",
          border: "1px solid #2B342D",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          borderRadius: "15px",
          width: "max-content",
          marginLeft: 150,
          padding: 10,
        }}
      >
        {searchQuery}
      </div>
      <div style={{ marginLeft: 150, marginTop: 12 }}>
        <div
          style={{
            width: "953px",
            height: "668px",
            left: "170px",
            background: "#616161",
            border: "1px solid #616161",
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "30px",
            overflowY: "auto",
            padding: 38,
          }}
        >
          {products.map((item) => (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <FarmItem
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                image={item.image}
                farmerName={item.farmerName}
                uid={item.uid}
                type={item.type}
                location={item.location}
              />

              <FarmItemSideMenu
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                image={item.image}
                farmerName={item.farmerName}
                uid={item.uid}
                type={item.type}
                location={item.location}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
