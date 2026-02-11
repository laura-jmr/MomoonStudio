import './ArticleOverview.css';
import PageLayout from '../PageLayout';


function ArticleOverview() {
    return (
        <div id='article-overview'>

            <h1>Artikel</h1>

            <ul id='articles'>
                <li>
                    <a>Wie es zu den Momos kam</a>
                    <div className='tag'>Momos</div>
                </li>
                <li>
                    <a href='/article/marielle'>Making of “Marielle und die Waldgeister”</a>
                    <div className='tag'>Marielle</div>
                </li>
                <li>
                    <a>Entstehung von Momoon Studio</a>
                </li>
            </ul>

        </div>
    );
}

export default ArticleOverview;
