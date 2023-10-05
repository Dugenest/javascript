let user1 = {
    lastname:"Musk",
    firstname:"Elon",
    age:"51",
    phone:"0422521010",
    birtdate:"1971-06-28",
};

Object.defineProperty(user1, "age", {
    value: null,
});
console.log(user1);

// autre méthode
// user1.age = null