const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3005;

app.use(cors());
app.use(express.static(path.join(__dirname, './../build/web/')));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});