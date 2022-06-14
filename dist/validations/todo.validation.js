"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const celebrate_1 = require("celebrate");
exports.default = {
    add: {
        body: celebrate_1.Joi.object({
            thing: celebrate_1.Joi.string().required(),
        }).unknown(true),
    },
    update: {
        body: celebrate_1.Joi.object({
            thing: celebrate_1.Joi.string().required(),
            isFinish: celebrate_1.Joi.boolean().required(),
        }).unknown(true),
    },
};
//# sourceMappingURL=todo.validation.js.map