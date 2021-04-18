import React from "react";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

function CategoryCardComponent({
  index,
  item,
  GetCategoryImage,
  onSelectCategory,
}) {
  return (
    <div className="col-md-3 streamcard-mobile" key={index}>
      <div
        className="category paper-shadow"
        onClick={() => onSelectCategory(item.name, item.subcategories)}
      >
        <div className="category-image">
          <img
            src={GetCategoryImage(item.image)}
            className="category-image-logo"
            alt="stream logo"
          ></img>
        </div>
        <div className="category-name">
          <div
            className="col-md-10 col-lg-10 col-sm-10 col-xs-10"
            style={{ color: "#fff" }}
          >
            {item.name}
          </div>
          <div className="col-md-2 col-lg-2 col-sm-2 col-xs-2">
            <ArrowRightIcon fontSize="large" style={{ color: "#fff" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

// function StreamCard({ index, item, GetCategoryImage }) {
//   return (
//     <div className="col-md-3 categoryCard streamcard-mobile" key={index}>
//       <div
//         className="card border-primary border-secondary mb-3"
//         style={{ width: "400px" }}
//       >
//         <img
//           className="card-img-top"
//           src={GetCategoryImage(item.image)}
//           alt="Card"
//         />
//         <div className="card-body">
//           {/* <h4 className="card-title">John Doe</h4> */}
//           <p className="card-text">{item.name}</p>
//           <a href="#" className="btn btn-primary">
//             See Profile
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

export default CategoryCardComponent;
