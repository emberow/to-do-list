import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

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