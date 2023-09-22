const boom = require('@hapi/boom');
const connection = require('../libs/postgres')


class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
    const client = await connection()
    const rta = await client.query('SELECT * from tasks')
    return rta.rows;
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
