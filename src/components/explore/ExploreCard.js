import { Link } from 'react-router-dom';
import '../../styles/ExploreCard.css';

const ExploreCard = ({ genre }) => {
  return (
    <>
      <Link to={`/explore/${genre.id}`}>
        <p>{genre.name}</p>
      </Link>
    </>
  );
}

export default ExploreCard;