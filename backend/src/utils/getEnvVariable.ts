import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: '.env' });
export default (name: string, defaultValue: string | number | boolean = null) => {
    if (!defaultValue === null && process.env[name] === undefined) {
        throw new Error(`Missing environment variable - "${name}"`);
    }
    return process.env[name] === undefined ? defaultValue : process.env[name];
}