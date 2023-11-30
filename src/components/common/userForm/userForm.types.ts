export type TProps = {
  onChangeLogin: (value: string) => void;
  onChangePassword: (value: string) => void;
  errors: Record<string, string>;
  form: Record<string, string>;
};
