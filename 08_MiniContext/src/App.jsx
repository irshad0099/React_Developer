import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <UserContextProvider>
     <h1>React with chai and  this series are very most learning point of the react js</h1>
     <Login />
     <Profile/>
    </UserContextProvider>
  )
}

export default App
