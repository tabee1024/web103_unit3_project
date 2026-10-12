import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import LocationsAPI from '../services/LocationsAPI'
import '../css/Locations.css'

const locationDetails = {
    1: {
        route: '/uzushio-village',
        icon: '⚔️'
    },
    2: {
        route: '/naruto-cafe',
        icon: '🌸'
    },
    3: {
        route: '/jinchiruki-coast',
        icon: '🎮'
    },
    4: {
        route: '/uchiha-hours',
        icon: '🌙'
    }
}

const Locations = () => {
    const [locations, setLocations] = useState([])

    useEffect(() => {
        const loadLocations = async () => {
            try {
                const data = await LocationsAPI.getAllLocations()
                setLocations(data)
            } catch (error) {
                console.error('Error loading locations:', error)
            }
        }

        loadLocations()
    }, [])

    return (
        <section className="locations-page">
            <div className="locations-intro">
                <p>WELCOME TO</p>
                <h2>Anime District</h2>

                <p>
                    Choose a location and discover the anime events
                    happening there.
                </p>
            </div>

            <div className="locations-grid">
                {locations.map((location) => {
                    const details = locationDetails[location.id]

                    return (
                        <Link
                            key={location.id}
                            to={details.route}
                            className="location-card"
                        >
                            <div className="location-icon">
                                {details.icon}
                            </div>

                            <h3>{location.name}</h3>

                            <p>{location.description}</p>

                            <span>View Events →</span>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Locations