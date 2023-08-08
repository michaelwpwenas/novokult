import { Box } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet';

function FormPage() {
  return (
    <Box justifyContent="center" alignItems="center" >
      <Helmet>
        <title>KPI Input</title>
      </Helmet>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSddTRkizFyHQ66MxRZwW_UwdxNh52WQfdcDeZShMZHyNlZDVQ/viewform?embedded=true"
        width="640"
        height="1863"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
      </iframe>
    </Box>
  );
}

export default FormPage;
