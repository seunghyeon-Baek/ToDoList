import { Grid, Container, Typography } from "@mui/material";

function Header() {
  return (
    <div className='banWrap'>
      <Container className='py-5 py-md-5' style={{ marginTop: 20 }}>
        <Grid container justifyContent="center">
          <Grid item md={6} className='text-center text-white'>
            <Typography variant="h3" gutterBottom>
              To-DO LIST
            </Typography>
            <Typography variant="body1">
            Intuitive To-do List Design Curated by Baek Seung Hyeon
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>     
  )
}

export default Header;
