class Student {
  全名: string;
  constructor(public 姓, public 名) {
    this.全名 = 姓 + 名;
  }
}

interface Person {
  姓: string;
  名: string;
}

function greeter(person : Student) {
  return "Hello, " + person.全名;
}

let user = new Student("李", "帅帅");

console.log(greeter(user))