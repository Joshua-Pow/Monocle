import { Card, Container, Grid, List, ListItemText } from '@mui/material';
import InfoCard from './InfoCard'
import React from 'react';
import './Result.css';

export default function Result({ results }) {
  const testList = ['Name', 'Credit Card', 'Payment Method', 'Location', 'Age', 'Address', 'Picture', 'School', 'Website', 'Cookies', 'IP', 'Payment Information', 'Financial Data', 'Log', 'Content', 'Face recognition', 'Contact Info',
  'Processing', 'Verification', 'Marketing', 'Analytics', 'Personalization', 'Recommendations', 'Legal Compliance', 'Advertising', 'Ads', 'Advertisment', 'Third Party Advertisers', 'Cloud Computing', 'Warrant', 'Government',
  'Access', 'Correction', 'Deletion', 'Withdraw Consent'];

  //create a function to see if the word is in the testList array ignoring case and removing punctuation
  const isInList = (word) => {
    let wordNoPunctuation = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let wordNoPunctuationLower = wordNoPunctuation.toLowerCase();
    let testListLower = testList.map(word => word.toLowerCase());
    
    console.log(wordNoPunctuationLower);
    return testListLower.includes(wordNoPunctuationLower);
  }


//create a component to render each word in a string individually
  const highlightKeywords = (string) => {
    let words = string.split(' ');
    //return each word in the words array
    return words.map((word, index) => {
      //if the word is in the testList array, set its background color to yellow
      if (isInList(word)) {
        return <span> <b key={index} style={{backgroundColor: 'yellow'}}>{word}</b></span>
      } else {
        return <span key={index}>{' '+word}</span>
      }
    })
  }



  return (
      <Container sx={{marginBottom: '50px'}}>
        <h1>Monocle Results</h1>

        <h2>Privacy Policy Overview</h2>
        <p>A general overview of key points of the privacy policy.</p>
        <Grid container spacing={2} sx={{margin: '20px'}}>
          <Grid item xs={6}>
            <InfoCard title="Data Collected" itemList={results['Data Collected']}/>
          </Grid>
          <Grid item xs={6}>
            <InfoCard title="How Data is used" itemList={results['Data Used']}/>
          </Grid>
          <Grid item xs={6}>
            <InfoCard title="Data Disclosure" itemList={results['Disclosure']}/>
          </Grid>
          <Grid item xs={6}>
            <InfoCard title="Data Rights" itemList={results['Data Rights']}/>
          </Grid>
        </Grid>

        <h2>Privacy Policy Highlights</h2>
        <p>More detailed snippets of the policy we believe are important.</p>
        <Card sx={{padding: '10px'}}>
          <List className="highlights">
            {results["Highlights"].map((highlight, index) => (
              <ListItemText sx={{backgroundColor: (index%2) ? '#eeeeee' : '#FFFFFF'}} key={index}>{highlightKeywords(highlight)}</ListItemText>
            ))}
          </List>
        </Card>

      </Container>
  )
}
