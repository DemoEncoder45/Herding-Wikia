import RenderDogs from '../features/dogs/RenderDogs';


const HerderInfoScreen = (props) =>{
    return (

        //Passing a single prop of dog; 
        //We are also just passing a prop for RanderDogs to render.
        <RenderDogs dog={props.dog}/>
    )
}

export default HerderInfoScreen;