import chucky from "../Assets/chucky.png";

// Style
import "../Style/Components/Card.scss";

const Card = ({ background, text }) => {
  return (
    <article className="card" style={{ background: background }}>
      <figure className="card__wrapp-img">
        <img
          className="card__img"
          src={chucky}
          alt="the guy you don't want to know"
        />
      </figure>
      <p className="card__text">{text}</p>
    </article>
  );
};

export default Card;
