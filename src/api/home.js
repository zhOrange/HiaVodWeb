import request from '../utils/request'

export function listHomeBooks() {
    return request.get('/home/books');
}