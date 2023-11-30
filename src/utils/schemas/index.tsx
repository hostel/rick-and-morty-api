import * as Yup from 'yup';

export type TErrors = {
  password?: string;
  login?: string;
};

export const USER_SCHEMA = Yup.object().shape({
  login: Yup.string().required('Login is required'),
  password: Yup.string().required('Password is required'),
});
