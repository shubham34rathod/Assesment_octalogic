import './css/latestEnrol.css'
import { useEffect, useState } from 'react'
import axios from 'axios'


function LatestEnrol() {
    let [stuData, setSetuData] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/enrolment`)
            .then((res) => {
                console.log(res.data);
                setSetuData(res.data)
            })
            .catch((error) => console.log(error))
    }, [])

    return <>
        <div className="main_container">
            <div className="title_1">
                <h4>Latest Enrolment</h4>
                <p>View all courses</p>
            </div>
            <div className="table_box">
                <table>
                    <thead>
                        <tr>
                            <th>Enr.No</th>
                            <th>S.Name</th>
                            <th>C.Name</th>
                            <th>Fees</th>
                            <th>Enr.Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stuData.map((data) => <>
                            <tr>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.course}</td>
                                <td>{data.fees}</td>
                                <td>{data.date}</td>
                            </tr>
                        </>)}
                    </tbody>
                </table>
            </div>

            <div className="title_2">
                <h4>Best Students</h4>
                <p>View all courses</p>
            </div>
            <div className="table_box">
                <table>
                    <thead>
                        <tr>
                            <th>Reg.No</th>
                            <th>F.Name</th>
                            <th>L.Name</th>
                            <th>Course#</th>
                            <th>Total Fees</th>
                            <th>Reg.Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>123456</td>
                            <td>Jone</td>
                            <td>Doe</td>
                            <td>3</td>
                            <td>500</td>
                            <td>12-08-23</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Jone</td>
                            <td>Doe</td>
                            <td>3</td>
                            <td>500</td>
                            <td>12-08-23</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Jone</td>
                            <td>Doe</td>
                            <td>3</td>
                            <td>500</td>
                            <td>12-08-23</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Jone</td>
                            <td>Doe</td>
                            <td>3</td>
                            <td>500</td>
                            <td>12-08-23</td>
                        </tr>
                        <tr>
                            <td>123456</td>
                            <td>Jone</td>
                            <td>Doe</td>
                            <td>3</td>
                            <td>500</td>
                            <td>12-08-23</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </>
}

export default LatestEnrol