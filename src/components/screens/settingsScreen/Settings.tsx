import { View, Button, StyleSheet } from 'react-native';
import React from 'react';
import { AuthUse } from '../../contexts/authContexts';

const SettingsScreen = () => {
  const { LogOut } = AuthUse();
  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Cerrar sesión" onPress={LogOut} color="black" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 10,
    backgroundColor: 'black',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 20,
  },
  button: {
    borderRadius: 0,
    overflow: 'hidden',
  },
});

export default SettingsScreen;
