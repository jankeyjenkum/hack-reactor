var Authenticator = {};
var ServiceLogger = {};
var Settings = {};

var userRoles = [];
userRoles.push('user');
userRoles.push('superuser');
userRoles.push('moderator');
userRoles.push('poster');
userRoles.push('guest');
Authenticator.userRoles = userRoles;

var userPermissions = [];
userPermissions.push('read');
userPermissions.push('write');
userPermissions.push('delete');
userPermissions.push('create');
Authenticator.userPermissions = userPermissions;

var serviceErrors = [];
serviceErrors.push('Service is currently unavailable.');
serviceErrors.push('Service is down for maintenance.');
serviceErrors.push('Insufficient arguments supplied.');
serviceErrors.push('Excess data sent.');
serviceErrors.push('Please try again later.');
ServiceLogger.serviceErrors = serviceErrors;

var serverErrorStatusCodes = [];
serverErrorStatusCodes.push('200');
serverErrorStatusCodes.push('302');
serverErrorStatusCodes.push('400');
serverErrorStatusCodes.push('404');
serverErrorStatusCodes.push('500');
ServiceLogger.serverErrorStatusCodes = serverErrorStatusCodes;

var settings = [];
settings.logging = true;
settings.maintenance_mode = 'on';
settings.capacity_reached = false;
settings.api_version = 1.0;
settings.auth_token = 'not set';
Settings.settings = settings;

function currentlyBrowsing(user) {
  if (user == 'user' || user == 'superuser' || user == 'moderator' || user == 'poster') {
    console.log("Currently logged in as: " + user);
  } else if (user == 'guest') {
    console.log("Currently browsing as guest");
  } else {
    console.log("Please login.");
  }
}

// returns a function object
function createAuthObject(role) {
  return {
    authorize: function() {
      console.log("Role provisioned: ", role);
    },
    unauthorize: function() {
      console.log("Removed role: ", role);
    },
    remove: function() {
      return 'Role is no longer defined';
    },
    copy: function() {
      var test = [];

      for (var x = 0; x < userRoles.length; x++) {
        // console.log(userRoles[x]);
        var add = userRoles[x];
      };
    }
  };
};

var authorizedObject = new createAuthObject('default');
authorizedObject.authorize();
authorizedObject.unauthorize();
authorizedObject.remove();
