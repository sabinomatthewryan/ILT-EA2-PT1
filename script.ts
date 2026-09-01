enum Role {
    Leader,
    Developer,
    Designer,
    Tester,
    Researcher
}

type GroupMember = {
    name: string;
    age: number;
    role: Role;
    active: boolean;
    print: () => void;
};

const member1: GroupMember = {
    name: "Matthew Sabino",
    age: 20,
    role: Role.Leader,
    active: true,

    print() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Role: ${Role[this.role]}`);
        console.log(`Active: ${this.active}`);
    }
};

member1.print();