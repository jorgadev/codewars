var Mongo = {
  isValid: function (s) {
    return false;
  },
  getTimestamp: function (s) {
    console.log(s);
    return new Date();
  },
};

Mongo.getTimestamp();
