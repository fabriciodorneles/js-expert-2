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

//Mockando o getFullYear para que o teste do birthYear funcione sempre
//(pq no teste a idade vai ser fixa)
const CURRENT_YEAR = 2021
Date.prototype.getFullYear = () => CURRENT_YEAR

{
    const employee = new Employee({
        name: 'Joãozin',
        age: 20,
        gender: GENDER.male
    })

    console.log(employee.birthYear);
    assert.deepStrictEqual(employee.name, "Mr. Joãozin")
    assert.deepStrictEqual(employee.age, undefined)
    assert.deepStrictEqual(employee.gender, undefined)
    assert.deepStrictEqual(employee.grossPay, 'R$5,000.40')
    assert.deepStrictEqual(employee.netPay, 'R$4,000.32')
    // assert.deepStrictEqual(employee.birthYear, 2001)

}

