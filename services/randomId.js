const getRandomInt = (min = 11, max = 10000) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

module.exports = getRandomInt;
