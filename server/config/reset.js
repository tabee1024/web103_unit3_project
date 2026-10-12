import { pool } from './database.js'

const createTables = async () => {
    try {
        await pool.query(`
      DROP TABLE IF EXISTS events;
      DROP TABLE IF EXISTS locations;

      CREATE TABLE locations (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        image TEXT
      );

      CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT,
        date TIMESTAMP,
        location_id INTEGER REFERENCES locations(id)
      );
    `)

        await pool.query(`
      INSERT INTO locations (name, description, image)
      VALUES
        ('Shonen Arena', 'A high-energy arena for battles, tournaments, and shonen anime events.', ''),
        ('Sakura Cafe', 'A cozy anime cafe for manga clubs, trivia, and relaxed meetups.', ''),
        ('Akihabara Arcade', 'An arcade-inspired space for gaming tournaments and anime competitions.', ''),
        ('Moonlight Theater', 'A theater for anime screenings, premieres, and watch parties.', '');
    `)

        await pool.query(`
      INSERT INTO events (name, description, date, location_id)
      VALUES
        ('Anime Fighting Tournament', 'Compete in anime fighting games and meet other fans.', '2026-11-15 18:00:00', 1),
        ('Shonen Trivia Night', 'Test your knowledge of popular shonen anime.', '2026-11-20 19:00:00', 1),

        ('Manga Club Meetup', 'Discuss favorite manga series over snacks and drinks.', '2026-11-10 17:00:00', 2),
        ('Cosplay Cafe Night', 'Wear your favorite cosplay and meet other anime fans.', '2026-12-05 18:30:00', 2),

        ('Anime Game Tournament', 'Compete in anime-themed arcade and console games.', '2026-11-22 16:00:00', 3),
        ('Retro Anime Gaming Night', 'Play classic anime-inspired games.', '2026-12-12 19:00:00', 3),

        ('Anime Movie Night', 'Watch a featured anime movie with the community.', '2026-11-18 20:00:00', 4),
        ('Season Premiere Watch Party', 'Watch the premiere of a new anime season together.', '2026-12-20 19:30:00', 4);
    `)

        console.log('Database reset successfully')
    } catch (error) {
        console.error('Error resetting database:', error)
    } finally {
        await pool.end()
    }
}

createTables()