const router = require('express').Router();
const controllers = require('./controllers');

router
  .route('/business/:id/tables')
    .get(controllers.tables.get)
    .post(controllers.tables.post)
    .put(controllers.tables.put)
    .route('/qr')
      .get(controllers.tables.qr.get);

router
  .route('/user/:id')
    .get(controllers.user.get)
    .put(controllers.user.put)
    .delete(controllers.user.delete)
  .route('/user')
    .post(controllers.user.post);


/* Routes:
 * Businesses
 *   Get:
 *     Seats
 *     QR Codes
 *   Post:
 *     Seats
 *   Put:
 *     Update seat attention
 *     Update seats
 *   Delete:
 *
 * Users
 *   Get:
 *     User info
 *   Post:
 *     New user
 *   Put:
 *     New user info
 *   Delete:
 *     Delete user
*/

module.exports = router;