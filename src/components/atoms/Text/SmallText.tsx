import React from 'react';
import styled from '@emotion/native';
import {TextProps} from './TextTypes';

const StyledText = styled.Text`
  font-size: 18px;
  color: #0604a3;
  text-align: left;
  padding-left:10px;
`;
const SmallText: React.FC<TextProps> = props => {
  return <StyledText style={props.style}>{props.children}</StyledText>;
};

export default SmallText;
