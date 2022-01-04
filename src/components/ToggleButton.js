import { BsListNested } from "react-icons/bs";
import { CgClose } from "react-icons/cg";

const ToggleButton = ({ width, handleToggleButton, toggle }) => {
  return (
    <div className="flex ml-auto z-20">
      {width < 1024 && (
        <button
          type="button"
          aria-label="menu boutton"
          onClick={handleToggleButton}
          style={{ color: "#00e1ff", fontSize: "40px" }}
          className={
            toggle
              ? "transform transition duration-200 -rotate-90 "
              : "transform transition duration-200 rotate-0 "
          }
        >
          {toggle ? <CgClose /> : <BsListNested />}
        </button>
      )}
    </div>
  );
};

export default ToggleButton;
