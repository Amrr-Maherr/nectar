import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './navegation/screens/Splash';
import Start from './navegation/screens/Start';
import GoogleLogin from './navegation/screens/GoogleLogin';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Login from './navegation/screens/Login';
import Register from './navegation/screens/Register';
import ForgetPassword from './navegation/screens/ForgetPassword';
import Location from './navegation/screens/Location';
import Tabs from './navegation/(tabs)/Tabs';
import MobileNumber from './navegation/screens/MobileNumber';
import Code from './navegation/screens/Code';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
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
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Forget-password" component={ForgetPassword} />
            <Stack.Screen name="Location" component={Location} />
            <Stack.Screen name="MobileNumber" component={MobileNumber} />
            <Stack.Screen name="Code" component={Code} />
            <Stack.Screen name="Tabs" component={Tabs} />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}
