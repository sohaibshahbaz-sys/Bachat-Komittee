import { Text } from "react-native"
import { View } from "react-native"
import { AirbnbRating } from '@rneui/themed';
import { SafeAreaView } from "react-native";
import { StyleSheet, Image } from 'react-native';
import * as styles from '../components/constants.js';


const Splash = () => {

  return (
     <View style={{ backgroundColor: 'blue', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
     <View>
     <SafeAreaView style={styleSheet.imageContainer}>
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
const styleSheet = StyleSheet.create({
    text: {
      fontFamily: styles.typography.fontFamily,
      fontWeight: styles.typography.fontWeight,
      fontSize: styles.typography.fontSize,
      lineHeight: styles.typography.lineHeight,
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