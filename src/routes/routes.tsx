import { Routes, Route } from 'react-router-dom'
import { SignUp } from '../pages/signUp'
import { SignIn } from '../pages/signIn'
import { Home } from '../pages/home'
import { Product } from '../pages/product'

export function Router(){
    return(
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/cadastro' element={<SignUp/>}/>
                <Route path='/login' element={<SignIn/>}/>
                <Route path='/produto' element={<Product/>}/>
            </Routes>
    )
}