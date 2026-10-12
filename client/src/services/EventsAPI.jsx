const EventsAPI = {
    getAllEvents: async () => {
        const response = await fetch('/api/events')

        if (!response.ok) {
            throw new Error('Failed to fetch events')
        }

        return await response.json()
    },

    getEventsByLocation: async (locationId) => {
        const response = await fetch(
            `/api/events/location/${locationId}`
        )

        if (!response.ok) {
            throw new Error('Failed to fetch location events')
        }

        return await response.json()
    }
}

export default EventsAPI