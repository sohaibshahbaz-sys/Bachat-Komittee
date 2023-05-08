import { Text, View, Image, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

const GetStarted = () => {
   return (
    <View style={styles.container}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={require('../assets/vector.png')} />
      <Text style={styles.text}>Bachat</Text>
    </View>
    <Text style={styles.description}>Welcome to {"\n"}Bachat</Text>
    <Text style={styles.paragraph}>Please select the service you willing to use. you can use both service with single login.
</Text>
  </View>
  );
};
const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      paddingLeft: 20,
    },
    imageContainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    text: {
      fontSize: 24,
      fontWeight: 'bold',
     
     
    },
    description: {
        fontWeight: '800',
        fontSize: 36,
        lineHeight: 47.81,
        marginBottom:10,
        
       
      },
      paragraph: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: 18.34,
        marginBottom:32,
        
      
      },
  });

export default GetStarted;