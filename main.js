var auth = {};
auth.username = 'default';
auth['role'] = 'admin';
var e = [];
auth.e = e;
console.log(auth);
var ctr = 0;

// iterate object properties
for (var i in auth) {
  ctr++;
  if (i == 'username') {
    console.log('welcome, ' + auth[i]);
  } else if (i == 'role') {
    console.log('logged in: ' + auth[i])
  }
}

// object creation and settings
var b = [];
var settings = {
  logging: true,
  maintenance_mode: 'on',
  capacity_reached: false,
  api_verison: 1.0,
  auth_token: 'not set'
}
b[0] = true;
b[1] = false;
b[2] = settings
