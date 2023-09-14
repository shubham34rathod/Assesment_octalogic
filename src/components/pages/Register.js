import React from 'react'
import '../css/register.css'
import { useNavigate } from 'react-router-dom';

function Register() {
    let navigate=useNavigate()
    return <>
        {/* <div className="shopingLogo_2"></div> */}
        <div className="signIn">
            <h4 className='logIn_txt'>Register</h4>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Jone Doe" />
                <label for="floatingInput">Full name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating ">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                <label for="floatingPassword">Confirm password</label>
            </div>
            <div>
                <input class="btn btn-success" id="submitBtn" type="submit" value="Submit" onClick={()=>navigate('/')}></input>
            </div>
            <br />
            <a href="/" style={{marginLeft:'85px'}}>Have an account? login account</a>
        </div>
    </>
}

export default Register;