import { useState } from "react";
import { useFormik } from "formik";


export function ReactForm(){

   
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Mobile: '',
            City: '',
            Gender: ''
        },
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
                    <dt>Mobile</dt>
                    <dd><input type="text" name="Mobile" onChange={formik.handleChange}  /></dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange} >
                            <option>Select City</option>
                            <option>Delhi</option>
                            <option>Hyd</option>
                        </select>
                    </dd>
                    <dt>Gender</dt>
                    <dd>
                        <input onChange={formik.handleChange} type="radio" name="Gender" value="Male" /> <label>Male</label>
                        <input onChange={formik.handleChange} type="radio" name="Gender" value="Female" /> <label>Female</label>
                    </dd>
                </dl>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}