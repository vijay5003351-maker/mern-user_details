import { Link } from "react-router-dom";
import Button10 from "./ui/button-10";

const Home = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center gap-2">
      <Link to="/create-user">
        <Button10>Create User</Button10>
      </Link>
    </div>
  );
};

export default Home;
