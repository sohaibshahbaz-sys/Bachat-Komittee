import { View } from 'react-native';
import Splash from './screens/Splash';
import getStarted from './screens/getStarted';
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { BVLinearGradient } from 'react-native-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Splash} />
        <Stack.Screen name="getStarted" component={getStarted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    // flex: 1,
    // padding: 20,
  },
});
