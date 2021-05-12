// const EntityBase = require('./entityBase')

// console.log(new EntityBase({
//     name: 'Erick Wendel',
//     gender: 'male',
// }).name);

// console.log(new EntityBase({
//     name: 'Xuxa da Silva',
//     gender: 'female',
// }).name);



const assert = require('assert')
const Employee = require('./employee')

const GENDER = {
    male: 'male',
    female: 'female'
}

{
    const employee = new Employee({
        name: 'Xuxa da Silva',
        gender: GENDER.female
    })

    assert.throws(() => employee.birthYear, { message: 'you must define age first!!' })
}

{
    const employee = new Employee({
        name: 'Joãozin',
        age: 20,
        gender: GENDER.male
    })

    assert.deepStrictEqual(employee.name, "Mr. Joãozin")
}

