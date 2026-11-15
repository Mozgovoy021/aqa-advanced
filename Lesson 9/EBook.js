import { Book } from './Book.js';

export class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);
    this.fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    if (!value) throw new Error('File format is required');
    this._fileFormat = value;
  }

  printInfo() {
    console.log(`${this.title}, ${this.author}, ${this.year}, ${this.fileFormat}`);
  }

  static fromBook(book, fileFormat) {
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}
