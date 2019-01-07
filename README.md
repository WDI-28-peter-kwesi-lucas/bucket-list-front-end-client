# Bucket List Front End Client

# How it works

### Once a user signs up and signs in, the user is able to create a bucket list item, along with a description that details what the user wants to do eventually in their lifetime (i.e. visit Hawaii, climb Mt. Kilimanjaro, etc.) The user can also show and list a single or all of their items, and update a particular entry. In addition, the user can even check an item off their bucket list once they accomplish that item in their bucket list and delete any particular item at any time they choose.

# Wireframes

* [Wireframes](https://i.imgur.com/7THkF3o.jpg)


# API Routes and Paths

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| DELETE | `/sign-out`            | `users#signout`   |
| PATCH  | `/change-password`     | `users#changepw`  |
| POST   | `/items`               | `items#create`    |
| GET    | `/items`               | `items#index`     |
| GET    | `/items/:id`           | `items#show`      |
| PATCH  | `/items/:id`           | `items#update`    |
| DELETE | `/items/:id/`          | `items#delete`    |
