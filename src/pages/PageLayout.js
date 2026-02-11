import './PageLayout.css';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function PageLayout({ navEffect, children }) {

    return (
        <div id='page-layout'>
            <Navbar navEffect={navEffect}/>

            <main>
                {children}
            </main>

            <Footer />
        </div >
    );
}

export default PageLayout;
