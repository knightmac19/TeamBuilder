const Intern = require('../lib/Intern');

test('Can instantiate Intern instance', () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object")
});

test('Can set name via constructor arguments', () => {
    const name = 'Enrique';
    const e = new Intern(name, 5, 'email@email.com', 'knightmac19');
    expect(e.name).toBe(name);
});

test('Can set id via constructor arguments', () => {
    const id = 5;
    const e = new Intern('Enrique', id, 'email@email.com', 'knightmac19');
    expect(e.id).toBe(id);
});

test('Can set email via constructor arguments', () => {
    const email = 'janeSmith@email.com';
    const e = new Intern('Enrique', 5, email, 'knightmac19');
    expect(e.email).toBe(email);
});

test('Can set school via constructor arguments', () => {
    const school = 'UCONN';
    const e = new Intern('Enrique', 5, 'email@email.com', school);
    expect(e.school).toBe(school);
});

test('Can get name from method', () => {
    const name = 'Enrique';
    const e = new Intern(name, 5, 'email@email.com', 'knightmac19');
    expect(e.getName()).toBe(name);
});

test('Can get id from method', () => {
    const id = 5;
    const e = new Intern('Enrique', id, 'email@email.com', 'knightmac19');
    expect(e.getId()).toBe(id);
});

test('Can get email from method', () => {
    const email = 'janeSmith@email.com';
    const e = new Intern('Enrique', 5, email);
    expect(e.getEmail()).toBe(email);
});

test('Can get school from method', () => {
    const school = 'UCONN';
    const e = new Intern('Enrique', 5, 'email@email.com', school);
    expect(e.getSchool()).toBe(school);
});

test('Can get role from method', () => {
    const role = 'Intern';
    const e = new Intern('Enrique', 5, 'email@email.com', 'knightmac19');
    expect(e.getRole()).toBe(role);
});

