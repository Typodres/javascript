const array = [{name: 'Patrick Jane', phone:+19173948976}, {name: 'Kimball Cho', phone:+14088289860}, {name: 'Wayne Rigsby', phone:+14088289860}]
function findMyPhoneByName(name){
    for (const item of array) {
        if (item.name === name) {
            return item.phone;}
           
        }return 'Not found';
    }
    

const phoneBook = {
    'Patrick Jane': '+19173948976',
    'Kimball Cho': '+14088289860',
    'Wayne Rigsby': '+14088289860'
}
   function findMyPhoneByName2(name){
return phoneBook[name] 
   }
   console.log(phoneBook['Kimball Cho']);