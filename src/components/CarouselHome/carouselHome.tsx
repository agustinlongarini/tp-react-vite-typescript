import Carousel from 'react-bootstrap/Carousel';

const CarouselHome = () => {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                className='d-block w-100'
                style={{maxHeight: "600px", objectFit: 'cover'}}
                src="https://wowslider.com/sliders/demo-77/data1/images/idaho239691_1920.jpg" alt=""/>
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className='d-block w-100'
                style={{maxHeight: "600px", objectFit: 'cover'}}
                src="https://wowslider.com/sliders/demo-77/data1/images/field175959_1920.jpg" alt=""/>
                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                className='d-block w-100'
                style={{maxHeight: "600px", objectFit: 'cover'}}
                src="https://wowslider.com/sliders/demo-77/data1/images/tuscany428041.jpg" alt=""/>
                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}
export default CarouselHome;