const logFeature1 = (req, res, next) => {
    console.log("This is the get student list function!");
    next();
};

module.exports = {
    logFeature1
}