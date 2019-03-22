console.log("have i told u lately that i love u")

const doctorFactory = (name, specialty, address) => {
    return {
        name: name,
        speciality: specialty,
        address: address
    }
}

const petFactory = (name, breed) => {
    return {
        name: name,
        breed: breed
    }
}

const bowWowKennels = [];
const pierreDog = petFactory("Pierre", "Husky");
const pepitaDog = petFactory("Pepita", "Chihuahua");
const pearlDog = petFactory("Pearl", "Springer Spaniel");
bowWowKennels.push(pierreDog, pepitaDog, pearlDog)
console.log(bowWowKennels)
