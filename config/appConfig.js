let appConfig = {};

appConfig.port = 3002;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://13.59.36.38:27017/listAppDB'
  }
appConfig.apiVersion = '/api/v1';


module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db :appConfig.db,
    apiVersion : appConfig.apiVersion
};
