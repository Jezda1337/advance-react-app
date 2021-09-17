// Style
import "../Style/Components/SeenCard.scss";

const SeenCard = ({ background, text }) => {
  return (
    <>
      <article className="seenCard" style={{ background: background }}>
        <p className="seenCard__text">{text}</p>
      </article>
    </>
  );
};

export default SeenCard;
