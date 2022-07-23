import React, {useState} from "react";
import App from "./App";

function HelloWorld({name}){
const [stateName, setStateName] = useState('');


    return(
        <div>
            nama : {stateName}
            <button onClick={() => setStateName(name)}> set</button>
        </div>
    );
}

export default HelloWorld;

