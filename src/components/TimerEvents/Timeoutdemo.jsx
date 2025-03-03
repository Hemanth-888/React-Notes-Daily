import { useEffect, useRef, useState } from "react"

export function TimeoutDemo1(){

    const [timer, setTimer] = useState();
 
 
    function Clock(){
        var now = new Date();
        setTimer(now.toLocaleTimeString());
    }

    useEffect(()=>{
        setInterval(Clock,1000);
    },[])

    return(
        <div className="container-fluid text-center">
            <h1 className="mt-3">{timer}</h1>
        </div>
    )
}