import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import Login from './screen/login'
import Home from './screen/home'


const Routes = createAppContainer(
  createStackNavigator({
    Login,
    Home
  },{
    headerBackTitleVisible: false,
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#ffcd02'
      },
      headerTintColor: '#fff'
    }
  })
);

export default Routes;