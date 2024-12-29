import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Componentes/Navbar/Navbar';
import { useCart } from '../context/CartContext'; // Importar el hook del contexto de carrito
import './BookPage.css';  // Puedes aplicar los estilos aquí
import Swal from 'sweetalert2';

const BookPage = () => {
    const { id } = useParams();  // Obtener el ID del libro desde la URL
    const { addToCart } = useCart();  // Usar el hook para acceder a la función addToCart del contexto
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Simulando datos estáticos para el libro
    const bookData = [
        {
            id: '1',
            title: 'Cien años de soledad',
            author: 'Gabriel García Márquez',
            description: 'Es una de las obras más destacadas del realismo mágico, un género literario que mezcla elementos de la realidad con lo fantástico. La historia sigue la familia Buendía a lo largo de varias generaciones en el ficticio pueblo de Macondo, explorando temas como el amor, la soledad, el destino y la historia de Colombia. La novela es conocida por su complejidad, su estilo único y su profunda reflexión sobre el tiempo y la existencia humana. "Cien años de soledad" ha sido traducida a múltiples idiomas y se considera una de las más grandes novelas de la literatura mundial.',
            price: 18.99,
            image: '/assets/img/CienAños.jpg'
        },
        {
            id: '2',
            title: 'Don Quijote de la Mancha',
            author: 'Miguel de Cervantes',
            description: 'Es considerada una de las obras más importantes de la literatura occidental y una de las primeras novelas modernas. La historia sigue las aventuras de un caballero llamado Don Quijote, quien, influenciado por los libros de caballerías, decide convertirse en un caballero andante y salir en busca de hazañas, acompañado de su fiel escudero, Sancho Panza. A lo largo de la obra, Don Quijote lucha contra lo que percibe como injusticias, aunque a menudo su visión de la realidad se mezcla con la fantasía, lo que genera situaciones cómicas y trágicas. La novela aborda temas como el idealismo frente al realismo, la locura y la cordura, y la crítica social, y ha tenido una influencia perdurable en la literatura y la cultura mundial.',
            price: 21.99,
            image: '/assets/img/DonQuijo.jpg'
        },
        {
            id: '3',
            title: 'El amor en los tiempos del cólera',
            author: 'Gabriel García Márquez',
            description: 'La historia gira en torno al amor de Florentino Ariza y Fermina Daza, quienes, a pesar de las adversidades del tiempo y las circunstancias, mantienen su amor a lo largo de varias décadas. A lo largo de la novela, García Márquez explora temas como el amor romántico, la fidelidad, el paso del tiempo y las diferencias sociales. La trama alterna entre el pasado y el presente, mostrando cómo el amor de los protagonistas persiste a lo largo de los años, incluso después de que Fermina se case con otro hombre, el doctor Juvenal Urbino. Con una rica prosa, la novela también refleja la realidad social y política de América Latina, especialmente en el contexto del Caribe colombiano. El amor en los tiempos del cólera es una reflexión sobre las diferentes formas de amor y cómo este puede ser tanto una fuente de alegría como de sufrimiento.',
            price: 9.99,
            image: '/assets/img/ElAmorTiem.jpg'
        },
        {
            id: '4',
            title: '1984',
            author: 'George Orwell',
            description: 'Ambientada en un futuro totalitario, la historia se desarrolla en Oceanía, uno de los tres superestados del mundo, donde la sociedad está controlada por un régimen totalitario liderado por el Partido y su figura omnipresente, el Gran Hermano. El protagonista, Winston Smith, es un trabajador del Partido que empieza a cuestionar la realidad impuesta por el gobierno, que manipula la información, controla la historia y suprime la libertad individual. A lo largo de la novela, Winston lucha por encontrar la verdad y la libertad en un mundo donde la vigilancia constante y la represión son la norma. 1984 es una profunda crítica al totalitarismo, la censura, la manipulación de la información y la pérdida de la autonomía individual. La novela ha tenido un impacto duradero en la cultura popular y se considera una advertencia sobre los peligros de los regímenes autoritarios.',
            price: 26.99,
            image: '/assets/img/1984.jpg'
        },
        {
            id: '5',
            title: 'Matar a un ruiseñor',
            author: 'Harper Lee',
            description: 'La historia está ambientada en la década de 1930 en el sur de Estados Unidos y es narrada por Scout Finch, una niña que vive en la ciudad ficticia de Maycomb, Alabama. A través de los ojos de Scout, la novela aborda temas como el racismo, la injusticia y la moralidad en un contexto de segregación racial.\n' +
                '\n' +
                'El padre de Scout, Atticus Finch, es un abogado que defiende a Tom Robinson, un hombre negro acusado injustamente de violar a una mujer blanca, Mayella Ewell. A lo largo del juicio y las tensiones sociales que surgen a raíz de este caso, Scout y su hermano Jem aprenden valiosas lecciones sobre el prejuicio, la compasión y la lucha por lo que es justo.',
            price: 42.9,
            image: '/assets/img/MatarUnRui.jpg'
        },
        {
            id: '6',
            title: 'Orgullo y prejuicio',
            author: 'Jane Austen',
            description: 'Ambientada en la Inglaterra del siglo XIX, la obra se centra en la vida de Elizabeth Bennet, una joven inteligente, independiente y con una fuerte personalidad, que vive con su familia en una zona rural. La historia gira en torno a su relación con el orgulloso y aparentemente arrogante señor Darcy, un rico terrateniente que inicialmente desprecia a la familia Bennet debido a su estatus social inferior.\n' +
                '\n' +
                'A lo largo de la novela, Elizabeth y Darcy deben superar sus propios prejuicios y malentendidos para finalmente descubrir sus sentimientos mutuos. Orgullo y prejuicio explora temas como las clases sociales, el matrimonio, el orgullo, la vanidad, y la importancia de la moral y la virtud en las relaciones. A través de sus personajes complejos y sus diálogos ingeniosos, Austen critica las convenciones sociales de su tiempo y presenta una reflexión sobre cómo los prejuicios personales pueden nublar el juicio y las relaciones humanas.',
            price: 8.99,
            image: '/assets/img/OrguPrejui.jpg'
        },
        {
            id: '7',
            title: 'Crimen y castigo',
            author: 'Fiódor Dostoyevski',
            description: 'La historia sigue a Rodión Raskólnikov, un joven estudiante de derecho que vive en la pobreza en San Petersburgo, Rusia. En su angustia por su situación económica y su sentimiento de desesperación, Raskólnikov comete el asesinato de una usurera, Alyona Ivánovna, convencido de que su muerte será justificada porque él se considera una persona "superior" que tiene el derecho de eliminar a los seres inferiores para lograr un bien mayor.\n' +
                '\n' +
                'A lo largo de la novela, Raskólnikov lucha con los remordimientos y la culpa, lo que lo lleva a una espiral de locura y sufrimiento. La historia explora su interacción con otros personajes como Sonia, una joven prostituta que representa la pureza y la redención, y el detective Porfiri, quien empieza a sospechar de él. El tema central de la novela es la lucha moral interna del protagonista, quien se enfrenta al dilema de si es justificable el crimen si tiene un propósito noble, y las consecuencias psicológicas y espirituales del acto criminal.\n' +
                '\n' +
                'Crimen y castigo es una profunda reflexión sobre la moralidad, la justicia, el sufrimiento y la redención. La novela también explora temas como la alienación, el libre albedrío y las tensiones entre el individuo y la sociedad. Con su profunda psicología de los personajes y su crítica social, Crimen y castigo se ha consolidado como una de las obras más importantes de la literatura mundial.',
            price: 35.99,
            image: '/assets/img/CrimenCasti.jpg'
        },
        {
            id: '8',
            title: 'La casa de los espíritus',
            author: 'Isabel Allende',
            description: 'La obra es una saga familiar que abarca varias generaciones de la familia Trueba, comenzando en el siglo XIX y continuando hasta el siglo XX en Chile. A través de los personajes de la familia, Allende mezcla lo real con lo sobrenatural, fusionando el realismo mágico con la historia política y social de Chile.\n' +
                '\n' +
                'La protagonista es Clara, una mujer con habilidades psíquicas que puede ver y comunicarse con espíritus. A lo largo de la novela, Clara se enamora de Esteban Trueba, un hombre ambicioso y dominante que, a lo largo de los años, se convierte en un poderoso terrateniente. La historia narra la evolución de su relación, la lucha de los personajes por la justicia y la libertad, así como los conflictos internos y externos que enfrentan. La novela también explora temas como el amor, la opresión, la lucha de clases, la dictadura y el sufrimiento humano.\n' +
                '\n' +
                'La casa de los espíritus es una obra de gran calado, que no solo narra la historia de una familia, sino también la historia de un país, marcada por los cambios sociales y políticos, especialmente la tensión entre las clases sociales y el impacto de las dictaduras en América Latina. La obra se caracteriza por su narrativa rica en simbolismo y magia, y se ha convertido en un referente de la literatura latinoamericana contemporánea. Además, fue adaptada al cine en 1993.',
            price: 20.99,
            image: '/assets/img/LaCasaEspiri.jpg'
        },
        {
            id: '9',
            title: 'Fahrenheit 451',
            author: 'Ray Bradbury',
            description: 'La historia se desarrolla en un futuro totalitario en el que los libros están prohibidos y la sociedad se ha vuelto superficial y conformista. El título de la novela hace referencia a la temperatura a la cual el papel de los libros se enciende y arde, es decir, 451 grados Fahrenheit, simbolizando la censura y la represión del conocimiento.\n' +
                '\n' +
                'El protagonista, Guy Montag, es un "bombero" cuya labor no es apagar incendios, sino quemar libros, ya que en esta sociedad los libros son considerados peligrosos y subversivos. Montag vive una vida sin cuestionamientos, siguiendo las reglas de un régimen que promueve la ignorancia. Sin embargo, tras una serie de eventos, como conocer a su vecina Clarisse, una joven curiosa y rebelde, Montag comienza a dudar del sistema y de su propio papel como "bombero". A lo largo de la novela, Montag experimenta una transformación profunda, cuestionando su existencia, el control gubernamental y la falta de libertad intelectual.',
            price: 12.99,
            image: '/assets/img/Fahren.jpg'
        },
        {
            id: '10',
            title: 'El túnel',
            author: 'Ernesto Sabato',
            description: 'La obra está narrada en primera persona por el protagonista, Juan Pablo Castel, un pintor obsesionado con la joven María, quien se convierte en el objeto de su fascinación y, eventualmente, de su locura. A través de una introspectiva reflexión, Castel nos relata su historia desde el momento en que conoce a María hasta los trágicos eventos que surgen a partir de su obsesión.\n' +
                '\n' +
                'La novela aborda temas profundos como la alienación, la obsesión, el aislamiento y la irracionalidad humana. Castel se ve a sí mismo como un ser incomprendido, atrapado en su propio mundo interior, y utiliza el arte como una manera de expresar su angustia existencial. Su relación con María, inicialmente aparentemente simple y en apariencia romántica, se convierte en un proceso de creciente desesperación y violencia. La narración está impregnada de una atmósfera de paranoia, donde la obsesión de Castel por la joven lo lleva a tomar decisiones cada vez más extremas.',
            price: 12.99,
            image: '/assets/img/tunel.jpg'
        },

    ];

    useEffect(() => {
        const fetchBookDetails = () => {
            setLoading(true);
            try {
                const book = bookData.find(b => b.id === id);  // Buscar el libro por ID
                if (!book) throw new Error('Libro no encontrado');
                setBook(book);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchBookDetails();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!book) {
        return <div>Libro no encontrado</div>;
    }

    const handleAddToCart = () => {
        addToCart(book);  // Llamada a la función del contexto para agregar el libro al carrito
        Swal.fire(`${book.title} se agrego a tu carrito`);
    };

    return (
        <div>
            <Navbar />
            <div className="book-page">
                <div className="book-details">
                    <img src={book.image} alt={book.title} className="book-image"/>
                    <div className="book-info">
                    <h1 className="book-title">{book.title}</h1>
                        <h3 className="book-author">Por {book.author}</h3>
                        <p className="book-description">{book.description}</p>
                        <p className="book-price">${book.price.toFixed(2)}</p>
                        <button onClick={handleAddToCart} className="add-to-cart-button">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPage;
