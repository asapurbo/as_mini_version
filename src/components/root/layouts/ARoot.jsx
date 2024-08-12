import { Outlet } from "react-router-dom"
import AdminNav from "../AdminNav"

const ARoot = () => {
  return (
    <>
        <AdminNav />
        <Outlet />
    </>
  )
}

export default ARoot
