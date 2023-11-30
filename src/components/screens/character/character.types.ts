import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { CHARACTER } from '../../../constants/routes';
import { TRootStackParamList } from '../../common/appNavigator/appNavigator.types';

export type TProps = NativeStackScreenProps<TRootStackParamList, typeof CHARACTER>;
