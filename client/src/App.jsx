import {React} from 'react'
import { BrowserRouter , Link , Route , Routes,useLocation } from 'react-router-dom'
import { Artistica , logo } from './assets/index'
import { Home , CreatePost } from './pages/index'


const App = () => {
    
    const location = useLocation();
    const {pathname} = location;
     
    
  return (
    <>

           
                
        <header className='w-full flex  justify-between items-center bg-[black] sm:px-8 px-4 py-4 ' >
            <Link to="/" >
                <img src={ Artistica } alt="logo" className='w-28 h-15 object-center' />
            </Link>

            {pathname==='/' ? (<Link to="/create-post" className='font-inter font-medium bg-[#6469ff] text-white hover:bg-[#4147fa] px-4 py-2 rounded-md '  >
                Create
            </Link>):(
                <></>
            )
            }
            
        </header>
        <main className='sm:p-8 px-4 py-8 w-full bg-[#151515] min-h-[calc(100vh-73px)]' >
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/create-post' element={<CreatePost/>} />
            </Routes>
        </main>
    </>
  );
}

export default App