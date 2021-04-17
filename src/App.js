import { useState } from "react";

import "./App.css";
import HeaderComponent from "./components/header/header.component";
import FooterComponent from "./components/footer/footer.component";
import CategoryComponent from "./components/category/category.component";

function App() {
  const [category, setCategory] = useState([]);

  const handleCategory = (data) => {
    console.log("categorygggg", data);
    setCategory(data);
  };

  return (
    <>
      <HeaderComponent handleCategory={handleCategory} />
      {category.length > 0 ? (
        <CategoryComponent category={category} />
      ) : (
        <div className="heading">
          <div>
            <h2>Welcome to Rental Management System</h2>
            <br></br>
            <h5 className="text-center">Please Select Location</h5>
          </div>
        </div>
      )}
      <FooterComponent />
    </>
  );
}

export default App;
