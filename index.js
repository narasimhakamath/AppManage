const express = require("express");

const branchRoutes = require("./controllers/Branches");

const app = express();

app.use(express.json());

app.use(`/api/branches`, branchRoutes);

const server = app.listen(3000, console.log(`Server running in on port: 3000`));

process.on('unhandledRejection', (error, promise) => {
	console.log(`Error: ${error['message']}`);
	server.close(() => process.exit(1));
});