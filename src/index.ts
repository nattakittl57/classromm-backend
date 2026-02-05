import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;

app.get('/', (_req: Request, res: Response) => {
    res.json({ message: 'Express + TypeScript server running' });
});

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
