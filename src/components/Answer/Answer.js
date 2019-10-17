import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Card,
  CardContent,
  Radio,
  FormControlLabel
} from "@material-ui/core";

const Answer = ({ text }) => {
  const div = document.createElement("div");
  div.innerHTML = text;
  const textHtml = div.innerHTML;
  return (
    <Grid item md={6}>
      <Card>
        <CardContent>
          <FormControlLabel
            value={text}
            control={<Radio color='primary' />}
            label={textHtml}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

Answer.propTypes = {
  text: PropTypes.string.isRequired
};

export default Answer;
