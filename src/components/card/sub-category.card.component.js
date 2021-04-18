import React from "react";

function SubCategoryCard({ index, item, GetSubCategoryImage }) {
  return (
    <div className="col-md-3 streamcard-mobile" key={index}>
      <div className="category paper-shadow">
        <div className="category-image">
          <img
            src={GetSubCategoryImage(item.image)}
            className="category-image-logo"
            alt="stream logo"
          ></img>
        </div>
        <div className="category-name">
          <span>{item.name}</span>
        </div>
      </div>
    </div>
  );
}

export default SubCategoryCard;
