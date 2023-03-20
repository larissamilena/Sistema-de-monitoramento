import dayjs from "dayjs";
import { FaRegAddressCard } from "react-icons/fa";

export function Card({person, ID, openModal, ...rest}) {

    // const formattedDate = dayjs(person.dob.date).format('DD/MM/YYYY')
    // const fullName = `${person.name.title} ${person.name.first} ${person.name.last}`
    
    return(
        <>
            <tr  
            className='text-black border-b border-gray-300   '
            {...rest}
            >
                    <td className='p-3 py-3'>
                        <span >
                            TESLA - MAGNETOM MEDICINA DIAGNÓSTICA                       
                        </span>
                    </td>

                    <td className='p-3'>
                        <span>tesla@example.com</span>
                    </td>

                    <td className=' p-3'>
                        <span>1</span>
                    </td>     

                    <td className=' p-3 flex items-center justify-center'>
                        <button 
                        className='border bg-cyan-600 text-white font-roboto rounded-lg px-3 py-2 flex items-center gap-2  hover:bg-opacity-80  hover:translate-x-0.5 duration-200' 
                        onClick={openModal}
                        >
                        <FaRegAddressCard size={20} />
                            Ver usuário
                        </button>
                        
                    </td>       
            </tr>

            <tr  
              className='text-black border-b border-gray-300   '
              {...rest}
            >
                    <td className='p-3 py-3'>
                        <span >
                            RADIOLOGUE                       
                        </span>
                    </td>

                    <td className='p-3'>
                        <span>radiologue@example.com</span>
                    </td>

                    <td className=' p-3'>
                        <span>2</span>
                    </td>     

                    <td className=' p-3 flex items-center justify-center'>
                        <button 
                        className='border bg-cyan-600 text-white font-roboto rounded-lg px-3 py-2 flex items-center gap-2  hover:bg-opacity-80  hover:translate-x-0.5 duration-200' 
                        onClick={openModal}
                        >
                        <FaRegAddressCard size={20} />
                            Ver usuário
                        </button>
                        
                    </td>       
            </tr>

            <tr  
              className='text-black border-b border-gray-300 mb-4   '
              {...rest}
            >
                    <td className='p-3 py-3'>
                        <span >
                            UNIMAGEM - HOSPITAL DE ESTRELA:
                  
                        </span>
                    </td>

                    <td className='p-3'>
                        <span>unimagem@example.com</span>
                    </td>

                    <td className=' p-3'>
                        <span>3</span>
                    </td>     

                    <td className=' p-3 flex items-center justify-center'>
                        <button 
                        className='border bg-cyan-600 text-white font-roboto rounded-lg px-3 py-2 flex items-center gap-2  hover:bg-opacity-80  hover:translate-x-0.5 duration-200' 
                        onClick={openModal}
                        >
                        <FaRegAddressCard size={20} />
                            Ver usuário
                        </button>
                        
                    </td>       
            </tr>
        </>
        
            
    )
}
