const person = {name: 'Jack William', age: 16, job: 'facebooking', gfName: 'lara watson', address: 'Kochu Khet', phone: 3465666, frisnds:['Tom', 'sakil', 'arafat']};

const {phone} = person;

const complexObject = {
    name: 'abc',
    info: {
        address:'kola bagan',
        leader: 'Tiger leadear'
    }
}

const {leader} = complexObject.info;
console.log(leader);
// const gfName = person.gfName;
// const phone = person.phone;

// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);


const frisnds = ['Sakib Khan', 'Arman Khan', 'Amir Khan', 'Salman Khan', 'Sharukh Khan'];
const [chotoFriend, nextFriend, ...restFriend] = frisnds;
console.log(restFriend);