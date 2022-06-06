import { Button, CssBaseline, TextField, Grid, Box, Container, createTheme, ThemeProvider } from "../material_imports";
import { formPageProps } from "../../../types/formTypes";
const theme = createTheme();

const FirstFormPage = ({ props }: any) => {

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box className="form-disposition">
          <h1>First page</h1>

          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoFocus
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  value={props.values.firstName}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={props.touched.firstName && props.errors.firstName}
                  error={props.touched.firstName && Boolean(props.errors.firstName)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  value={props.values.lastName}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={props.touched.lastName && props.errors.lastName}
                  error={props.touched.lastName && Boolean(props.errors.lastName)}
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="email"
                  id="email"
                  label="Email Address"
                  type="email"
                  value={props.values.email}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={props.touched.email && props.errors.email}
                  error={props.touched.email && Boolean(props.errors.email)}
                  autoComplete="email"
                  required
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  id="password"
                  label="Password"
                  type="password"
                  value={props.values.password}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={props.touched.password && props.errors.password}
                  error={props.touched.password && Boolean(props.errors.password)}
                  required
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  name="confirm-password"
                  id="confirm-password"
                  label="Confirm Password"
                  type="password"
                  value={props.values.confirmPassowrd}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  helperText={props.touched.confirmPassword && props.errors.confirmPassword}
                  error={props.touched.confirmPassword && Boolean(props.errors.confirmPassword)}
                  required
                  fullWidth
                />
              </Grid>
            </Grid>

            <Button onClick={() => props.setPage(props.page + 1)} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Next
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default FirstFormPage;
