import {Card} from "./card";

export function Bye() {
    function alertDariya() {
        alert('Bye Dariya')
    }
    return (
        <div>
            <div>Bye Dariya</div>
            <button onClick={() => alertDariya()}>click</button>
            <Card name={'dima'} />
            <Card name={'tima'} />
        </div>
    )
}
