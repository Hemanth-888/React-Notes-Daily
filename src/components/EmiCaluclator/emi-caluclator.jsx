import { useState } from "react"

export function EmiCalculator(){


    const [principle, setPrinciple] = useState(100000);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi, setEMI] = useState(0);

    function handlePrincipleChange(e){
        setPrinciple(e.target.value);
    }

    function handleYearChange(e){
        setYears(e.target.value);
    }

    function handleRateChange(e){
        setRate(e.target.value);
    }
   
    function handleCalculateClick(){

            var P = principle;
            var r = rate/12/100;
            var n = years * 12;
            var EMI = P * r * (Math.pow(1+r,n)) / (Math.pow(1+r,n)) - 1;

            setEMI(EMI);

    }

    return(
        <div className="container-fluid bg-secondary">
            <h3 className="text-center mt-3 text-white">Personal Loan EMI Calculator</h3>
            <div className="p-4 m-4 bg-light border border-1 border-dark">
                <div className="row my-4">
                    <div className="col">
                        Amount you need &#8377; <input type="text" value={principle} />
                    </div>
                    <div className="col">
                        for <input type="text" size="2" value={years} /> years
                    </div>
                    <div className="col">
                        Interest Rate <input type="text" size="2" value={rate} /> %
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <input type="range" onChange={handlePrincipleChange} min={100000} max={500000} value={principle} className="form-range" />
                        <span> &#8377; 1,00,000</span>
                        <span className="float-end"> &#8377; 5,00,000</span>
                    </div>
                    <div className="col">
                        <input type="range" onChange={handleYearChange} min={1} max={5} value={years} className="form-range" />
                        <span>1</span>
                        <span className="float-end"> 5 </span>
                    </div>
                    <div className="col">
                        <input type="range" onChange={handleRateChange} min={10.45} max={18.45} value={rate} className="form-range" />
                        <span> 10.45%</span>
                        <span className="float-end"> 18.45% </span>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col text-end">
                            <button onClick={handleCalculateClick} className="btn btn-primary">Calculate</button>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col">
                        <p className="text-center"> Your Monthly EMI is <span className="fw-bold fs-4 text-primary">{Math.round(emi).toLocaleString('en-in', {style:'currency', currency:'INR'})} </span> for next {years * 12} months.  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}