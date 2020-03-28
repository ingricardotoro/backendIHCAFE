require('dotenv').config();
import app from './app';

import '@babel/polyfill';

async function main(){
    //console.log('PUERTO='+process.env.PORT);
    
    await app.listen(app.get('port')); 
    console.log('Server on port=', app.get('port'));
   

    /*import { sequelize } from './database/database';
    sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });*/
};

main();