import React from 'react';
import styled from '@emotion/native';
import {TextProps} from './TextTypes';

const StyledText = styled.Text`
  font-size: 24px;
  color: 'black';
  text-align: left;
`;

const RegularText: React.FC<TextProps> = props => {
  return <StyledText style={props.style}>{props.children}</StyledText>;
};

export default RegularText;
