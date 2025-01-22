import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from "../blog-boilerplate/src/screens/IndexScreen";

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})

export default createAppContainer(navigator);