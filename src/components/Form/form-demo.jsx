import { useState } from "react";
import { useFormik } from "formik";


export function ReactForm1(){

    function ValidateUser(user){
        var errors = {UserName:'', Age:'', Mobile:'', City:'', Gender:''};

        if(user.UserName.length===0){
            errors.UserName = 'User Name Required';
        } else {
            if(user.UserName.length<4){
                errors.UserName = 'Name too short';
            } else {
                errors.UserName = '';
            }
        }

        if(user.Mobile.length===0){
            errors.Mobile = 'Mobile Required';
        } else {
            if(user.Mobile.match(/\+91\d{10}/)){
                errors.Mobile = '';
            } else {
                errors.Mobile = 'Invalid Mobile';  
            }
        }

        if(user.City==='-1'){
            errors.City = 'Please select your city';
        } else {
            errors.City = '';
        }

        if(user.Gender===''){
            errors.Gender = 'Please select a gender';
        } else {
            errors.Gender = '';
        }

        if(isNaN(user.Age)){
            errors.Age = 'Age must be a number';
        } else {
            errors.Age = '';
        }


        return errors;
    }
   
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            Mobile: '',
            City: '',
            Gender: ''
        },
        validate : ValidateUser,
        onSubmit: (values) => {
            console.log(values);
        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" name="Age" onChange={formik.handleChange} /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange}  /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} >
                            <option value="-1">Select City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Gender</dt>
                    <dd>
                        <input onChange={formik.handleChange} type="radio" name="Gender" value="Male" /> <label>Male</label>
                        <input onChange={formik.handleChange} type="radio" name="Gender" value="Female" /> <label>Female</label>
                    </dd>
                    <dd className="text-danger">{formik.errors.Gender}</dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
