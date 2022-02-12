var push = require('web-push')

let vapidKeys ={
  publicKey: 'BC1CTgXLqgNiqasiHKGfSCUvHDBCHEbX9lSkcGTl6XkKuVfGybd4ZEyJKBLrnGyErdT7FTAhKGBnpGq7YrRpj7I',
  privateKey: '02IUjIY83FamUGVREenxn5fXJ_BXNrFk08BxKahI89w'
}

push.setVapidDetails('mailto:contact@doctorwhofans.be',vapidKeys.publicKey,vapidKeys.privateKey);

let sub={};

push.sendNotification(sub,"Test message")