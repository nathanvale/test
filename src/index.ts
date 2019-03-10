export class C {
  private x = 10
  public getX = () => this.x
  public setX = (newVal: number) => {
    this.x = newVal
    return this
  }
}

export const t = (qwerty: boolean) => {
  return qwerty
}

export const x = new C().getX()
export const setX = new C().setX(20).getX()
export const y = {...{some: 'value'}}
