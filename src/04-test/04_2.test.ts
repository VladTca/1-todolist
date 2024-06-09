import {CityType} from "../02-test/02_02";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./04_2";



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

test("Houses should be destroyed", () => {
    demolishHousesOnTheStreet(city, "Happy street");

    expect(city.houses.length).toBe(1);
    expect(city.houses[0].id).toBe(1);

})

test("building with correct staff count", () => {
    let buildings= getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 500);

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe('Fire station');
})


test.skip('test city should contains 3 houses', () => {
    expect(city.houses.length).toBe(3);
})
