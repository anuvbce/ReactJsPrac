# Title

Interactive Bookstore Application

## Objective

    Buuild a React Js application that allows users to browse and search for books, view book details, add books to a shopping cart, and place an order.

## Tech Stack

    Use ReactJS, React Router, Redux or React Context API, CSS or CSS frameworks, Git, and GitHub for hosting the repository.

## Completion Instructions

### Functionality

Build a React JS application, Implement User Authentication

#### Must Have

    * Build a ReactJS application with multiple pages/  components, including Home, Book Listing, Book Details, Shopping Cart, and Checkout   pages.
    * Implement features such as book search, book filtering, add to cart, remove from cart, and order placement.

## Page: Home

**Page Details:**
Header - links for pages Home, Book List, Cart
Banner - Heading, Description and ""Explore Books" button

Navigation

## Page: Book List

**Page Details:** links for pages Home, Book List, Cart, Book Item(Title, Sub title, Image, Price), Search(Title, author), Filter(by Price),
Navigation:
"Book List" link in header
"Explore Books" button
"Back" button in book list page

## Page: Book Details Info

**Page Details:** Book Detailed Info()Title, Sub title, Image, Description, Price, "Add to Cart" button, "Back" button

Navigation:
Each book in the book list page

## Page: Shopping Cart

**Page Details:** Cart Items(Title, Sub title, Image, Price), "Remove" button, Check out button, Order summary
Navigation:
"Cart" Link in header
"Back" button in checkout page

## Page: Check Out

**Page Details:** "Back" button, Order Form(Personal Details, Summary, "Place order" button)

Navigation:
Checkout in cart

#### Nice to Have

Implementing user authentication, unit tests, and deploying the application on a hosting platform.

### Guidelines to develop a project

    * Create a new public repository on GitHub for the assignment.
    * Commit your code regularly and include clear commit messages.
    * Include a README file explaining the project setup, usage instructions, and any additional information.
    * Ensure the repository is well-organized and easy to navigate.

#### Must Have

Create Github repository.

#### Nice to Have

    List the additional/suggested guidelines to follow while developing the project, mentioned in the Assignment, if any

### Submission Instructions

#### Must Have

    List the Instructions to follow while submitting the project mentioned in the Assignment, if any

#### Nice to Have

    List the suggested instructions to follow while submitting the project mentioned in the Assignment, if any

## Resources

### Design files

Home, Book Listing, Book Details, Shopping Cart, and Checkout pages.
Reference: https://www.crossword.in/

### APIs

Books, Book Details, Search
API Reference: api.itbook.store

### Third-party packages

    react(react-router-dom)
    Icons(react-icons)
    Loader(react-loader-spinner)
    Range(for price)(rc-slider)

## Technical Details

Page | Route | Path |
Home | Home | / |  
Book List | Book List | /books|
Book Details| Book Details| /books/:id|
Cart | Cart | /cart |
Checkout | Checkout | /checkout |
Not Found | Not Found | /not-found|

### Identify Routes & Components

Home

Component | Details |State |API (IT Bookstore)|
Home |Heading, Description, and "ExploreBooks"button | - | - |
Header links for pages Home, Book List, Cart | - | - |

page: Home
Route:Home
components:
Header
Path: /

Book List

Component | Details | State | API (IT Bookstore)
BookList | - | apiStatus, booksData,priceRangeValue /new
Header | links for pages Home, Book List, Cart | - | -
SearchInput | Search (by title, author) | searchInputValue | /search/{query}
PriceRange | Filter (by price) | - | -
BookItem | Book Items (title, subtitle, image, price) | - | -
Loader - -
ErrorMessage - -
page: Book List
Route:Book List
components:
Header(repeat)
SearchInput
PriceRange
BookItem
Loader
ErrorMessage
Path: /books

page: Book Details
Route:Book Details
components:
Header(reapeat)
Loader
ErrorMessage
Path: /books/:id

page: Cart
Route: Cart
components:
Header
CartItem
Path: /cart

page: Checkout
Route: Checkout:
components:
UserDetailsForm
Checkout
Path: /checkout

page: Not Found
Route: Not Found
components
Not Found
Header
Path: /not-found

### State

In Book List Component:
we have to use state as the list is dependent on the status of the API. When the api call gets the success response then the book list will be displayed otherwise error should be displayed means the book display is dependent on the status of the api call. so State is required and is **apiStatus**, **booksData** also should be a state

SearchInput Component
SearchInputValue is the state

SearchInput component and BookList Component
apiStatus
booksData

PriceRange Component
priceRangeValues is the state

Means in BookList renders **BooksData** that filters books based on price using the state **priceRangeValue**

BookDetails Component:
apiStatus
bookDetailsData
Cart Context Component:
cartList
methods:
addToCart()
deleteFormCart()
resetCart()
Checkout Component:
isOrderPlaced

UserDetailsForm:
name
address
email
phone
showValidationErrorMessage
