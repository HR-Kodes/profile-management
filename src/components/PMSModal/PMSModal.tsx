import { RiCloseLine } from "react-icons/ri";

import "./PMSModal.css";

const PMSModal = ({
  setDeletedObject,
  setProfilesData,
  deletedObject,
  setIsModalOpen,
}: any) => {
  return (
    <>
      <div
        className="pms-modal-backdrop-container"
        onClick={() => {
          setIsModalOpen(false);
          setDeletedObject({});
        }}
      />
      <div className="pms-modal-parent-container">
        <div className="pms-modal-container">
          <div className="pms-modal-header-container">
            <h5 className="pms-modal-heading">Alert</h5>
          </div>
          <button
            className="pms-modal-close-button"
            onClick={() => {
              setIsModalOpen(false);
              setDeletedObject({});
            }}
          >
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="pms-modal-content-container">
            Are you sure you want to delete the item?
          </div>
          <div className="pms-modal-footer-container">
            <div className="pms-modal-actions-container">
              <button
                className="pms-modal-delete-button is-button-hover-light"
                onClick={() => {
                  localStorage.setItem(
                    "profilesData",
                    JSON.stringify(deletedObject)
                  );
                  setProfilesData(deletedObject);
                  setDeletedObject(null);
                  setIsModalOpen(false);
                }}
              >
                Delete
              </button>
              <button
                className="pms-modal-cancel-button"
                onClick={() => {
                  setIsModalOpen(false);
                  setDeletedObject({});
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PMSModal;
