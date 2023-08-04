import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from '../src/navigators/TabNavigator';
import MovieDetailsScreen from '../src/screens/MovieDetailsScreen';
import SeatBookingScreen from '../src/screens/SeatBookingScreen';
import LoginScreen from '../src/screens/Login/LoginScreen';
import RegisterScreen from '../src/screens/Login/RegisterScreen';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{animation: 'default'}}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetailsScreen}
          options={{animation: 'slide_from_right'}}
        />
        <Stack.Screen
          name="SeatBooking"
          component={SeatBookingScreen}
          options={{animation: 'slide_from_bottom'}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{animation: 'default'}}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{animation: 'default'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
