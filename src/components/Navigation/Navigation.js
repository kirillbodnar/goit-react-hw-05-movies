import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Navigation() {
  return (
    <nav>
      <div className={s.Container}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            s.Link + (isActive ? ` ${s.LinkActive}` : '')
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            s.Link + (isActive ? ` ${s.LinkActive}` : '')
          }
        >
          Movies
        </NavLink>
      </div>
    </nav>
  );
}
