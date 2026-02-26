//task1 

/*

Ответ: c)

*/ 

//task 2
function printMultiplesOfThree() {
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0) {
        console.log(i);
        }
    }
}

printMultiplesOfThree();

//task 3

function getOldestPerson(people) {
    let oldestAge = -Infinity;
    let oldestPerson = '';
  
    for (const [name, age] of Object.entries(people)) {
      if (age > oldestAge) {
        oldestAge = age;
        oldestPerson = name;
      }
    }
  
    return oldestPerson;
}

const people = {
    "Иван": 25,
    "Мария": 32,
    "Алексей": 40,
    "Ольга": 29
};
  
console.log(getOldestPerson(people)); 

//task 4

const object = {
    2: ['a', 'b'],
    3: ["as", "afd", "fs"]
}

console.log(object);




