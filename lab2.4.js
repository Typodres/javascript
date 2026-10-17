function fn() {
    const n1 = {name: 'David'}; 
    let n2 = {name: 'David'};
    n2.name = 'Paatrick Jane';
    n1.name = 'Paatrick Jane';
   {n2.age = 17;}
   {n1.age = 17;}
    console.log(n1, n2);
    
} 
fn();
function createUser() {
 const createdUser = {name: 'David', city: 'Kiev'};
 return createdUser;
}
console.log(createUser());