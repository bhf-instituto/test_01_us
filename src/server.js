import { configDotenv } from 'dotenv';
import app from './app.js';

configDotenv();

const startServer = () => {
    try{
        app.on('error', (error) => {
            console.log("error en app", error);
            throw error;
        })
        app.listen(process.env.PORT, () => {
            console.log('servidor escuchando en el puerto', process.env.PORT);            
        })
    } catch (error){
        console.error('Internal server error (startSever)');
        process.exit(1);
    }
}

startServer();