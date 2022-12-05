# Eunoia

For my final project for my Diploma Full-Stack Web Development at Concordia University, I created a mental health website here I can combine utilize my bachelor in Psychology and combine it with an application. 

The project demonstrates the knowledge that I acquired through this full-stack program. It uses React.js on the frontend, Node.js on the backend and MongoDB as its database. I also implemented some APIs to the project, such as Auth0 for the sign in component, Socket.io for the chatbot. The articles and stats were created as static. 

## Development mode:

### Frontend:
- In the terminal, enter `cd client`, `yarn`, and then `yarn start`.

### Backend:
- `cd server` to enter the backend directory. Install the following dependencies with `yarn add`: mongodb, express, nodemon and morgan. Run the proxy by entering `nodemon` in the terminal.

### Batch import to MongoDB:
- All articles need to be imported to the database. In the server folder, run `node << drag batchImport.js file in here >>`
- Collections in MongoDB `entries`, `users`, `articles`, `stats`

## Production mode:

### Frontend:
- `cd client`
- `yarn build`

### Backend:
- `cd server`
- `nodemon index.js`
