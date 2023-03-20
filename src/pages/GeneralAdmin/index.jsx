import axios from "axios";
import { ClipLoader } from "react-spinners";
import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";

import {FiPlus} from 'react-icons/fi'
import { FaSearch } from 'react-icons/fa'

import { Card } from '../../components/card'
import { HeaderTable } from '../../components/headerTable'
import { Modal } from "../../components/modal/openModal";
import { Aside } from "../../components/aside";

export function GeneralAdmin () {

    const [data, setData] = useState([])
    const [searchPerson, setSearchPerson] = useState('')
    const [ID, setID] = useState('')
    const [quantity, setQuantity] = useState(11)
    const [loading, setLoading] = useState(false)
    const [openOrCloseModal, setOpenOrCloseModal] = useState(false)
  
    useEffect(() => {
      const fetchData = async () => {
        setLoading(true)
  
        const user = await axios.get(`https://randomuser.me/api/?results=${quantity}`)
        setData(user.data.results)
        setID( user.data.info.seed )
  
        setLoading(false)
      }
      fetchData()
    },[quantity])
  
    function handleLoadMore() {
      setQuantity(quantity + 15 )
    }

      // search by name
    const lowerSearchPerson = searchPerson.toLowerCase()
    const filteredList = data.filter(
        (person) => 
        person.name.first.toLowerCase().includes(lowerSearchPerson) ||
        person.name.last.toLowerCase().includes(lowerSearchPerson)
    );
    function openModal() {
        setOpenOrCloseModal(true)    
    }

    function closeModal() {
        setOpenOrCloseModal(false)
    }

    return(
        
        <> 
                <Aside />
            <div  className="pr-4 pt-4  pl-64 max-sm:pl-40">
                <div className="relative flex items-center justify-between  text-gray-500 focus-within:text-gray-800 gap-4 ">
                    <FaSearch className="h-5 w-5 absolute ml-4 "/>
                    <input 
                        type="text"
                        className="border p-3 my-3 pl-12 rounded-lg w-1/3 focus:outline-none focus:ring-0 focus:ring-gray-700  focus:border-gray-700 "
                        placeholder="Pesquisar"
                        onChange={(e) => setSearchPerson(e.target.value)}                   
                    />

                    <Link to='Register'  className="p-3 border rounded-lg flex items-center  gap-3 bg-cyan-600 text-white hover:bg-opacity-80">
                        
                            <FiPlus size={20} />
                            Cadastrar novo usuário
                        
                    </Link>
                </div>

                <div className=' border-zinc-100 border rounded-md shadow-md pb-4 '>
                    <table className=' w-full text-start'>
                        <HeaderTable data={data} setData={setData}/>
                        <tbody className='' >
                            <Card openModal={openModal}/>
                        {/*
                            filteredList.map((item, index) => (
                            <Card key={index}
                                person = {item}
                                ID={ID}
                                openModal={openModal}                                
                            />                  
                            ))               
                            */}        
                        </tbody> 
                    </table>

                    {openOrCloseModal ? <Modal closeModal={closeModal} /> : null}
                    

                    {/* <div>      
                        <button 
                        className={`bg-cyan-600  text-white border rounded-lg px-3 py-2 my-5 m-auto flex hover:bg-opacity-80  hover:translate-x-0.5 duration-500 ${loading ?  ' px-14 py-2.5  cursor-not-allowed' : ''}`}
                        onClick={handleLoadMore}
                        >
                        {loading ? <ClipLoader color='white' size={20}/>  : 
                            <span className='flex items-center gap-2 '> <FiPlus size={20} /> Carregar mais</span>
                        } 
                        </button>
                    </div> */}
                </div>
            </div>

        </>
    )
}