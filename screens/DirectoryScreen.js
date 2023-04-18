import { FlatList } from "react-native";
import { Avatar, ListItem } from "react-native-elements";



const DirectoryScreen = (props) => {
    const renderDirectoryItem = ({item: dog}) => {
        return(
            <ListItem>
                <Avatar
                    source={dog.image}
                    rounded
                />
                <ListItem.Content>
                    <ListItem.Title>{dog.name}</ListItem.Title>
                    <ListItem.Subtitle>{dog.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <FlatList
            data={props.dogs}
            renderItem={renderDirectoryItem}
            keyExtractor={(item) => item.id.toString()}
        />

        
    )
}

export default DirectoryScreen;