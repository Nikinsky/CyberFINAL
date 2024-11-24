
import { useSelector } from "react-redux";
import Acces from "./accesRegistration/acces";
import RegisHero from "./regisHero/regisHero";
import s from "./register.module.css"
import Registration from "./registration/registration";
const RegisterPage = () => {
    const {access} = useSelector(state => state.users)
    return (
        <>
            <RegisHero />
            {access ? <Acces /> : <Registration />}
            
            
        </>

    );
};

export default RegisterPage;