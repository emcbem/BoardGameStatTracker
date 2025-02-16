# BoardGameStatTracker

## Elevator Pitch
Ever argued over who wins the most at board games?  
BoardGameStatTracker keeps score so you don’t have to!  
Track your plays, analyze stats, and even let chance decide your next game night pick.  
Plus, link up with friends to see who the real champion is!    

## Creator
- Ethan

## Features
✅ Track Your Collection – Store board games from an API in a personal database.  
📊 View Stats – Analyze your win rates and performance over time.  
🎲 Random Game Picker – Let fate decide your next board game!  
👥 Play With Friends – Link users to a game session and track winners.

## New problems I have to face
- Showing off graphs in html
- Tying users to an instance of a board game getting played, and doing it while keeping users data secure
- Making an app for my fiance (the scariest product owner)

## Showcasing the app

<div align="center">
  <video src="https://github.com/user-attachments/assets/244af541-bcda-44e0-91a2-0247c21fb5ab" controls width="600">
    Your browser does not support the video tag.
  </video>
</div>

---
Home Page Developer thoughts
---
- Designing a home page can be rough, The original home page actually ended up staying in the final product as the about us page. As the design of it did not feel good enough to be the page you see every time you come onto the app. The current home page actually was being developed to be the game search page but then got slowly revamped to be the true home page.
- As I was getting some user testing done on this page I realized that I had made a huuuge mistake with my home page. I had a search bar that when enter got hit, wouldn't activate. It seems so obvious in hindsight, but that was a fun little quirk of development.

---

<div align="center">
  <video src="https://github.com/user-attachments/assets/4968f978-8a76-4b2a-a2a7-794999e4aefc" controls width="600">
    Your browser does not support the video tag.
  </video>
</div>

---
Game Page Developer thoughs
---
- Making this page was stressful. Originally when I was making BGST the database did not handle descriptions in games. This is mainly because I got all of my board game data from a kaggle csv. This csv did not have descriptions. So trying to get descriptions became a new pain. Where do I get them? Well I found a tool that may shock some. Content warning advised.

<div align="center">
  <img width="400" src="https://github.com/user-attachments/assets/b9889419-6559-44b4-8443-67690d534c29" />
</div>

- This tool helped me get the descriptions for all of the games I needed. It was a surprisingly useful tool but I struggled heavly to get it to work. However, when it did work, it worked amazing. Shoutouts to Andrea Nand for making such an amazing tool. I can tell a lot of work went into it. 
- I am not fully happy with the final design that I chose with this page. Mainly because it still feels empty even though I added the descriptions. (You should have seen how empty this page felt without those descriptions. It was unbearable.) But, at the time it was my best work.

---

<div align="center">
  <video src="https://github.com/user-attachments/assets/64a7b260-854a-4fef-88b4-1c310e3ba32c" controls width="600">
    Your browser does not support the video tag.
  </video>
</div>

---
Play Game Developer thoughts
---

- This was the hardest page. Mainly cause of how stupid I was. I had one idea and I stuck with it in the worst way. The table here is bound in a column by column basis. Probably my least favorite way I could have ever done it. If I gave it any thought longer than a picosecond I should have realized that doing it in a row based way would be easier and nicer too.
- Displaying to the user all of the information I wanted to in this page hurt. First, showing how you can add more players? I felt a plus marker sufficed, but where? After that, how to remove a playe? Should there be a warning? And the hardest, linking another user to this game. That was rough. I ended up needing a whole modal to explain it to make any users who ever tested the site feel comfortable with linking.
- I feel like my fun building css on a site started here. I felt so much more confident making things from scratch after making this entire app. And I would say it started on this page because of how it pushed me to be better. 








