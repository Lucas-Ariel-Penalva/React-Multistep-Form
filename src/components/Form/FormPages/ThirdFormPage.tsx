import { Button, CssBaseline, TextField, Grid, Box, Container, createTheme, ThemeProvider } from "../material_imports";
import { formPageProps } from "../../../types/formTypes";

const theme = createTheme();

const ThirdFormPage = ({ page, changePage }: formPageProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("entregado: Aca va el Swal final");
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="form-disposition">
          <h1>Third page</h1>
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
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <Button onClick={() => changePage(page - 1)} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Go back
                </Button>
              </Grid>
              <Grid item xs={6}sm={6}>
                <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Confirm data
                </Button>
              </Grid>
            </Grid>

          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ThirdFormPage;
