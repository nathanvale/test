export class C {
  x = 10
  getX = () => this.x
  setX = newVal => {
    this.x = newVal
    return this
  }
}

export const x = new C().getX()
export const setX = new C().setX(20).getX()
export const y = {...{some: 'value'}}
