import Sidebra from "./Sidebar"
import '../css/courses.css'
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Courses() {
    let navigate=useNavigate()
    let [show,setShow]=useState(false)
    return <>
        <div className="parent_box">
            <div className="sidebar_box">
                <Sidebra></Sidebra>
            </div>
            <div className="container_box">
                <h3>Overview</h3><br />
                <div className="box_t1">
                    <p>COURSE LIST</p><br />
                    <div className="inputBox"><input type="text" placeholder='search' /></div>
                </div>
                <div className="tableBox">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Instructor</th>
                                <th>Instrument</th>
                                <th>Day of Week</th>
                                <th>No of Students</th>
                                <th>Price</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Classical Guitar</td>
                                <td>Guitar class</td>
                                <td>Mr.Jone Doe</td>
                                <td>Guitar</td>
                                <td>Monday</td>
                                <td>34</td>
                                <td>500</td>
                                <td>Active</td>
                                <td onClick={()=>(show===false)? setShow(true):setShow(false)}><i class="bi bi-three-dots-vertical" ></i></td>
                               {show &&  <div className="popOver">
                                    <p>Edit Course</p>
                                    <p>Close Course</p>
                                    <p>Archive Coorse</p>
                                </div>}
                            </tr>
                            <tr>
                                <td>Classical Guitar</td>
                                <td>Guitar class</td>
                                <td>Mr.Jone Doe</td>
                                <td>Guitar</td>
                                <td>Monday</td>
                                <td>34</td>
                                <td>500</td>
                                <td>Active</td>
                                <td onClick={()=>(show===false)? setShow(true):setShow(false)}><i class="bi bi-three-dots-vertical" ></i></td>
                               {show &&  <div className="popOver">
                                    <p>Edit Course</p>
                                    <p>Close Course</p>
                                    <p>Archive Coorse</p>
                                </div>}
                            </tr>
                            <tr>
                                <td>Classical Guitar</td>
                                <td>Guitar class</td>
                                <td>Mr.Jone Doe</td>
                                <td>Guitar</td>
                                <td>Monday</td>
                                <td>34</td>
                                <td>500</td>
                                <td>Active</td>
                                <td onClick={()=>(show===false)? setShow(true):setShow(false)}><i class="bi bi-three-dots-vertical" ></i></td>
                               {show &&  <div className="popOver">
                                    <p>Edit Course</p>
                                    <p>Close Course</p>
                                    <p>Archive Coorse</p>
                                </div>}
                            </tr>
                            <tr>
                                <td>Classical Guitar</td>
                                <td>Guitar class</td>
                                <td>Mr.Jone Doe</td>
                                <td>Guitar</td>
                                <td>Monday</td>
                                <td>34</td>
                                <td>500</td>
                                <td>Active</td>
                                <td onClick={()=>(show===false)? setShow(true):setShow(false)}><i class="bi bi-three-dots-vertical" ></i></td>
                               {show &&  <div className="popOver">
                                    <p>Edit Course</p>
                                    <p>Close Course</p>
                                    <p>Archive Coorse</p>
                                </div>}
                            </tr>
                                                      
                        </tbody>
                    </table>
                </div>
                <button className="addBtn" onClick={()=>navigate('/addCourse')}><i class="bi bi-plus"></i>Add Course</button>
            </div>
        </div>
    </>
}

export default Courses