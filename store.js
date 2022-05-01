import {  useContext, useEffect} from 'react';
import  Context from './context';

let a=[]
const useGStore=(initialValue,  key)=>{
    const [gState, setGState] = useContext(Context);
    useEffect(()=>{
        if(!gState[`${key}`]){
            a.push({[`${key}`]:initialValue})
            const tempData={...gState} 
            var result = Object.assign({}, tempData, ...a);
                setGState(result)
        }
    },[ ])
    const setGState1=(data)=>{
        const tempData={...gState,[`${key}`]:data} 
        console.log(tempData, 22);
        setGState(tempData)
    }
    return [gState[`${key}`], setGState1]
}
export default useGStore;