export class Option {
  name: string;
  subOptions: Option[];

  constructor(name: string, subOptions: Option[] = []) {
    this.name = name;
    this.subOptions = subOptions;
  }
}
