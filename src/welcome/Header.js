import * as React from 'react';
import PropTypes from 'prop-types';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { useTranslation } from 'react-i18next';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate(); 
  const { sections, title } = props;
  const {i18n } = useTranslation();
  const handleNavigate = () => {
    navigate('/Sign'); // Step 3: Use the navigate function to navigate to a different route
  };
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>
       
        <Typography
          component="h1"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
        <Button onClick={() => changeLanguage('en')}>English</Button>
      <Button onClick={() => changeLanguage('hi')}>Hindi</Button>
      <Button onClick={() => changeLanguage('ta')}>Tamil</Button>
      <Button variant="contained" size="small" onClick={handleNavigate}>
          Sign In
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
      >
        {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {section.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
