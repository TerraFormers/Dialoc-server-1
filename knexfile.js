
module.exports = {

  development: {
    client: "pg",
    connection: "postgres://localhost/dialoc"
  },
  production: {
  client: "pg",
  connection: process.env.DATABASE_URL
}
};
