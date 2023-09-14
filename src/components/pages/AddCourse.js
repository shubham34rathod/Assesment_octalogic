import Sidebar from "./Sidebar"
import '../css/addCourse.css'
import { useState } from "react"
import axios from "axios"

function AddCourse() {

    let [course, setCourse] = useState({
        id:new Date().getTime(),
        name:'',
        description:'',
        instrument:'',
        instructor:'',
        no_of_days: '',
        price:''
    })

    // console.log(new Date().getTime());
    function setData(e,prop)
    {
        setCourse((data)=>({
            ...data,
            [prop]:e.target.value
        }))
    }

    function submit()
    {
        console.log(course);
        axios.post('http://localhost:3000/courses',{
            method:'post',
            body:JSON.stringify(course),
            header:{
                'content-type':'application/json'
            }
        })
        .then((res)=>console.log(res.data))
        .catch((error)=>console.log(error))
    }

    return <>
        <div className="parent_box">
            <div className="sidebar_box">
                <Sidebar></Sidebar>
            </div>
            <div className="container_box">
                <div className="addBox">
                    <h4 className='logIn_txt'>Add Course</h4>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" placeholder="Jone Doe" value={course.name} onChange={(e)=>setData(e,'name')} />
                        <label for="floatingInput">Course Name</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" value={course.description} onChange={(e)=>setData(e,'description')} />
                        <label for="floatingInput">Description</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" placeholder="Password" value={course.instructor} onChange={(e)=>setData(e,'instructor')} />
                        <label for="floatingPassword">Instructor</label>
                    </div>
                    <div class="form-floating mb-3">
                        {/* <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Instrument</label> */}
                        <select name="instrument" id="instrument" onChange={(e)=>setData(e,'instrument')}>
                            <option value="select">Instrument</option>
                            <option value="piano">Piano</option>
                            <option value="Guitar">Guitar</option>
                            <option value="cello">Cello</option>
                        </select>
                    </div>
                    <div class="form-floating mb-3">
                        {/* <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Day of the week</label> */}
                        <select name="Day of the week" id="Day of the week" onChange={(e)=>setData(e,'no_of_days')}>
                            <option value="select">Day of the week</option>
                            <option value="piano">1</option>
                            <option value="Guitar">2</option>
                            <option value="cello">3</option>
                            <option value="cello">4</option>
                            <option value="cello">5</option>
                            <option value="cello">6</option>
                        </select>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingPassword" placeholder="Password" value={course.price} onChange={(e)=>setData(e,'price')}/>
                        <label for="floatingPassword">Price</label>
                    </div>
                    <div>
                        <input class="btn btn-success" id="submitBtn" type="submit" value="Add Course" onClick={submit} style={{ marginLeft: '40%' }}></input>
                    </div>
                    <br />
                    <a href="#" style={{ marginLeft: '85px', marginLeft: '27%' }}>Have an account? login account</a>
                </div>
            </div>
        </div>
    </>
}

export default AddCourse