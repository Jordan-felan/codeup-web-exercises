const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//2
let filter = users.filter(language => language.languages.length >= 3)
console.log(filter)





//3
let emails = users.map(user =>  user.email );
console.log(emails)

//4
const totalExp = users.reduce((total, person) => {
   return total + person.yearsOfExperience / users.length
},0)
console.log(totalExp)



//5
// let emailLength = users.reduce((a, b)=>{
//     return a.length > b.email.length ? a : b.email;
// }, []);
// console.log(emailLength)
//using let emails from earlier exercise
let longestUserEmail = emails.reduce((a, b) => a.length > b.length ? a : b);
console.log(longestUserEmail)



//6
let usersNames = users.reduce((accumulator, user, index,array) => {
  if (index === array.length - 1){
      accumulator += user.name + '.'
      return accumulator
  } else{
      accumulator += user.name + ', ';
      return accumulator;
  }

},'Users names are: ');
console.log(usersNames)

//bonus
let uniqueArray = users.reduce(function (nameArray, user, index, array) {
    nameArray.push(...user.languages); //Using the .push(...Array) separates the array when we push it rather than pushing it normally, and using .push(Array), where we would get an array inside of an array.
    // nameArray = nameArray.concat(user.languages); //Using the concat method we can combine arrays, back to back.
    // nameArray = [...nameArray,...user.languages];
    // console.log(nameArray);
    if (index === array.length - 1) {
        // return getUniqueValues(nameArray);
        return [... new Set(nameArray)].sort(); // Set creates a new array with the unique values
    } else {
        return nameArray;
        // return getUniqueValues(nameArray);
    }
}, []);
console.log(uniqueArray);

function minus (a, b){
    if(b === undefined) return -a
    else return a - b
}
console.log(minus(5))
console.log(minus(5,2))
