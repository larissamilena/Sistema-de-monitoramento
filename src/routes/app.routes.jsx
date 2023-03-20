import {Routes, Route } from 'react-router-dom'

import { GeneralAdmin } from '../pages/generalAdmin'
import { Register } from '../pages/register'
import { DashBoard } from '../pages/dashboard'
import { SingIn } from '../pages/singin/singIn'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/singin' element={<SingIn />} />
            <Route path='/' element= {<GeneralAdmin />}/>
            <Route path='/register' element= {<Register />}/>

            <Route path='/dashboard/:id' element={<DashBoard />}/>
        </Routes>
    )
}