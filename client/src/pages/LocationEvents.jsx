import React, { useEffect, useState } from 'react'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = ({ index }) => {
    const [location, setLocation] = useState(null)
    const [events, setEvents] = useState([])

    useEffect(() => {
        const loadLocationData = async () => {
            try {
                const locationData =
                    await LocationsAPI.getLocationById(index)

                const eventData =
                    await EventsAPI.getEventsByLocation(index)

                setLocation(locationData)
                setEvents(eventData)
            } catch (error) {
                console.error('Error loading location:', error)
            }
        }

        loadLocationData()
    }, [index])

    if (!location) {
        return <h2>Loading...</h2>
    }

    return (
        <div className="location-events">
            <header>
                {location.image && (
                    <div className="location-image">
                        <img
                            src={location.image}
                            alt={location.name}
                        />
                    </div>
                )}

                <div className="location-info">
                    <h2>{location.name}</h2>
                    <p>{location.description}</p>
                </div>
            </header>

            <main>
                <h2>Events</h2>

                {events.length > 0 ? (
                    events.map((event) => (
                        <article key={event.id}>
                            <h3>{event.name}</h3>

                            <p>{event.description}</p>

                            <p>
                                <strong>Date:</strong>{' '}
                                {new Date(event.date).toLocaleString()}
                            </p>
                        </article>
                    ))
                ) : (
                    <p>No events scheduled at this location yet.</p>
                )}
            </main>
        </div>
    )
}

export default LocationEvents