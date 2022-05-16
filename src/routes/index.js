import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Home';
import Profile from '../Profile';

const screens = {
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
};

const Routes = createStackNavigator(screens);

export default createAppContainer(Routes);
