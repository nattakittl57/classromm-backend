import express, { Request, Response } from 'express';
import subjectsRouter from "./routes/subjects";
import cors from "cors";

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

const app = express();

if(!process.env.FRONTEND_URL) {
    throw new Error("Missing FRONTEND_URL");
}

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    // allowedHeaders: ['Content-Type', 'Authorization'],
}))
app.use(express.json());

app.use('/api/subjects', subjectsRouter);



app.get('/', (_req: Request, res: Response) => {
    res.json({ message: 'Express + TypeScript server running' });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
