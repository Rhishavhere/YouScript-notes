import Link from "next/link"
import Image from "next/image"

export default function Header(){
  return(
    <header className='flex justify-between items-center m-4 z-40'>
      <div className='flex justify-center items-center'>
        <Image className='m-3' src='SNlogo.svg' alt="" width={30} height={30} />
        <p className='font-hand text-3xl text-white cursor-pointer'>
          Memo</p>
      </div>
      <nav className='flex gap-10 '>
        <p className='font-hand text-3xl
        hover:scale-110 transition ease-in-out duration-300 cursor-pointer'>
          Home</p>
        <p className='font-hand text-3xl
        hover:scale-110 transition ease-in-out duration-300 cursor-pointer'>
          <Link href="/dashboard">Dashboard</Link></p>
        {/* <p className='hover:scale-125 transition ease-in-out duration-300'>
          Why Script Nest</p> */}
      </nav>
      <div className='flex justify-center items-center cursor-pointer'>
        <Image className='w-8' src='github.svg' alt="" width={30} height={30} />
        <p className='m-3 font-hand text-3xl'>
          Connect Me</p>

      </div>
    </header>
  )
}