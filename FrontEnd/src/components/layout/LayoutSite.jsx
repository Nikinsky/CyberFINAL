import s from './LayoutSite.module.css';
import Header from './header/header';
import Footer from './footer/footer';
import RoutesPage from '../../routes/routes'

const LayoutSite = () => {
    return (
        <div className={s.LayoutSite}>
            <Header/>
           <RoutesPage/>
            <Footer/>
        </div>
    );
};

export default LayoutSite;