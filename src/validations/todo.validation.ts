import { Joi } from 'celebrate';

export default {
    add: {
        body: Joi.object({
            thing: Joi.string().required(),
        }).unknown(true),
    },

    update: {
        body: Joi.object({
            thing: Joi.string().required(),
            isFinish: Joi.boolean().required(),
        }).unknown(true),
    },
};
