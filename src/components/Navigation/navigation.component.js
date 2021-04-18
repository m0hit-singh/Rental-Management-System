import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  breadscrumbs: {
    height: "40px",
    padding: "0px 14px",
    fontSize: "16px",
  },
  cursor: {
    cursor: "pointer",
  },
  pointerevents: {
    pointerEvents: "none",
  },
}));

function CustomSeparator({ categoryName, subCategoryName, handleNavigation }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Breadcrumbs
        className={classes.breadscrumbs}
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link
          color="textPrimary"
          className={classes.pointer}
          onClick={handleNavigation}
        >
          {categoryName} Category
        </Link>
        {subCategoryName && (
          <Link className={classes.pointerevents} color="textPrimary">
            {subCategoryName}
          </Link>
        )}
      </Breadcrumbs>
    </div>
  );
}

export default CustomSeparator;
