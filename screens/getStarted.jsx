import { Text } from "react-native"
import { View } from "react-native"
import { AirbnbRating } from '@rneui/themed';
import { SafeAreaView } from "react-native";
import { StyleSheet, Image } from 'react-native';
import * as Styles from '../components/constants.js'


const GetStarted = () =>{
    return(
        <View style={Styles.container}>
            <Text>Hello from getStarted</Text>
        </View>

    )

}

export default GetStarted