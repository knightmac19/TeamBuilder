const Manager = require('../lib/Manager');

test('Can instantiate Manager instance', () => {
    const e = new Manager();
    expect(typeof(e)).toBe("object")
});

test('Can set name via constructor arguments', () => {
    const name = 'Enrique';
    const e = new Manager(name, 5, 'email@email.com', 'knightmac19');
    expect(e.name).toBe(name);
});

test('Can set id via constructor arguments', () => {
    const id = 5;
    const e = new Manager('Enrique', id, 'email@email.com', 'knightmac19');
    expect(e.id).toBe(id);
});

test('Can set email via constructor arguments', () => {
    const email = 'janeSmith@email.com';
    const e = new Manager('Enrique', 5, email, 'knightmac19');
    expect(e.email).toBe(email);
});

test('Can set office number via constructor arguments', () => {
    const officeNumber = 1;
    const e = new Manager('Enrique', 5, 'email@email.com', officeNumber);
    expect(e.officeNumber).toBe(officeNumber);
});

test('Can get name from method', () => {
    const name = 'Enrique';
    const e = new Manager(name, 5, 'email@email.com', 'knightmac19');
    expect(e.getName()).toBe(name);
});

test('Can get id from method', () => {
    const id = 5;
    const e = new Manager('Enrique', id, 'email@email.com', 'knightmac19');
    expect(e.getId()).toBe(id);
});

test('Can get email from method', () => {
    const email = 'janeSmith@email.com';
    const e = new Manager('Enrique', 5, email);
    expect(e.getEmail()).toBe(email);
});

test('Can get office number from method', () => {
    const officeNumber = 1;
    const e = new Manager('Enrique', 5, 'email@email.com', officeNumber);
    expect(e.getOfficeNumber()).toBe(officeNumber);
});

test('Can get role from method', () => {
    const role = 'Manager';
    const e = new Manager('Enrique', 5, 'email@email.com', 'knightmac19');
    expect(e.getRole()).toBe(role);
});







