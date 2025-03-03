import axios from "axios";
import { useState, useTransition } from "react"

export function KeyDemo1(){


    const [username, setUsername] = useState('');
    const [statusMsg, setStatusMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [pwdMsg, setPwdMsg] = useState('');
    const [strength, setStrength] = useState(1);
   
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

    function handlePasswordChange(e){
         if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)) {
              setPwdMsg('Strong Password');
              setStrength(100);
         } else {
              if(e.target.value.length<4) {
                  setPwdMsg('Poor Password');
                  setStrength(20);
              } else {
                  setPwdMsg('Weak Password');
                  setStrength(70);
              }
         }
    }

    return(
        <div className="container-fluid">
            <h3>Register User</h3>
            <dl className="w-25">
                <dt>User Name</dt>
                <dd><input type="text" className="form-control" onKeyUp={VerifyName} onChange={handleUserName} /></dd>
                <dd className={errorClass} >{statusMsg}</dd>
                <dt>Password</dt>
                <dd><input type="password" className="form-control" onKeyUp={handlePasswordChange} /></dd>
                <dd><meter className="w-100" min={1} max={100} value={strength} ></meter></dd>
                <dd>{pwdMsg}</dd>
            </dl>
        </div>
    )
}
