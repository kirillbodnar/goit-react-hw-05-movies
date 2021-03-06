import PropTypes from 'prop-types';
import s from 'components/Section/Section.module.css';

export default function Section({ title, children }) {
  return (
    <section className={s.container}>
      {title && <h2>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
};
