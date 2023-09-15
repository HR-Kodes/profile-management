import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";

import { findInputError, isFormInvalid } from "../../../utils";

import "./PMSSelectInput.css";

const PMSSelectInput = ({
  name,
  label,
  id,
  validation,
  editingProfileId,
  profileFormData,
  setProfileFormData,
}: any) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();

  useEffect(() => {
    setValue("Gender", profileFormData?.[editingProfileId]?.["Gender"]);
  }, [profileFormData?.[editingProfileId]?.[name]]);

  const inputError: any = findInputError(errors, label);
  const isInvalid: any = isFormInvalid(inputError);

  const inputFieldValueChangehandler = (event: any) => {
    let updatedInputValues: any;
    Object.keys(profileFormData).forEach((profileID) => {
      if (profileID === editingProfileId) {
        updatedInputValues = profileFormData?.[profileID];
        updatedInputValues[name] = event.target.value;
      }
    });
    setProfileFormData((prevProfiles: any) => {
      return {
        ...prevProfiles,
        [editingProfileId]: updatedInputValues,
      };
    });
  };

  const validationFunction: any = register(name, validation);

  return (
    <div className="pms-select-input-parent-container">
      <div className="pms-form-input-component-input-label-container">
        <label htmlFor={id} className="pms-form-input-component-input-label">
          {label}
        </label>
        <div className="pms-form-input-component-input-error-parent-container">
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </div>
      </div>
      <select
        onBlur={validationFunction?.onBlur}
        ref={validationFunction?.ref}
        name={validationFunction?.name}
        value={
          profileFormData?.[editingProfileId] &&
          profileFormData?.[editingProfileId]?.[name]
        }
        onChange={(e) => {
          validationFunction?.onChange(e);
          inputFieldValueChangehandler(e);
        }}
        className="pms-select-input-field"
      >
        <option disabled selected value="">
          Select Gender
        </option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
};

const InputError = ({ message }: any) => {
  return (
    <p className="pms-form-input-error-text">
      <MdError />
      {message}
    </p>
  );
};

export default PMSSelectInput;
