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

const Result = ({ setQuizState, processedAnswers }) => {
  const answeredCorrectly = processedAnswers.filter(item => item === true)
    .length;
  return (
    <Grid container justify='center'>
      <Grid item>
        <Card>
          <CardContent>
            <Box display='flex' justifyContent='center' flexDirection='column'>
              <Typography variant='h1' component='h1' gutterBottom>
                {answeredCorrectly} of 10
              </Typography>
              <Button
                variant='contained'
                color='primary'
                onClick={() => setQuizState("welcome")}
              >
                End Game
              </Button>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

Result.propTypes = {
  setQuizState: PropTypes.func.isRequired,
  processedAnswers: PropTypes.array.isRequired
};

export default Result;
