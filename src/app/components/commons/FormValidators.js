export const required = val => val && val.length;

export const maxLength = len => val => val && val.length && val.length <= len;