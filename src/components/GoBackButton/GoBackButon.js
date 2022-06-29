import { Link } from 'react-router-dom';
import s from './GoBackButton.module.css';

export default function GoBackButton({ location }) {
  return (
    <Link to={location} className={s.Button}>
      Go back
    </Link>
  );
}
