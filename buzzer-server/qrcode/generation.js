const QRCode = require('qrcode');

QRCode.toString('www.google.com', { type: 'svg' }, (err, url) => {
  console.log(url);
})

// export default (url) => {

// }