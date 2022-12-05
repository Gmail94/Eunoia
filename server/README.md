# Backend

The server runs on localhost port 8000.

## Endpoints

### BOT Endpoints:

| Endpoints                      | HTTP Method | Description                          |
| ------------------------------ | ----------- | ------------------------------------ |
| `/bot`                         | GET         | Retrieve all messages in the database|
| `/bot/entry   `                | POST        | Adds data from chat in database      |

### ZEN QUOTE Endpoint:

| Endpoints                      | HTTP Method | Description                         |
| ------------------------------ | ----------- | ----------------------------------- |
| `/api/zenquotes`               | GET         | Retrieve quote from API             |


### USERS Endpoints:

| Endpoints                      | HTTP Method | Description                         |
| ------------------------------ | ----------- | ----------------------------------- |
| `/user`                        | POST        | Retrieve one user in the database   |
| `/newUser`                     | POST        | Adds user to database               |
| `/users`                       | PATCH       | Edits user in database              |

### ARTICLES Endpoints:

| Endpoints                      | HTTP Method | Description                          |
| ------------------------------ | ----------- | ------------------------------------ |
| `/articles`                    | GET         | Retrieve all articles in the database|
| `/articles/:id`                | GET         | Retrieves one article by Id          |

### STAT Endpoint:

| Endpoints                      | HTTP Method | Description                         |
| ------------------------------ | ----------- | ----------------------------------- |
| `/stats`                       | GET         | Retrieve stats from database        |

### ENTRIES Endpoints:

| Endpoints                      | HTTP Method | Description                          |
| ------------------------------ | ----------- | ------------------------------------ |
| `/entries`                     | GET         | Retrieve all entries in the database |
| `/trigger`                     | PATCH       | Updates trigger key in entry         |

### CATCH ALL Endpoint:

| Endpoints                      | HTTP Method | Description                          |
| ------------------------------ | ----------- | ------------------------------------ |
| `*`                            | GET         | 404 ERROR catch endpoint             |
