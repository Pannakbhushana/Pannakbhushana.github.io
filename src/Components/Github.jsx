// export default Github;
import React from "react";
import GitHubCalendar from "react-github-calendar";

import styles from "../Styles/Github.module.css";
import calender from "../Images/calender.png";
import { Text, Divider, Box } from "@chakra-ui/react";
const GitStats = () => {
  return (
    <div className={styles.gitStats}>
      <Text className={styles.github_contribution}>GITHUB CONTRIBUTION</Text>
      <br />
      <Divider width={"80%"} margin={"auto"} />
      <br />
      {/* Calendar */}

      {/* Stats */}
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
        <div className={styles.calender}>
          <Box className="react-activity-calendar">
            <GitHubCalendar  className="react-activity-calendar"   username="pannakbhushana" />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default GitStats;
