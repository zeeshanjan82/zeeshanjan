import React, { FC, ReactElement } from 'react';
import { Grid, Stack, Typography } from '@mui/material';

export const Home: FC = (): ReactElement => {
  return (
    <Grid container direction="column" justifyContent="flex-end" sx={{ minHeight: '100vh' }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center" sx={{ minHeight: 'calc(100vh - 68px)' }}>
          <Grid item sx={{ m: { xs: 1, sm: 3 }, mb: 0 }}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              <Grid item xs={12}>
                <Grid container direction={'row'} alignItems="center" justifyContent="center">
                  <Grid item>
                    <Stack alignItems="center" justifyContent="center" spacing={1}>
                      <Typography gutterBottom variant={'h3'}>
                        Will be back!
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
