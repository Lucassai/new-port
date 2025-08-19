import {
  FaReact,
  FaJava,
  FaCss3,
  FaHtml5,
  FaJs,
  FaDocker,
} from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiMysql, SiNestjs, SiPrisma, SiVite } from 'react-icons/si'

function Tecnologias() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="items-center flex flex-col justify-center bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg p-6 max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-cyan-50 text-center">
          Tecnologias
        </h1>
        <ul className="grid grid-cols-2 gap-4 mt-4">
          <a
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="botao_tecnologias">
              <SiVite />
              <span>Vite</span>
            </li>
          </a>

          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="botao_tecnologias">
              <FaReact />
              <span>React</span>
            </li>
          </a>

          <a
            href="https://www.java.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="botao_tecnologias">
              <FaJava />
              <span>Java</span>
            </li>
          </a>

          <a
            href="https://www.w3.org/TR/html52/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="botao_tecnologias">
              <FaHtml5 />
              <span>HTML5</span>
            </li>
          </a>

          <a
            href="https://www.w3.org/Style/CSS/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="botao_tecnologias">
              <FaCss3 />
              <span>CSS3</span>
            </li>
          </a>

          <a
            href="https://www.javascript.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="botao_tecnologias">
              <FaJs />
              <span>JavaScript</span>
            </li>
          </a>

          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="botao_tecnologias">
              <RiTailwindCssFill />
              <span>Tailwind CSS</span>
            </li>
          </a>

          <a
            href="https://nestjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="botao_tecnologias">
              <SiNestjs />
              <span>NestJS</span>
            </li>
          </a>

          <a
            href="https://www.prisma.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="botao_tecnologias">
              <SiPrisma />
              <span>Prisma</span>
            </li>
          </a>
          <a
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="botao_tecnologias">
              <SiMysql />
              <span>MySQL</span>
            </li>
          </a>

          <a
            href="https://www.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="botao_tecnologias">
              <FaDocker />
              <span>Docker</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}
export default Tecnologias
