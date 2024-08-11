import { Layout } from './layouts';
import { Navigation } from './routes';
import {UserProvider} from './context'
const App = () => {
  return (
    <UserProvider>
      <Layout>
        <Navigation/>
      </Layout>
    </UserProvider>
   
  )
}

export default App
