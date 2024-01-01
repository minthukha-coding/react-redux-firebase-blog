import View from "../../routes";
import Navbar from "../navbar/Navbar";

function index() {
  return (
    <>
      <div>
        <Navbar />
        <div>
          <View />
        </div>
      </div>
    </>
  );
}

export default index;
