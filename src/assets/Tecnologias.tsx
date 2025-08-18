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
        <ul className="flex flex-col space-y-4 mt-4">
          <a
            className="text-amber-50 hover:underline"
            href="https://vitejs.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex items-center">
              <SiVite className="text-amber-50 mr-2" />
              <span className="text-amber-50">Vite</span>
            </li>
          </a>
          <a
            className="text-amber-50 hover:underline"
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex items-center">
              <FaReact className="text-amber-50 mr-2" />
              <span className="text-amber-50">React</span>
            </li>
          </a>
          <a
            className="text-amber-50 hover:underline"
            href="https://www.java.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex items-center">
              <FaJava className="text-amber-50 mr-2" />
              <span className="text-amber-50">Java</span>
            </li>
          </a>
          <a
            className="text-amber-50 hover:underline"
            href="https://www.w3.org/TR/html52/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex items-center">
              <FaHtml5 className="text-amber-50 mr-2" />
              <span className="text-amber-50">HTML5</span>
            </li>
          </a>
          <a
            className="text-amber-50 hover:underline"
            href="https://www.w3.org/Style/CSS/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex items-center">
              <FaCss3 className="text-amber-50 mr-2" />
              <span className="text-amber-50">CSS3</span>
            </li>
          </a>

          <a
            className="text-amber-50 hover:underline"
            href="https://www.javascript.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex items-center">
              <FaJs className="text-amber-50 mr-2" />
              <span className="text-amber-50">JavaScript</span>
            </li>
          </a>

          <a
            className="text-amber-50 hover:underline"
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex items-center">
              <RiTailwindCssFill className="text-amber-50 mr-2" />
              <span className="text-amber-50">Tailwind CSS</span>
            </li>
          </a>

          <a
            className="text-amber-50 hover:underline"
            href="https://nestjs.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex items-center">
              <SiNestjs className="text-amber-50 mr-2" />
              <span className="text-amber-50">NestJS</span>
            </li>
          </a>

          <a
            className="text-amber-50 hover:underline"
            href="https://www.prisma.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex items-center">
              <SiPrisma className="text-amber-50 mr-2" />
              <span className="text-amber-50">Prisma</span>
            </li>
          </a>
          <a
            className="text-amber-50 hover:underline"
            href="https://www.mysql.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex items-center">
              <SiMysql className="text-amber-50 mr-2" />
              <span className="text-amber-50">MySQL</span>
            </li>
          </a>

          <a
            className="text-amber-50 hover:underline"
            href="https://www.docker.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="flex items-center">
              <FaDocker className="text-amber-50 mr-2" />
              <span className="text-amber-50">Docker</span>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}
export default Tecnologias
