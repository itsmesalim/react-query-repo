import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/">React Query Practice</NavLink>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/trad">Fetching data via old way</NavLink>
          </li>
          <li>
            <NavLink to="/rq"> Fetching data via React Query </NavLink>
          </li>
          <li>
            <NavLink to="/infinite"> InfiniteScroll </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};
