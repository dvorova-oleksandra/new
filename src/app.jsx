const { default: Footer } = require("./Footer");
const { default: Headers } = require("./Header");

const App = () =>{
    const {pathname} = window.location;
    const getScreen = (path) =>
    {
        const id = getLastPath(path);
        switch(path)
        {
            case AppPath.ROOT:
                {
                    return <Main/>;
                }
            case AppPath.trip:
                {
                    return <Info/>;
                }
            default:
                {
                    return "Fail";
                }
        }
    };
    return (
        <>
        <Headers/>
        <main>{getScreen(pathname)}</main>
        <Footer/>
        </>
    )
}