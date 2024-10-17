import app from './app';
import config from './config/config';
import logger from './util/logger';

const PORT: number = parseInt(config.PORT || '5000', 10);
app.listen(PORT, () => {
  logger.info(`Server has started successfully`,{
    port: PORT,
    url:`http://localhost:${PORT}`
  });
});
