import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>The Page You Requsted Doesn't Exist</p>
      <br />
      <br />
      <Link to="/">Back to the homepage...</Link>
    </div>
  );
};

export default NotFound;
