import {createSwitchNavigator} from '@react-navigation/core'
import {createBrowserApp} from '@react-navigation/web'
import Home from '../pages/Home'
import Signup from '../pages/Signup'
import Login from '../pages/Login'
import Load from '../pages/Load'




const AuthStack = createSwitchNavigator(
    {
        Signup:Signup,
        Login:Login
    }
)


const routes ={
    Load:Load,
    Auth:AuthStack,
    Home:Home,
    
}

const AppNavigator = createSwitchNavigator(routes)



const BrowserApp = createBrowserApp(AppNavigator)




export default BrowserApp