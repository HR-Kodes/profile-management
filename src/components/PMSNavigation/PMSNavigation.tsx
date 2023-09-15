import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import "./PMSNavigation.css";

const PMSNavigation = ({ forwardLabel, forwardRoute }: any) => {
  const navigate = useNavigate();

  const landingPageNavigationHandler = () => {
    navigate("/");
  };

  const profilesListPageNavigationHandler = () => {
    navigate(forwardRoute);
  };

  return (
    <>
      <div
        className="pms-navigation-landing-page-container"
        onClick={landingPageNavigationHandler}
      >
        <p className="pms-navigation-text is-button-hover-light">
          <span>
            <BiChevronLeft className="pms-navigation-text-icon" />
            Home Page
          </span>
        </p>
      </div>

      <div
        className="pms-navigation-profiles-list-container"
        onClick={profilesListPageNavigationHandler}
      >
        <p className="pms-navigation-text is-button-hover-light">
          <span>
            {forwardLabel}
            <BiChevronRight className="pms-navigation-text-icon" />
          </span>
        </p>
      </div>
    </>
  );
};

export default PMSNavigation;
