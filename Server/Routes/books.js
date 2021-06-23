"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router;
const books_1 = require("../Controllers/books");
router.get('/', books_1.DisplayBookListPage);
router.get('/add', books_1.DisplayAddPage);
router.post('/add', books_1.ProcessAddPage);
router.get('/edit/:id', books_1.DisplayEditPage);
router.post('/edit/:id', books_1.ProcessEditPage);
router.get('/delete/:id', books_1.ProcessDeletePage);
//# sourceMappingURL=books.js.map