import * as React from 'react';
import HomeScreen from "./HomeScreen";
import  Constants from "expo-constants";
import {Card, Icon} from 'react-native-elements';
import { Text,View, Platform, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer, createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";
import { Header } from 'react-native-elements';


//A dog of the month Card
//Featured Dog or article about dog
//Fun fact



const HomeNavi = () => {

}


const Main = () => {

    return (
        <ScrollView>
            <View style={styles.headingView} >
                <Header/>
                <Text style={styles.headingText}>
                    Herding Wikia
                </Text>
            </View>
            <View>
                <Card style={styles.cardContainer}>
                    <Card.Title>Our Mission</Card.Title>
                    <Card.Divider/>
                    <Text style={{textAlign: 'center', flex: 1}}>
                        Put in text about the mission statment for the site!
                    </Text>
                </Card>
            </View>
       </ScrollView>

    )
    
}

const styles =  StyleSheet.create({
    headingText: {
        fontSize: 20
    },
    headingView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})


export default Main;