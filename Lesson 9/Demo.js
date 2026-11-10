import { Book } from './Book.js';
import { EBook } from './EBook.js';

const book1 = new Book('Kobzar', 'Taras Shevchenko', 1840);
const book2 = new Book('Forest Song', 'Lesya Ukrainka', 1911);
book1.printInfo();
book2.printInfo();

const ebook = new EBook('Eneida', 'Ivan Kotliarevskyi', 1798, 'PDF');
ebook.printInfo();

book2.year = 1912;
console.log(book2.year);

try {
  book1.year = -5;
} catch (error) {
  console.log(error.message);
}

Book.findOldest([book1, book2, ebook]).printInfo();

EBook.fromBook(book1, 'EPUB').printInfo();
