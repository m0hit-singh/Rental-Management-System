import NestedMenu from "../dropdown/dropdown.component";

function HeaderComponent({ handleCategory }) {
  return (
    <nav className="nav-bar">
      <ul className="menu">
        <li className="logo">
          <span>RENTAL MANAGEMENT SYSTEM</span>
        </li>
        <li className="pd-21">
          <NestedMenu handleCategory={handleCategory} />
        </li>
      </ul>
    </nav>
  );
}

export default HeaderComponent;
