import { View } from 'react-native';
import Splash from './screens/Splash';
import GetStarted from './screens/getStarted';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import PublicProfile from './screens/PublicProfile';
import { useFonts } from 'expo-font';
import Home1 from './screens/Home1';

export default function App() {
    const [appLoaded, setIsAppLoaded] = useState(true);
    
    useEffect(() => {
        const onAppLoad = () => {
            if (appLoaded == false) {
                // TODO: Add app loading here
                setTimeout(() => { setIsAppLoaded(true)}, 5000 ); // set the timeout duration to 2 seconds
            }
        }
        onAppLoad();
    }, [])

  return (
    <>
        { !appLoaded ? <Splash/> : <Home1/> }
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 20,
  },
});
