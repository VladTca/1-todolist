import {CityType} from "../02-test/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStaff, toHireStaff} from "./03";


let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            buildedAT: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        }, {
            buildedAT: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        }, {
            buildedAT: 2020,
            repaired: false,
            address: {
                number: 101,
                street: {
                    title: 'Happy street'
                }
            }
        }],
        governmentBuildings: [{
            type: 'Hospital',
            budget: 200000,
            staffCount: 200,
            address: {
                street: {
                    title: 'White street'
                }
            }
        }, {
            type: 'Fire station',
            budget: 500000,
            staffCount: 1000,
            address: {
                street: {
                    title: 'White street'
                }
            }

        }],
        citizensNumber: 1000000

    }
})
test('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].buildedAT).toBe(2012);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.street.title).toBe('White street');
    expect(city.houses[0].address.number).toBe(100);

    expect(city.houses[1].buildedAT).toBe(2008);
    expect(city.houses[1].repaired).toBe(false);
    expect(city.houses[1].address.street.title).toBe('Happy street');
    expect(city.houses[1].address.number).toBe(100);

    expect(city.houses[2].buildedAT).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.street.title).toBe('Happy street');
    expect(city.houses[2].address.number).toBe(101);


})
test('Budget should be changed for Hospital', () => {
    addMoneyToBudget(city.governmentBuildings[0], 100000);

    expect(city.governmentBuildings[0].budget).toBe(300000);

})

test('Budget should be changed for Fire station', () => {
    addMoneyToBudget(city.governmentBuildings[1], -100000);

    expect(city.governmentBuildings[1].budget).toBe(400000);
})

test('Houses should be repaired', () => {

    repairHouse(city.houses[1]);
    expect(city.houses[1].repaired).toBeTruthy()  //true
})

test('staff should be decreased', () => {
    toFireStaff(city.governmentBuildings[0], 20);

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be increased', () => {
    toHireStaff(city.governmentBuildings[0], 50);
    toHireStaff(city.governmentBuildings[1], 50);

    expect(city.governmentBuildings[0].staffCount).toBe(250)
    expect(city.governmentBuildings[1].staffCount).toBe(1050)
})


test('Greetings should be correct for city', () => {

 expect(createMessage(city)).toBe('Hello New York citizens. I want you be happy. All 1000000 man.')

})

test('test city should contains hospital and fire station', () => {
    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('Hospital');
    expect(city.governmentBuildings[0].budget).toBe(200000);
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('White street');

    expect(city.governmentBuildings[1].type).toBe('Fire station');
    expect(city.governmentBuildings[1].budget).toBe(500000);
    expect(city.governmentBuildings[1].staffCount).toBe(1000)
    expect(city.governmentBuildings[1].address.street.title).toBe('White street');
})