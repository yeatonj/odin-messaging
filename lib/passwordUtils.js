export function genPassword(password) {
    const hash = password;
    return hash;
}

export function validPassword(password, hash) {
    return password === hash;
}