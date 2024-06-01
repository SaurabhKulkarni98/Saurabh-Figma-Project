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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Category_1 = __importDefault(require("../models/Category"));
const categoryRouter = express_1.default.Router();
// Create Category
categoryRouter.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, image, status } = req.body;
        const category = new Category_1.default({ name, image, status });
        yield category.save();
        res.status(201).json(category);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
}));
// Get All Categories
categoryRouter.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield Category_1.default.find();
        res.json(categories);
    }
    catch (err) {
        if (err instanceof Error) {
            res.status(400).json({ error: err.message });
        }
        else {
            res.status(400).json({ error: 'An unknown error occurred' });
        }
    }
}));
exports.default = categoryRouter;
