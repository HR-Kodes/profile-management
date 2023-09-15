import { checkMark } from "../../assets";
import "./PMSNotification.css";
const PMSNotification = ({ success }: { success: boolean }) => {
  return (
    <div
      id="pms-notification-parent-container"
      className={success ? "show" : ""}
    >
      <div id="img">
        <img
          src={checkMark}
          alt="Done"
          className="pms-notification-check-mark-logo"
        />
      </div>
      <div id="desc">Profile Saved Successfully</div>
    </div>
  );
};

export default PMSNotification;
