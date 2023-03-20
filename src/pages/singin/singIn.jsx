import {FaLock} from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'
import { HiKey } from 'react-icons/hi'
import { Link } from 'react-router-dom'

export function SingIn() {
    return(
      <div className=' h-screen w-screen flex justify-center items-center '>
        <div className='w-1/3 max-sm:w-auto '>

          <form action="" className="font-roboto flex flex-col border  p-5 shadow-2xl text-gray-600 bg-gray-200 rounded-lg">
              <h1>Faça o login</h1>

              <div className='relative flex items-center focus-within:text-gray-800 '>                
                  <BsPersonFill  className='w-5 h-5 absolute  cursor-pointer left-2 ' />
                <input 
                  type="email" 
                  className="flex gap-2 p-3 px-8  border border-gray-500 my-4 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-700  focus:border-gray-700"
                  placeholder="Email"
                />
              </div>

              <div className='relative flex items-center focus-within:text-gray-800  '>
                <HiKey className='w-5 h-5 absolute  cursor-pointer left-2 ' />
                <input 
                  type="password" 
                  className="flex gap-2 p-3 px-8  border border-gray-500 my-4 w-full rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-700  focus:border-gray-700"
                  placeholder="Senha"
                />
              </div>


              <div className='flex justify-between px-1 my-4 '>
                <div className='gap-2 flex items-center'>
                  <input 
                    type="checkbox" 
                    name="remember-password" 
                    id="remember-password" 
                    className='cursor-pointer h- '
                  />

                  <label 
                    htmlFor="remember-password"
                    className='text-sm cursor-pointer hover:text-gray-900'> 
                    Lembrar senha
                  </label>

                </div>
                <span>
                  <a 
                    href="#" 
                    className='text-cyan-600 text-sm hover:text-cyan-800'>
                    Esqueceu a senha?
                  </a>

                </span>

              </div>
              <Link
                to='/' 
                className='flex items-center justify-center gap-2 w-full  bg-amber-500 mb-2 p-3 border rounded-md hover:opacity-75 '>
                  <FaLock size={18} /> Login 
              </Link>
          </form>
        </div>             
      </div>
    )
}