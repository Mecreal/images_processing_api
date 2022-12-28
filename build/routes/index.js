"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const resize_1 = __importDefault(require("./api/resize")); // Route of my api
const style_1 = __importDefault(require("../utilities/style")); // Style file
const image_folders_1 = require("../utilities/image_folders"); // The path of the images directory
const html_1 = require("../utilities/html"); // My HTML codes
// This is the api index routes file
const routes = express_1.default.Router();
// I allow to access to pictures
routes.use('/images', express_1.default.static(image_folders_1.image_dir_link));
// I show the messages
routes.get('/', (req, res) => {
    res.send(style_1.default + ' ' + html_1.message + ' ' + html_1.cards);
});
// Call the route of the API
routes.use('/resize', resize_1.default);
exports.default = routes;
