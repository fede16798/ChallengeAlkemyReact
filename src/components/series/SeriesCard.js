import { Link } from 'react-router-dom';

const SeriesCard = ({ poster, id }) => {
  return (
    <>
      <Link to={`/series/${id}`}>
        <img src={poster} alt= 'poster of the series' />
      </Link>
    </>
  );
}

export default SeriesCard;