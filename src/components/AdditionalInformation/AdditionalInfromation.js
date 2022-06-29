import { NavLink, Outlet, useLocation } from 'react-router-dom';
import s from './AdditionalInformation.module.css';

export default function AdditionalInformation() {
  const location = useLocation();
  return (
    <>
      <div className={s.Container}>
        <NavLink
          to="cast"
          className={({ isActive }) =>
            s.Link + (isActive ? ` ${s.LinkActive}` : '')
          }
          state={{ from: location.state.from }}
        >
          Cast
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            s.Link + (isActive ? ` ${s.LinkActive}` : '')
          }
          state={{ from: location.state.from }}
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}
