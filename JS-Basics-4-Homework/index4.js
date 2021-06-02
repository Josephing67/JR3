

var phoneBook = {
  Abe: "111-111-1111",
  Bob: "222-222-2222",
  Cam: "333-333-3333",
  Dan: "444-444-4444",
  Ern: "555-555-5555",
  Fry: "111-111-1111",
  Gil: "222-222-2222",
  Hal: "333-333-3333",
  Ike: "444-444-4444",
  Jim: "555-555-5555",
  Kip: "111-111-1111",
  Liv: "222-222-2222",
  Mia: "333-333-3333",
  Nik: "444-444-4444",
  Oli: "555-555-5555",
  Pam: "111-111-1111",
  Qiq: "222-222-2222",
  Rob: "333-333-3333",
  Stu: "444-444-4444",
  Tad: "555-555-5555",
  Uwe: "111-111-1111",
  Val: "222-222-2222",
  Wil: "333-333-3333",
  Xiu: "444-444-4444",
  Yam: "555-555-5555",
  Zed: "111-111-1111"
};

phoneBook.Cam = "Cam";
phoneBook.Hal = "Hal";
phoneBook.Mia = "Mia";
phoneBook.Rob = "Rob";
phoneBook.Wil = "Wil";
console.log(phoneBook.Cam);
console.log(phoneBook.Hal);
console.log(phoneBook.Mia);
console.log(phoneBook.Rob);
console.log(phoneBook.Wil);




/*function phoneBook(val) {
  var result = "";
  let lookup = {
  "Abe": "111-111-1111",
  "Bob": "222-222-2222",
  "Cam": "333-333-3333",
  "Dan": "444-444-4444",
  "Ern": "555-555-5555",
  "Fry": "111-111-1111",
  "Gil": "222-222-2222",
  "Hal": "333-333-3333",
  "Ike": "444-444-4444",
  "Jim": "555-555-5555",
  "Kip": "111-111-1111",
  "Liv": "222-222-2222",
  "Mia": "333-333-3333",
  "Nik": "444-444-4444",
  "Oli": "555-555-5555",
  "Pam": "111-111-1111",
  "Qiq": "222-222-2222",
  "Rob": "333-333-3333",
  "Stu": "444-444-4444",
  "Tad": "555-555-5555",
  "Uwe": "111-111-1111",
  "Val": "222-222-2222",
  "Wil": "333-333-3333",
  "Xiu": "444-444-4444",
  "Yam": "555-555-5555",
  "Zed": "111-111-1111"
}
result = lookup[val];
  return result;
}
console.log(phoneBook("Cam"));
console.log(phoneBook("Hal"));
console.log(phoneBook("Mia"));
console.log(phoneBook("Rob"));
console.log(phoneBook("Wil"));*/

/*var phoneBook = {
  Abe: "111-111-1111",
  Bob: "222-222-2222",
  Cam: "333-333-3333",
  Dan: "444-444-4444",
  Ern: "555-555-5555",
  Fry: "111-111-1111",
  Gil: "222-222-2222",
  Hal: "333-333-3333",
  Ike: "444-444-4444",
  Jim: "555-555-5555",
  Kip: "111-111-1111",
  Liv: "222-222-2222",
  Mia: "333-333-3333",
  Nik: "444-444-4444",
  Oli: "555-555-5555",
  Pam: "111-111-1111",
  Qiq: "222-222-2222",
  Rob: "333-333-3333",
  Stu: "444-444-4444",
  Tad: "555-555-5555",
  Uwe: "111-111-1111",
  Val: "222-222-2222",
  Wil: "333-333-3333",
  Xiu: "444-444-4444",
  Yam: "555-555-5555",
  Zed: "111-111-1111"
};

for (const prop in phoneBook) {
  console.log(`${prop} = ${phoneBook[prop]}`);
}*/


/*var phoneBook = {
  [Abe]: "111-111-1111",
  [Bob]: "222-222-2222",
  [Cam]: "333-333-3333",
  [Dan]: "444-444-4444",
  [Ern]: "555-555-5555",
  [Fry]: "111-111-1111",
  [Gil]: "222-222-2222",
  [Hal]: "333-333-3333",
  [Ike]: "444-444-4444",
  [Jim]: "555-555-5555",
  [Kip]: "111-111-1111",
  [Liv]: "222-222-2222",
  [Mia]: "333-333-3333",
  [Nik]: "444-444-4444",
  [Oli]: "555-555-5555",
  [Pam]: "111-111-1111",
  [Qiq]: "222-222-2222",
  [Rob]: "333-333-3333",
  [Stu]: "444-444-4444",
  [Tad]: "555-555-5555",
  [Uwe]: "111-111-1111",
  [Val]: "222-222-2222",
  [Wil]: "333-333-3333",
  [Xiu]: "444-444-4444",
  [Yam]: "555-555-5555",
  [Zed]: "111-111-1111"
};
console.log(phoneBook.Jim)*/

/*const phoneBooks = [
{
name: 'Abe',
phoneNumber: 111-111-1111
},
{
name:'Bob',
phoneNumber: 222-222-2222
},
{
name:'Cam',
phoneNumber: 333-333-3333
},
{
name:'Dan',
phoneNumber: 444-444-4444
},
{
name:'Ern',
phoneNumber: 555-555-5555
},
{
name:'Fry',
phoneNumber: 111-111-1111
},
{
name:'Gil',
phoneNumber: 222-222-2222
},
{
name:'Hal',
phoneNumber: 333-333-3333
},
{
name:'Ike',
phoneNumber: 444-444-4444
},
{
name:'Jim',
phoneNumber: 555-555-5555
},
{
name:'Kip',
phoneNumber: 111-111-1111
},
{
name:'Liv',
phoneNumber: 222-222-2222
},
{
name:'Mia',
phoneNumber: 333-333-3333
},
{
name:'Nik',
phoneNumber: 444-444-4444
},
{
name:'Oli',
phoneNumber: 555-555-5555
},
{
name:'Pam',
phoneNumber: 111-111-1111
},
{
name:'Qiq',
phoneNumber: 222-222-2222
},
{
name:'Rob',
phoneNumber: 333-333-3333
},
{
name:'Stu',
phoneNumber: 444-444-4444
},
{
name:'Tad',
phoneNumber: 555-555-5555
},
{
name:'Uwe',
phoneNumber: 111-111-1111
},
{
name:'Val',
phoneNumber: 222-222-2222
},
{
name:'Wil',
phoneNumber: 333-333-3333
},
{
name:'Stu',
phoneNumber: 444-444-4444
},
{
name:'Yam',
phoneNumber: 555-555-5555
},
{
name:'Zed',
phoneNumber: 111-111-1111
},
]


for (let phoneBook of phoneBooks)  {
    console.log(phoneBook.name + phoneBook.phoneNumber);
    console.log(phoneBook[1]);

}*/
    
const data = require("./products.json");
for (var i = 0;i < data.length;i++) {
console.log(data[i].kind);
}
console.log(data.kind);






