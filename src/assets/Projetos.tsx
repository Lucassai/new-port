import { useState, useEffect, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const projetos = [
  {
    titulo: 'Delivery Home Page',
    link: 'https://delivey-pi.vercel.app/',
    imagens: [
      'https://ik.imagekit.io/lkxant9gz/Delivery%20home%20page?updatedAt=1744139030560',
    ],
  },
  {
    titulo: 'Barber Shop Home Page',
    link: 'https://barbearia-react-two.vercel.app/',
    imagens: [
      'https://ik.imagekit.io/lkxant9gz/Captura%20de%20tela%20de%202025-08-13%2013-51-55.png?updatedAt=1755104027421',
      'https://ik.imagekit.io/lkxant9gz/Captura%20de%20tela%20de%202025-08-13%2013-51-37.png?updatedAt=1755104027048',
    ],
  },
  {
    titulo: 'Sistema de Recursos Humanos',
    link: 'https://rh77-react-ten.vercel.app/',
    imagens: [
      'https://ik.imagekit.io/lkxant9gz/Captura%20de%20tela%20de%202025-08-14%2011-49-49.png?updatedAt=1755183031172',
      'https://ik.imagekit.io/lkxant9gz/Captura%20de%20tela%20de%202025-08-14%2011-49-55.png?updatedAt=1755183031163',
    ],
  },
]

function Projetos() {
  const [foco, setFoco] = useState(0)

  // Troca o projeto com scroll
  const handleWheel = useCallback((e: WheelEvent) => {
    if (e.deltaY > 0) {
      setFoco((prev) => Math.min(prev + 1, projetos.length - 1))
    } else if (e.deltaY < 0) {
      setFoco((prev) => Math.max(prev - 1, 0))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('wheel', handleWheel)
    return () => window.removeEventListener('wheel', handleWheel)
  }, [handleWheel])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="items-center flex flex-col justify-center bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg p-6 max-w-md mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={projetos[foco].titulo}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center justify-center"
          >
            <a
              href={projetos[foco].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-50 text-lg font-bold hover:underline"
            >
              <h1 className="text-lg font-bold text-amber-50 text-center m-4">
                {projetos[foco].titulo}
              </h1>
              <div
                className={
                  projetos[foco].imagens.length > 1
                    ? 'grid grid-cols-2 gap-4'
                    : ''
                }
              >
                {projetos[foco].imagens.map((img, i) => (
                  <img
                    key={i}
                    className="rounded-3xl shadow-lg border-2 border-cyan-50 hover:scale-105 transition-transform duration-300"
                    src={img}
                    alt={projetos[foco].titulo}
                  />
                ))}
              </div>
            </a>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center space-x-2 mt-4">
          {projetos.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                foco === idx ? 'bg-amber-500' : 'bg-white/30'
              }`}
              onClick={() => setFoco(idx)}
              aria-label={`Selecionar projeto ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Projetos
