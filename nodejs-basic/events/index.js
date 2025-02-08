const { EventEmitter } = require('events');

const birthdayEventListener = ({ name }) => {
    console.log(`Happy birthday ${name}`);
}

// kita buat onjek emiter
const myEmitter  = new EventEmitter();

// Buat event dengan nama birthday
myEmitter.on('birthday', birthdayEventListener);

// Triger event birthday
myEmitter.emit('birthday', { name: 'prismana' });

