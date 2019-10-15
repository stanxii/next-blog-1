import dev from './dev';
import prod from './prod';

const env = process.env || 'development';
const config = env === 'production' ? prod : dev;

export default config;