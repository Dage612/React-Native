import React, { ReactNode } from 'react';
import { View, Dimensions } from 'react-native';

interface ResponsiveViewProps {
  children: ReactNode;
}

const ResponsiveView: React.FC<ResponsiveViewProps> = ({ children }) => {
  const { width, height } = Dimensions.get('window');

  return (
    <View
      style={{
        width: width,
        height: height,
        backgroundColor: 'black',
      }}
    >
      {children}
    </View>
  );
};

export default ResponsiveView;
