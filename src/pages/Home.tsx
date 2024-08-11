import { Container } from "react-bootstrap"
import FormUser from "../components/FormUser/FormUser"
import { useUser } from "../hooks"
import Resume from "../components/Resume/Resume"

export const Home = () => {
  const {auth} = useUser()

  return (
   <Container>
      <h2>Inicio</h2>
      {
        !auth ? <FormUser/> : <></>
      }
      <Resume/>
      </Container>
  )
}
