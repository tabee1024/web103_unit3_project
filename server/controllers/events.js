import { pool } from '../config/database.js'

export const getEvents = async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT * FROM events ORDER BY date'
        )

        res.status(200).json(result.rows)
    } catch (error) {
        console.error('Error getting events:', error)
        res.status(500).json({
            error: 'Unable to get events'
        })
    }
}

export const getEventsByLocation = async (req, res) => {
    try {
        const { locationId } = req.params

        const result = await pool.query(
            `
      SELECT *
      FROM events
      WHERE location_id = $1
      ORDER BY date
      `,
            [locationId]
        )

        res.status(200).json(result.rows)
    } catch (error) {
        console.error('Error getting location events:', error)
        res.status(500).json({
            error: 'Unable to get location events'
        })
    }
}