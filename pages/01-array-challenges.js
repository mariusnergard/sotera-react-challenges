import React from 'react';
import styles from '../styles/Home.module.css'

const footballPlayers = [
  {
    name: "Cristiano Ronaldo",
    birthYear: 1985,
    country: "Portugal",
    club: false,
    league: false,
    leagueGoalsCurrentSeason: 1
  },
  { name: "Lionel Messi", birthYear: 1987, country: "Argentina", club: 'Paris Saint-Germain', league: 'Ligue 1', leagueGoalsCurrentSeason: 7 },
  { name: "Neymar", birthYear: 1992, country: "Brazil", club: 'Paris Saint-Germain', league: 'Ligue 1', leagueGoalsCurrentSeason: 11 },
  { name: "Zlatan Ibrahimovic", birthYear: 1981, country: "Sweden", club: 'AC Milan', league: 'Serie A', leagueGoalsCurrentSeason: 0 },
  { name: "Robert Lewandowski", birthYear: 1988, country: "Poland", club: 'FC Barcelona', league: 'La Liga', leagueGoalsCurrentSeason: 13 },
  { name: "Erling Haaland", birthYear: 2000, country: "Norway", club: 'Manchester City', league: 'Premier League', leagueGoalsCurrentSeason: 18 },
  { name: "Eden Hazard", birthYear: 1991, country: "Belgium", club: 'Real Madrid', league: 'La Liga', leagueGoalsCurrentSeason: 0 },
  { name: "Paul Pogba", birthYear: 1993, country: "France", club: 'Juventus FC', league: 'Serie A', leagueGoalsCurrentSeason: 0 },
  { name: "Kylian Mbappé", birthYear: 1998, country: "France", club: 'Paris Saint-Germain', league: 'Ligue 1', leagueGoalsCurrentSeason: 12 },
  { name: "Mohamed Salah", birthYear: 1992, country: "Egypt", club: 'Liverpool FC', league: 'Premier League', leagueGoalsCurrentSeason: 6 },
  { name: "Sadio Mane", birthYear: 1992, country: "Senegal", club: 'Bayern Munich', league: 'Bundesliga', leagueGoalsCurrentSeason: 6 },
  { name: "Kevin De Bruyne", birthYear: 1991, country: "Belgium", club: 'Manchester City', league: 'Premier League', leagueGoalsCurrentSeason: 3 },
  { name: "Harry Kane", birthYear: 1993, country: "England", club: 'Tottenham Hotspur', league: 'Premier League', leagueGoalsCurrentSeason: 12 },
  { name: "Sergio Aguero", birthYear: 1988, country: "Argentina", club: false, league: false, leagueGoalsCurrentSeason: 0 },
  { name: "David De Gea", birthYear: 1990, country: "Spain", club: 'Manchester United', league: 'Premier League', leagueGoalsCurrentSeason: 0 },
  { name: "Thibaut Courtois", birthYear: 1992, country: "Belgium", club: 'Real Madrid', league: 'La Liga', leagueGoalsCurrentSeason: 0 },
  { name: "Gareth Bale", birthYear: 1989, country: "Wales", club: 'Los Angeles FC', league: 'Major League Soccer', leagueGoalsCurrentSeason: 2 },
  { name: "Antoine Griezmann", birthYear: 1991, country: "France", club: 'Atlético de Madrid', league: 'La Liga', leagueGoalsCurrentSeason: 5 },
  { name: "Romelu Lukaku", birthYear: 1993, country: "Belgium", club: 'Inter Milan', league: 'Serie A', leagueGoalsCurrentSeason: 1 },
  { name: "Luka Modric", birthYear: 1985, country: "Croatia", club: 'Real Madrid', league: 'La Liga', leagueGoalsCurrentSeason: 2 },
];

const leagues = [
  {
    name: "La Liga",
    topScorer: "Robert Lewandowski",
    country: "Spain"
  },
  { name: "Premier League", topScorer: "Erling Haaland", country: "England" },
  { name: "Serie A", topScorer: "Victor Osimhen", country: "Italy" },
  { name: "Bundesliga", topScorer: "Christopher Nkunku", country: "Germany" },
  { name: "Ligue 1", topScorer: "Kylian Mbappé", country: "France" },
  { name: "Major League Soccer", topScorer: "Hany Mukhtar", country: "USA" },
];

export const ArrayChallenges = () => {

  const [result, setResult] = React.useState(footballPlayers);


  //  ██████╗██╗  ██╗ █████╗ ██╗     ██╗     ███████╗███╗   ██╗ ██████╗ ███████╗███████╗
  // ██╔════╝██║  ██║██╔══██╗██║     ██║     ██╔════╝████╗  ██║██╔════╝ ██╔════╝██╔════╝
  // ██║     ███████║███████║██║     ██║     █████╗  ██╔██╗ ██║██║  ███╗█████╗  ███████╗
  // ██║     ██╔══██║██╔══██║██║     ██║     ██╔══╝  ██║╚██╗██║██║   ██║██╔══╝  ╚════██║
  // ╚██████╗██║  ██║██║  ██║███████╗███████╗███████╗██║ ╚████║╚██████╔╝███████╗███████║
  //  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝╚══════╝

  // * You will be given a set of challenges to solve using the arrays above
  // * Create a function for each challenge and bind it to the corresponding button
  // * Update the result state with the result of the function to display it in the result-window


  // 01: Sort the array of football players by their birth year, youngest first


  // 02: How many players are there in the football players array that play in the Premier League?


  // 03: How many goals have been scored in total by all players in the football players array this season?


  // 04: Create a new array of football players that only includes players that are currently top scorers in their league


  // 05: Find the country with the most football players in the football players array


  // 06: Create a new array of the football players that includes the current country they play in


  // 07: Create a new array of football players that includes the current league they play in, and the current top scorer of that league


  // 08: Create an object with the player that currently has the most scored goals

  return (
    <>
      <p className={styles.challengeDescription}>
        Complete the challenges in the <code>pages/01-array-challenges.js</code> file.<br/>

        <br/>
        The result should be displayed in the result-window below when pressing the corresponding button.<br/>
      </p>

      <div className={styles.challengeWindow}>
        <div className={styles.resultWindow}>
          <h2>Result</h2>
          <p>Result will be displayed here</p>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>

        <div className={styles.verticalDivider} />

        <div className={styles.challenges}>
          <div className={styles.challenge}>
            <p>Reset result</p>
            <button className={styles.actionButton} onClick={() => setResult(footballPlayers)}>Reset</button>
          </div>

          <div className={styles.divider} />

          <div className={styles.challenge}>
            <p>01 - Sort the array of football players by their birth year, youngest first</p>
            <button className={styles.actionButton}>RUN</button>
          </div>

          <div className={styles.challenge}>
            <p>02 - How many players are there in the football players array that play in the Premier League?</p>
            <button className={styles.actionButton}>RUN</button>
          </div>

          <div className={styles.challenge}>
            <p>03 - How many goals have been scored in total by all players this season?</p>
            <button className={styles.actionButton}>RUN</button>
          </div>

          <div className={styles.challenge}>
            <p>04 - Create a new array of football players that only includes players that are currently top scorers in their league</p>
            <button className={styles.actionButton}>RUN</button>
          </div>

          <div className={styles.challenge}>
            <p>05 - Find the country with the most football players in the football players array</p>
            <button className={styles.actionButton}>RUN</button>
          </div>

          <div className={styles.challenge}>
            <p>06 - Create a new array of football players that includes the current country they play in</p>
            <button className={styles.actionButton}>RUN</button>
          </div>

          <div className={styles.challenge}>
            <p>07 - Create a new array of football players that includes the current league they play in, and the current top scorer of that league</p>
            <button className={styles.actionButton}>RUN</button>
          </div>

          <div className={styles.challenge}>
            <p>08 - Create an object with the player that currently has the most scored goals</p>
            <button className={styles.actionButton}>RUN</button>
          </div>
        </div>
      </div>
    </>
  )

};


export default ArrayChallenges;