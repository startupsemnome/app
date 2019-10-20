import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack';

import LoginScreen from './screens/loginScreen'
import HomeScreen from './screens/homeScreen'
import ProjectScreen from './screens/projectScreen'
import ResourceScreen from './screens/resourceScreen'


const Routes = createAppContainer(
  createStackNavigator({
    HomeScreen,
    LoginScreen,
    ProjectScreen,
    ResourceScreen,
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