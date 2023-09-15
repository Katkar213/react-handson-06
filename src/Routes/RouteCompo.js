import Store from "../ContextApi/StoreCompo"
import {BrowserRouter,Routes,Route,NavLink} from "react-router-dom"
import Student from "../Components/Student";
import Contact from "../Components/Contact";
import Home from "../Components/Home";
import { useState } from "react";
import Editstudent from "../Components/Editstudent";
import Addstudent from "../Components/AddStudent"



function RouteCompo(){
    const[StdData,setStdData]=useState([
        {Name:"Jhon",Age:26,Course:"MERN",Batch:"oct"},
        {Name:"Sam",Age:27,Course:"MERN",Batch:"Nov"},
        {Name:"Ram",Age:28,Course:"MERN",Batch:"Dec"},
        {Name:"Lakhan",Age:29,Course:"MERN",Batch:"Jan"},
        {Name:"ketan",Age:30,Course:"MERN",Batch:"sep"},
        {Name:"kunal",Age:31,Course:"MERN",Batch:"May"},
        {Name:"yash",Age:32,Course:"MERN",Batch:"oct"},
        {Name:"sudesh",Age:33,Course:"MERN",Batch:"July"},
        
    ]);
return(
    <>
<BrowserRouter>
<div className="navbar">
<NavLink to="/" className="link">Home</NavLink>
<NavLink to="/student"  className="link">Student</NavLink>
<NavLink to="/contact"  className="link">Contact Us</NavLink>
</div>



<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/student" element={
        <Store.Provider value={[StdData,setStdData]}>
               <Student/>
        </Store.Provider>
    }></Route>

    <Route path="/contact" element={<Contact/>}></Route>

    <Route path="/editstudent" element={
        <Store.Provider value={[StdData,setStdData]}>
               <Editstudent/>
         </Store.Provider>
   }></Route>

<Route path="/addstudent" element={
    <Store.Provider value={[StdData,setStdData]}>
    <Addstudent/>
</Store.Provider>
}></Route> 
</Routes>

</BrowserRouter>





    </>
)
}
export default RouteCompo