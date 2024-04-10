export class Option {
  name: string;
  subOptions: Option[];
  typeId: number;

  constructor(name: string, subOptions: Option[] = [], typeId: number) {
    this.name = name;
    this.subOptions = subOptions;
    this.typeId = typeId;
  }
}
