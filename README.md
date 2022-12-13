
# Rancid Tomatillos

## Abstract
- This project is definitely not Rotten Tomatoes. Nor is it Netflix. Nor is it IMDB. It’s R A N C I D T O M A T I L L O S. Very different! In this App, we exercised our React muscles, we started by creating a React app and followed the modular/component file-structure. We integrated third party libraries like React-Player and Swiper. We also used the third party library React-Routing V5 to insure that our urls are consistent with the page being rendered. We used Cypress testing to test our applications UI/UX functionality. We hope you enjoy navigating our application!

## Technologies
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

## Features
- The homepage features a list of cards displaying movie information from an external API.
- When a user clicks a movie card the user is redirected (using ReactRouter) to *that* movie's detailed page. The movie information page contains all of the movies details.
- At any point in the experience a user can navigate back to home using the "Home" button located in the top of the page.
- A user can bookmark any movie info page and share it.

## Screenshots
[Home Page]()
[Single Movie's Detail Page]()
[gif](https://www.loom.com/share/2a13cf33a3e144e8ad17290605257a8a)

## Possible Future Extensions
- Movie trailers to display in the movie details view
- A possible future extension would navigating a homepage where all the movies will be organized by genre. This would have a scrollable feature so that all the movies, via a specific genre, would display in one row.
- Creating a login and allowing users to save and rate movies.
- Make this whole application layout responsive

## Milestones
- stretching our network request muscles to fetch data and displaying this to our dom.
- implementing React-Router to switch between different components
- implementing Cypress E2E testing
- Creating a search bar to filter through our movies database

## Challenges
A challenge that we faced during this project was learning how an intercept and stub works within Cypress testing. Intercepts have many functionalities and different use cases, so when I learned that intercepting isn't necessarily communicating with the actual server for a network request, I had to change my perception of what the actual 'intercept' is intercepting. The exact type of intercept we implemented in our program is not only a "spying" type, but one that stubbed a network response (or faking/mimicking a fake network response). 
With the stubbed network response, using a fixture as the body response, we learned that the act of 'intercepting' here is when the real network request (being made by our actual application) gets substituted with the stub. The stub, in the end, is what really gets rendered to DOM; all within the Cypress test runner, of course. Again, this is just one way of implementing intercept in Cypress and we hope to be able to practice this in different case scenarios.

### Set Up
1. Clone the following repos
   ```sh
   git clone git@github.com:BertoCruz/rancid-tomatillos 
   ```
2. Install  and run NPM packages 
   ```sh
   npm install
   npm start
   ``` 
3. Enter the following url in your browser: http://localhost:3000/
4. Explore the website

5. Running Cypress
  ```
  npm run cypress
  ```

  - The Cypress test runner will open: 
![Welcome to Cypress](https://github.com/BertoCruz/rancid-tomatillos/blob/main/src/images/Screen%20Shot%202022-10-24%20at%204.27.54%20PM.png)![Choose a browser](https://github.com/BertoCruz/rancid-tomatillos/blob/main/src/images/Screen%20Shot%202022-10-24%20at%204.28.39%20PM.png)![Navigate through specs inside the Test Runner](https://github.com/BertoCruz/rancid-tomatillos/blob/main/src/images/Screen%20Shot%202022-10-24%20at%204.29.45%20PM.png)


## Sources
  - [MDN](http://developer.mozilla.org/en-US/)
  - [YouTube](https://www.youtube.com/)
  - [React-Router](https://reactrouter.com/en/main)
  - [Cypress-Docs](https://docs.cypress.io/api/table-of-contents)
  - [React-player](https://www.npmjs.com/package/react-player)
  - [React-Docs](https://reactjs.org/docs/react-api.html)
  - [Swiper](https://swiperjs.com/react)
## DTR/Planning
  - [Wireframe & DOM Tree](https://miro.com/app/board/uXjVP9w7LEU=/?share_link_id=720646176895)
  - [DTR](https://docs.google.com/document/d/1l-cgbyDXRRAsCEIqtg_q1_i-p84oiqwTgP11uF8cR98/edit)
  - [ProjectBoard](https://github.com/users/LaurenBlack5280/projects/1)
  - [DesignInspo](https://docs.google.com/document/d/17tk_nKESW7fUIKtiwEsKQRpcerEgZ-4HB7PdPBCIAv4/edit?usp=sharing)
## Contributors
  - [R. Dani Lopez-Cruz](https://github.com/BertoCruz) 
  - [Dani's LinkedIn Page](https://www.linkedin.com/in/roberto-dani-lopez-cruz-84a03989/)
  - [Lauren Black's Github](https://github.com/LaurenBlack5280)
  - [Lauren Black's LinkedIn](https://www.linkedin.com/in/laurenblack5280/)


## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)




