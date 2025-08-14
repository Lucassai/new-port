import './App.css'
import Profile from './assets/Profile.tsx'
import Projetos from './assets/Projetos.tsx'
function App() {
  return (
    <>
      <div className="bg-gradient-to-b from-cyan-700 to-gray-700 min-h-screen">
        <Profile />

        <Projetos />
      </div>
    </>
  )
}

export default App
