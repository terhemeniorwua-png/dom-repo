POST

Write an asynchronous function that sends a new post (with a title, body, and userId) to https://jsonplaceholder.typicode.com/posts using a POST request. The function should include the correct headers to indicate the data is being sent as JSON, parse the server's response, and display the returned message or data on the page. Make sure to handle any errors that may occur during the request.

PUT

Write an asynchronous function that fully updates an existing post (identified by its ID) at https://jsonplaceholder.typicode.com/posts/1 using a PUT request. The function should send an updated title, body, and userId in the request, include the correct headers, and display the server's response on the page. Include error handling for the request.

PATCH

Write an asynchronous function that partially updates an existing post (identified by its ID) at https://jsonplaceholder.typicode.com/posts/1 using a PATCH request, changing only the title field. The function should send just the updated field, include the correct headers, and display the server's response on the page. Include error handling for the request.

DELETE

Write an asynchronous function that deletes an existing post (identified by its ID) at https://jsonplaceholder.typicode.com/posts/1 using a DELETE request. The function should display a confirmation message on the page once the deletion is successful, and include error handling in case the request fails.