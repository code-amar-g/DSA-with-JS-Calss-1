console.log('jai shree ram');
//DSA - Data Structure and Algorethem
//DSA padhne se pahale hame js aani chahiye - kyuki ham DSA me problem solving skills sikhte hai coding nhi sikhte hai.

// Variables - Var , let , const -- variable ak box hota hai.


//var variable global hota hai esko ham banane se pahale estemal kar sakte hai.lekin let or const ko banane se pahale use nhi kar sakte hai aagar karenge to (Cannot access 'b' before);

// //Example
// a = 12;
// console.log(a);//12
// var a;

// b = 12;
// console.log()//err
// let b;


// //Q1 sum two numbers - 
// let a = 45;
// let b = 45;
// console.log(a+b);//90


// //? what is defrence string or numer - 
// 10 // ye ten hai ok or agar ham ese str me convert kar de!
// "10" //ab ye one or zero  hai ab ye ten nhi hai.
// //bas yahi defrence hota hai number or str me.

//Example - 
// let a = 12;//ye num hai.
// let b = '13';//ye str hai.
// // //dono ko + karenge to num to num hi hai lekin 13 koe number nhi hai vo bas dikh rha hai number jaisa .
// // console.log(a+b);//1213 // 13 12 me chipak jayga. sum nhi kyuki vo number nhi hai.
// console.log(typeof(a));//number 
// console.log(typeof(b));//string
// //jab bhi ham str or number ko sum karte hai to vo sum nhi hote hai concate hote hai.

// //Example 2 - 
// console.log('sum of 12 and 13' + a + b);//sum of 12 and 131213
// //ab yaha par to ham aswere kuchh or soch rhe the lekin yahi chij hamne upar abhi padi hai ki jab ham number se str ko jodte hai to vo concate hote hai.
// //to 'sum of 12 and 13' str hai or (a) ak number hai or en dono ke beech me + operator hai to pahale ye dono concate honge uske bad - rsult kuchh -- sum of 12 and 1312 aisa hoga fir enke beech me bhi +  operator hai to vo bhi ense concate ho jayga or result finaly - sum of 12 and 131213 ye aayga.


//ab agar hame concate nhi karna hai a or b ko sum karna hai to !

// let a = 12;
// let b = 13;
// console.log('sum of 12 and 13' + (a+b));//sum of 12 and 1325//type str hoga.
// console.log(a + b + ' sum of 12 and 13');//25 sum of 12 and 13//eska bhi type str hoga.
// console.log('1'-1);//0 -- yaha par ham jab en dono ko subtract karenge to js khud '1' ko number me convert kar degi kyuki str se ham number ko (-) nhi kar sakte hai.
// //Ye jo kam js khud kar rha hai es procces ko ham type conversion kahate hai.
// //aise hi ham * , / sab kar sakte hai. sirf sum ke time par dono val concate hoti hai baki operators ke sath sab sahi kam karta hai.
// //Matlab - sum(+) sum bhi kar sakta hai or concatination bhi kar sakta hai.




//Prompt in js ---
//Prompt ak fun hota hai jo user se value leneke kam aata hai.esme massege ham '' ke andar likhte hai.Or prompt hamesa string return karta hai.

// let age = prompt('What is your age');//18
// console.log(age);//18
// console.log(typeof(age));//string
//ab es string ko number me convert karne ke liye 3 method hote hai number() / Number() / parseIntJ()

// console.log(Number(age));//ye val ko tabi convet karega jab value number me convert ho sakti ho nhito NaN dega.
// console.log(parseInt(age));//ye bhi sem kam karega or last valal bhi sem kam karega.




// //Swap 
// //1.Sawap ka matlab hota hai values ko apase me badalna - 
// let a = 10;
// let b = 20;
// console.log('before ',a,b);
// let c;
// c = a;
// a = b;
// b = c;
// console.log('after ',a,b);




// //2.swap val with mathamatics.
// let a = 10;
// let b = 20;
// console.log(a,b);
// //1st step dono ko sum karke a me dal do. a = 30 ok.
// //2nd step ab ye dekho ko b me kya lana hai 10 to a - b kar do or hame or hame b = 10 mil jayga. 
// //3rd step b me ab 10 aa chuka hai or a me abhi bhi 30 hi hai to agar ham a - b kar de to 30 - 10 = 20 ho jayga.
// a = a+b;//30
// b = a-b;//30-20 = 10
// a = a-b//20
// //bas ho gae value swap
// console.log(a,b);




// //3 swap 2 values in array;
// let a = 10;
// let b = 20;

// // [a,b] = [b,a];
// // console.log(a,b);




// let a = 13;
// let b = 2;
// console.log(Math.floor(a/b));//6
// console.log(Math.floor(a%b));//1
// //math.floor . ke bad ki values ko hata deta hai.
//jab bhi hame kisi bade number ki last value ko nikalna hota hai to ham use 10 se mod (%) kar dete hai.
// console.log(415234354532%10)//last me 2 hai matlab answere 2 aayga.Or agar yahi par hame last vale ko chhodkar uske pahle ki sakhya ko lana hai to ham use 10 se devide / kar denge or math.floor laga denge. ya to vo value puri kat ke 0 aajaygi or nhi aaygi to math .foor use hata dega. symple



//comperision operators < > <= >= == === !==etc...
//enka use karke ham 2 values me comparision karte hai or enka result hamesa true / false me aata hai.

// let a = '23';
// let b = 23;
// console.log(a>b)//false
// console.log(a<b)//false
// console.log(a>=b);//true
// console.log(a<=b)//ture
// console.log(a==b)//true
// console.log(a===b)//false
// console.log(a!==b)//true


//logicale operaotors -- and&& , or||
//and tab true dega jab sari statements sahi hongi.
//or tab false dega jab sari statements galat hongi.
//Jaise --- 
//Q1 . agar ram 10th , 12th, or 18+  hai tabhi vo dubie ja sakta hai. //yaha par sari condition ture honi chaiye to yaha par use hoga and operator .

// //Example ---
// let Name = 'Ram';
// let highSchool = 10;
// let Intermedeat = 12;
// let age = 18;

// if(highSchool == 10 && Intermedeat == 12 && age >= 18){
//     console.log(Name ,'Aap Dubie ja sakte ho.');
// }
// else {
//     console.log(Name ,'Aap Dubie nhi ja sakte ho.');
// }
// //Aap Dubie ja sakte ho.
// //ab agar esme se ak bhi condition glat hue to aap dubie nhi ja paoge.

// //Or me eska uslta hota hai agar ham kisi bhi 1 chij me sahi hai to kam ho jayga. bas 
// console.log(10>5 || 10<5);//true




// //unary operator = ++(increment) , --(decrement)
// //incremnet and decrement me 2 prakar hote hai post and pre --
//unary operators ko ham ksibhi variable par to alga sakte hai lekin kisi constent par nhi laga sakte hai constent yani number par nhi laga sakte hai direct 10++ ye nhi kar sakte hai error aaygi.


// //++ post and pre --- post metlab jab ham ++ bad me hai yani value ko use karne ke bad usme increment hoga. or agar ham ++ pahale lagte hai to vo pre increment hoga yani pahale value me increment karenge fir uska use karenge.
// let a = 10;
// console.log(a++);//10 //10 +1panding
// console.log(a++);//11 //10 + 1 = 11 and +1panding
// console.log(++a);//13 //11+1=12+1 = 13 
// //bad me increment lagane par pahale value use ho rhi hai uske bad nex line me jakar usme 1 add ho rha hai lekin pahle ++ lage par pahale usme 1 add ho rha hai uske bad value print ho rhi hai.

// //sem aise hi -- bhi kam karega. 
// let i = 11;
// i = i++ + ++i;
// console.log(i);//24
// //Pahle 11 hai fir i++ huaa to bhi 11 hi hai lekin +1 panding hai ab jaise hi esko dusra i milega turant usme +1 ho jayga to + ke bad jaise hi i mila usme 11+1 = 12 ho gya Ab es i par pre increment laga hai to jaise hi ye 12 huaa vaise hi pre increment ne esme +1 or kar diya yani 12+1 = 13 to yaha par kull milakar calculation ho rha hai 11+13 = 24;


// let a = 11;
// let b = 22;
// let c = a + b + a++ + b++ + ++a + ++b;
// console.log('a = ', a);//13
// console.log('b = ', b);//24
// console.log('c = ', c);//103


// let b = true;//ture ka matlab hota hai 1 - lekin ye sirf js me hi kam karega dusre language me bulion value par unary operators nhi chalte hai.
// b++;
// console.log(b++);//2 --- yaha par 2 esliye aa rha hai kyuki b++ pahale huaa hai or fir jaise hi b dusri bar mila hai usme 1 add ho gya hai.

// let a = 10;
// let b = ++(a++);
// console.log(b);//error --- error esliyeaa rhi hai kyuki () laga or sabse pahale () solve hoga matlab jaise hi () solve hoga vaise hi a++ ki jagaha par 10 chala aayga or ham constent par ++ nhi laga sakte hai.




//Math Functions ---------------------
console.log(Math.round(10.5));//11
console.log(Math.round(10.4));//10
//Round method . ke bad ki value ko hata rond karta hai lekin esme ak chatch hai agar value .5 se badi hai to ye value ko upar yani 10 hai to 11 kar dega or agar value .5 se kam hai to ye value ko niche yani 10 kar dega . ke bad ki value ko hata dega. 9 nhi karega bas . ke bad ki value ko hatayga or .5 se jda huaa to 11 kar dega.


console.log(Math.ceil(10.1));//11
//ye method value ko hamesa upar lekar jata hai agar 10.1 bhi hai to bhi ye value ko 11 kar dega.


console.log(Math.floor(10.9));//10
//ye ceil ka ulta hota hai ye . ke bad jitni bhi value hogi use hata dega.


console.log(Math.trunc(10.123452345));//10 
//ye bhi floor jaise hi kam karta hai lekin floor . ke bad ki values ko niche lekar aata hai lekin trunc . ke bad ki values ko hata dega hai matlab ye niche upar nhi karta hai ye hata dega hai.


console.log(Math.pow(2,5));//32
//ye mehtod power set karta hai -- yahar par 2ki power 5 hai matlab 2 ko 5 bar multiply kiya jayga 


console.log(Math.sqrt(16));//4 
//ye method kisi bhi sankhya ka squyareroot nikal deta hai --- mtalab 4 ka pahada 4 bar padenge to 16 aayga yani 16 ka sqrt hai 4. aise hi 10 ka padaha 10 bar padenge to aayga 100 yani 100 sqrt hai 10.



console.log(Math.cbrt(729));//9
//ye mehtod ghan mool nikalta hai yani ghan mool jo nikala hai usko agar ham utni hi baar multiply karege to jis value ka ham cbrt nikal rhe hai vo nikal jayga. 
//jaise --- 27 ka ghan mool hoga 3 kaise ? -- 3x3x3 = 27


console.log(Math.abs(-12));//12 
//ye mehtod kisi bhi value ko absolute yani psitive me convert kar deta hai. -value dente to positive karega or positive value dente to bhi use positive me hi rhahane dega.

console.log(Math.max(34,56,234,34,5534,5,4,2234));//5534
//ye sabhi number me se jo sabse max ayni bada number hoga use dega.

console.log(Math.min(123,4235,3434,23,23,345,55,34));//23
//ye sabse chhota number dega.


console.log(Math.random());
//ye 0 or 1 ke beech me randome value generate karta hai jitni bar page refrace hoga utni bar hame randome numbers milenge. agar hame esme apne hisab se value chahiye to ham us value se ese multyply kar dete hia. 
//jaise -- randome*10 = ab ye hame 0.99999 and 9.99999 tak value dega agar hame 1 se 10 ke beech me chaiye to hame last me +1 kar denge jaise - random*10+1 = ab 1 to 10 ke beech me jumber hame milenge.lekin .me bhi value milegi use hatane ke liye ham math.floor ka use kar lenge.
console.log(Math.floor(Math.random()*10+1));//1 to 10 randome value.
//otp bhi genrate karte hai ----
console.log(Math.trunc(Math.random()*9000 + 1000));
// hamne +1000 esliye kiya hai taki 4 degits se niche number na aay or agar 9000 aaya usme 1000 +hoga to 10000 ho jayga.


let a = 80.21412323;
console.log(Number(a.toFixed(3)));//80.214
//Es method se ham ye set kar sakte hai ki . ke bad kitni value aani chahiye 1,2,3,4etc.... hamari marji.
//lekin ye value ko string me convert kar deta hai.





































