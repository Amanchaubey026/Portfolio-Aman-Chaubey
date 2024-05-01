/* eslint-disable react/prop-types */
import '../styles/Card.css';

const CardComponent = ({ img, name, url,about }) => {
  return (
    <div className="card-container">
      <div className="card">
        <a href={url} target="_blank" rel="noopener noreferrer" className="img-content">
          <img src={img} alt="" />
        </a>
        <div className="content">
          <a href={url} target="_blank" rel="noopener noreferrer" className="heading">{name}</a>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
