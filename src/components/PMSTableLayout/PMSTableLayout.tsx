import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

import { PMSModal } from "..";

import "./PMSTableLayout.css";

const PMSTableLayout = ({ profilesData, setProfilesData }: any) => {
  const navigate = useNavigate();

  // deleteObj state is to securly verify before deleting.
  const [deletedObject, setDeletedObject] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Edit button click handler to edit profile data
  const editProfileHandler = (event: any) => {
    const rowId = event.target.parentNode.parentNode.id;
    navigate(`/add-profile?id=${rowId}`);
  };

  // Delete button click handler to detele profile data from local storage
  const deleteProfileHandler = (event: any) => {
    const rowId = event.target.parentNode.parentNode.id;
    let updateLocalProfileData: any = {};
    for (const key in profilesData) {
      if (key !== rowId) {
        updateLocalProfileData[key] = profilesData[key];
      }
    }
    setIsModalOpen(true);
    setDeletedObject(updateLocalProfileData);
  };

  return (
    <div className="pms-table-layout-parent-container">
      <table>
        <tr>
          <th>Full Name</th>
          <th>Phone Number</th>
          <th>Email ID</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>City</th>
          <th>State</th>
          <th>Action</th>
        </tr>
        {profilesData &&
          Object.keys(profilesData)?.map((profileID: any, key: any) => {
            return (
              <tr id={profilesData[profileID]["id"]} key={key}>
                <td>{profilesData[profileID]?.["Full Name"]}</td>
                <td>{profilesData[profileID]?.["Email ID"]}</td>
                <td>{profilesData[profileID]?.["Phone Number"]}</td>
                <td>{profilesData[profileID]?.["Date of Birth"]}</td>
                <td>{profilesData[profileID]?.["State"]}</td>
                <td>{profilesData[profileID]?.["City"]}</td>
                <td>{profilesData[profileID]?.["Gender"]}</td>
                <td id={profilesData[profileID]["id"]}>
                  <div id={profilesData[profileID]["id"]}>
                    <FiEdit
                      onClick={editProfileHandler}
                      className="pms-table-action-icons"
                      id={profilesData[profileID]["id"]}
                    />
                    <MdOutlineDeleteOutline
                      id={profilesData[profileID]["id"]}
                      onClick={deleteProfileHandler}
                      className="pms-table-action-icons"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
      </table>
      {!profilesData && (
        <div className="pms-table-layout-no-data-container">
          <p>No Profiles Created Yet</p>
        </div>
      )}
      {isModalOpen && (
        <PMSModal
          deletedObject={deletedObject}
          setDeletedObject={setDeletedObject}
          setProfilesData={setProfilesData}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default PMSTableLayout;
