import React from "react";
// import GitHubCalendar from "react-github-calendar";
import styles from "../Styles/Github.module.css";
import { Text, Divider, Box } from "@chakra-ui/react";
const GitStats = () => {
  return (
    <div className={styles.gitStats}>
      <h2 className={styles.githubContribution}>GITHUB CONTRIBUTION</h2>
      <br />
      <Divider width={"80%"} margin={"auto"} />
      <br />
     
      <div className={styles.commits}>
        <img
          id="github-streak-stats"
          className={styles.commit2}
          src="https://github-readme-streak-stats.herokuapp.com/?user=pannakbhushana&theme=radical&hide_border=false"
          alt=""
        />

        <img
          id="github-stats-card"
          className={styles.commit1}
          src="https://github-readme-stats.vercel.app/api?username=pannakbhushana&theme=radical&hide_border=false&include_all_commits=true&count_private=true"
          alt=""
        />
        <img
          id="github-top-langs"
          className={styles.commit3}
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=pannakbhushana&theme=radical&hide_border=false&include_all_commits=false&count_private=false&layout=compact"
          alt=""
        />
        <div className={styles.gitCalender}>
            <img src="github-contri.png" alt="" className={styles.gitImg} />
          {/* <Box className="react-activity-calendar">
            <GitHubCalendar  className="react-activity-calendar"   username="pannakbhushana" />
          </Box> */}
        </div>
      </div>
    </div>
  );
};

export default GitStats;


