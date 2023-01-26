import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function Blog() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div>
      <div className="p-5">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid xs={8} md={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                    />
                  </div>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={6} md={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                    />
                  </div>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={6} md={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                    />
                  </div>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={6} md={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                    />
                  </div>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={6} md={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                    />
                  </div>
                </CardActions>
              </Card>
            </Grid>
            <Grid xs={6} md={4}>
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  component="img"
                  alt="green iguana"
                  height="140"
                  image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <div>
                    <Checkbox
                      {...label}
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                    />
                    <Checkbox
                      {...label}
                      icon={<BookmarkBorderIcon />}
                      checkedIcon={<BookmarkIcon />}
                    />
                  </div>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Blog;
