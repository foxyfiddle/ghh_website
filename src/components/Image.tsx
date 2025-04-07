import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import '../styles/styles.css'

function OverlayImage() {
  return (
    <Container className="image-container" fluid>
      {/* Background Image */}
      <Image 
        src="https://static.wixstatic.com/media/43e6bc_d9ede3cfb2f54354a6cb2f8b12d65cbb~mv2.png/v1/fill/w_1961,h_774,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design-6.png"
        className="background-image"
      />
      
      {/* Overlay Text */}
      <div className="text-overlay">
        <h1>GOD'S MESSAGE. CREATIVE METHODS.</h1>
      </div>
    </Container>
  );
}

export default OverlayImage;