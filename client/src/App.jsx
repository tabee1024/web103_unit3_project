import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import './App.css'

const App = () => {
     const element = useRoutes([
          {
               path: '/',
               element: <Locations />
          },
          {
               path: '/shonen-arena',
               element: <LocationEvents index={1} />
          },
          {
               path: '/sakura-cafe',
               element: <LocationEvents index={2} />
          },
          {
               path: '/akihabara-arcade',
               element: <LocationEvents index={3} />
          },
          {
               path: '/moonlight-theater',
               element: <LocationEvents index={4} />
          }
     ])

     return (
          <div className='app'>
               <header className='main-header'>
                    <h1>Anime District</h1>

                    <div className='header-buttons'>
                         <Link to='/' role='button'>
                              Home
                         </Link>
                    </div>
               </header>

               <main>
                    {element}
               </main>
          </div>
     )
}

export default App