import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './navegation/screens/Splash';
import Start from './navegation/screens/Start';
import GoogleLogin from './navegation/screens/GoogleLogin';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Login from './navegation/screens/Login';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Splash"
        >
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
