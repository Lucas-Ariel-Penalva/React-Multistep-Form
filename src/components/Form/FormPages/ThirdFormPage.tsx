import {
  Button,
  CssBaseline,
  Grid,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  FormControlLabel,
  Checkbox,
  FormGroup,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
} from "../material_imports";
import { pageProps } from "../../../types/formTypes";
const theme = createTheme();

const ThirdFormPage = ({ props }: pageProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="form-disposition">
          <Box component="form" onSubmit={props.handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Looking for Full-time or Part-time jobs?</FormLabel>
                  <RadioGroup row name="workHours" value={props.values.workHours} onChange={props.handleChange}>
                    <FormControlLabel value="Full-time" control={<Radio />} label="Full-time" />
                    <FormControlLabel value="Part-time" control={<Radio />} label="Part-time" />
                    <FormControlLabel value="Both" control={<Radio />} label="Both" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Can you work In-Place?</FormLabel>
                  <RadioGroup row name="workModality" value={props.values.workModality} onChange={props.handleChange}>
                    <FormControlLabel value="In-place" control={<Radio />} label="Yes" />
                    <FormControlLabel value="Remote" control={<Radio />} label="No" />
                    <FormControlLabel value="Hybrid" control={<Radio />} label="Hybrid" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Are you interested in relocating?</FormLabel>
                  <RadioGroup row name="relocation" value={props.values.relocation} onChange={props.handleChange}>
                    <FormControlLabel value="Yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="No" control={<Radio />} label="No" />
                    <FormControlLabel value="Depends" control={<Radio />} label="Depends" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox color="success" checked={props.checked} onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.setChecked(event.target.checked)} />}
                    label="I accept the terms and conditions."
                  />
                </FormGroup>
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <Button onClick={() => props.setPage(props.page - 1)} fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
                  Go back
                </Button>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Button color="success" disabled={!props.checked || props.loading ? true : false} type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  {props.loading ? "Loading..." : "Finish"}
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
