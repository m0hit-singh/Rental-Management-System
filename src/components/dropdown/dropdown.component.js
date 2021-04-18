import React, { useState } from "react";
import { Menu, MenuItem } from "@material-ui/core";

import NestedMenuItem from "material-ui-nested-menu-item";
import data from "../../assets/data/data";

export const NestedMenu = ({ handleCategory }) => {
  const [menuPosition, setMenuPosition] = useState(null);

  const handleLocationClick = (event, locationName, branches) => {
    event.preventDefault();
    setMenuPosition(null);
    let allCategories = [];
    branches.flat(1).map((item, index) => allCategories.push(item.categories));
    handleCategory(locationName, allCategories.flat(1));
  };

  const handleBranchesClick = (event, branchName, categoryID) => {
    event.preventDefault();
    setMenuPosition(null);
    handleCategory(branchName, categoryID);
  };

  const handleDropdownOnMouseEnter = (event) => {
    event.preventDefault();
    setMenuPosition({
      top: event.pageY,
      left: event.pageX,
    });
  };

  return (
    <div>
      <div
        className="text-white"
        onMouseEnter={(e) => handleDropdownOnMouseEnter(e)}
      >
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
              onClick={(e) =>
                handleLocationClick(
                  e,
                  item.name,
                  data[0].data.locations[index].branches
                )
              }
            >
              {data[0].data.locations[index].branches.map(function (
                branch,
                branchIndex
              ) {
                return (
                  <MenuItem
                    key={branchIndex}
                    onClick={(e) =>
                      handleBranchesClick(e, branch.name, branch.categories)
                    }
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
