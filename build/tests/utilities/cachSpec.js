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
const cach_1 = require("../../utilities/cach");
describe('Checking the caching function ', () => {
    const true_img = process.cwd() + '/images/santamonica.jpg';
    const width = 1920;
    const height = 1273;
    const f_width = 1000;
    const f_height = 1073;
    const false_img = process.cwd() + '/images/fall.jpg';
    it('Should return true for existing image', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, cach_1.check_image)(true_img, width, height);
        expect(result).toBe(true);
    }));
    it('Should return false for non-existing imgage', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, cach_1.check_image)(false_img, width, height);
        expect(result).toBe(false);
    }));
    it('Should return false  the image exist but not in the same dimensions', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield (0, cach_1.check_image)(true_img, f_width, height);
        expect(result).not.toBe(true);
    }));
});
