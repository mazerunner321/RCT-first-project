import React from 'react'
import {Routes, Route} from "react-router-dom";
import Body from '../Components/Body';
import Jackets from '../Components/Jackets';
import SignIn from '../Components/SignIn';

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path={"/"} element={ <Body /> }/>
            <Route path={"/signin"} element={<SignIn />}/>
            <Route path={"/jackets"} element={<Jackets />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes