import SubCategoryCard from "../card/sub-category.card.component";

import BoomsArticulatedElectricIMG from "../../assets/images/category/subcategory/booms_articulated_electric.png";
import booms_articulated_engineIMG from "../../assets/images/category/subcategory/booms_articulated_engine.png";
import booms_straightIMG from "../../assets/images/category/subcategory/booms_straight.png";
import booms_towableIMG from "../../assets/images/category/subcategory/booms_towable.png";
import earth_moving_backhoeIMG from "../../assets/images/category/subcategory/earth_moving_backhoe.png";
import earth_moving_compact_truck_loaderIMG from "../../assets/images/category/subcategory/earth_moving_compact_truck_loader.png";
import earth_moving_mini_excavatorIMG from "../../assets/images/category/subcategory/earth_moving_mini_excavator.png";
import earth_moving_skid_steerIMG from "../../assets/images/category/subcategory/earth_moving_skid_steer.png";
import forklift_electricIMG from "../../assets/images/category/subcategory/forklift_electric.png";
import forklift_ic_pneumaticIMG from "../../assets/images/category/subcategory/forklift_ic_pneumatic.png";
import forklift_piggybackIMG from "../../assets/images/category/subcategory/forklift_piggyback.png";
import forklift_rough_terrainIMG from "../../assets/images/category/subcategory/forklift_rough_terrain.png";
import forklifts_ic_cushionIMG from "../../assets/images/category/subcategory/forklifts_ic_cushion.png";
import personnel_cart_rough_terrainIMG from "../../assets/images/category/subcategory/personnel_cart_rough_terrain.png";
import scissor_lift_rough_terrainIMG from "../../assets/images/category/subcategory/scissor_lift_rough_terrain.png";
import scissor_lift_slabIMG from "../../assets/images/category/subcategory/scissor_lift_slab.png";
import single_man_lifts_driveableIMG from "../../assets/images/category/subcategory/single_man_lifts_driveable.png";
import single_man_lifts_push_aroundIMG from "../../assets/images/category/subcategory/single_man_lifts_push_around.png";
import NAIMG from "../../assets/images/category/subcategory/NA.jpg";

function SubCategoryComponent({ subCategory }) {
  //------- add dynamic images for sub category-------------//

  const GetSubCategoryImage = (subcategoryImage) => {
    if (subcategoryImage === undefined) {
      return NAIMG;
    } else if (subcategoryImage.includes("booms_articulated_electric")) {
      return BoomsArticulatedElectricIMG;
    } else if (subcategoryImage.includes("booms_articulated_engine")) {
      return booms_articulated_engineIMG;
    } else if (subcategoryImage.includes("booms_straight")) {
      return booms_straightIMG;
    } else if (subcategoryImage.includes("booms_towable")) {
      return booms_towableIMG;
    } else if (subcategoryImage.includes("earth_moving_backhoe")) {
      return earth_moving_backhoeIMG;
    } else if (subcategoryImage.includes("earth_moving_compact_truck_loader")) {
      return earth_moving_compact_truck_loaderIMG;
    } else if (subcategoryImage.includes("earth_moving_mini_excavator")) {
      return earth_moving_mini_excavatorIMG;
    } else if (subcategoryImage.includes("earth_moving_skid_steer")) {
      return earth_moving_skid_steerIMG;
    } else if (subcategoryImage.includes("forklift_electric")) {
      return forklift_electricIMG;
    } else if (subcategoryImage.includes("forklift_ic_pneumatic")) {
      return forklift_ic_pneumaticIMG;
    } else if (subcategoryImage.includes("forklift_rough_terrain")) {
      return forklift_rough_terrainIMG;
    } else if (subcategoryImage.includes("forklift_piggyback")) {
      return forklift_piggybackIMG;
    } else if (subcategoryImage.includes("forklifts_ic_cushion")) {
      return forklifts_ic_cushionIMG;
    } else if (subcategoryImage.includes("personnel_cart_rough_terrain")) {
      return personnel_cart_rough_terrainIMG;
    } else if (subcategoryImage.includes("scissor_lift_rough_terrain")) {
      return scissor_lift_rough_terrainIMG;
    } else if (subcategoryImage.includes("scissor_lift_slab")) {
      return scissor_lift_slabIMG;
    } else if (subcategoryImage.includes("single_man_lifts_driveable")) {
      return single_man_lifts_driveableIMG;
    } else if (subcategoryImage.includes("single_man_lifts_push_around")) {
      return single_man_lifts_push_aroundIMG;
    } else {
      return BoomsArticulatedElectricIMG;
    }
  };
  return (
    <div className="category-container">
      {subCategory.map(function (item, index) {
        return (
          <SubCategoryCard
            key={index}
            index={index}
            item={item}
            GetSubCategoryImage={GetSubCategoryImage}
          />
        );
      })}
    </div>
  );
}

export default SubCategoryComponent;
