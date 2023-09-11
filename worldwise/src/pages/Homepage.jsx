import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h2>WorldWise</h2>
      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
