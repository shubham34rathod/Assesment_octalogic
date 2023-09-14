import { useEffect, useState } from 'react'
import '../css/overview.css'
import LatestEnrol from "../LatestEnrol"
import Sidebar from "./Sidebar"
import axios from 'axios'


function Overview() {
    let [stuData,setSetuData]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:3000/enrolment`)
        .then((res)=>{
            console.log(res.data);
            setSetuData(res.data)
        })
        .catch((error)=>console.log(error))
    },[])
    return <>
        <div className="parent_box">
            <div className="sidebar_box">
                <Sidebar></Sidebar>
            </div>
            <div className="container_box">
                <h3>Overview</h3><br />
                <div className="box_1">
                    <div className="child">
                        <div className="profile_logo">
                            <p>
                                <i class="bi bi-people-fill"></i>
                            </p>
                        </div>
                        <div className="info">
                            <p id='count'>164</p>
                            <p id='stu_info'>total number of students</p>
                            <p id='view'>view</p>
                        </div>
                    </div>
                    <div className="child">
                        <div className="profile_logo">
                            <p>
                                <i class="bi bi-people-fill"></i>
                            </p>
                        </div>
                        <div className="info">
                            <p id='count'>12</p>
                            <p id='stu_info'>total number of courses</p>
                            <p id='view'>view</p>
                        </div>
                    </div>
                    <div className="child">
                        <div className="profile_logo">
                            <p>
                                <i class="bi bi-people-fill"></i>
                            </p>
                        </div>
                        <div className="info">
                            <p id='count'>$2000</p>
                            <p id='stu_info'>total amount earned</p>
                            <p id='view'>view</p>
                        </div>
                    </div>
                    <div className="child">
                        <div className="profile_logo">
                            <p>
                                <i class="bi bi-people-fill"></i>
                            </p>
                        </div>
                        <div className="info">
                            <p id='count'>Guitar</p>
                            <p id='stu_info'>best performing course</p>
                            <p id='view'>view</p>
                        </div>
                    </div>
                    <div className="child">
                        <div className="profile_logo">
                            <p>
                                <i class="bi bi-people-fill"></i>
                            </p>
                        </div>
                        <div className="info">
                            <p id='count'>Flute</p>
                            <p id='stu_info'>Worst performing course</p>
                            <p id='view'>view</p>
                        </div>
                    </div>
                </div>
                <LatestEnrol></LatestEnrol>
            </div>
        </div>
    </>
}

export default Overview