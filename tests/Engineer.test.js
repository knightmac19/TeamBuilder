const Engineer = require('../lib/Engineer');

test('Can instantiate Engineer instance', () => {
    const e = new Engineer('Enrique', 5, 'email@email.com', 'knightmac19');
    expect(typeof(e)).toBe("object")
});

test('Can set name via constructor arguments', () => {
    const name = 'Enrique';
    const e = new Engineer(name, 5, 'email@email.com', 'knightmac19');
    expect(e.name) === name;
});

test('Can set id via constructor arguments', () => {
    const id = 5;
    const e = new Engineer('Enrique', id, 'email@email.com', 'knightmac19');
    expect(e.id) === id;
});

test('Can set email via constructor arguments', () => {
    const email = 'janeSmith@email.com';
    const e = new Engineer('Enrique', 5, email, 'knightmac19');
    expect(e.email) === email;
});

test('Can set github via constructor arguments', () => {
    const github = 'knightmac19';
    const e = new Engineer('Enrique', 5, 'email@email.com', github);
    expect(e.github) === github;
});

test('Can get name from method', () => {
    const name = 'Enrique';
    const e = new Engineer(name, 5, 'email@email.com', 'knightmac19');
    expect(e.getName()) === name;
});

test('Can get id from method', () => {
    const id = 5;
    const e = new Engineer('Enrique', id, 'email@email.com', 'knightmac19');
    expect(e.getId()) === id;
});

test('Can get email from method', () => {
    const email = 'janeSmith@email.com';
    const e = new Engineer('Enrique', 5, email, 'knightmac19');
    expect(e.getEmail()) === email;
});

test('Can get github from method', () => {
    const github = 'knightmac19';
    const e = new Engineer('Enrique', 5, 'email@email.com', github);
    expect(e.getGithub()) === github;
});

test('Can get role from method', () => {
    const role = 'Engineer';
    const e = new Engineer('Enrique', 5, 'email@email.com', 'knightmac19');
    expect(e.getRole()) === role;
});
