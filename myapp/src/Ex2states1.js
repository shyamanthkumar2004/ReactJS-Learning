import { useState } from "react";
function Ex2(){
    const [value,setValue]=useState(23);
    function inc(){
        setValue(value+1);
    }
    function dec(){
        setValue(value-1);
    }
    return(
        <>
            <h1>Welcom to the Calci {value}</h1>
            <button onClick={inc}>Increase</button>{" "}
            <button onClick={dec}>Decrease</button>
        </>
    );
}
export default Ex2;