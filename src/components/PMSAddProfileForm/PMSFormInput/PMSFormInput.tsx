import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import {
  FormInputPropType,
  findInputError,
  isFormInvalid,
} from "../../../utils";

import "./PMSFormInput.css";
import { useEffect, useState } from "react";

const PMSFormInput = ({
  label,
  type,
  id,
  placeholder,
  validation,
  name,
  editingProfileId,
  profileFormData,
  setProfileFormData,
}: FormInputPropType) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const inputError: any = findInputError(errors, label);
  const isInvalid: any = isFormInvalid(inputError);

  useEffect(() => {
    setValue(name, profileFormData?.[editingProfileId]?.[name]);
  }, [profileFormData?.[editingProfileId]?.[name]]);

  const validationFunction: any = register(name, validation);

  const inputFieldValueChangehandler = (event: any) => {
    let updatedInputValues: any;
    Object.keys(profileFormData).forEach((profileEmail) => {
      if (profileEmail === editingProfileId) {
        updatedInputValues = profileFormData?.[profileEmail];
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
  return (
    <div className="pms-form-input-component-parent-container">
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
      <input
        id={id}
        type={type}
        value={
          profileFormData?.[editingProfileId] &&
          profileFormData?.[editingProfileId]?.[name]
        }
        className="pms-form-input-component-input-field"
        placeholder={placeholder}
        onBlur={validationFunction?.onBlur}
        ref={validationFunction?.ref}
        name={validationFunction?.name}
        onChange={(e) => {
          validationFunction?.onChange(e);
          inputFieldValueChangehandler(e);
        }}
      />
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

export default PMSFormInput;
