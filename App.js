import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet} from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from "./screens/SearchScreen";
import { Entypo,FontAwesome } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';
import { Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Discover from './screens/Discover';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import ItemScreen from './screens/ItemScreen';
import Login from './screens/Login';
import Register from './screens/Register';
import { Provider } from 'react-redux';
import { store } from './store';
import LoadingScreen from './screens/Registerauth';
import Booking from './screens/Booking';
const Stack = createStackNavigator();



const Tab = createBottomTabNavigator();
export default function App() {
  
  return (

    <>
   <Provider store={store}>
   <TailwindProvider>
<>
 <NavigationContainer>
<Stack.Navigator>

<Stack.Screen name="Login" component={Login} />

<Stack.Screen name="Home" component={Home} />

<Stack.Screen name="Register" component={Register} />




{/* <Stack.Screen name="Register" component={Register} /> */}


<Stack.Screen name="Discover" component={Discover} />
<Stack.Screen name="ItemScreen" component={ItemScreen} />
<Stack.Screen name="Loading" component={LoadingScreen} />
<Stack.Screen name="Book" component={Booking} />

</Stack.Navigator>
 </NavigationContainer>

</>
   

        {/* <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: "red"
            }}>
                <Tab.Screen name="Home" component={HomeScreen} options={{
                    tabBarIcon: () =><Entypo name="home" size={24} color="black" />
                }}/>
                <Tab.Screen name="Search" component={SearchScreen} options={{
                    tabBarIcon: () =><FontAwesome name="search" size={24} color="black" />
                }}/>
            </Tab.Navigator>
        </NavigationContainer> */}
        </TailwindProvider>
        </Provider>
        </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
