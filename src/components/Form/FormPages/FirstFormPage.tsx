import { Button, CssBaseline, TextField, Grid, Box, Typography, Container, createTheme, ThemeProvider } from "../MUIStyles";
import { formDisposition } from "../MUIStyles";
const theme = createTheme();

const FirstFormPage = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>

      <Container component="main" maxWidth="xs">

        <CssBaseline />

        <Box sx={formDisposition}>
        <h1>First page</h1> 

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
              </Grid>
              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
              </Grid>

              <Grid item xs={12}>
                <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
              </Grid>
            </Grid>


            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Pagina siguiente (edita)
            </Button>

          </Box>
          
        </Box>

      </Container>


    </ThemeProvider>
  );
};

export default FirstFormPage;
