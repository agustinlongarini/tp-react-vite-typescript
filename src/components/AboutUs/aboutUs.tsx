import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const AboutUs = () => {

    return(
        <div className='container mt-2 mb-4'>
            <div className='row'>
                <h1>About Us</h1>
                <p>We are a team of passionate individuals who love to create amazing things. Our mission 
                    is to provide high-quality services and products that exceed out customer's expectations
                </p>
            </div>
            <CardGroup>
            <Card>
                <Card.Img variant="top" 
                style={{maxHeight: "250px"}}
                src="https://previews.123rf.com/images/johnnydevil/johnnydevil1112/johnnydevil111200029/11563403-vista-de-un-paisaje-hermoso-del-oto%C3%B1o-de-formato-cuadrado.jpg" />
                <Card.Body>
                    <Card.Title>Card title 1</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" 
                style={{maxHeight: "250px"}}
                src="https://us.123rf.com/450wm/standrets/standrets1709/standrets170900909/85472163-caminando-en-terreno-rocoso-en-el-bosque-c%C3%A1rpatos-ucrania.jpg?ver=6" />
                <Card.Body>
                    <Card.Title>Card title 2</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top" 
                style={{maxHeight: "250px"}}
                src="https://us.123rf.com/450wm/panaramka/panaramka1609/panaramka160902134/63311820-rocas-dovbush-en-bubnyshche-un-lugar-de-leyenda-el-monasterio-antigua-cueva-en-fant%C3%A1sticas-rocas.jpg?ver=6" />
                <Card.Body>
                    <Card.Title>Card Title 3</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
        </div>
    )

}
export default AboutUs;
