import { SIGN_IN_ROUTE, SIGN_UP_ROUTE, CHARACTERS, CHARACTER } from '../../../constants/routes';

export type TRootStackParamList = {
  [SIGN_IN_ROUTE]: undefined;
  [SIGN_UP_ROUTE]: undefined;
  [CHARACTERS]: undefined;
  [CHARACTER]: { id: string };
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends TRootStackParamList {}
  }
}
