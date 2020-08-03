import React from 'react';
import {
  Timeline,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from '@material-ui/lab';
import WorkIcon from '@material-ui/icons/Work';
import Typography from '@material-ui/core/Typography';


const useStyles = (theme) => ({
  root: {
    backgroundColor: 'white',
    padding: 20
  },
  headlineText: {
    margin: 0
  },
  experienceItem: {
    margin: 0
  },
  timelineStyle: {
    flex: 0.5,
    marginTop: '10px'
  }
})



const TimeLine = (
  {
    theme,
    headlineText,
    experience
  }
) => {
  const styles = useStyles();

  function renderExperience(experienceDetails) {
    return <TimelineItem>

      <TimelineOppositeContent style={styles.timelineStyle}>
        <Typography style={styles.experienceItem}  >
          {experienceDetails.datesFrom.value} | {experienceDetails.datesTo.value}
        </Typography>
      </TimelineOppositeContent>

      <TimelineSeparator>
        <TimelineDot color="primary">
          <WorkIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent>
        <Typography style={styles.experienceItem} variant="h4"  >{experienceDetails.designation.value}</Typography>
        <Typography style={styles.experienceItem} variant="body1">{experienceDetails.company.value}</Typography>
        <br />
        <Typography style={styles.educationItem} variant="body2">{experienceDetails.description.value}</Typography>
      </TimelineContent>

    </TimelineItem>
  }

  return (
    <div style={{
      ...styles.root,
      backgroundColor: theme.value.color,
      color: theme.value.contrast
    }}>
      <h1 style={styles.headlineText} >{headlineText.value}</h1>
      <hr />

      <Timeline >

        {experience.value.map((experienceDetails, id) => {
          return <div key={id}>
            <br />
            {renderExperience(experienceDetails.value)}
          </div>
        })}

      </Timeline>
    </div>
  );
};

export default TimeLine;