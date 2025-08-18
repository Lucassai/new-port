import './App.css'
import Menu from './assets/Menu.tsx'
import Profile from './assets/Profile.tsx'
import Projetos from './assets/Projetos.tsx'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Tecnologias from './assets/Tecnologias.tsx'

function App() {
  const [active, setActive] = useState('perfil')

  return (
    <div className="bg-gradient-to-b from-cyan-700 to-gray-700 min-h-screen flex flex-col items-center justify-center">
      <Menu active={active} onSelect={setActive} />
      <AnimatePresence mode="wait">
        {active === 'perfil' && (
          <motion.div
            key="profile"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <Profile />
          </motion.div>
        )}
        {active === 'projetos' && (
          <motion.div
            key="projetos"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Projetos />
          </motion.div>
        )}
        {active === 'tecnologias' && (
          <motion.div
            key="tecnologias"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Tecnologias />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
