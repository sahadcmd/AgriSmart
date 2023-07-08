import { Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { api_getItems } from "../api/api";

const Dashboard = () => {
  const [products, setProducts] = useState<any[]>([]);
  useEffect(() => {
    api_getItems().then((list) => setProducts(list));
  }, []);

  return (
    <div>
      <Typography variant="h3">AgriSmart Market</Typography>
      {products.map((item) => (
        <Paper
          key={item.name}
          sx={{
            width: "max-content",
            margin: "auto",
            marginTop: 5,
            height: "max-content",
          }}
        >
          <div style={{ width: "100%", height: 400 }}>
            <img
              src={item.imageUri}
              alt="ff"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <Typography variant="h4">{item.name}</Typography>
          <Typography variant="h5">$ {item.price}</Typography>
        </Paper>
      ))}
    </div>
  );
};

export default Dashboard;
