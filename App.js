import { View } from 'react-native';
import Splash from './screens/Splash';
import GetStarted from './screens/GetStarted';
import { StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';

export default function App() {
    const [appLoaded, setIsAppLoaded] = useState(false);
    
    useEffect(() => {
        const onAppLoad = () => {
            // TODO: Add app loading here
            setTimeout(() => { setIsAppLoaded(true)}, 5000 ); // set the timeout duration to 2 seconds
        }
        onAppLoad();
    }, [])

  return (
    <>
        { !appLoaded ? <Splash/> : <GetStarted/> }
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 20,
  },
});
