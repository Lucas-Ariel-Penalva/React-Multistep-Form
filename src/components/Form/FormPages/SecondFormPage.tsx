import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Autocomplete,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
} from "../material_imports";
import { countries } from "../../../utils/countries";
import { experience, expertise } from "../../../utils/expertise&experience";
import { pageProps } from "../../../types/formTypes";
const theme = createTheme();

const SecondFormPage = ({ props }: pageProps) => {
  const handleNextPage = () => props.setPage(props.page + 1);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box className="form-disposition">
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl>
                  <FormLabel>Select your gender</FormLabel>
                  <RadioGroup row name="gender" value={props.values.gender} onChange={props.handleChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  id="country"
                  value={props.values.country}
                  onChange={(e, value) => {
                    props.setFieldValue("country", value);
                  }}
                  isOptionEqualToValue={(option, value) => option.label === value.label}
                  onBlur={props.handleBlur}
                  options={countries}
                  autoHighlight
                  getOptionLabel={(option) => option.label}
                  renderOption={(prop, option) => (
                    <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...prop}>
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      {option.label} ({option.code})
                    </Box>
                  )}
                  renderInput={(params) => <TextField {...params} label="Select your country *" inputProps={{ ...params.inputProps }} />}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id="expertise"
                  value={props.values.expertise}
                  onChange={(e, value) => {
                    props.setFieldValue("expertise", value);
                  }}
                  options={expertise}
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Area of expertise *" />}
                />
              </Grid>

              <Grid item xs={12}>
                <Autocomplete
                  disablePortal
                  id="experience"
                  value={props.values.experience}
                  onChange={(e, value) => {
                    props.setFieldValue("experience", value);
                  }}
                  options={experience}
                  fullWidth
                  renderInput={(params) => <TextField {...params} label="Experience *" />}
                />
              </Grid>
            </Grid>

            <Grid container spacing={2}>
              <Grid item xs={6} sm={6}>
                <Button onClick={() => props.setPage(props.page - 1)} fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
                  Back
                </Button>
              </Grid>
              <Grid item xs={6} sm={6}>
                <Button
                  disabled={props.errors.expertise || props.errors.experience || props.errors.country || props.errors.gender ? true : false}
                  onClick={handleNextPage}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SecondFormPage;
