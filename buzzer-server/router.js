const router = require('express').Router();
const controllers = require('./controllers');

router
  .route('/business/:id/seats')
    .get(controllers.seats.get)
    .post(controllers.seats.post)
    .put(controllers.seats.put)
    .route('/qr')
      .get(controllers.seats.qr.get);

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