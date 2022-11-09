import React from 'react'
import { Card, CardContent, Grid, Button } from "@mui/material"
import Carousel from 'react-bootstrap/Carousel';
import "./common.css";

export const Home = () => {
  return (
      <div className='main'>
          <marquee behavior="" direction="" style={{ backgroundColor: "goldenrod" }}>
              <h1 >Visit My Shopping WebSite</h1></marquee>
          <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/asd.webp"
          alt="First slide"
          width="400px" height="400px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/asd2.jpg"
          alt="Second slide"
          width="400px" height="400px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="./images/asd3.webp"
                      alt="Third slide"
                      width="400px" height="400px"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
                      src="./images/asd4.jpg"
                      width="400px" height="400px"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
          <Grid container spacing={4}>
              <Grid item xs={3}>
              <Card>
              <CardContent>
                  <img width="400px" height="250px" src="./images/123.jpg" alt=" headphone" />
                  <h3>title</h3>
                  <Button variant="contained" color='success'>Add to cart</Button>{" "}
                  <Button variant="contained" color='secondary'>View detail</Button>
              </CardContent>
          </Card>
              </Grid>
              <Grid item xs={3}>
              <Card>
              <CardContent>
                  <img width="400px" height="250px" src="./images/cosmatic.jpg" alt="" />
                  <h3>title</h3>
                  <Button variant="contained" color='success'>Add to cart</Button>{" "}
                  <Button variant="contained" color='secondary'>View detail</Button>
              </CardContent>
          </Card>
              </Grid>
              <Grid item xs={3}>
              <Card>
              <CardContent>
                  <img width="400px" height="250px" src="./images/cosmatic2.jpg" alt="" />
                  <h3>title</h3>
                  <Button variant="contained" color='success'>Add to cart</Button>{" "}
                  <Button variant="contained" color='secondary'>View detail</Button>
              </CardContent>
          </Card>
              </Grid>
              <Grid item xs={3}>
              <Card>
              <CardContent>
                  <img width="400px" height="250px" src="./images/1122.jpg" alt="" />
                  <h3>title</h3>
                  <Button variant="contained" color='success'>Add to cart</Button>{" "}
                  <Button variant="contained" color='secondary'>View detail</Button>
              </CardContent>
          </Card>
              </Grid>
         </Grid>
    </div>
  )
}

