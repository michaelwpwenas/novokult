import { Box } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';

function StatsPage() {
  return (
    <Box justifyContent="center" alignItems="center" >
      <Helmet>
        <title>Charts</title>
      </Helmet>
      <iframe
        src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQuRv0WOY8Z549cftyHPhliIPEwmrNyFy1uuqrXo1N1XeP4gYEKuHFcD7jvw2earj2SBFyisx-_sdH-/pubhtml?widget=true&amp;headers=false"
        width="1863"
        height="640"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
      </iframe>
    </Box>
  );
}

export default StatsPage;
