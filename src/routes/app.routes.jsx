import {Routes, Route } from 'react-router-dom'

import { GeneralAdmin } from '../pages/generalAdmin'
import { Register } from '../pages/register'
import { DashBoard } from '../pages/dashboard'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element= {<GeneralAdmin />}/>
            <Route path='/register' element= {<Register />}/>

            <Route path='/dashboard/:id' element={<DashBoard />}/>
        </Routes>
    )
}