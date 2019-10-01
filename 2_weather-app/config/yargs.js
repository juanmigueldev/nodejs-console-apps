const argv = require('yargs')
            .options({
                address: {
                    alias: 'a',
                    desc: 'Address of the city from which you want to know weather',
                    demand: true
                }
            })
            .argv


module.exports = {
    argv
}