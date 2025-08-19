type MenuProps = {
  active: string
  onSelect: (item: string) => void
}

function Menu({ active, onSelect }: MenuProps) {
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <ul className="flex justify-center space-x-4 text-1xl mt-6 text-amber-50">
        <li
          className={`border-b-8 p-3 cursor-pointer ${
            active === 'perfil'
              ? 'border-amber-500 rounded-lg'
              : 'border-white/20 rounded-lg'
          } hover:border-amber-500`}
          onClick={() => onSelect('perfil')}
        >
          Perfil
        </li>
        <li
          className={`border-b-8 p-3 cursor-pointer ${
            active === 'projetos'
              ? 'border-amber-500 rounded-lg'
              : 'border-white/20 rounded-lg'
          } hover:border-amber-500`}
          onClick={() => onSelect('projetos')}
        >
          Projetos
        </li>
        <li
          className={`border-b-8 p-3 cursor-pointer ${
            active === 'tecnologias'
              ? 'border-amber-500 rounded-lg'
              : 'border-white/20 rounded-lg'
          } hover:border-amber-500`}
          onClick={() => onSelect('tecnologias')}
        >
          Tecnologias
        </li>
      </ul>
    </div>
  )
}
export default Menu
