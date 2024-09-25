import * as Native from 'react-native'
import * as React from 'react'
import * as Navigation from '@react-navigation/native'
import Routes from './src/Routes'
import { AuthProvider } from './src/Contexts/auth'

export default function App() {
  return (
    <Navigation.NavigationContainer>
      <AuthProvider>
        <Native.StatusBar backgroundColor={"#23356D"} barStyle={'light-content'} />
        <Routes />
      </AuthProvider>
    </Navigation.NavigationContainer>
  );
}
