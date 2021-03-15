// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      host : 'nextjs-sls.cnydiajghvoc.us-east-1.rds.amazonaws.com',
      user : 'postgres',
      password : '1l2r3j4p',
      database : 'nextjssls',
      charset: 'utf8'
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds'
    }
  }

};
