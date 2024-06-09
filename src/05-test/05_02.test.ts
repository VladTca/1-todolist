import {CityType} from "../02-test/02_02";
import {createMessage, getStreetsTitlesOfGovernmentsBuildings, getStreetsTitlesofHouses} from "./05_02";




let city: CityType;

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [{
            id: 1,
            buildedAT: 2012,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'White street'
                }
            }
        }, {
            id: 2,
            buildedAT: 2008,
            repaired: false,
            address: {
                number: 100,
                street: {
                    title: 'Happy street'
                }
            }
        }, {
            id: 3,
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
                    title: 'Central Str'
                }
            }
        }, {
            type: 'Fire station',
            budget: 500000,
            staffCount: 1000,
            address: {
                street: {
                    title: 'South Str'
                }
            }

        }],
        citizensNumber: 1000000

    }
})

test("List of streets titles of governments buildings", () => {
    let streetsNames = getStreetsTitlesOfGovernmentsBuildings(city.governmentBuildings);
    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe('Central Str');
    expect(streetsNames[1]).toBe('South Str');

})

test("List of streets titles", () => {
    let streets = getStreetsTitlesofHouses(city.houses);
    expect(streets.length).toBe(3);
    expect(streets[0]).toBe('White street');
    expect(streets[1]).toBe('Happy street');
    expect(streets[2]).toBe('Happy street');
})

test("create greeting messages for streets", () => {
    let messages = createMessage(city.houses);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello gays from White street. Welcome to our city. I hope you enjoy your stay there.');
    expect(messages[1]).toBe('Hello gays from Happy street. Welcome to our city. I hope you enjoy your stay there.');
    expect(messages[2]).toBe('Hello gays from Happy street. Welcome to our city. I hope you enjoy your stay there.');
})
