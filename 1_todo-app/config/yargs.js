const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of ToDo item'
}

const completed = {
    default: true,
    alias: 'c',
    desc: 'Mark as completed or pending a ToDo item'
}

const argv = require('yargs')
    .command('create', 'Create a new ToDo item', { description })
    .command('update', 'Update an existing ToDo item', { description, completed})
    .command('remove', 'Delete an existing ToDo item', { description })
    .help()
    .argv

module.exports = {
    argv
}