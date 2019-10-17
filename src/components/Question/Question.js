import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    marginBottom: "2rem"
  }
});

const Question = ({ text }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          component='p'
          variant='h5'
          dangerouslySetInnerHTML={{ __html: text }}
        ></Typography>
      </CardContent>
    </Card>
  );
};

Question.propTypes = {
  text: PropTypes.string.isRequired
};

export default Question;
