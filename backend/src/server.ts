import app from './app';
import config from './config/config';

const PORT: number = parseInt(config.PORT || '5000', 10);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
