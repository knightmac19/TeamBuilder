const Intern = require('../lib/Intern');

test('Can instantiate Intern instance', () => {
    const e = new Intern();
    expect(typeof(e)).toBe("object")
});

test('Can set name via constructor arguments', () => {
    const name = 'Enrique';
    const e = new Intern(name, 5, 'email@email.com', 'UCONN');
    expect(e.name) === name;
});

test('Can set id via constructor arguments', () => {
    const id = 5;
    const e = new Intern('Enrique', id, 'email@email.com', 'UCONN');
    expect(e.id) === id;
});

test('Can set email via constructor arguments', () => {
    const email = 'janeSmith@email.com';
    const e = new Intern('Enrique', 5, email, 'UCONN');
    expect(e.email) === email;
});

test('Can set school via constructor arguments', () => {
    const school = 'UCONN';
    const e = new Intern('Enrique', 5, 'email@email.com', school);
    expect(e.school) === school;
});

test('Can get name from method', () => {
    const name = 'Enrique';
    const e = new Intern(name, 5, 'email@email.com', 'UCONN');
    expect(e.getName()) === name;
});

test('Can get id from method', () => {
    const id = 5;
    const e = new Intern('Enrique', id, 'email@email.com', 'UCONN');
    expect(e.getId()) === id;
});

test('Can get email from method', () => {
    const email = 'janeSmith@email.com';
    const e = new Intern('Enrique', 5, email, 'UCONN');
    expect(e.getEmail()) === email;
});

test('Can get school from method', () => {
    const school = 'UCONN';
    const e = new Intern('Enrique', 5, 'email@email.com', school);
    expect(e.getSchool()) === school;
});

test('Can get role from method', () => {
    const role = 'Intern';
    const e = new Intern('Enrique', 5, 'email@email.com', 'UCONN');
    expect(e.getRole()) === role;
});
