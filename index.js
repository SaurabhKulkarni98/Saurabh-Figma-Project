"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = __importDefault(require("./routes/user"));
const category_1 = __importDefault(require("./routes/category"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use('/users', user_1.default);
app.use('/categories', category_1.default);
const dbUri = "mongodb+srv://saurabhuser:saurabhuser@cluster0.kbgm9on.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose_1.default.connect(dbUri)
    .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});
