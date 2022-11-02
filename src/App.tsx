import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material/styles";

import Upload from "./components/Upload";

let theme = createTheme({});
theme = responsiveFontSizes(theme);

export default function App() {
  const [files, setFiles] = useState<File[]>([]);
  console.log(files);
  return (
    <ThemeProvider theme={theme}>
      <Grid container justifyContent="center" flexDirection="column" alignItems="center">
        <Grid item xs={10} sm={8} md={6} lg={4}>
          <Grid container flexDirection="column" spacing={2} alignItems="center">
            <Grid item>
              <Typography variant="h4" component="h1" textAlign="center">
                Simply upload your pictures and convert them to PDF file.
              </Typography>
            </Grid>
            <Grid item>
              <Upload setFiles={setFiles} />
            </Grid>
          </Grid>
          <Grid item>
            {files.map((file: File) => {
              return <p key={file.name}>{file.name}</p>;
            })}
          </Grid>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
