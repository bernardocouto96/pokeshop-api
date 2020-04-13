"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const db_1 = __importDefault(require("./db"));
const middlewares_1 = __importDefault(require("./middlewares"));
const app = express_1.default();
db_1.default(config_1.default.MONGO_DB_URL);
middlewares_1.default(app);
app.listen(config_1.default.PORT, () => {
    console.log(`Servidor rodando na porta ${config_1.default.PORT}`);
});
//# sourceMappingURL=index.js.map