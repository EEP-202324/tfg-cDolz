const router = require('express').Router();
const upload = require('../../middleware/uploadFiles');

const Event = require('../../models/event.model');
const EventDate = require('../../models/eventDate.model');

// petición para registrar un evento y registar todas las fechas del evento
router.post('/register-event', upload.single('file'), async (req, res, next) => {
    try {
        const eventData = JSON.parse(req.body.event);

        const event = await Event.create({
            ...eventData,
            // se construye la url de la imagen del evento
            file: `http://localhost:3000/${req.file.path.replace(/\\/g, '/')}`,
            popularity: 0
        });

        const dates = eventData.dates;

        const eventDates = dates.map(({ date }) => {
            return {
                date,
                participants: 0,
                event: event._id
            };
        });

        await EventDate.insertMany(eventDates);

        res.json({ success: 'Event and event dates registered!' });

    } catch (error) {
        next(error);
    }
});

// peetición para obtener todos los eventos de una categoría
router.get('/get-events/:category', async (req, res, next) => {
    try {
        const category = decodeURIComponent(req.params.category);
        const events = await Event.find({ categorization: category });
        res.json(events);
    } catch (error) {
        next(error);
    }
});

// petición para obtener 10 eventos de una categoría
router.get('/get-ten-events/:category', async (req, res, next) => {
    try {
        const category = decodeURIComponent(req.params.category);
        const events = await Event.find({ categorization: category }).limit(10);
        res.json(events);
    } catch (error) {
        next(error);
    }
});

// petición para obtener un evento por su título
router.get('/get-event/:title', async (req, res, next) => {
    try {
        const title = decodeURIComponent(req.params.title);
        const event = await Event.findOne({ title: title });

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        let eventDates = await EventDate.find({ event: event._id });

        eventDates = eventDates.filter(eventDate => eventDate.participants < event.maxParticipants);

        res.json({ event, eventDates });
    } catch (error) {
        next(error);
    }
});

// petición para obtener los 10 eventos más populares
router.get('/get-top-ten-events', async (req, res, next) => {
    try {
        const events = await Event.find().sort({ popularity: -1 }).limit(10);
        res.json(events);
    } catch (error) {
        next(error);
    }
});

module.exports = router;