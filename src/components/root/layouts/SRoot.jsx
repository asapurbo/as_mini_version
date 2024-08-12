import { Outlet } from "react-router-dom"
import StudentNav from "../StudentNav"

const SRoot = () => {
  return (
    <>
        <StudentNav />
        <Outlet />
    </>
  )
}

export default SRoot
