import CategoryCardComponent from "../card/category.card.component";
import BoomsIMG from "../../assets/images/category/booms.png";
import CarryDeckCraneIMG from "../../assets/images/category/carry_deck_crane.png";
import EarthMovingIMG from "../../assets/images/category/earth_moving.png";
import ForkLiftsIMG from "../../assets/images/category/forklifts.png";
import MaterialLiftsIMG from "../../assets/images/category/material_lifts.png";
import PersonalCartIMG from "../../assets/images/category/personnel_cart.png";
import ScissorLiftsIMG from "../../assets/images/category/scissor_lifts.png";
import SingleManIMG from "../../assets/images/category/single_man_lifts.png";
import TelehandlersIMG from "../../assets/images/category/telehandlers.png";

function CategoryComponent({ category, onSelectCategory }) {
  //set dynamic images to category
  const GetCategoryImage = (categoryImage) => {
    if (categoryImage.includes("booms")) {
      return BoomsIMG;
    } else if (categoryImage.includes("carry_deck_crane")) {
      return CarryDeckCraneIMG;
    } else if (categoryImage.includes("earth_moving")) {
      return EarthMovingIMG;
    } else if (categoryImage.includes("forklifts")) {
      return ForkLiftsIMG;
    } else if (categoryImage.includes("material_lifts")) {
      return MaterialLiftsIMG;
    } else if (categoryImage.includes("personnel_cart")) {
      return PersonalCartIMG;
    } else if (categoryImage.includes("scissor_lifts")) {
      return ScissorLiftsIMG;
    } else if (categoryImage.includes("single_man_lifts")) {
      return SingleManIMG;
    } else if (categoryImage.includes("telehandlers")) {
      return TelehandlersIMG;
    } else {
      return BoomsIMG;
    }
  };

  return (
    <div className="category-container">
      {category.map(function (item, index) {
        return (
          <CategoryCardComponent
            key={index}
            index={index}
            item={item}
            GetCategoryImage={GetCategoryImage}
            onSelectCategory={onSelectCategory}
          />
        );
      })}
    </div>
  );
}

export default CategoryComponent;
