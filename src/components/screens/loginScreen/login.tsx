import styled from '@emotion/native';
import React, { useState } from 'react';;
import ButtonStyled from '../../atoms/Button/ButtonStyled';
import StyledTextInput from '../../atoms/Input/StyledTextInput';
import { AuthUse } from '../../contexts/authContexts';
import ResponsiveView from '../../utils/responsiveViewComponent';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

const FormContainer = styled.View`
  width: 90%;
  height: 90%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
`;

const Description = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #0604a3;
`;

const LogoImage = styled.Image`
  width: 200px;
  height: 240px;
  margin-bottom: 30px;
  align-self: center; 
`;

const ButtonContainer = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 30px;
`;

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { LogIn } = AuthUse();

  const handleLogin = () => {
    LogIn(email, password);
  };

  return (
    <ResponsiveView>
      <Container>
        <FormContainer>
          <LogoImage source={require('C:/Users/David/Desktop/FasautoMovil/src/assets/imgs/icon.png')} />
          <Description>WAREHOUSE</Description>
          <StyledTextInput
            label="Correo"
            icon="email"
            value={email}
            onChangeText={setEmail}
            placeholder="dage612@hotmail.es"
            keyboardType="email-address"
          />
          <StyledTextInput
            label="Contraseña"
            icon="key"
            value={password}
            onChangeText={setPassword}
            placeholder="Contraseña"
            secureTextEntry
          />
          <ButtonContainer>
            <ButtonStyled onPress={handleLogin}>Iniciar Sesión</ButtonStyled>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </ResponsiveView>
  );
};

export default LoginScreen;
