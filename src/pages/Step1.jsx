import { useSelector } from "react-redux"
const Step1 = () => {
  const {username} = useSelector((state)=>state.user.value) || ""
  return (
    <div>step1 {username}</div>
  )
}

export default Step1