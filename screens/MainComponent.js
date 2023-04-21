import * as React from 'react';
import HomeScreen from "./HomeScreen";
import  Constants from "expo-constants";
import {Card, Icon} from 'react-native-elements';
import { Text,View, Platform, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer, createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";
import { Header } from 'react-native-elements';
import DogDirectory from './DogDirectory';
import HerderInfoScreen from './HerderInfoScreen';


const screenOptions = {
    headerTintColor: "#33ccff"
   

}



const DirectoryNavi = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName='Directory'
            screenOptions={screenOptions}
        >
            <Stack.Screen 
                name='Directory'
                component={DogDirectory}
                //This will be the title that is shown on the top
                options={{title: "Dog Directory"}}
            />

            <Stack.Screen
                name='HerderInfo'
                component={HerderInfoScreen}
                options={({route}) => ({
                    title: route.params.dog.name
                })}
            />
        </Stack.Navigator>
    )
}


const Main = () => {

    return (
        <ScrollView>
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight}}>
                <DirectoryNavi/>
            </View>
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

//A dog of the month Card
//Featured Dog or article about dog
//Fun fact

export default Main;