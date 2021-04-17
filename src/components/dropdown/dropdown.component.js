import React, { useState } from "react";
import { Menu, MenuItem } from "@material-ui/core";

import NestedMenuItem from "material-ui-nested-menu-item";
import data from "../../assets/data/data";

export const NestedMenu = ({ handleCategory }) => {
  const [menuPosition, setMenuPosition] = useState(null);

  console.log("dataaaa", data[0].data.locations);
  const handleRightClick = (event) => {
    if (menuPosition) {
      return;
    }
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  const handleItemClick = (event, categoryID) => {
    console.log(categoryID);
    setMenuPosition(null);
    handleCategory(categoryID);
  };

  const handleDropdown = (event) => {
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  return (
    <div onContextMenu={handleRightClick}>
      <div className="text-white" onMouseEnter={(e) => handleDropdown(e)}>
        Select Location
      </div>
      <Menu
        open={!!menuPosition}
        onClose={() => setMenuPosition(null)}
        anchorReference="anchorPosition"
        anchorPosition={menuPosition}
      >
        {data[0].data.locations.map(function (item, index) {
          return (
            <NestedMenuItem
              key={index}
              label={item.name}
              parentMenuOpen={!!menuPosition}
              onClick={handleItemClick}
            >
              {data[0].data.locations[index].branches.map(function (
                branch,
                branchIndex
              ) {
                return (
                  <MenuItem
                    key={branchIndex}
                    onClick={(e) => handleItemClick(e, branch.categories)}
                  >
                    {branch.name}
                  </MenuItem>
                );
              })}
            </NestedMenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default NestedMenu;
