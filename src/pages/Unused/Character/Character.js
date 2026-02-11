import './Character.css';
import PageLayout from '../PageLayout';

function Character({ name, img, films, products, color, starcolor, }) {
    return (
        <div id='character'>

                <div className='tag' style={{ backgroundColor: color }}>{name}</div>

                <h1>Universum of: <span>{name}</span></h1>

                <p id='from'>From</p>

                <div id='published-work'>
                    <p>{films[0]}<br className='hidden-rec'></br><span className='hidden-rec rec'>Haven’t seen yet? Watch it <a href=''>here</a></span></p>
                    <p>{films[1]}<br className='hidden-rec'></br><span className='hidden-rec rec'>Haven’t seen yet? Watch it <a href=''>here</a></span></p>
                </div>

                <img id='title-img' src={img} />

            <div id='shopping' style={{ backgroundColor: color }}>
                <h2>Shop Our Latest Items</h2>
                <div id='products'>
                    <div className='product-card'>
                        <img src={products[0][0]} />
                        <p>{products[0][1]} <span>{products[0][2]}</span></p>
                    </div>
                    <div className='product-card'>
                        <img src={products[1][0]} />
                        <p>{products[1][1]} <span>{products[1][2]}</span></p>
                    </div>
                    <div className='product-card hidden'>
                        <img src={products[1][0]} />
                        <p>{products[1][1]} <span>{products[1][2]}</span></p>
                    </div>
                    <div id='store-link'>
                        <p className='star' style={{ color: starcolor }}>★</p>
                        <p>More items in our <a>shop<span>↗</span></a></p>
                    </div>
                </div>
            </div>

            <div id='films'>
                <div className='recommendation'>
                    <p style={{ color: color }}>Kurzfilm:<br></br>{films[0]}</p>
                    <button>Watch Now</button>
                </div>
                <div className='recommendation'>
                    <p style={{ color: color }}>Kurzfilm:<br></br>{films[1]}</p>
                    <button>Watch Now</button>
                </div>
            </div>

        </div>

    );
}

export default Character;
