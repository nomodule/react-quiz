import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Box,
  Card,
  CardContent,
  Button,
  Typography
} from "@material-ui/core";

const Welcome = ({ setQuizState }) => {
  return (
    <Grid container justify='center'>
      <Grid item md={6}>
        <Card>
          <CardContent>
            <Box display='flex' justifyContent='center' flexDirection='column'>
              <Typography
                variant='h1'
                component='h1'
                gutterBottom
                align='center'
              >
                Quiz Time!
              </Typography>
              <Button
                variant='contained'
                color='primary'
                onClick={() => setQuizState("playing")}
              >
                Play Now
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

Welcome.propTypes = {
  setQuizState: PropTypes.func
};

export default Welcome;
