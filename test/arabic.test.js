const Arabic = require('../resources/js/Arabic');

describe('Arabic', () => {
  const testCases = [
    {
      number: 1,
      result: 'I',
    },
    {
      number: 2,
      result: 'II',
    },
    {
      number: 3,
      result: 'III',
    },
    {
      number: 4,
      result: 'IV',
    },
    {
      number: 5,
      result: 'V',
    },
    {
      number: 6,
      result: 'VI',
    },
    {
      number: 7,
      result: 'VII',
    },
    {
      number: 8,
      result: 'VIII',
    },
    {
      number: 9,
      result: 'IX',
    },
    {
      number: 10,
      result: 'X',
    },
    {
      number: 11,
      result: 'XI',
    },
    {
      number: 20,
      result: 'XX',
    },
    {
      number: 58,
      result: 'LVIII',
    },
    {
      number: 100,
      result: 'C',
    },
  ];

  testCases.forEach((value) => {
    test(`When Convert ${value.number}, should return ${value.result}`, () => {
      //Arrange
      const expected = value.result;
      //Act
      const actual = expect(Arabic.ConvertToRoman(value.number));
      //Assert
      actual.toBe(expected);
    });
  });
});
