import React from 'react';
import { InputProps } from './InputTypes';
import styled from '@emotion/native';
import AntDesign from 'react-native-vector-icons/MaterialCommunityIcons';
import SmallText from '../Text/SmallText';

const InputWrapper = styled.View`
  width: 100%;
`;
const LeftIcon = styled.View`
  position: absolute;
  top: 28px;
  left: 15px;
  z-index: 1;
  text-align: left;
  border-right-width: 2px;
  border-color: white;
  padding-right: 15px;
  padding-left: 15px;
  margin-top: 14px;
`;
const InputField = styled.TextInput`
  background-color: black;
  height: 60px;
  border-width: 3px;
  border-radius: 10px;
  margin-left: 10px;
  padding: 15px;
  font-size: 16px;
  color: white; 
  border-color: #000;
  margin-bottom: 10px;
  padding-left: 65px;
  text-align: center;
`;

const StyledTextInput: React.FC<InputProps> = ({ icon, label, ...props }) => {
  return (
    <InputWrapper>
      <LeftIcon>
        <AntDesign name={icon} size={30} color="white" />
      </LeftIcon>
      <SmallText>{label}</SmallText>
      <InputField
        {...props}
        placeholderTextColor="white"
        style={props.style}
      />
    </InputWrapper>
  );
};

export default StyledTextInput;
