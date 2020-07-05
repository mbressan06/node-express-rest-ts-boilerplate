import crypto from 'crypto';
import { PASSWORD_LENGTH, SALT_LENGTH, ITERATIONS, DIGEST, BYTE_TO_STRING_ENCODING} from '../constants/hash.constants';
 
interface PersistedPassword {
    salt: string;
    hash: string;
    iterations: number;
}

export async function generateHashPassword(password: string): Promise<PersistedPassword> {
    return new Promise<PersistedPassword>((accept, reject) => {
        const salt = crypto.randomBytes(SALT_LENGTH).toString(BYTE_TO_STRING_ENCODING);
        crypto.pbkdf2(password, salt, ITERATIONS, PASSWORD_LENGTH, DIGEST, (error, hash) => {
            if (error) {
                reject(error);
            } else {
                accept({
                    salt,
                    hash: hash.toString(BYTE_TO_STRING_ENCODING),
                    iterations: ITERATIONS,
                });
            }
        });
    });
}

export async function verifyPassword(persistedPassword: PersistedPassword, passwordAttempt: string): Promise<boolean> {
    return new Promise<boolean>((accept, reject) => {
        crypto.pbkdf2(passwordAttempt, persistedPassword.salt, persistedPassword.iterations, PASSWORD_LENGTH, DIGEST, (error, hash) => {
            if (error) {
                reject(error);
            } else {
                accept(persistedPassword.hash === hash.toString(BYTE_TO_STRING_ENCODING));
            }
        });
    });
}
