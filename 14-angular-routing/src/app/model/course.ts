export class Course {
  constructor(
    public id: number,
    public name: string,
    public author: string,
    public duration: number,
    public type: string,
    public price: number,
    public ratings: number,
    public image: string,
    public description: string
  ) {
  }
}
