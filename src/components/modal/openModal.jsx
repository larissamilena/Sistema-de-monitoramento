import { FiX } from "react-icons/fi"
import { Link } from "react-router-dom"

export function Modal({closeModal}) {

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
            <div className=" bg-gray-200  rounded-b-lg  w-2/4 flex flex-col justify-between ">
                <header className="  w-full   ">
                    <div className=" p-2 bg-cyan-600 text-white flex items-center justify-between ">
                        <h2 className="">
                            TESLA MAGNETOM MEDICINA DIAGNOSTICA
                        </h2>
                        <button onClick={closeModal} className=' p-1 rounded-lg text-white hover:bg-opacity-80 '>    
                        
                        <FiX size={20} className='' />
                        </button>
                    </div>

                            
                </header>
                <div className="flex items-center justify-center h-full p-6">
                    <ul className="flex flex-col justify-center h-full  items-center gap-3  w-1/2 ">
                        <li to='/dashboard/1' className=" p-2 w-full rounded-lg cursor-pointer bg-amber-500 text-white hover:bg-opacity-75"> 
                            <Link to="/dashboard/1" className="flex flex-1">MAGNETOM AVANTO</Link> 
                        </li>
                        <li to='/dashboard/2' className=" p-2 w-full rounded-lg cursor-pointer bg-amber-500 text-white hover:bg-opacity-75 "> 
                            <Link to='/dashboard/2' className="flex flex-1">MAGNETOM C! MOD.2</Link> 
                                
                        </li>
                  
                    </ul>                   
                </div>
                
                
            </div>
        </div>
    )
}