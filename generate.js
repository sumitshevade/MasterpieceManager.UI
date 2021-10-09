process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
let shell = require('shelljs');
const fs = require('fs');
let webConfigString = fs.readFileSync('src/assets/web.config.json');
let config = JSON.parse(webConfigString);
let cmd = 'ng-openapi-gen -i ' + config.API_PATH + ' -o ' + config.SWAGGER_PATH;
//cmd +=  config.API_URL + '/swagger/v1/swagger.json --output '+ config.SWAGGER_PATH;
shell.exec(cmd);
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
