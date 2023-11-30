import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SIGN_IN_ROUTE } from '../../../constants/routes';
import { TRootStackParamList } from '../../common/appNavigator/appNavigator.types';

export type TProps = NativeStackScreenProps<TRootStackParamList, typeof SIGN_IN_ROUTE>;
