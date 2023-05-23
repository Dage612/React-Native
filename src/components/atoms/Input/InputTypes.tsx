import {ReactNode, ComponentProps} from 'react';
import {TextInputProps} from 'react-native';
import AntDesing from 'react-native-vector-icons/MaterialCommunityIcons';

export interface ExtraInputProps {
  label: ReactNode;
  icon: ComponentProps<typeof AntDesing>['name'];
}
export type InputProps = TextInputProps & ExtraInputProps;
