import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput, HelperText } from 'react-native-paper';

import { TProps } from './userForm.types';

export const UserForm = ({ onChangeLogin, onChangePassword, form, errors }: TProps) => {
  return (
    <>
      <TextInput
        style={styles.field}
        error={Boolean(errors?.login)}
        label="Login"
        value={form.login}
        onChangeText={onChangeLogin}
      />
      <HelperText type="error" visible={Boolean(errors?.login)}>
        {errors?.login}
      </HelperText>
      <TextInput
        style={styles.field}
        error={Boolean(errors?.password)}
        label="Password"
        value={form.password}
        secureTextEntry
        onChangeText={onChangePassword}
      />
      <HelperText type="error" visible={Boolean(errors?.password)}>
        {errors?.password}
      </HelperText>
    </>
  );
};

const styles = StyleSheet.create({
  field: {
    marginBottom: 10,
  },
});
