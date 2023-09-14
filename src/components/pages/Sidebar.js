import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../css/sidebar.css'
import { useNavigate } from 'react-router-dom'

function Sidebar() {
    let navigate=useNavigate()
    return <>
        <div className="sidebar">
            <div className="logo_box_1">
                <i className="logo_1 bi bi-pentagon"></i>
            </div>
            <div className='box'>
                <div className="home" onClick={()=>navigate('/overview')}>
                    <i className="home_logo bi bi-columns-gap"></i>
                    <p style={{ fontSize: '14px' }}>Home</p>
                </div>
                <div className="course" onClick={()=>navigate('/courses')}>
                    <i className="course_logo bi bi-music-note-list"></i>
                    <p style={{ fontSize: '13px' }}>Courses</p>
                </div>
            </div>
        </div>
    </>
}

export default Sidebar