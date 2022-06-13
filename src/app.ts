//可以取得.env的參數
import 'dotenv/config';

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerConfig from './config/swagger';
import { errors } from 'celebrate';
import DataSource from './config/db.config';
import routes from './routes';

(async () => {
    const app = express();

    await DataSource.initialize();

    app.use(
        cors({
            origin: ['http://localhost'],
        }),
    );

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api', routes);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(swaggerConfig)));
    app.use(errors());

    app.listen(process.env.PORT, () => {
        console.log(`Express server listening on port ${process.env.PORT}`);
    });
})();