import PropTypes from "prop-types";

function Movie({ a, b, c, d }) {
  return (
    <div>
      <hr />
      <img src={a} alt={b} />
      <h2>{b}</h2>
      <p>{c}</p>
      <ul>{d && d.map((g) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}

Movie.propTypes = {
  a: PropTypes.string.isRequired,
  b: PropTypes.string.isRequired,
  c: PropTypes.string.isRequired,
  d: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
