import { Link } from 'react-router-dom';

const ExploreCard = ({ genre }) => {
  return (
    <>
      <Link to={`/explore/${genre.name}`}>
        <p>{genre.name}</p>
      </Link>
    </>
  );
}

export default ExploreCard;