import React from 'react';

function Car(props){

    return(
        <div className={"card"}>
            <h1>Car Owner is {props.Owner}</h1>
            <p>{props.Owner} has {props.CarName}</p>
        </div>

    );

}

export default Car;
