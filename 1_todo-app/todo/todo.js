const fs = require('fs')
const colors = require('colors/safe');

let toDoList = []

const storeData = () => {
    let data = JSON.stringify(toDoList);

    fs.writeFile('Data/data.json', data, err =>{
        if(err)
            throw new Error('Error on stored data', err)
    });
}

const loadData = () => {
    try {
        toDoList = require('../data/data.json')
        
    } catch (error) {
        toDoList = []
    }
}

const getAll = () => {

    loadData()
    console.table(toDoList)
}

const create = description => {
  
  loadData()

  let toDo = {
    description,
    completed: false
  }
  
  toDoList.push(toDo)

  storeData();

  return toDo;
}

const update = (description, completed = true) => {
    loadData()

    let index = toDoList.findIndex( task => task.description === description)

    if(index >= 0){
        toDoList[index].completed = completed
        storeData()
        return true
    }
    else{
        return false
    }
}

const remove = (description) => {
    loadData()

    let originalLength = toDoList.length

    toDoList = toDoList.filter(task => task.description != description)
    
    if(toDoList.length === originalLength){
        return false
    }        
    else
    {
        storeData()
        return true
    }
}




module.exports = {
    getAll,
    create,
    update,
    remove
}