import React, { useCallback, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { ValidationError } from 'yup';

import { AuthContext } from '../../common/authProvider';
import { TErrors, USER_SCHEMA } from '../../../utils/schemas';
import { UserForm } from '../../common/userForm';

export const SignUp = () => {
  const { signIn } = useContext(AuthContext);
  const [login, setLogin] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [formErrors, setErrors] = React.useState<TErrors>({});

  const onChangeLogin = useCallback((text: string) => {
    setLogin(text);
  }, []);

  const onChangePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const onSingUp = useCallback(async () => {
    try {
      setErrors({});
      await USER_SCHEMA.validate({ login, password }, { abortEarly: false });
      signIn();
    } catch (err) {
      if (err instanceof ValidationError) {
        const errors = err.inner.reduce((acc, error) => {
          if (error.path) {
            acc[error.path] = error.message;
          }

          return acc;
        }, {} as Record<string, string>);
        setErrors(errors);
      }
    }
  }, [login, password, signIn]);

  return (
    <View style={styles.wrapper}>
      <View style={styles.fields}>
        <UserForm
          onChangeLogin={onChangeLogin}
          onChangePassword={onChangePassword}
          form={{ login, password }}
          errors={formErrors}
        />
      </View>
      <Button mode="contained" onPress={onSingUp}>
        Sing Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  fields: {
    marginBottom: 10,
  },
  field: {
    marginBottom: 10,
  },
});
