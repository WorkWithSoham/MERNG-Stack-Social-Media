const User = require('../../models/User')

module.exports = {
  Query: {
    getUsers() {
      const data = [
        {
          username: "Soham",
          password: "soham_123",
          email: "s@t.com",
          createdAt: "2020-12-09",
        },
      ];

      return data;
    },
  },
};
