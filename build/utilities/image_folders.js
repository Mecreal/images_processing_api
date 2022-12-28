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
Object.defineProperty(exports, "__esModule", { value: true });
exports.thumb_dir_f = exports.thumb_dir = exports.images_in_dir = exports.img_dir_ext = exports.image_dir_link = void 0;
const fs = __importStar(require("fs"));
// The image import part
var images_in_dir_beforetest = []; // we define the var as a empty string
exports.image_dir_link = process.cwd() + '/images/'; // Here we call path.resolve to get the path of the image directory
exports.img_dir_ext = fs.existsSync(exports.image_dir_link); // We check if it exists
if (exports.img_dir_ext) {
    images_in_dir_beforetest = fs.readdirSync(exports.image_dir_link); // If so we conctatinate the names of the images it in the constant to export it
}
exports.images_in_dir = images_in_dir_beforetest; // here we export the list of the images in the directory
// Thumb directory
exports.thumb_dir = process.cwd() + `/thumb/`;
const thumb_dir_f = () => {
    const thumb_check = fs.existsSync(exports.thumb_dir);
    if (!thumb_check) {
        try {
            fs.mkdirSync(exports.thumb_dir);
            console.log('Directory created successfully');
        }
        catch (error) {
            console.error(error);
        }
    }
};
exports.thumb_dir_f = thumb_dir_f;
