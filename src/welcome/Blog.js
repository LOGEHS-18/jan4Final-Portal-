import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from './Header';
import Chatbot from '../Chatbot';
import MainFeaturedPost from './MainFeaturedPost';
// import Main from './Main';
import Main from './Main1';
import Sidebar from './Sidebar';
import Footer from './Footer';
//About content
const sections = [
  { title: 'Home', url: '/Home' },
  { title: 'About', url: '/About' },
  { title: 'Contact us', url: '#' },
  { title: 'Service', url: '#' },
  { title: '', url: '#' },
  { title: '', url: '#' },
  { title: '', url: '#' },
  { title: '', url: '#' },
  { title: '', url: '#' },
  { title: '', url: '#' },
  { title: '', url: '#' },
  { title: '',url: '#'},
  { title: '',url:'#'},
  { title: '',url:'#'},
];
const mainFeaturedPost = {
  title: 'Welcome',
  description:
    "CONTINUE TO SPEAK OUT AGAINST ALL FORMS OF INJUSTICE TO YOURSELVES AND OTHERS AND YOU WILL SET A MIGHTY EXAMPLE FOR YOUR CHILDREN AND FOR FUTURE GENERATIONS-BERNICE-KING",
  image: 'https://police.rajasthan.gov.in/new/assets/SliderImages/s2.jpg',
  imageText: 'main image description',
};

const imagetage=[
  {
    image:'https://www.careeryojana.in/wp-content/uploads/2021/04/Rajasthan-Police-RAJ-Police.png',
  }
];


const sidebar = {
  title: 'About',
  description:
    'The Rajasthan Police is the law enforcement agency for the state of Rajasthan in India. The Rajasthan Police has its headquarters in the Jaipur, the state capital. The motto of the force is "committed to serve". Rajasthan was formed by the merger of the erstwhile princely states so there is great demand of good quality security services because previously no United public administration services existed. The security and the police forces of the former princely states varied in composition, functions and administrative procedures. Following the merger, the police forces of the princely states united as of January, 1951',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'X', icon: XIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Welcome() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="COPCONNECT INSIGHTS" sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <br></br>
          <br></br>
          <Grid container spacing={5} sx={{ mt: 3 }}>
          <Main imageTags={imagetage} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </ThemeProvider>
  );
}
