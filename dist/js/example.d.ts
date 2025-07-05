export declare function greet(name: string): string;
export interface User {
    id: number;
    name: string;
    email: string;
}
export declare class UserService {
    private users;
    addUser(user: User): void;
    getUsers(): User[];
    getUserById(id: number): User | undefined;
}
//# sourceMappingURL=example.d.ts.map