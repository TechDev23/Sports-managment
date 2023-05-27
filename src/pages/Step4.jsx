import { useState } from "react"
import { Button, Input } from "@material-tailwind/react"
import { useDispatch, useSelector } from "react-redux"
import { login, logout } from "../redux/reducers/UserSlice"

const TournamentTracking = () => {
  const [newUsername, setNewUsername] = useState("")
  const dispatch = useDispatch()
  return (
    <div>
      <Input onChange={(e)=>(setNewUsername(e.target.value))} />
      <Button onClick={()=>dispatch(login({username: newUsername}))}> Submit login </Button>
      <Button onClick={()=>dispatch(logout())}> Logout </Button>
    </div>
  )
}

export default TournamentTracking
