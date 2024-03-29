const jwt = require('jsonwebtoken'); // eslint-disable-line
const ClientError = require('./client-error'); // eslint-disable-line

function authorizationMiddleware(req, res, next) {
  /* your code here */
  /**
   * Try to get the 'X-Access-Token' from the req.headers.
   * If no token is provided,
   *   throw a 401 error with the message 'authentication required'
   * Use jwt.verify() to verify the authenticity of the token and extract its payload
   * Assign the extracted payload to the user property of the req object.
   * Call next() (with no arguments) to let Express know to advance to its next route or middleware.
   */

  /**
    * References:
    * https://nodejs.org/api/http.html#http_message_headers
    * https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
    */

  const accessToken = req.headers['x-access-token'];
  if (!accessToken) {
    throw new ClientError(401, 'AUTHENTICATION REQUIRED');
  }
  req.user = jwt.verify(accessToken, process.env.TOKEN_SECRET);

  next();
}

module.exports = authorizationMiddleware;
