import { Link } from 'react-router-dom';

const FilmCard = ({ poster, id, mediaType }) => {
  return (
    <>
      <Link to={`/${mediaType}/${id}`}>
        <img src={poster} alt= 'poster of the series' />
      </Link>
    </>
  );
}

export default FilmCard;