

import React from 'react';
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Prontuario from './src/screens/Prontuario';
import styled from 'styled-components';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Prontuario" component={Prontuario} 
        options={({ route, navigation }) => ({
          title: '',
          headerLeft: () => <Title>Prontuário Eletrônico</Title>,
        })}/>
      </Stack.Navigator>
   </NavigationContainer>
  );
};


export default App;

const Title = styled.Text`
font-size: 18px;
`