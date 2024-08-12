import './home.css';

function Home() {
    return (
        <>
            <div>
                <h1 className='title'>Ginebra</h1>

                <h2 className='title2'>Sobre Nosotros</h2>
            </div>
            <div className='container3'>
                <p>
                    <ul>Hola a todos, mi nombre es Selena y soy la Dueña de GinebraMakeup Estoy muy emocionada de compartir con ustedes nuestro nuevo proyecto, un sitio web innovador dedicado a la belleza y al maquillaje.</ul>

                    <ul>En GinebraMakeup, nuestra misión es proporcionar a nuestros usuarios productos de maquillaje que se adapten a sus gustos y necesidades, es por eso que hemos diseñado nuestra plataforma para ayudar a nuestros clientes a encontrar exactamente lo que necesitan
                    </ul>
                    <ul>Muchas gracias por su atención. Estoy segura de que GinebraMakeup será su lugar favorito para todas sus necesidades de maquillaje y belleza</ul>
                </p>
            </div>
            <div>
            <img src='imagenhome.jpg'/>
            </div>
        </>
    )
}

export default Home;