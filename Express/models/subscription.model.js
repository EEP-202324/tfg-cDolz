const { model, Schema } = require('mongoose');

//modelo para la BBDD con los datos que tienen los objetos de mi BBDD

const subscriptionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    eventId: { type: Schema.Types.ObjectId, ref: 'events' },
    eventDateId: { type: Schema.Types.ObjectId, ref: 'eventdates' }
});

module.exports = model('subscriptions', subscriptionSchema);