import React from 'react'
import '../css/login.css'
import 'react-toastify/dist/ReactToastify.css'
import {ToastContainer,toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate=useNavigate()
    function submit()
    {
        const shoeToast=()=>{
            toast.success('success',{autoClose:2000})
        }
        shoeToast()
        setTimeout(()=>{
            navigate('/overview')
        },2000)
    }
    return <>
        {/* <div className="shopingLogo"></div> */}
        <ToastContainer></ToastContainer>
        <div className="signIn">
            <h4 className='logIn_txt'>Login</h4>
            <div class="mb-3">
                <label for="formGroupExampleInput" class="form-label">Email</label>
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="abc@gmail.com" />
            </div>
            <div class="mb-3">
                <label for="formGroupExampleInput2" class="form-label">password</label>
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="******" />
            </div>
            <div>
                <input class="btn btn-success" id="submitBtn" type="submit" value="Submit" onClick={submit}></input>
            </div>
            <br />
            <a href="/register">don't have a account? create account</a>
        </div>
    </>
}

export default Login