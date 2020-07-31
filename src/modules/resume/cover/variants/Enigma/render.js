import React from 'react';

const useStyles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  firstBox: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '450px',
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  secondBox: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '200px'
  },
  socialBox: {
    width: '100%',
    paddingTop: '10px',
    paddingRight: '20px'
  },
  socialValue: { fontSize: '12px' },
  imageBox: {
    marginTop: '10px',
    height: '150px',
    width: '150px',
    borderRadius: '50%'
  },
  profileImg: {
    height: '150px',
    width: '150px',
    borderRadius: '50%',
    border: '4px solid white'
  },
  personName: {
    display: 'block',
    fontSize: '40px',
    fontWeight: 'bold',
    borderBottom: '1px solid rgb(255,193,7,0.4)',
    textTransform: 'capitalize',
    marginBottom: '4px'
  },
  designation: {
    fontSize: '16px',
    textAlign: 'center',
    textTransform: 'capitalize',
    margin: 0
  },
  line: {
    display: 'block',
    width: '85%',
    height: '1px',
    border: '0',
    borderTop: '1px solid rgb(255,193,7,0.4)',
    margin: '10px auto 0 auto'
  },
  personInfoBox: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '8px auto 0 auto'
  },
  personInfo: { display: 'flex' },
  icons: {
    height: '20px',
    width: '20px',
    marginRight: '10px',
    marginTop: '16px'
  },
  description: {
    width: '70%',
    margin: 'auto',
    textAlign: 'center',
    paddingBottom: '15px'
  }
});

const Enigma = ({
  theme,
  name,
  imageUrl,
  designation,
  emailId,
  phoneNo,
  location,
  linkedIn,
  gitHub,
  description
}) => {
  const styles = useStyles();
  const main = {
    backgroundColor: theme.value.color,
    color: theme.value.contrast,
    display: 'block'
  };
  const locationIcon =
    'https://github.com/fouzanmohd/webproject1/blob/master/place.png?raw=true';
  const emailIcon =
    'https://github.com/fouzanmohd/webproject1/blob/master/email.png?raw=true';
  const phoneIcon =
    'https://github.com/fouzanmohd/webproject1/blob/master/telephone.png?raw=true';

  return (
    <div style={main}>
      <div style={styles.container}>
        <div style={styles.firstBox}>
          <div style={styles.imageBox}>
            <img style={styles.profileImg} src={imageUrl.value} />
          </div>
          <div style={styles.title}>
            <h1 style={styles.personName}>{name.value}</h1>
            <p style={styles.designation}> {designation.value} </p>
          </div>
        </div>
        <div style={styles.secondBox}>
          {linkedIn.value || gitHub.value ? (
            <div style={styles.socialBox}>
              {linkedIn.value && (
                <p style={styles.socialValue}>{linkedIn.value}</p>
              )}
              {gitHub.value && <p style={styles.socialValue}>{gitHub.value}</p>}
            </div>
          ) : null}
        </div>
      </div>
      <div style={styles.line}></div>
      <div style={styles.personInfoBox}>
        <div style={styles.personInfo}>
          <img style={styles.icons} src={emailIcon} />
          <p>{emailId.value}</p>
        </div>
        <div style={styles.personInfo}>
          <img style={styles.icons} src={phoneIcon} />
          <p>{phoneNo.value}</p>
        </div>
        <div style={styles.personInfo}>
          <img style={styles.icons} src={locationIcon} />
          <p>{location.value}</p>
        </div>
      </div>
      <div style={styles.line}></div>
      <div style={styles.description}>
        <p>{description.value}</p>
      </div>
    </div>
  );
};

export default Enigma;
