import { Link } from "react-router-dom";
import PageLayout from "../../layout/private-layout";

const NotFound = () => {
  return (
    <PageLayout headerTitle="Not Found" isShowTools={false}>
      <div className="text-center flex items-center justify-center gap-1">
        <h1>404 - Page not found. Go back to</h1>
        <Link to="/policy" className="text-blue-500 hover:underline">
          Home
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFound;
