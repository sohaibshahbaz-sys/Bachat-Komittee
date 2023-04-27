import { Text } from "react-native"
import { View } from "react-native"
import { AirbnbRating } from '@rneui/themed';
import { SafeAreaView } from "react-native";
import { StyleSheet, Image } from 'react-native';
import typography from '../components/constants.js';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('getStarted'); // navigate to GetStarted component after 3 seconds
    }, 2000); // set the timeout duration to 2 seconds
  }, []);
  return (
     <View style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <View style={styles.safeArea}>
     <SafeAreaView style={styles.imageContainer}>
        <Image
        // style={styles.imageContainer}
        source={require('../assets/vector.png')}
      />
       <Image
        // style={styles.imageContainer}
        source={require('../assets/bachatTM.png')}
      />
      <Text style={{ color: 'white' }}>Let the Payday Begin</Text>
    </SafeAreaView>
     </View>
   </View>  
  )
}
const styles = StyleSheet.create({
    text: {
      fontFamily: typography.fontFamily,
      fontWeight: typography.fontWeight,
      fontSize: typography.fontSize,
      lineHeight: typography.lineHeight,
    },
    imageContainer: {
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:50,
      paddingLeft: 20,
    },
  });
export default Splash