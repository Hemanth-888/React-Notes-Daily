import { useRef, useState } from "react"

export function TimeoutDemo(){

    const [msg, setMsg] = useState('');
    let thread = useRef(null);

    function Msg1(){
        setMsg('10% Volume Increased');
    }
    function Msg2(){
        setMsg('50% Volume Increased');
    }
    function Msg3(){
        setMsg('100% Volume Increased');
    }

   

    function handleShowClick(){
        setTimeout(Msg1, 3000);
        thread.current = setTimeout(Msg2, 6000);
        setTimeout(Msg3,10000);
    }
    function handleMuteClick(){
        clearTimeout(thread.current);
    }

    return(
        <div className="container-fluid text-center">
            <button className="my-4 btn btn-primary bi bi-volume-up" onClick={handleShowClick}></button>    
            <button onClick={handleMuteClick} className="my-4 mx-2 btn btn-danger bi bi-volume-mute">50%</button>
            <p>{msg}</p>
        </div>
    )
}
