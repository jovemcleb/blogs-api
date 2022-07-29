const EditError = require('../helpers/editError');

class GlobalError {
  constructor(defaultStatus = 500) {
    this.defaultStatus = defaultStatus;
  }

  handle(error, _req, res, _next) {
    if (error instanceof EditError) {
      return res.status(error.status).json({ message: error.message });
    }
    return res.status(this.defaultStatus).json({ message: error.message });
  }
}

const globalError = new GlobalError();

module.exports = globalError;