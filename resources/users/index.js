'use strict';

exports.handler = (event, context) => {
    let datetime = new Date();
    context.done(null, {
        'users': true,
        'datetime': datetime.toISOString()
    });
};
