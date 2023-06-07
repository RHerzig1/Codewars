// Write a class that can perform different methods on an array of values.

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }
  pageItemCount(pageIndex) {
    const pageCount = this.pageCount();

    if (pageIndex < 0 || pageIndex > pageCount - 1) {
      return -1;
    }

    if (pageIndex < pageCount - 1) {
      return this.itemsPerPage;
    } else {
      return this.itemCount() % this.itemsPerPage || this.itemsPerPage;
    }
  }
  pageIndex(itemIndex) {
    const itemCount = this.itemCount();

    if (itemIndex < 0 || itemIndex >= itemCount) {
      return -1;
    }

    return Math.floor(itemIndex / this.itemsPerPage);
  }
}

const object = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
console.log(object.itemCount(), 10)
console.log(object.pageCount(), 4)
console.log(object.pageItemCount(1), 3)
console.log(object.pageItemCount(3), 1)
console.log(object.pageItemCount(4), -1)
console.log(object.pageItemCount(-1), -1)
console.log(object.pageIndex(1), 0)
console.log(object.pageIndex(9), 3)
console.log(object.pageIndex(10), -1)
console.log(object.pageIndex(-1), -1)


// An array of values and an integer indicating the number of values per page.
// Create a class with the following methods:
// itemCount: Return the total number of items in the array.
// pageCount: Return the total number of pages, using itemCount and itemsPerPage.
// pageItemCount: Return the number of items in the provided page (zero indexed). Or -1 if that page doesn't exist.
// pageIndex: Retrun the page number (zero indexed) of the provided array index.