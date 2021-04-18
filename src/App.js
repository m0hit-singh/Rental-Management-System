import { useState } from "react";

import "./App.css";
import HeaderComponent from "./components/header/header.component";
import FooterComponent from "./components/footer/footer.component";
import CategoryComponent from "./components/category/category.component";
import SubCategoryComponent from "./components/sub-category/sub-category.component";
import CustomSeparator from "./components/Navigation/navigation.component";

function App() {
  const [category, setCategory] = useState([]);
  const [categoryName, setCategoryName] = useState(null);
  const [subCategoryName, setSubCategoryName] = useState(null);
  const [subCategory, setSubCategory] = useState([]);

  const handleCategory = (branchName, data) => {
    setCategory(data);
    setCategoryName(branchName);
    setSubCategory([]);
  };

  const onSelectCategory = (categoryName, data) => {
    if (data.length > 0) {
      setSubCategory(data);
      setSubCategoryName(categoryName);
    }
  };

  const handleNavigation = (event) => {
    event.preventDefault();
    setSubCategory([]);
    setSubCategoryName(null);
  };

  return (
    <>
      <HeaderComponent handleCategory={handleCategory} />
      {category.length > 0 && subCategory.length === 0 ? (
        <>
          <CustomSeparator categoryName={categoryName} />
          <CategoryComponent
            category={category}
            handleNavigation={handleNavigation}
            onSelectCategory={onSelectCategory}
          />
        </>
      ) : subCategory.length > 0 ? (
        <>
          <CustomSeparator
            categoryName={categoryName}
            handleNavigation={handleNavigation}
            subCategoryName={subCategoryName}
          />
          <SubCategoryComponent subCategory={subCategory} />
        </>
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
