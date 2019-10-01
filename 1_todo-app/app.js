const { argv } = require('./config/yargs')
const  toDo  = require('./todo/todo')

let command = argv._[0];


switch(command){

    case 'create':
        let task = toDo.create(argv.description)    
        break;

    case 'list':
        toDo.getAll()
        break;

    case 'update':
        let updated = toDo.update(argv.description, argv.completed)
        console.log(updated);
        break;
    
    case 'remove':
        let deleted = toDo.remove(argv.description)
        console.log(deleted)
        break;

    default:
        console.log('Unrecognized command');


}