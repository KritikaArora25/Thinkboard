import express from "express"
import cors from "cors"
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js"
import { connectdb } from "./config/db.js";
import ratelimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;



console.log(process.env.MONGO_URL);

// app.get("/api/notes", (req, res) => {
//     res.send("you got 10 notes");
// });

// middleware
app.use(
    cors({
        origin: "http://localhost:5173",
    })
);

app.use(express.json());

// our simple custom middleware
// app.use((req,res,next)=>{
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// })

app.use(ratelimiter);
app.use("/api/notes", notesRoutes);
// app.use("api/product", productRoutes);
// app.use("api/posts", postRoutes);
// app.use("api/payments", PaymentRoutes);
// app.use("api/emails", emailRoutes);

connectdb().then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on PORT:", PORT);
    });
})


// mongodb+srv://kritikaarora2505:0riAzlw6Uaxfq1xj@cluster0.mbunia2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


