import axios from "axios";
import { useState, useTransition } from "react"

export function KeyDemo(){


    const [username, setUsername] = useState('');
    const [statusMsg, setStatusMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [toggle, setToggle] = useState('d-none');
   
    function handleUserName(e){
        setUsername(e.target.value);
    }

    function VerifyName(){
        axios.get('users.json')
        .then(response=>{
              for(var user of response.data){
                  if(user.UserName===username){
                       setStatusMsg('User Name Taken - Try Another');
                       setErrorClass('text-danger');
                       break;
                  } else {
                      setStatusMsg('User Name Available');
                      setErrorClass('text-success');
                  }
              }
        })
    }

    function VerifyCaps(e){
        if(e.which >=65 && e.which<=90) {
            setToggle('d-block');
        } else {
            setToggle('d-none');
        }
    }

    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" onKeyUp={VerifyName} onChange={handleUserName} /></dd>
                <dd className={errorClass} >{statusMsg}</dd>
                <dt>Password</dt>
                <dd><input type="password" onKeyPress={VerifyCaps} /></dd>
                <dd className={toggle}>
                    <span className="bi bi-exclamation-triangle text-warning"> Warning : Caps ON </span>
                </dd>
            </dl>
        </div>
    )
}