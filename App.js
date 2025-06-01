import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './navegation/screens/Splash';
import Start from './navegation/screens/Start';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Splash'>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Splash" component={Splash} />
        {/* <Stack.Screen name="tabs" component={Splash} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
