import { useSelector } from "react-redux";

const DisplayCounter = () =>{

    const { counterVal } = useSelector(store => store.counter)


    return <p> Counter Current value: {counterVal}</p>
} 

export default DisplayCounter;