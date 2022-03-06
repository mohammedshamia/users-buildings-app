import { Box, Container, CssBaseline } from "@material-ui/core";
import React, { ReactNode } from "react";
import styles from "./style.module.css";

interface IProps {
  children: ReactNode;
}
function Layout(props: IProps) {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="xl" className={styles.container}>
        <Box className={styles.innerContainer}>{props.children}</Box>
      </Container>
    </>
  );
}

export default Layout;
