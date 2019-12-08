import { Moment } from 'moment';
import { IUser } from 'app/core/user/user.model';

export interface IDocument {
  id?: number;
  name?: string;
  creation?: Moment;
  creator?: IUser;
}

export class Document implements IDocument {
  constructor(public id?: number, public name?: string, public creation?: Moment, public creator?: IUser) {}
}
