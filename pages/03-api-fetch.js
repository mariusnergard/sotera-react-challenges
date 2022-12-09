import React from 'react';
import styles from '../styles/Home.module.css'
import todoStyles from '../styles/Todo.module.css'

export const ApiFetch = () => {

  const [user, setUser] = React.useState(null);


  //  ██████╗██╗  ██╗ █████╗ ██╗     ██╗     ███████╗███╗   ██╗ ██████╗ ███████╗
  // ██╔════╝██║  ██║██╔══██╗██║     ██║     ██╔════╝████╗  ██║██╔════╝ ██╔════╝
  // ██║     ███████║███████║██║     ██║     █████╗  ██╔██╗ ██║██║  ███╗█████╗
  // ██║     ██╔══██║██╔══██║██║     ██║     ██╔══╝  ██║╚██╗██║██║   ██║██╔══╝
  // ╚██████╗██║  ██║██║  ██║███████╗███████╗███████╗██║ ╚████║╚██████╔╝███████╗
  //  ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝╚═╝  ╚═══╝ ╚═════╝ ╚══════╝

  // Create a Next.js API route to fetch a random user from the randomuser.me API
  // https://nextjs.org/docs/api-routes/introduction
  // https://randomuser.me

  // Display the fetched user in the frontend

  // BONUS! At Sotera we use react-query to fetch data from APIs
  // https://react-query.tanstack.com/
  // Try to use react-query to fetch the user instead of using fetch (optional)

  return (
    <>
      <p className={styles.challengeDescription}>
        Complete the challenge in the <code>pages/03-api-fetch.js</code> file.<br/>
      </p>

      <div className={styles.challengeWindow}>
        <div className={styles.resultWindow}>
          <h2>User info</h2>

          {!user && <p>No user fetched...</p>}

          {/* Display some user-data here */}
        </div>

        <div className={styles.verticalDivider} />

        <div className={styles.challenges}>
          <button className={styles.actionButton} style={{width: '100%'}}>
            Fetch user
          </button>

        </div>
      </div>
    </>
  )

};


export default ApiFetch;