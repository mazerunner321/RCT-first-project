import React from 'react'
import {Routes, Route} from "react-router-dom";
import Body from '../Components/Body';
import SignIn from '../Components/SignIn';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={ <Body /> }/>
            <Route path={"/signin"} element={<SignIn />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes