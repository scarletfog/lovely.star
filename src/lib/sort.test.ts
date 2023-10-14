import { sortByParams } from './sort';

interface ITestInterface {
  age: number;
  value: number;
  name: string;
}

const inputData: ITestInterface[] = [
  {
    age: 18,
    value: 10,
    name: 'Marek'
  },
  {
    age: 51,
    value: 90,
    name: 'Arek'
  },
  {
    age: 21,
    value: 10,
    name: 'Jarek'
  },
  {
    age: 21,
    value: 5,
    name: 'Arek'
  },
  {
    age: 19,
    value: 10,
    name: 'Mirek'
  },
]

describe('method sortByParams should', () => {

  it('sort elements by one number parameter', () => {
    const expected: ITestInterface[] = [{ "age": 18, "name": "Marek", "value": 10 }, { "age": 19, "name": "Mirek", "value": 10 }, { "age": 21, "name": "Jarek", "value": 10 }, { "age": 21, "name": "Arek", "value": 5 }, { "age": 51, "name": "Arek", "value": 90 }]

    const result = sortByParams(inputData, ['age'])

    expect(result).toEqual(expected)
  })

  it('sort elements by two number parameters', () => {
    const expected: ITestInterface[] = [{ "age": 18, "name": "Marek", "value": 10 }, { "age": 19, "name": "Mirek", "value": 10 }, { "age": 21, "name": "Arek", "value": 5 }, { "age": 21, "name": "Jarek", "value": 10 }, { "age": 51, "name": "Arek", "value": 90 }]

    const result = sortByParams(inputData, ['age', 'value'])

    expect(result).toEqual(expected)
  })

  it('sort elements by string parameter', () => {
    const expected: ITestInterface[] = [{ "age": 21, "name": "Arek", "value": 5 }, { "age": 51, "name": "Arek", "value": 90 }, { "age": 21, "name": "Jarek", "value": 10 }, { "age": 18, "name": "Marek", "value": 10 }, { "age": 19, "name": "Mirek", "value": 10 }]

    const result = sortByParams(inputData, ['name'])

    expect(result).toEqual(expected)
  })

  it('sort elements by number and string parameter', () => {
    const expected: ITestInterface[] = [{ "age": 21, "name": "Arek", "value": 5 }, { "age": 21, "name": "Jarek", "value": 10 }, { "age": 18, "name": "Marek", "value": 10 }, { "age": 19, "name": "Mirek", "value": 10 }, { "age": 51, "name": "Arek", "value": 90 }]

    const result = sortByParams(inputData, ['value', 'name'])

    expect(result).toEqual(expected)
  })
})

