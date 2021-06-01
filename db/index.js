const Pool = require("pg").Pool;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 25,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
