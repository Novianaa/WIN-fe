import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, useNavigate } from "react-router-dom"

const PublicRoute = ({ children, isRestricted = false }) => {
  const navigate = useNavigate()
  const { data, isLogin } = useSelector((state) => state.auth)
  console.log(isLogin)
  useEffect(() => {
    if (isRestricted) {
      if (isLogin === false) {
        navigate('/', { replace: true })
      }
      if (data.role !== 'admin') {
        navigate('/', { replace: true })
      }
    }
  }, [data.role, isLogin, isRestricted, navigate])
  return (children)
}

export default PublicRoute