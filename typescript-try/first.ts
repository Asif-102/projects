let age: number = 50;
let club: string = 'Real Madrid';

const isFamous: boolean = false;
let famous: boolean;
famous = true;

function add(num1: number | string, num2: number | string) {
    // return num1 + num2;
}

add(3, 76);
add('Adam', 'Sand');

age = 150;

function doubleItAndConsole(num:number): void{
    const result = num * 2;
    console.log(result);
}

const output = doubleItAndConsole(10);
console.log('output', output);

function fullName(firstName: string, lastName: string): string {
    return firstName + ' ' + lastName;
}

const user:string = fullName('Martin', 'Rock');


const numbers: number[] = [2,3,4,8,12,91,34];

numbers.push(22);

const friends:string[] = ['George','Jeff','Bill','Abdul'];
let megaName:string='';
for (let i = 0; i < friends.length; i++) {
    const friend: string = friends[i];
    if(friend.length > megaName.length){
        megaName = friend;
    }  
}

console.log('Friend with the largest name', megaName);


console.log(club);


//object
const friend:{name:string,age:number} = {
    name:'Samuel David',
    age:61,
}

friend.age = 57;

interface Player {
    name:string,
    club: string,
    salary:number,
    wife?:string,
    isPlaying:boolean
}

const messi: Player = {
    name:  'Messi',
    club:'Barcelona',
    salary: 45000000,
    wife:'Some name',
    isPlaying:true
}

const ronaldo:Player  ={
    name:'Ronaldo',
    club:'Liverpool',
    salary:51000000,
    isPlaying:true
}


function getBonus (player:{salary:number}){
    return player.salary * 0.1;
}

const poorPlayer = {salary: 10000}

getBonus({salary:4500})
getBonus(poorPlayer)
getBonus(messi)


class Person {
    name:string;
    private _partner:string;
    readonly fatherName:string;
    constructor(name: string, father: string){
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName(){
        return this.name;
    }
}

const sam =new Person('Samuel', 'David');
console.log('name', sam.name, sam.fatherName);
const samName:string = sam.getName();
sam.name = 'Ben';



let player:{
    club:string,
    salary:number
}

player = {
    club:'Real Madrid',
    salary: 454000,
}



let multiply2:(x:number,y:number)=>number;

multiply2 = (x,y) =>x*y;

const multiply = (x:number,y:number): number =>  x*y;

console.log(multiply(25,6));