export const defaultValues = {
  to_name: "Harbor community",
  fullName: "",
  email: "",
  industry: "",
  number: "",
  message: "",
};

export interface IContactUs {
  [key: string]: unknown;
  to_name?: string;
  fullName: string;
  email: string;
  industry?: string;
  number?: string;
  message?: string;
}

export interface TextAreaElementProps {
  name: string;
  label: string;
  placeholder: string;
  rows?: number;
}

export interface FieldElementProps {
  name: string;
  label: string;
  placeholder: string;
  type?: string;
}
