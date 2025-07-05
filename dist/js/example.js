export function greet(name) {
    return `Hello, ${name}!`;
}
export class UserService {
    users = [];
    addUser(user) {
        this.users.push(user);
    }
    getUsers() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find(user => user.id === id);
    }
}
//# sourceMappingURL=example.js.map