import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { shadows } from '@material-ui/system'

const useStyles = makeStyles((theme) => ({
      root: {
        boxShadow: 'none',
      },
}));

export default function AccordionStyled() {
  const classes = useStyles();
  return(
      <Accordion className={classes.root}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Report
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>
              Hide
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>
              Block
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography>
              More
            </Typography>
          </AccordionDetails>
      </Accordion>
  )
}
