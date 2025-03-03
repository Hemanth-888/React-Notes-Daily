import axios from "axios";
import { useState, useTransition } from "react"

export function PasswordMeter(){


    const [username, setUsername] = useState('');
    const [statusMsg, setStatusMsg] = useState('');
    const [errorClass, setErrorClass] = useState('');
    const [pwdMsg, setPwdMsg] = useState('');
    const [progressClass, setProgressClass] = useState('');
    const [progressWidth, setProgressWidth] = useState({width:''});
   
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
              setProgressWidth({width:'100%'});
              setProgressClass('progress-bar bg-success progress-bar-striped progress-bar-animated');
         } else {
              if(e.target.value.length<4) {
                  setPwdMsg('Poor Password');
                  setProgressWidth({width:'20%'});
                  setProgressClass('progress-bar bg-danger progress-bar-striped progress-bar-animated');
              } else {
                  setPwdMsg('Weak Password');
                  setProgressWidth({width:'70%'});
                   setProgressClass('progress-bar bg-warning progress-bar-striped progress-bar-animated');
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
                <dd>
                    <div className="progress">
                        <div className={progressClass} style={progressWidth}>
                            {pwdMsg}
                        </div>
                    </div>
                </dd>
            </dl>
        </div>
    )
}