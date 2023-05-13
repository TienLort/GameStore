import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { ReactComponent as AppStore } from "src/assets/images/appstorebadge.svg";
import { ReactComponent as Logo } from "src/assets/images/logo1.svg";
import styles from './Footer.module.css';
const Footer = () => {
  // const styles = useStyles();
  return (
    <Box sx={{ backgroundColor: '#000' }}>
      <Container maxWidth="md" >

        <Box className={styles.footer}>
          <Box className={styles.footerTop}>
            <Logo className={styles.logo} />
            <Typography variant='h2'>Game Store</Typography>
          </Box>
          <Box className={styles.sections}>
            <Box className={`${styles.section} ${styles.section1}`}>
              <h3 className={`${styles.h3Cus} ${styles.first}`}>Company</h3>
              <h3 className={styles.h3Cus}>About</h3>
              <h3 className={styles.h3Cus}>Press Center</h3>
              <h3 className={styles.h3Cus}>Careers</h3>
            </Box>
            <Box className={`${styles.section} ${styles.section2}`}>
              <h3 className={`${styles.h3Cus} ${styles.first}`}>Consoles</h3>
              <h3 className={styles.h3Cus}>Playstation 5</h3>
              <h3 className={styles.h3Cus}>Xbox One</h3>
              <h3 className={styles.h3Cus}>Switch</h3>
            </Box>
            <Box className={`${styles.section} ${styles.section3}`}>
              <h3 className={`${styles.h3Cus} ${styles.first}`}>Resources</h3>
              <h3 className={styles.h3Cus}>Help Center</h3>
              <h3 className={styles.h3Cus}>Contact</h3>
            </Box>
            <Box className={`${styles.section} ${styles.section4}`}>
              <h3 className={`${styles.h3Cus} ${styles.first}`}>Product Help</h3>
              <h3 className={styles.h3Cus}>Support</h3>
              <h3 className={styles.h3Cus}>File a Bug</h3>
            </Box>
          </Box>

          <Box className={styles.footerInfo}>
            <Box className={styles.infoLeft}>
              <Typography className={styles.desc}>This page was built by Gianluca Jahn with React.</Typography>
              <Typography className={styles.desc}>Portions of this page are inspired by <span className={styles.spanCus}>RAWG, RAWG.io</span>. This page was built solely for educational purposes.</Typography>
            </Box>
            <Box className={styles.infoRight}>
              <img className={styles.google} src={require("src/assets/images/googleplaybadge.png")} alt="Google Play Badge" />
              <AppStore className={styles.apple} />
            </Box>
          </Box>
          <Box className={styles.footerEnd}>
            <Box className={styles.endLeft}>
              <h4 className={styles.h4Cus}>Privacy</h4>
              <h4 className={styles.h4Cus}>Security</h4>
              <h4 className={styles.h4Cus}>Cookies</h4>
              <h4 className={styles.h4Cus}>Legal</h4>
              <h4 className={styles.h4Cus}>Collaborative Guidelines</h4>
            </Box>

            <Box className={styles.endRight}>
              <img className={styles.social} src={require("src/assets/images/twitter.png")} alt="Twitter Logo" />
              <img className={styles.social} src={require("src/assets/images/instagram.png")} alt="Instagram Logo" />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>

  );
};

export default Footer;
