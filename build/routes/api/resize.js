"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const sharp_use_1 = require("../../utilities/sharp_use");
const image_folders_1 = require("../../utilities/image_folders");
const fs = __importStar(require("fs"));
const resize = express_1.default.Router();
// Definition of the resize router
resize.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Checking if the images folder exist
    if (!image_folders_1.img_dir_ext) {
        return res.status(404).send(`Error 404, Folder images not found`);
    }
    // checking and creating the thumb folder
    (0, image_folders_1.thumb_dir_f)();
    // cheking the name of the image
    if (req.query.name === undefined) {
        return res
            .status(400)
            .send(`<style>h2{color:red;width:100%; text-align:center;}</style><h2>Error 400, Please define the name of the Image</h2>`);
    }
    const name = req.query.name; // storing the name of the image
    // cheking if the image exist in the folder image
    if (!(image_folders_1.images_in_dir.includes(name) || image_folders_1.images_in_dir.includes(name + '.jpg')))
        return res
            .status(404)
            .send(`Error 404, Image not found. <br/> Please Enter a valide image.`);
    // storing the image path and name with extension if it'snt given and checking the validity of the extension
    var locImg = '';
    var nameWExt = '';
    const extension = path_1.default.extname(name);
    if (extension === '') {
        locImg = image_folders_1.image_dir_link + name + `.jpg`;
        nameWExt = name + '.jpg';
    }
    else if (extension === '.jpg') {
        locImg = process.cwd() + name;
        nameWExt = name;
    }
    else {
        return res.send(`Error ${extension}, The extension is invalid. Please use jpg extension.`);
    }
    // Checking the validity of the dimentions
    if (req.query.height === undefined && req.query.width === undefined) {
        return res.status(200).sendFile(locImg);
    }
    else if (!(req.query.height !== undefined && req.query.width !== undefined)) {
        return res.status(400).send('Error,Please enter both width and height');
    }
    const height = Number(req.query.height);
    const width = Number(req.query.width);
    if (isNaN(height) || isNaN(width)) {
        return res
            .status(400)
            .send('Error, the height or width are invalide please enter a valide values');
    }
    const nameWNExt = path_1.default.parse(nameWExt).name;
    const nameExt = path_1.default.parse(nameWExt).ext;
    const locthumb = process.cwd() + `/thumb/${nameWNExt}-${width}-${height}${nameExt}`;
    if (fs.existsSync(locthumb)) {
        console.log('The Image is already exist');
        return res.sendFile(locthumb);
    }
    // if the thmb doesn't exist we resize it
    const sharped = yield (0, sharp_use_1.sharp_use)(width, height, locImg, locthumb);
    if (sharped !== 'error') {
        return res.status(200).sendFile(sharped);
    }
    else {
        res.status(400).send('Error during processing');
    }
}));
exports.default = resize;
