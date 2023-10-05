let user1 = {
    lastname:"Musk",
    firstname:"Elon",
    age:"51",
    phone:"0422521010",
    birtdate:"1971-06-28",
};

const user2 = user1.getFullName = function getFullName(){
    return this.firstname+ ' ' +this.lastname;
};
console.log(user1);