const express = require('express');
const app = express();

app.use(express.json());
app.get('/products', async (req, res, next) => {
    try {
        throw new Error("Database connection failed");
    } catch (error) {
        next(error); 
    }
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    
    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));