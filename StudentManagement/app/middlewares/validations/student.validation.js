const checkEmpty = (req, res, next) => {
    const {fullName, age, classes} = req.body;
    if (fullName && age && classes){
        next();
    }
    else{
        res.status(500).send("Data Can Not Be Empty");
    }
}

const checkClass = (req, res, next) => {
    const {fullName, age, classes} = req.body;
    if (age > 12){
        next();
    }
    else{
        res.status(500).send("Age must be larger than 12");
    }
}

module.exports = {
    checkEmpty,
    checkClass
}