import { useEffect, useState } from "react";

import { PMSNavigation, PMSTableLayout } from "../../components";

import "./PMSProfilesList.css";

const PMSProfilesList = () => {
  // Creating a state to store local storage profiles data
  const [profilesData, setProfilesData] = useState();
  const profilesListLocal = localStorage.getItem("profilesData");

  useEffect(() => {
    if (profilesListLocal) {
      const parsedProfilesList = JSON.parse(profilesListLocal);
      setProfilesData(parsedProfilesList);
    }
  }, [profilesListLocal]);

  return (
    <div>
      <div className="pms-add-profile-heading pms-primary-heading">
        <h2>Profiles List</h2>
        <hr />
      </div>
      <PMSTableLayout
        profilesData={profilesData}
        setProfilesData={setProfilesData}
      />
      <PMSNavigation
        forwardLabel={"Add Profile"}
        forwardRoute={"/add-profile"}
      />
    </div>
  );
};

export default PMSProfilesList;
