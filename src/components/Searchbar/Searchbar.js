import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import s from './Searchbar.module.css';

export default function Searchbar({ query }) {
  const [input, setInput] = useState(() => {
    if (query) {
      return query;
    }
    return '';
  });
  const navigate = useNavigate();
  const inputURL = input.trim().split(' ').join('+');

  const handleChange = e => {
    setInput(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/movies?query=${inputURL}`);
  };
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        autoComplete="off"
        autoFocus
        value={input}
        placeholder="Search movie"
        onChange={handleChange}
      />
      <button className={s.button} type="submit">
        <ImSearch />
        <span className={s.label}>Search</span>
      </button>
    </form>
  );
}
