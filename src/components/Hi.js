import React from "react";
import {Card} from "./card";

export function Hi({name}) {

    const list = ['katya', 'mama', 'papa', 'katya', 'mama', 'papa', 'katya', 'mama', 'papa' ]
    function alertDariya() {
        alert(name)
    }
    return (
        <div>
            <div>Dariya</div>
            <button onClick={() => alertDariya()}>click</button>

            {list.map((el) => <Card name={el}/>)}
        </div>
    )
}
