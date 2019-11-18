import React from 'react';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack'
import CombustiveisList from './components/CombustiveisList'
import Header from './components/layout/Header'

const AppNavigator = createStackNavigator({
  Home: {
      screen: CombustiveisList,
      navigationOptions: {
        headerTitle: () => <Header title='Início'/>,
      } 
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      
    }
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <Provider store={store}>
        <AppContainer/>
    </Provider>
  )
}