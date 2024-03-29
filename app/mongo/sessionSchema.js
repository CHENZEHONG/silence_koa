'use strict';

const SessionSchema = {
    _id: String,
    data: Object,
    updatedAt: {
        default: new Date(),
        expires: 86400, // 1 day
        type: Date
    }
};

module.exports = SessionSchema;
