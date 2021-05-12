const database = {
  ["index.html"]: "<html>Hello Key Value Stores</html>",
};

module.exports.get = (key, callback) => {
  setTimeout(() => {
    callback(database[key]);
  }, 3000);
};
