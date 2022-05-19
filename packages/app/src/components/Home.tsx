import Logo from 'src/logo.svg'

const Home = () => {
  return (
    <div className='flex flex-col font-bold items-center justify-start text-3xl underline w-full'>
      <h1>Number Converter</h1>

      <h2>23333</h2>

      <img className='w-56' src={Logo} />
    </div>
  )
}

export default Home
