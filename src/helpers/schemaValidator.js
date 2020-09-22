const { Validator } = require('jsonschema')

class SchemaValidator {
  constructor () {
    this.V = new Validator()
  }

  async validate (data, schema) {
    try {
      await this.V.validate(data, schema, { throwError: true })
    } catch (err) {
      throw err
    }
  }
}

module.exports = SchemaValidator