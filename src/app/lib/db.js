
const {DB_USERNAME, DB_PASSWORD} = process.env;
console.log("DB_USERNAME>>>>>", process.env.DB_USERNAME)
export const connectionStr = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.jgfacdk.mongodb.net/nextProductDB?retryWrites=true&w=majority`;