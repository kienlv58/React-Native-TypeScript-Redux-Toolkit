class UserService {
    async getUser(userName: string) {
        return { name: 'kien', age: 24 };
    }
}

export default new UserService();
