import React from "react"
// import classNames from "classnames/bind"
// import { Outlet } from "react-router-dom"
import Navbar from "../../compinents/navbar/navbar"


const DefaultLayout = ({ children }) => {

  return (
    <div >
      <div>
        <Navbar/>
      </div>
    </div>
  )
}

export default DefaultLayout