interface MyInterface extends AnotherInterface {
    name: string;
    age: number;
    email: string;
    address: string;
    phone: string;
}

interface AnotherInterface {
    id: number;
    createdAt: Date;
}
const pers: MyInterface = {
    id: 1,
    createdAt: new Date(),
    name: "Михаил",
    age: 22,
    email: "dubovii.mihail@iis.utm.md",
    address: "Utm",
    phone: "067527760"
};
console.log(pers)