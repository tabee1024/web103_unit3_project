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
               path: '/uzushio-village',
               element: <LocationEvents index={1} />
          },
          {
               path: '/naruto-cafe',
               element: <LocationEvents index={2} />
          },
          {
               path: '/jinchiruki-coast',
               element: <LocationEvents index={3} />
          },
          {
               path: '/uchiha-hours',
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