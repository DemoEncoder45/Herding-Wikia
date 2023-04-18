import { useState } from "react";
import { DOGS } from "../shared/dogs";
import DirectoryScreen from './DirectoryScreen';

//A dog of the month Card
//Featured Dog or article about dog
//Fun fact


const Main = () => {

    const [dogs, setDogs] = useState(DOGS);

    return <DirectoryScreen dogs = {dogs} />
    
}

export default Main;