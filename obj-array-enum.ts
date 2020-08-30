// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Enrique",
//   age: 32,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "Programmer"],
// };

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: "Enrique",
  age: 32,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["1", "hello"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

