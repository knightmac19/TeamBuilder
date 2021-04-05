const Employee = require('../lib/Employee');

test('Can instantiate Employee instance', () => {
    const e = new Employee();
    expect(typeof(e)).toBe("object")
});

test('Can set name via constructor arguments', () => {
    const name = 'Enrique';
    const e = new Employee(name, 5, 'email@email.com');
    expect(e.name) === name;
});

test('Can set id via constructor arguments', () => {
    const id = 5;
    const e = new Employee('Enrique', id, 'email@email.com');
    expect(e.id) === id;
});

test('Can set email via constructor arguments', () => {
    const email = 'janeSmith@email.com';
    const e = new Employee('Enrique', 5, email);
    expect(e.email) === email;
});

test('Can get name from method', () => {
    const name = 'Enrique';
    const e = new Employee(name, 5, 'email@email.com');
    expect(e.getName()) === name;
});

test('Can get id from method', () => {
    const id = 5;
    const e = new Employee('Enrique', id, 'email@email.com');
    expect(e.getId()) === id;
});

test('Can get email from method', () => {
    const email = 'janeSmith@email.com';
    const e = new Employee('Enrique', 5, email);
    expect(e.getEmail()) === email;
});

test('Can get role from method', () => {
    const role = 'Employee';
    const e = new Employee('Enrique', 5, 'email@email.com');
    expect(e.getRole()) === role;
});
