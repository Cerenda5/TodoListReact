import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const screens = {
    Home: {
        screen: Home,
    },
    ReviewDetails: {
        screen: ReviewDetails,
    },
};

// home stack navigator screens
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);