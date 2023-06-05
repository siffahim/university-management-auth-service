import mongoose from "mongoose";
import app from "./app";
import config from "./config";

//connect database
async function run() {
    try {
        await mongoose.connect(config.database_url as string)
        console.log("🛢 Database is connected successfully")

        //listening app
        app.listen(config.port, () => {
            console.log(`Application listening on port ${config.port}`)
        })
    }
    catch (err) {
        console.log("😸 Failed to connect database")
    }
}

run();