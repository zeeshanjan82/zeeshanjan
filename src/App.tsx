import React, { Suspense } from 'react';
import { Grid, ThemeProvider, Typography } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import { getPersistor } from '@rematch/persist';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { RouteManager } from './RouteManager';
import { useSelector } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import { SnackbarProvider } from 'notistack';
import LoopIcon from '@mui/icons-material/Loop';

function App() {
  const state = useSelector((state: any) => state.app);

  return (
    <Suspense
      fallback={
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: '100vh' }}>
          <Typography variant="h5">
            <LoopIcon
              sx={{
                marginRight: 1,
                marginTop: 2,
                top: 2,
                position: 'relative',
                animation: 'spin 2s linear infinite',
                '@keyframes spin': {
                  '0%': {
                    transform: 'rotate(360deg)',
                  },
                  '100%': {
                    transform: 'rotate(0deg)',
                  },
                },
              }}
            />
            loading...
          </Typography>
        </Grid>
      }
    >
      <CssBaseline />
      <PersistGate persistor={getPersistor()}>
        <Router>
          <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
            <div className="App">
              <RouteManager />
            </div>
          </SnackbarProvider>
        </Router>
      </PersistGate>
    </Suspense>
  );
}

export default App;
