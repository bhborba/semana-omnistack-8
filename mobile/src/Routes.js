import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Login from './pages/Login';
import Main from './pages/Main';
import Kyly from './pages/kyly'
import Loja from './pages/universok'
import Wiki from './pages/wiki'
import Dox from './pages/dox'
import Pulses from './pages/pulses'
import Icon from 'react-native-vector-icons/Ionicons';  

export default createAppContainer(
    createBottomTabNavigator({
        
        Kyly,
        Loja,
        Wiki,
        Pulses,
        Dox,
    })
);
