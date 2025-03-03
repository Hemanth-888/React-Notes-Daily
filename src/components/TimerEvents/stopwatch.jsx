import { useState } from "react"

export function StopWatch(){


    const [ms, setMs] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hrs, setHrs] = useState(0);

    const [btnText, setBtnText] = useState('Start');

    var millisecond = 0;
    var seconds = 0;
    var minutes=0;
    var hours=0;

    function Counter(){
        millisecond++;
        if(millisecond===1000){
            millisecond = 1;
            seconds++;
            setSec(seconds);
        }
        
    }

    function Counter1()
    {
        setMs(millisecond);
        seconds++;
        if(seconds===60)
        {
            seconds=0;
            minutes++;
            setMin(minutes);
        }
        setSec(seconds);
        minutes++;
        if(minutes===60)
        {
            minutes=0;
            hours++;
            setHrs(hours);
        }
        setMin(minutes);
        setHrs(hours);

    }
    function handleStartClick(){
        setInterval(Counter,1);
        setBtnText((btnText==='Start'?'Stop':'Start'));
        if(btnText==='stop')
        {
            setTimeout(Counter)
        }
    }

    function handleResetClick()
    {
        setMs(0);
        setSec(0);
        setMin(0);
        setHrs(0);
        clearInterval(handleStartClick,1);
    }

    return(
        <div className="container-fluid d-flex justify-content-center bg-warning">
           
           <div>
           <div className="mt-4 border border-1 border-dark row p-2 fs-4 fw-bold"   style={{height:'60px', width:'600px'}}>
                <div className="col">
                    {hrs} hrs
                </div>
                <div className="col">
                    {min} min
                </div>
                <div className="col">
                    {sec} sec
                </div>
                <div className="col">
                    {ms} ms
                </div>
            </div>
              <button onClick={handleStartClick} className="btn btn-primary mt-4 justify-content-evenly ">{btnText}</button>
              <button onClick={handleResetClick} className="btn btn-info mt-4 ">Reset</button>
           </div>
           
        </div>
    )
}
