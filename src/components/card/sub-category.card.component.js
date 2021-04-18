import React from "react";

function SubCategoryCard({ index, item, GetSubCategoryImage }) {
  return (
    <div className="col-md-3 streamcard-mobile" key={index}>
      <div
        className="stream"
        // onClick={() => onSelectCategory(item.subcategories)}
      >
        <div className="stream-image">
          <img
            src={GetSubCategoryImage(item.image)}
            className="stream-img-logo"
            alt="stream logo"
          ></img>
        </div>
        <div className="stream-name">
          <span>{item.name}</span>
        </div>
      </div>
    </div>
  );
}

export default SubCategoryCard;
