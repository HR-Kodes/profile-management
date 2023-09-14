import { useNavigate } from "react-router-dom";

import { profileAdd, profileList } from "../../assets";

import "./PMSLandingPage.css";

const PMSLandingPage = () => {
  const navigate = useNavigate();
  const addUsersPageClickHandler = () => {
    navigate("add-user");
  };

  const usersListPageClickHandler = () => {
    navigate("users-list");
  };

  return (
    <div className="pms-landing-page-parent-container">
      <div className="pms-landing-page-heading-container">
        <h2>Welcome To Profile Management System</h2>
        <p>
          Create and manage profiles. Perform CRUD operations on profile data.
          Navigate to below options to explore more features.
        </p>
      </div>

      <div className="pms-landing-page-options-parent-container">
        <div
          className="pms-landing-page-add-profile-container pms-landing-page-card-container is-button-hover-light"
          onClick={addUsersPageClickHandler}
        >
          <img
            src={profileAdd}
            alt="add profile logo"
            className="pms-landing-page-add-user-logo"
          />
          <p className="pms-landing-page-add-user-paragraph">Add Profile</p>
        </div>
        <div
          className="pms-landing-page-view-all-profile-container pms-landing-page-card-container is-button-hover-light"
          onClick={usersListPageClickHandler}
        >
          <img
            src={profileList}
            alt="user list logo"
            className="pms-landing-page-user-list-logo"
          />
          <p className="pms-landing-page-user-list-paragraph">View Profiles</p>
        </div>
      </div>
    </div>
  );
};

export default PMSLandingPage;
