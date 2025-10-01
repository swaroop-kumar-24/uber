const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstname,lastname,email,password,
    plate,color,capacity,vehicleType
}) => {
    if (!firstname || !email || !password || !plate || !color || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return captain;
}