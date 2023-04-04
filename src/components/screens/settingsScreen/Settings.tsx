import {View, Text, Button} from 'react-native';
import React from 'react';
import { AuthUse } from '../../contexts/authContexts';

const SettingsScreen = () => {
  const { LogOut } =  AuthUse();
  return (
    <View>
    <Button title="Cerrar sesión" onPress={LogOut} />
    </View>
  );
};

export default SettingsScreen;