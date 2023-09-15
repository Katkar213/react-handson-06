import {useContext} from "react";
import Store from "../ContextApi/StoreCompo"
import {NavLink} from "react-router-dom"
import { useNavigate } from "react-router-dom";


function Student(){
    const Navigate=useNavigate()
    const [Received]=useContext(Store);
    console.log(Received)
    return(
        <>
        <h1>Student Details</h1>
        <button onClick={()=>Navigate('/addstudent')}>Add New Student</button>
        <table border="2">
            <thead><tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Link</th>
                </tr></thead>
            <tbody>
        {Received.map((item,index)=>{
            return(
                <tr key={index}>
                    
                    <td>{item.Name}</td>
                   <td>{item.Age}</td>
                   <td>{item.Course}</td>
                   <td>{item.Batch}</td>
                   <td><NavLink to="/editstudent" state={{index}}>Edit</NavLink></td>
                   
                   
                </tr>
            )
        })}
        </tbody>
     
        </table>

        </>
    )
}
export default Student