"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const style_1 = __importDefault(require("./utilities/style"));
const html_1 = require("./utilities/html");
const app = (0, express_1.default)();
const port = process.env.PORT || 3300;
app.use((0, morgan_1.default)('dev'));
app.use((req, res, next) => {
    if (req.url === '/favicon.ico') {
        res.sendStatus(204);
    }
    else {
        next();
    }
});
app.get('/', (req, res) => {
    res.status(200).send(`${style_1.default + html_1.welcome}
  `);
});
//routers of the app
app.use('/api', index_1.default);
// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
exports.default = app;
