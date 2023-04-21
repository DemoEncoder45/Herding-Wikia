import  { StyleSheet, Text, View} from 'react-native';
import { Card } from 'react-native-elements';


//deconstructing the prop from the InfoScreen
const RenderDogs = ({dog}) => {
    //Conditional Rendering; this will check to see if the dogs can be rendered or not

    if (dog) {
        return (
            <Card containerStyle={{padding: 0}}>
                <Card.Image source={dog.image}>
                    <View style={{justifyContent: "center", flex: 1}}>
                        <Text style={styles.cardText}>
                            {dog.name}
                        </Text>
                    </View>
                </Card.Image>
                <Text style={{margin: 20}}>
                    {dog.description}
                </Text>
            </Card>
        )
    }

    //This is for if the condition is false and returns an error.
    return <View/>
}

const styles = StyleSheet.create({
    cardText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20
    }
})

export default RenderDogs;