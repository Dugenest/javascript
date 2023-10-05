let user1 = {
    lastname:"Musk",
    firstname:"Elon",
    age:"51",
    phone:"0422521010",
    birtdate:"1971-06-28",
};

Object.defineProperty(user1, "phone", {
    value: "415-222-9670",
});
console.log(user1);

// autre méthode
// user1.phone = "415-222-9670";
// console.log(user1);