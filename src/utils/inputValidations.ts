export const fullNameValidation = {
  name: "Full Name",
  label: "Full Name",
  type: "text",
  id: "fullName",
  placeholder: "enter full name ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 20,
      message: "20 characters max",
    },
  },
};

export const phNumValidation = {
  name: "Phone Number",
  label: "Phone Number",
  type: "number",
  id: "phNum",
  placeholder: "enter phone number ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 10,
      message: "enter 10 digits",
    },
    maxLength: {
      value: 10,
      message: "enter 10 digits",
    },
  },
};

export const stateValidation = {
  name: "State",
  label: "State",
  type: "text",
  id: "state",
  placeholder: "enter state ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 20,
      message: "20 characters max",
    },
  },
};

export const cityValidation = {
  name: "City",
  label: "City",
  type: "text",
  id: "city",
  placeholder: "enter city ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 20,
      message: "20 characters max",
    },
  },
};

export const emailValidation = {
  name: "Email ID",
  label: "Email ID",
  type: "email",
  id: "emailId",
  placeholder: "enter email id ...",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "not valid",
    },
  },
};

export const dateOfBirthValidation = {
  name: "Date of Birth",
  label: "Date of Birth",
  type: "date",
  id: "dateOfBirth",
  placeholder: "",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};

export const genderValidation = {
  name: "Gender",
  label: "Gender",
  id: "gender",
  validation: {
    required: {
      value: true,
      message: "required",
    },
  },
};
