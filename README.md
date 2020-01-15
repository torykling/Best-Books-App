## Best Books App

![Best Books Home Page](./img/homepage.png)
![Best Books List View](./img/booklist.png)
![Best Books Review](./img/review.png)

## Installation

Fork and clone this repository. Run npm install to install dependencies. Run npm start.

## Use

Click a button from the home page to explore the current fiction bestsellers, nonfiction bestsellers, and a collection of user-generated favorite books. Use any of the search fields to find a book by title, author, or rank. Visit the "Recommended Books" page to add, edit, and delete books from this collection in the bestBooks API.

## Technologies Used

- React
- bestBooks API

## Updates

In the original version of the app, many of the search fields made API calls to specific endpoints. Now these fields search the collection of book data already gathered from the API. It makes for a better user experience and allows the user to enter only snippets of a title to narrow the search results.

I also added a delete button next to each book in the recommended books collection, so the user no longer has to enter a title in an input field in order to delete it.

I moved the update and add book components to a separate page to clean up the recommended books page and make the user's experience more enjoyable.

## Contribute

- Source code: https://github.com/torykling/Best-Books-App
- Issues: https://github.com/torykling/Best-Books-App/issues
- Source code for bestBooks API: https://github.com/torykling/Best-Books

- See deployed version at: https://elastic-lalande-528edc.netlify.com
