"# Book-Record-Management" 

This is a book record management API Backend for the management of records and books

# Routs and Endpoints

## /users
 POST: Create a new user
 GET: Get all list of users


## /users/{id}
GET: Get a user by id
PUT: Update a user by id
DELETE: Delete a user by id (check if he/she still has an issued book. ) (is there any fine to be paid)


## /users/subcription-details/{id}
 
 GET: Get user subscription details
 1.Date of subcription
 2. Valid till
 3. Fine if any

## /books

GET: Get all books
POST: Create a new book

## /books/{id}

GET:  Get a book by id
PUT: Update a book by id

## /books/issued 
GET: Get all issued books

## /books/issued/withFine
GET: all issuid books with fine 


# Subscription Types
Basic (3 months)
Standard (6th mmonths)
Premmium (12 mmonths)

If the subscription date is 01/01/23
and subscription type is Standard
the valid till date will be 30/06/23

If he/she has an issued book and the issued book is to be returned at 29/06/23
If he/she missed the date of return, then he gets a fine of Rs. 100.

If he/she has an issued book and the issued book is to be returned at 29/06/23.
If he missed the date of return, and his subscription also expires, then he will get a fine of Rs. 200.