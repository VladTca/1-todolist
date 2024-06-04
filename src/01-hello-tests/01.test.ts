import {mult, splitIntoWords, sum} from "./01";

//data
let a : number;
let b : number;
let c : number;

beforeEach(()=> {
    a = 1;
    b = 2;
    c = 3;
})


test('sum should be correct', () => {


    //action
    const result = sum(a, b);
    const result2 = sum(b, c);
    const result3 = sum(result2, c);
    const result4 = sum(result3, c);

//expectation
    expect(result).toBe(3);
    expect(result2).toBe(5);
    expect(result3).toBe(8);
    expect(result4).toBe(11);
});

test('mult should be correct', () => {


    //action
    const result = mult(a, b);
    const result2 = mult(b, c);
    const result3 = mult(result2, c);
    const result4 = mult(result3, c);

    //expectation
    expect(result).toBe(2);
    expect(result2).toBe(6);
    expect(result3).toBe(18);
    expect(result4).toBe(54);

})

test ('splitting into words should be correct', () => {

    //data
    const sentense = "Hello my friends!";
    const sentense2 = "JS - the best programming language!";
    //action
    const result = splitIntoWords(sentense);
    const result2 = splitIntoWords(sentense2);
    //expectation
    expect(result.length).toBe(3);
    expect(result[0]).toBe('hello');
    expect(result[1]).toBe('my');
    expect(result[2]).toBe('friends');


    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programming');
    expect(result2[4]).toBe('language')

})