import css from './header.module.css'

export default function Header(){
  return(
    <header className='flex justify-between items-center m-4'>
      <div className='flex justify-center items-center'>
        <img className='w-8 m-3' src={'SNlogo.svg'} alt="" />
        <p className='text-white '>Script Nest</p>
      </div>
      <nav className='flex gap-10 '>
        <p className='hover:scale-125 transition ease-in-out duration-300'>Home</p>
        <p className='hover:scale-125 transition ease-in-out duration-300'>Dashboard</p>
        <p className='hover:scale-125 transition ease-in-out duration-300'>Why Script Nest</p>
      </nav>
      <div className='flex justify-center items-center'>
        <img className='w-8' src={'SNlogo.svg'} alt="" />
        <p className='m-3'>Connect Me</p>

      </div>
    </header>
  )
}