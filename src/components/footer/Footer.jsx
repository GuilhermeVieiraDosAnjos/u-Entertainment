
const Footer = () => {
  return (
    <div className="bg-primaryBlue text-white flex flex-col justify-center items-center py-10">
      <div className="md:flex flex-col">
        <div className="p-2 bg-white text-primaryBlue rounded-md">
            <h1 className="text-xl text-center">O basico</h1>
        </div>
          <ul className="md:flex gap-10">
            <li><a href="">Sobre Nós</a> </li>
            <li><a href="">Contato</a></li>
            <li><a href="">Suporte</a></li>
            <li><a href="">Diretrizes</a></li>
          </ul>
            </div>
      </div>
  )
}

export default Footer
