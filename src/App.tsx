import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FarmerLogin from "./pages/FarmerLogin";
import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/CustomerRegister";
import FarmerRegister from "./pages/FarmerRegister";
import FarmerDashboard from "./pages/FarmerDashboard";
import FarmerDashboard2 from "./pages/FarmerDashboard2";
import FarmerDashboard3 from "./pages/FarmerDashboard3";
import CustomerDashboard from "./pages/CustomerDashboard";
import SearchResults from "./pages/SearchResults";
import Cart from "./pages/Cart";
import EmailVerified from "./pages/EmailVerified";
import ViewItem from "./pages/ViewItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/farmerlogin" element={<FarmerLogin />} />
          <Route path="/customerlogin" element={<CustomerLogin />} />
          <Route path="/customerregister" element={<CustomerRegister />} />
          <Route path="/farmerregister" element={<FarmerRegister />} />
          <Route path="/farmerdashboard" element={<FarmerDashboard />} />
          <Route path="/farmerdashboard2" element={<FarmerDashboard2 />} />
          <Route path="/farmerdashboard3" element={<FarmerDashboard3 />} />
          <Route path="/customerdashboard" element={<CustomerDashboard />} />
          <Route path="/searchresults" element={<SearchResults />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/email" element={<EmailVerified />} />
          <Route path="/view" element={<ViewItem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
