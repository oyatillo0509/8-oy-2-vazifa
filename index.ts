// 1-masala

// let ism: string = "Ali";
// let yosh: number = 25;
// let talabami: boolean = true;
// let hobby: string | null = null;

// 2-masala

// function stringgaAylantir(qiymat: number | string): string {
//   if (typeof qiymat === "number") {
//     return qiymat.toString();
//   }
//   return qiymat;
// }

// 3-masala

// interface Kitob {
//   sarlavha: string;
//   muallif: string;
//   nashrYili: number;
//   sahifalarSoni: number;
//   mavjud: boolean;
// }

// 4-masala

// interface Kitob {
//   sarlavha: string;
//   muallif: string;
//   nashrYili: number;
//   sahifalarSoni: number;
//   mavjud: boolean;
// }

// interface ElektronKitob extends Kitob {
//   faylHajmiMB: number;
//   format: string;
// }

// const kitob1: Kitob = {
//   sarlavha: "Sherlock Holmesning Sarguzashtlari",
//   muallif: "Artur Konan Doyl",
//   nashrYili: 1892,
//   sahifalarSoni: 307,
//   mavjud: true,
// };

// const elektronKitob1: ElektronKitob = {
//   sarlavha: "Sherlock Holmesning Elektron Sarguzashtlari",
//   muallif: "Artur Konan Doyl",
//   nashrYili: 1892,
//   sahifalarSoni: 307,
//   mavjud: true,
//   faylHajmiMB: 5,
//   format: "PDF",
// };

// const elektronKitob2: ElektronKitob = {
//   sarlavha: "Uliss",
//   muallif: "Jeyms Joys",
//   nashrYili: 1922,
//   sahifalarSoni: 730,
//   mavjud: true,
//   faylHajmiMB: 10,
//   format: "EPUB",
// };

// 5-masala

// interface Kitob {
//   sarlavha: string;
//   muallif: string;
//   nashrYili: number;
//   sahifalarSoni: number;
//   mavjud: boolean;
// }

// function kitobHaqidaMalumot(kitob: Kitob): string {
//   return `Kitob nomi: ${kitob.sarlavha}\nMuallifi: ${
//     kitob.muallif
//   }\nNashr yili: ${kitob.nashrYili}\nSahifalar soni: ${
//     kitob.sahifalarSoni
//   }\nMavjudligi: ${kitob.mavjud ? "Mavjud" : "Mavjud emas"}`;
// }

// const kitob1: Kitob = {
//   sarlavha: "Sariq devni minib",
//   muallif: "Xudoyberdi To'xtaboyev",
//   nashrYili: 1972,
//   sahifalarSoni: 300,
//   mavjud: true,
// };

// const kitob2: Kitob = {
//   sarlavha: "O'tgan kunlar",
//   muallif: "Abdulla Qodiriy",
//   nashrYili: 1950,
//   sahifalarSoni: 340,
//   mavjud: false,
// };

// console.log(kitobHaqidaMalumot(kitob1));
// console.log(kitobHaqidaMalumot(kitob2));

// 6-7-8-masala

// interface Kitob {
//   sarlavha: string;
//   muallif: string;
//   nashrYili: number;
//   sahifalarSoni: number;
//   mavjud: boolean;
// }

// class Kutubxona {
//   private kitoblar: Kitob[] = [];

//   kitobQoshish(kitob: Kitob): void {
//     this.kitoblar.push(kitob);
//   }

//   kitobniTopish(sarlavha: string): Kitob | undefined {
//     return this.kitoblar.find((kitob) => kitob.sarlavha === sarlavha);
//   }

//   mavjudKitoblarSoni(): number {
//     return this.kitoblar.filter((kitob) => kitob.mavjud).length;
//   }
// }

// const kutubxona = new Kutubxona();

// const kitob1: Kitob = {
//   sarlavha: "Sariq devni mini",
//   muallif: "Xudoyberdi To'xtaboyev",
//   nashrYili: 1892,
//   sahifalarSoni: 300,
//   mavjud: true,
// };

// const kitob2: Kitob = {
//   sarlavha: "O'tgan Kunlar",
//   muallif: "Abdulla Qodiry",
//   nashrYili: 1922,
//   sahifalarSoni: 730,
//   mavjud: false,
// };

// kutubxona.kitobQoshish(kitob1);
// kutubxona.kitobQoshish(kitob2);

// const topilganKitob = kutubxona.kitobniTopish(
//   "Sherlock Holmesning Sarguzashtlari"
// );
// console.log(topilganKitob);

// const mavjudKitoblarSoni = kutubxona.mavjudKitoblarSoni();
// console.log(`Mavjud kitoblar soni: ${mavjudKitoblarSoni}`);

// 9-masala

// interface Foydalanuvchi {
//     ism: string;
//     email: string;
//     login(): void;
//     logout(): void;
// }

// class Talaba implements Foydalanuvchi {
//     ism: string;
//     email: string;
//     private kurs: number;

//     constructor(ism: string, email: string, kurs: number) {
//         this.ism = ism;
//         this.email = email;
//         this.kurs = kurs;
//     }

//     login(): void {
//         console.log(`${this.ism} tizimga kirishdi.`);
//     }

//     logout(): void {
//         console.log(`${this.ism} tizimdan chiqdi.`);
//     }

//     kursniYozish(newKurs: number): void {
//         this.kurs = newKurs;
//         console.log(`${this.ism} yangi kursga otdi: ${this.kurs}`);
//     }

//     Mal_wach(): void {
//         console.log(`Ism: ${this.ism}\nEmail: ${this.email}\nKurs: ${this.kurs}`);
//     }
// }

// const student1 = new Talaba("Ali", "ali@example.com", 2);
// const student2 = new Talaba("Olim", "olim@example.com", 1);

// student1.login();
// student1.Mal_wach();
// student1.kursniYozish(3);
// student1.logout();

// student2.login();
// student2.Mal_wach();
// student2.kursniYozish(2);
// student2.logout();

// 10-masala

// let ism: string = "Ali";
// let yosh: number = 25;
// let talabami: boolean = true;
// let manzil: string = "Toshkent";

// 11-masala

// function shaxsMalumoti(
//   ism: string,
//   yosh: number,
//   talabami: boolean,
//   manzil: string
// ): string {
//   return `Ism: ${ism}\nYosh: ${yosh}\nTalaba: ${
//     talabami ? "Ha" : "Yo'q"
//   }\nManzil: ${manzil}`;
// }

// const ism = "Ali";
// const yosh = 25;
// const talabami = true;
// const manzil = "Toshkent";

// console.log(shaxsMalumoti(ism, yosh, talabami, manzil));

// 12-masala

// let telefonRaqam: string | number;

// 13-masla

// function stringgaAylantir(qiymat: number | string): string {
//     return String(qiymat);
// }

// console.log(stringgaAylantir(123));
// console.log(stringgaAylantir("Hello"));

// 14-masala

// let talaba = {
//     ism: "Ali",
//     yosh: 20,
//     kurs: 2,
//     fanlar: ["Matematika", "Fizika", "Informatika"]
// };

// console.log(talaba);

// 15-masala

// function talabaMalumoti(talaba: {
//   ism: string;
//   yosh: number;
//   kurs: number;
//   fanlar: string[];
// }): string {
//   const fanlarString = talaba.fanlar.join(", ");

//   return `Ism: ${talaba.ism}\nYosh: ${talaba.yosh}\nKurs: ${talaba.kurs}\nFanlar: ${fanlarString}`;
// }

// let talaba = {
//   ism: "Ali",
//   yosh: 20,
//   kurs: 2,
//   fanlar: ["Matematika", "Fizika", "Informatika"],
// };

// console.log(talabaMalumoti(talaba));
 

// 16-masla

// interface Kitob {
//     sarlavha: string;
//     muallif: string;
//     nashrYili: number;
//     sahifalarSoni: number;
// }
 
// 17-masala

// interface Kitob {
//     sarlavha: string;
//     muallif: string;
//     nashrYili: number;
//     sahifalarSoni: number;
// }

// const kitob1: Kitob = {
//     sarlavha: "Jahon Adabiyoti",
//     muallif: "Ali Sher Navoiy",
//     nashrYili: 2022,
//     sahifalarSoni: 350
// };

// const kitob2: Kitob = {
//     sarlavha: "O'zbekiston Tarixi",
//     muallif: "Bahrom Abduganiyev",
//     nashrYili: 2021,
//     sahifalarSoni: 420
// };

// console.log(kitob1);
// console.log(kitob2);
 
