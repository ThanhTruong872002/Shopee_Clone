import { ToastContainer } from 'react-toastify'
import './App.css'
import useRouteElement from './useRouteElement'

function App() {
  const routeElements = useRouteElement()
  return (
    <div>
      <ToastContainer />
      {routeElements}
    </div>
  )
}
export default App
