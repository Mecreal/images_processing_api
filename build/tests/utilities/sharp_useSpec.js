"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_use_1 = require("../../utilities/sharp_use");
const width = 1000;
const height = 800;
const ori_img = process.cwd() + '/images/santamonica.jpg';
const f_img = process.cwd() + '/images/san.jpg';
const thumb_img = process.cwd() + '/thumb/santamonica.jpg';
describe('Testing the sharp functionality', () => {
    it('Should resize the image and return the thumbnail path', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, sharp_use_1.sharp_use)(width, height, ori_img, thumb_img);
        expect(result).toEqual(thumb_img);
    }));
    it('should handle errors when resizing the image and return "error"', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, sharp_use_1.sharp_use)(width, height, f_img, thumb_img);
        expect(result).toEqual('error');
    }));
});
