import Carousel from 'react-bootstrap/Carousel';

function ImageCarousel() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.wixstatic.com/media/43e6bc_d9ede3cfb2f54354a6cb2f8b12d65cbb~mv2.png/v1/fill/w_1961,h_774,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design-6.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.wixstatic.com/media/43e6bc_d9ede3cfb2f54354a6cb2f8b12d65cbb~mv2.png/v1/fill/w_1961,h_774,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design-6.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static.wixstatic.com/media/43e6bc_d9ede3cfb2f54354a6cb2f8b12d65cbb~mv2.png/v1/fill/w_1961,h_774,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design-6.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }

  export default ImageCarousel;