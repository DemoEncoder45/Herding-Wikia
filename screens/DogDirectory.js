import {baseUrl} from '../shared/baseUrl';
import { Tile } from "react-native-elements";
import { FlatList,View,Text } from "react-native";
import * as Animatable from 'react-native-animatable';


import { useSelector } from 'react-redux';

const DogDirectory = ({navigation}) => {

    const dogs = useSelector((state) => state.dog);
    
    const renderDirectoryItem = ({item: campsite})  => {
        return (
            <Animatable.View
                animation='fadeInRightBig'
                duration={2000}
            >
                <Tile
                    title={dogs.name}
                    caption={dogs.description}
                    featured
                    imageSrc={{uri: baseUrl + dog.image}}
                
                />

            </Animatable.View>
        )
    }

    return (

        <FlatList
            data={dogs.dogsArray}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        
        />
    )
}

export default DogDirectory;