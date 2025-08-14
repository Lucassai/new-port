import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaFigma } from 'react-icons/fa'

function Profile() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="items-center flex flex-col justify-center bg-white/10 backdrop-blur-sm rounded-3xl shadow-lg p-6 max-w-md mx-auto">
        <div className="py-10">
          <img
            className="w-50 h-50 rounded-3xl shadow-lg border-2 border-cyan-50"
            src="https://ik.imagekit.io/lkxant9gz/profile_V3zsTqksE?updatedAt=1754939538213"
            alt="Lucas Profile"
          />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-cyan-50 text-center">
            Lucas Oliveira
          </h1>
          <h2 className="text-amber-50 text-center">@lucassai</h2>
          <h3 className="text-amber-50 text-center">
            Desenvolvedor Front-End | React | Next.js | TypeScript
          </h3>
          <div className="justify-center items-center mt-4">
            <ul className="flex justify-center space-x-4 text-2xl">
              <li>
                <a
                  href="https://github.com/lucassai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="bg-white/20 rounded-2xl p-3 backdrop-blur-sm transition">
                    <FaGithub className="text-amber-50 hover:text-black transition-colors duration-300" />
                  </div>
                </a>
              </li>
              <a
                href="https://www.linkedin.com/in/lucas-vinicius-mendes/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <div className="bg-white/20 rounded-2xl p-3 backdrop-blur-sm transition">
                    <FaLinkedinIn className="text-amber-50 hover:text-black transition-colors duration-300" />
                  </div>
                </li>
              </a>
              <a
                href="https://www.instagram.com/vin.lcs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <div className="bg-white/20 rounded-2xl p-3 backdrop-blur-sm transition">
                    <FaInstagram className="text-amber-50 hover:text-black transition-colors duration-300" />
                  </div>
                </li>
              </a>
              <a
                href="https://www.figma.com/@lucassai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>
                  <div className="bg-white/20 rounded-2xl p-3 backdrop-blur-sm transition">
                    <FaFigma className="text-amber-50 hover:text-black transition-colors duration-300" />
                  </div>
                </li>
              </a>
            </ul>
          </div>
          <div>
            <ul className="flex  justify-center space-x-4 text-1xl mt-6 text-amber-50">
              <li className="border-white/20 border-b-8  p-3 hover:border-amber-500">
                Projetos
              </li>
              <li className="border-white/20 border-b-8  p-3 hover:border-amber-500">
                Formações
              </li>
              <li className="border-white/20 border-b-8  p-3 hover:border-amber-500">
                Experiência
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
