import ContentLoader from "react-content-loader";
import "../Style/Components/Placeholder.scss";
const Loader = ({ placeholders }) => {
  return (
    <>
      {placeholders.map((placeholder, index) => (
        <ContentLoader
          className="placeholder"
          key={index}
          speed={2}
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="10" y="10" rx="10" ry="10" width="95%" height="95%" />
        </ContentLoader>
      ))}
    </>
  );
};

export default Loader;
