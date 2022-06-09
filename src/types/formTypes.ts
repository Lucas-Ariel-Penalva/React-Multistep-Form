import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent, FormEvent } from "react";

interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}

interface formStateInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  country: undefined | null | CountryType;
  gender: string;
  expertise: string | null;
  experience: string | null;
  workHours: string;
  workModality: string;
  relocation: string;
}

interface formPropsInterface {
  values: formStateInterface;
  errors: FormikErrors<formStateInterface>;
  touched: FormikTouched<formStateInterface>;
  handleChange: { (e: ChangeEvent<any>): void; <T_1 = string | ChangeEvent<any>>(field: T_1): T_1 extends ChangeEvent<any> ? void : (e: string | ChangeEvent<any>) => void };
  handleBlur: { (e: HTMLInputElement): void; <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void };
  handleSubmit: (e?: FormEvent<HTMLFormElement> | undefined) => void;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<formStateInterface>>;
  loading: boolean;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

interface pageProps {
  props: formPropsInterface;
}

export { CountryType, formStateInterface, formPropsInterface, pageProps };
