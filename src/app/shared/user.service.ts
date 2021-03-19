export class UserService {
  users = [{ name: 'Erick', age: 25 }, { name: 'Mike', age: 25 }];

  addUser(name: string, age: number) {
    this.users.push({ name, age });
    return this.users;
  }

  editUser(index, name, age) {
    const user = this.users[index];
    this.users[index] = {
      name: name ? name : user.name,
      age: age ? age : user.age
    };
    return this.users[index];
  }
}