import { useSearchParams } from "react-router-dom";

import { PMSAddProfileMainForm, PMSNavigation } from "../../components";

import "./PMSAddProfile.css";

const PMSAddProfile = () => {
  // useSearchParams is used to get query string param through react router url
  let [searchParams, setSearchParams]: any = useSearchParams();
  const id = searchParams?.get("id");

  return (
    <div>
      <div className="pms-add-profile-heading pms-primary-heading">
        {id ? <h2>Edit Profile</h2> : <h2>Add Profile</h2>}
        <hr />
      </div>
      <div className="pms-add-profile-component">
        <PMSAddProfileMainForm />
      </div>
      <PMSNavigation
        forwardLabel={"View all profiles"}
        forwardRoute={"/profiles-list"}
      />
    </div>
  );
};

export default PMSAddProfile;
