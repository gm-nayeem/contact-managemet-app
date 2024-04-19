const app = require('./app');
const connectDatabase = require('./config/db');

const serverPort = process.env.SERVER_PORT;

app.listen(serverPort, async () => {
    console.log('Server is running successfully');

    await connectDatabase();
});