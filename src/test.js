import React from 'react';
function Multiply(){
    return(
        <h1>Hello Multiply</h1>
    )
}
function Test(props){
    function link(){
       console.log("You clicked a link")
    }
    return !props? <Multiply></Multiply>:<h1>not</h1>

    // if(props.name=='MyatHsuMon'){
    //     return <Multiply></Multiply>
    // }
    // else{
    //     return <h1>Hello Others</h1>
    // }
    //  return(
    //     <div>
    //         <h1>
    //             Test Component using function, in other words , Hooks
    //         </h1>
    //         <h2>
    //             It is needed to export to use in index.js
    //         </h2>
    //         <h1>Test Component by {props.name}</h1>
    //         <button onClick={link}>
    //             Link
    //         </button>
    //     </div>
    // )
}
export default Test;