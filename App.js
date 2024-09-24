import * as Native from 'react-native'
import * as React from 'react'
import * as Navigation from '@react-navigation/native'
import Routes from './src/Routes';

export default function App() {
  return (
      <Navigation.NavigationContainer>
          <Native.StatusBar backgroundColor={"#86101D"} barStyle={'light-content'} />
          <Routes/>
      </Navigation.NavigationContainer>
  );
}
