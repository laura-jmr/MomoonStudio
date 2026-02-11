import './Article.css';
import PageLayout from '../PageLayout';

function Article({ title, tag, information, sections, ad }) {
    return (

        <div id='article'>
            <div className='tag'>
                <div style={{ backgroundColor: tag[1] }}>
                    <p>{tag[0]}</p>
                </div>
            </div>
            <div id='header'>
                <h1><span>Article:</span><br></br>
                    {title}
                </h1>

                <div className='seperator'></div>

                <div id='information'>
                    <div>
                        <p>{information[0][0]}</p>
                        <p>{information[1][0]}</p>
                    </div>

                    <div>
                        <p>{information[0][1]}</p>
                        <p>{information[1][1]}</p>
                    </div>
                </div>

                <div className='seperator'></div>
            </div>

            {sections.map(([id, content], index) => (
                <div key={id || index} id={`section-${id}`} className="section">
                    <div className="content">
                        {content.map((item, i) => {
                            const [type, ...args] = item;

                            switch (type) {
                                case "h2":
                                    return <h2 key={i}>{args[0]}</h2>;
                                case "p":
                                    return <p key={i}>{args[0]}</p>;
                                case "img":
                                    return <img key={i} src={args[0]} alt="" className='content-img' />;
                                case "t+img":
                                    return (
                                        <div key={i} className="text-with-image">
                                            <p>{args[0]}</p>
                                            <img src={args[1]} alt="" />
                                        </div>
                                    );
                                case "a":
                                    return (
                                        <a key={i} href={args[1]}>
                                            {args[0]}
                                        </a>
                                    );
                                default:
                                    return null;
                            }

                        })}
                    </div>
                </div>
            ))}
            <div className='ad'>
                <h2>Out Now</h2>
                <p>“Marielle und die Waldgeister” </p>
                <a>Watch Here</a>
            </div>

        </div>

    );
}

export default Article;
