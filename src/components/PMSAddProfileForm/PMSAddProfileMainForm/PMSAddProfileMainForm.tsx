import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { PMSFormInput, PMSSelectInput } from "..";
import { PMSNotification } from "../..";
import {
  cityValidation,
  dateOfBirthValidation,
  emailValidation,
  fullNameValidation,
  genderValidation,
  generateUuid,
  phNumValidation,
  stateValidation,
} from "../../../utils";

import { useSearchParams } from "react-router-dom";

import "./PMSAddProfileMainForm.css";

const PMSAddProfileMainForm = () => {
  let [searchParams, setSearchParams]: any = useSearchParams();
  const [editingProfileId, setEditingProfileId] = useState(
    searchParams?.get("id")
  );

  const methods = useForm();
  const [success, setSuccess] = useState(false);
  const [profileFormData, setProfileFormData] = useState({});

  const profilesDataLocal: any = localStorage.getItem("profilesData");

  useEffect(() => {
    const parsedProfilesDataLocal = JSON.parse(profilesDataLocal);
    if (parsedProfilesDataLocal) setProfileFormData(parsedProfilesDataLocal);
  }, [profilesDataLocal]);

  const onSubmit = methods.handleSubmit((profileAddFormData) => {
    profileAddFormData["id"] = editingProfileId
      ? editingProfileId
      : generateUuid();

    const updatedData: any = {
      ...profileFormData,
      [profileAddFormData["id"] ? profileAddFormData["id"] : editingProfileId]:
        profileAddFormData,
    };
    setProfileFormData(updatedData);
    localStorage.setItem("profilesData", JSON.stringify(updatedData));

    // reset form fiels
    methods.reset();

    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
    }, 4500);
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        className="pms-main-form"
      >
        <div className="pms-main-form-parent-container">
          <div className="pms-main-form-add-user-inputs-container">
            <PMSFormInput
              {...fullNameValidation}
              editingProfileId={editingProfileId}
              profileFormData={profileFormData}
              setProfileFormData={setProfileFormData}
            />
            <PMSFormInput
              {...emailValidation}
              editingProfileId={editingProfileId}
              profileFormData={profileFormData}
              setProfileFormData={setProfileFormData}
            />
            <PMSFormInput
              {...phNumValidation}
              editingProfileId={editingProfileId}
              profileFormData={profileFormData}
              setProfileFormData={setProfileFormData}
            />
            <PMSFormInput
              {...dateOfBirthValidation}
              editingProfileId={editingProfileId}
              profileFormData={profileFormData}
              setProfileFormData={setProfileFormData}
            />

            <PMSFormInput
              {...stateValidation}
              editingProfileId={editingProfileId}
              profileFormData={profileFormData}
              setProfileFormData={setProfileFormData}
            />
            <PMSFormInput
              {...cityValidation}
              editingProfileId={editingProfileId}
              profileFormData={profileFormData}
              setProfileFormData={setProfileFormData}
            />

            <PMSSelectInput
              {...genderValidation}
              editingProfileId={editingProfileId}
              profileFormData={profileFormData}
              setProfileFormData={setProfileFormData}
            />
          </div>
        </div>
        <div className="pms-main-form-submit-button-container">
          {success && <PMSNotification success={success} />}
          <button onClick={onSubmit} className="pms-main-form-submit-button">
            {editingProfileId ? "Save Profile" : "Add Profile"}
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default PMSAddProfileMainForm;
