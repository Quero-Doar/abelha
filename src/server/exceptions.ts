export class ActionException {
  public name?: string;

  constructor(
    public message: string,
    public status?: number,
    public data?: any
  ) {
    this.name = "ActionException";
  }
}
