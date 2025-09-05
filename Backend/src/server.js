import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import path from 'path'

import notesRoutes from "./routes/notesRoutes.js"
import { connectdb } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();



console.log(process.env.MONGO_URL);

// app.get("/api/notes", (req, res) => {
//     res.send("you got 10 notes");
// });

// middleware
if(process.env.NODE_ENV !== "production"){
    app.use(
        cors({
            origin: "http://localhost:5173",
        })
    );
}else{
    app.use(
        cors()
    );
}

app.use(express.json());

// our simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// })

app.use(ratelimiter);
app.use("/api/notes", notesRoutes);



if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "../Frontend/dist")));

    app.get("*",(req, res) => {
        res.sendFile(path.join(__dirname, "../Frontend","dist", "index.html"));
    });

}



// app.use("api/product", productRoutes);
// app.use("api/posts", postRoutes);
// app.use("api/payments", PaymentRoutes);
// app.use("api/emails", emailRoutes);

// middleware from express
// app.use(express.static(path.join()))

connectdb().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on PORT:", PORT);
    });
})


// mongodb+srv://kritikaarora2505:0riAzlw6Uaxfq1xj@cluster0.mbunia2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


