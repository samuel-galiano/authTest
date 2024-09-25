import * as Native from 'react-native'
import * as React from 'react'
import * as Navigation from '@react-navigation/native'
import Routes from './src/Routes';
import AuthRoutes from './src/Routes/whileNotAuth.routes';

export default function App() {
  return (
      <Navigation.NavigationContainer>
          <Native.StatusBar backgroundColor={"#23356D"} barStyle={'light-content'} />
          <Routes />
      </Navigation.NavigationContainer>
  );
}
