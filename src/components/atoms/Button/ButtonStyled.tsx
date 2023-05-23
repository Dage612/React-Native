import {View, Text} from 'react-native';
import React from 'react';
import styled from '@emotion/native';
import {ButtonProps} from './ButtonTypes';
import RegularText from '../Text/RegularText';

const WrapButton = styled.TouchableOpacity`
  /* background-color: blue; */
  width: 90%;
  height: 60px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding: 15px;
  margin-top: 10px;
  font-size: 30px;
`;
const ButtonStyled: React.FC<ButtonProps> = ({...props}) => {
  return (
    <WrapButton onPress={props.onPress} style={props.style}>
      <RegularText style={[{color: '#0604a3'}, props.textStyle]}>
        {props.children}
      </RegularText>
    </WrapButton>
  );
};

export default ButtonStyled;
