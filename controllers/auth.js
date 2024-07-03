const asyncWrapper = require('../middlewares/asyncWrapper');
// const { createCustomError } = require('../errors/customApiError');

const testServer = asyncWrapper(async (req, res, next) => {
    let count = 0;

    setInterval(() => {
        console.log("Count: " + count);
        count += 1;
    }, 10000);
});

module.exports = {
    testServer
}