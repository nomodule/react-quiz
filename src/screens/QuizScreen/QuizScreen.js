import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Grid, RadioGroup, Button, Box, Typography } from "@material-ui/core";

import Question from "../../components/Question";
import Answer from "../../components/Answer";
import Timer from "../../components/Timer";

import { shuffleArray } from "../../helpers";

const QuizScreen = ({
  questionText,
  incorrectAnswers,
  correctAnswer,
  questionIndex,
  handleNext
}) => {
  const [potentialAnswer, setPotentialAnswer] = useState("");
  const [shuffledAnswers, setShuffledAnswers] = useState([]);

  useEffect(() => {
    setShuffledAnswers(shuffleArray([...incorrectAnswers, correctAnswer]));
  }, [incorrectAnswers, correctAnswer]);

  const handleChange = e => {
    setPotentialAnswer(e.target.value);
  };

  return (
    <Grid container justify='center'>
      <Grid item md={8}>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='baseline'
        >
          <Typography variant='subtitle1' component='span'>
            Question {questionIndex + 1} of 10
          </Typography>
          <Timer />
        </Box>
        <Question text={questionText} />
        <RadioGroup
          aria-label='gender'
          name='gender1'
          value={potentialAnswer}
          onChange={handleChange}
        >
          <Grid container spacing={2}>
            {shuffledAnswers.map((answer, index) => (
              <Answer key={index} text={answer} />
            ))}
          </Grid>
        </RadioGroup>
        <Box mt={5}>
          <Button
            onClick={() => handleNext(potentialAnswer, correctAnswer)}
            variant='contained'
            color='primary'
            size='large'
            fullWidth
          >
            Next
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

QuizScreen.propTypes = {
  questionText: PropTypes.string.isRequired,
  incorrectAnswers: PropTypes.array.isRequired,
  correctAnswer: PropTypes.string.isRequired,
  setQuestionIndex: PropTypes.func.isRequired,
  questionIndex: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired
};

export default QuizScreen;
