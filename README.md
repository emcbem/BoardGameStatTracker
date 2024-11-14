# BoardGameStatTracker

## Elevator Pitch
The main idea is a way to keep track of all the times I play board games with my fiance.  
I want to know who wins the most for specific games.  
I want to be able to pick a random game to play based on a criteria that I specify.  
I also want to make it so that you can link other users to an instance of a board game getting played.  
So you can keep other users updated on games you played with them.  

## Creator
- Ethan

## Features
- Board games from api in personal database.
- Keep track of collection of games.
- View statistics of board games you have played.
- Page to get a random game to play.
- Keep track with friends

## New problems i have to face
- Showing off graphs in htmls
- Tying users to an instance of a board game getting played, and doing it while keeping users data secure

### Check-Ins


To complete this project there are some main task that will need to be completed. Here is the list of all parts along with the plan of when to complete them. 

- [X] Kubernetes Deployment
- [X] Linting before deployment
- [X] Testing before deployment
- [ ] User authorization and authentication
- [X] Database design to satisfy requierments 
- [X] Board Games seeded (hopefully from some board game api, web scrapper otherwise)
- [ ] Able to add games into collection 
- [ ] Able to input a "play" of a board game
- [ ] Able to tie other users to a "play" of a boardgame. 
- [ ] Stats for how well you play a game are in the specific game page
- [ ] Only able to tie users to a "play" of a board game if they are friends
- [ ] Toast setup to display errors and certain success messages
- [ ] Webhook to have popups show up when someone sends a friend request
- [ ] Page to choose a random game from your collection.
- [ ] Page to play and instance of a game
- [ ] Page to view collection of games
- [ ] Page to view a specific game
- [ ] Page to view all board games
- [ ] Search games page
- [ ] Add friend page
- [ ] View friends page
- [ ] About us page
- [ ] Home page 

#### Things to keep track of all the time while developing
  - all experiences mobile friendly
  - 3 instances where elements re-order themselves on smaller screens
  - Professional, organized and smooth experience

## Nov 6

#### To-Do Items 
- [X] Kubernetes Deployment
- [X] User authorization and authentication (3/5) [because no way to view user page yet)
- [X] Database design to satisfy requierments

#### Rubric Items Hit

- 0/5: Use of Local Storage
- 0/5: Client-side state stores (e.g., context or React Query)
- 0/5: Toasts / global notifications or alerts
- 0/5: Error handling (both on API requests and render errors)
- 0/5: Network Calls; Read data, Write data, WebSocket
- **5/5: Developer type helping (TypeScript)**
- 0/5: 10+ pages/views via a router
- **3/5: CI/CD pipeline**
- 0/5: Tests run in pipeline, pipeline aborts if they fail
- 0/5: Linting in pipeline
- 0/9: 3+ reusable form input components
- 0/12: 4+ reusable layout components
- **7/10: Authentication and user account support**
- **2/5: Authorized pages and public pages**

## Nov 9

#### To-Do Items 

- [X] Linting before deployment
- [X] Testing before deployment
- [X] Board Games seeded (hopefully from some board game api, web scrapper otherwise)

#### Rubric Items Hit

- 0/5: Use of Local Storage
- 0/5: Client-side state stores (e.g., context or React Query)
- 0/5: Toasts / global notifications or alerts
- 0/5: Error handling (both on API requests and render errors)
- 0/5: Network Calls; Read data, Write data, WebSocket
- 5/5: Developer type helping (TypeScript)
- 0/5: 10+ pages/views via a router
- **5/5: CI/CD pipeline**
- **5/5: Tests run in pipeline, pipeline aborts if they fail**
- **5/5: Linting in pipeline**
- 0/9: 3+ reusable form input components
- 0/12: 4+ reusable layout components
- 7/10: Authentication and user account support
- 2/5: Authorized pages and public pages

## Nov 13

#### To-Do Items 

- [X] Page to view all board games
- [X] Toast setup to display errors and certain success messages
- [X] Home page 

#### Rubric Items Hit

- 0/5: Use of Local Storage
- **3/5: Client-side state stores (e.g., context or React Query)**
- **5/5: Toasts / global notifications or alerts**
- **5/5: Error handling (both on API requests and render errors)**
- **3/5: Network Calls; Read data, Write data, WebSocket**
- 5/5: Developer type helping (TypeScript)
- **2/5: 10+ pages/views via a router**
- 5/5: CI/CD pipeline
- 5/5: Tests run in pipeline, pipeline aborts if they fail
- 5/5: Linting in pipeline
- 0/9: 3+ reusable form input components
- 0/12: 4+ reusable layout components
- 7/10: Authentication and user account support
- 2/5: Authorized pages and public pages

## Nov 16

#### To-Do Items 

- [ ] Page to view collection of games
- [ ] Page to view a specific game
- [ ] Able to add games into collection

#### Rubric Items Hit

- 0/5: Use of Local Storage
- 3/5: Client-side state stores (e.g., context or React Query)
- 5/5: Toasts / global notifications or alerts
- 5/5: Error handling (both on API requests and render errors)
- **5/5: Network Calls; Read data, Write data, WebSocket**
- 5/5: Developer type helping (TypeScript)
- **3/5: 10+ pages/views via a router**
- 5/5: CI/CD pipeline
- 5/5: Tests run in pipeline, pipeline aborts if they fail
- 5/5: Linting in pipeline
- 0/9: 3+ reusable form input components
- **6/12: 4+ reusable layout components** (Board game components)
- **10/10: Authentication and user account support** (User collections
- 2/5: Authorized pages and public pages

## Nov 20

#### To-Do Items 

- [ ] Page to play and instance of a game
- [ ] Add friend page
- [ ] View friends page

#### Rubric Items Hit

- **5/5: Use of Local Storage** (Store current play of game in local storage, if they refresh, i want it to stay.)
- **5/5: Client-side state stores (e.g., context or React Query)**
- 5/5: Toasts / global notifications or alerts
- 5/5: Error handling (both on API requests and render errors)
- 5/5: Network Calls; Read data, Write data, WebSocket
- 5/5: Developer type helping (TypeScript)
- **4/5: 10+ pages/views via a router**
- 5/5: CI/CD pipeline
- 5/5: Tests run in pipeline, pipeline aborts if they fail
- 5/5: Linting in pipeline
- **9/9: 3+ reusable form input components**
- **12/12: 4+ reusable layout components**
- 10/10: Authentication and user account support
- **5/5: Authorized pages and public pages**

## Nov 23

#### To-Do Items 

- [ ] Able to tie other users to a "play" of a boardgame. 
- [ ] Only able to tie users to a "play" of a board game if they are friends

#### Rubric Items Hit

- 5/5: Use of Local Storage
- 5/5: Client-side state stores (e.g., context or React Query)
- 5/5: Toasts / global notifications or alerts
- 5/5: Error handling (both on API requests and render errors)
- 5/5: Network Calls; Read data, Write data, WebSocket
- 5/5: Developer type helping (TypeScript)
- 4/5: 10+ pages/views via a router
- 5/5: CI/CD pipeline
- 5/5: Tests run in pipeline, pipeline aborts if they fail
- 5/5: Linting in pipeline
- 9/9: 3+ reusable form input components
- 12/12: 4+ reusable layout components
- 10/10: Authentication and user account support
- 5/5: Authorized pages and public pages

## Nov 26

#### To-Do Items 

- [ ] Page to choose a random game from your favorites.
- [ ] Stats for how well you play a game are in the specific game page
- [ ] Search games page

#### Rubric Items Hit

- 5/5: Use of Local Storage
- 5/5: Client-side state stores (e.g., context or React Query)
- 5/5: Toasts / global notifications or alerts
- 5/5: Error handling (both on API requests and render errors)
- 5/5: Network Calls; Read data, Write data, WebSocket
- 5/5: Developer type helping (TypeScript)
- **5/5: 10+ pages/views via a router**
- 5/5: CI/CD pipeline
- 5/5: Tests run in pipeline, pipeline aborts if they fail
- 5/5: Linting in pipeline
- 9/9: 3+ reusable form input components
- 12/12: 4+ reusable layout components
- 10/10: Authentication and user account support
- 5/5: Authorized pages and public pages

## Dec 4

#### To-Do Items 

- [ ] Webhook to have popups show up when someone sends a friend request
- [ ] About us page

#### Rubric Items Hit

- 5/5: Use of Local Storage
- 5/5: Client-side state stores (e.g., context or React Query)
- 5/5: Toasts / global notifications or alerts
- 5/5: Error handling (both on API requests and render errors)
- 5/5: Network Calls; Read data, Write data, WebSocket
- 5/5: Developer type helping (TypeScript)
- 5/5: 10+ pages/views via a router
- 5/5: CI/CD pipeline
- 5/5: Tests run in pipeline, pipeline aborts if they fail
- 5/5: Linting in pipeline
- 9/9: 3+ reusable form input components
- 12/12: 4+ reusable layout components
- 10/10: Authentication and user account support
- 5/5: Authorized pages and public pages
