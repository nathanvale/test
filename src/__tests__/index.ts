import {setX, x, y} from '../index'

test('x should be...', () => {
  expect(x).toBe(10)
})

test('setX should be...', () => {
  expect(setX).toBe(20)
})

test('y should be...', () => {
  expect(y).toEqual({some: 'value'})
})
