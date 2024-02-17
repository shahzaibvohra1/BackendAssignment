const config = {
    env: process.env.NODE_ENV || 'development', 
    port: process.env.PORT || 3000,
    mongoUri: process.env.MONGODB_URI || "mongodb+srv://shahzaibvohra:pimsMZnsaUyhNngs@cluster0.umefhv2.mongodb.net/Marketplace?retryWrites=true&w=majority" ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' + 
    (process.env.MONGO_PORT || '27017') +
    '/mernproject'

}

export default config