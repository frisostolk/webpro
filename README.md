<h1>Webpro</h1>
This is a repository for the final project for the course Web Programming by F. Stolk (S3792609), F. Korpel (S2728591), Z. Gnezdilov (S3791743) and B. Bruntink (S3782808).

<h3>Project description</h3>
Our idea was to make a classic memory game made for only two players. Matching games are games that require players to match similar elements. As the name implies, participants need to find a match, in this case a picture. These pictures lie face down in random order. Each player turns over two cards at a time, with the goal of turning over a matching pair, by using their memory. If a player turns over a matching pair, the player receives a point. When all the pairs are found the player with the most points wins the game.

<h4>Game conditions</h4>
The game consists of 12 pairs, so 24 cards. These cards contain 12 different kinds of images, we choose to use animated animals. 

<h4>Rules of the game</h4>
Every game starts with 24 cards that lie face down. The game starts when the first player takes the first turn. A turn is finished when a player turned over two different cards. After the turn is finished the second player gets to play his/her turn. So the game goes on until all the matches are found.

<h4>Usage</h4>
When a user enters our site, they first have to sign in by entering their name. They will generate a game-id which the other player needs to log in. The game accepts 2 players only. The game-id and php-sessions will help us assign a user to the role of player 1 or player 2. While playing the game a timer is set of 10 minutes. When the time is up, the scores are shown on screen. Then the user gets the option to play again. When the user wants to play again. The cards are turn around, shuffled and placed randomly on the game field. 

To play this game the user only needs a working internet connection and an other player to compete with. 

<h4>Data management</h4>
For this project we wanted to make an efficient and clear code. To keep our files organized we use different folders:
<ul>
  <li>Data</li>
    <ul>
      <li>img</li>
      <li>gameid.json (new one for every game)</li>
    </ul>
  <li>Scripts</li>
     <ul>
      <li>add_match.php</li>
      <li>create_game.php</li>
      <li>del.php</li> 
      <li>game.js</li>
      <li>get_grid.php</li>
      <li>getmatch.php</li>
      <li>join_game.php</li>
      <li>remove_old_data.php</li>
      <li>switch_turn.php</li>
      <li>timer.js</li>
      <li>turn.php</li>
      <li>validate_form.js</li>      
    </ul>
  <li>Styles</li>
     <ul>
      <li>styles.css</li>
    </ul>
  <li>Tpl</li>
    <ul>
      <li>body_end.php</li>
      <li>body_start.php</li>
      <li>head.php</li>
    </ul>    
  <li>.gitignore</li>
  <li>game.php</li>
  <li>index.php</li>
  <li>rules.php</li>
</ul>  



