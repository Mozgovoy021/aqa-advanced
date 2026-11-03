export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        if (!value) throw new Error('Title is required');
        this._title = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (!value) throw new Error('Author is required');
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (value <= 0) throw new Error('Year must be positive');
        this._year = value;
    }

    printInfo() {
        console.log(`${this.title}, ${this.author}, ${this.year}`);
    }

    static findOldest(books) {
        return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
    }
}
