import { Text } from "react-native"
import { View, PreviewLayout } from "react-native"
import { AirbnbRating } from '@rneui/themed';
import { SafeAreaView } from "react-native";
import { StyleSheet, Image } from 'react-native';
import * as Styles from '../components/constants.js'
import { useState } from "react";
const PublicProfile = () =>{
    const [columnGap, setColumnGap] = useState(10);

    return(
        <View style={Styles.publicProfileCss}>
            <Text style={Styles.publicProfileCss.heading}>Welcome to Bachat Committe</Text>
            <Text style={Styles.publicProfileCss.paragraph}>Save your money smartly with bachat committee pools, plan for bigger dreams.</Text>
            <Text style={Styles.publicProfileCss.heading2}>What's Next?</Text>
            <View style={Styles.publicProfileCss.card}>
            <Text style={Styles.publicProfileCss.card.title}>Get verified</Text>
            <Text style={Styles.publicProfileCss.card.subtitle}>Provide Your  Personal details, and start you first committee Pools</Text>
            </View>
            <View style={Styles.publicProfileCss.mb}></View>
            <View style={Styles.publicProfileCss.card}>
                <Text style={Styles.publicProfileCss.card.title}>Apply for Committee</Text>
                <Text style={Styles.publicProfileCss.card.subtitle}>Apply for your first Committee pool, and start saving smartly.</Text>
            </View>
        </View>
    )

}

export default PublicProfile