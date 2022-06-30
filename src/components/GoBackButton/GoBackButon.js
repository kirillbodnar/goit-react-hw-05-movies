import { Link } from 'react-router-dom';
import s from './GoBackButton.module.css';
import { useLocation } from 'react-router-dom';

export default function GoBackButton() {
  const location = useLocation();
  return (
    <Link to={location.state ? location.state.from : '/'} className={s.Button}>
      Go back
    </Link>
  );
}
