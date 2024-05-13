import Contact from "./Contact";
import Interno from "./Interno";
import Pages from "./Pages";
import Services from "./Services";

const Describtion = () => {
    return (
        <div className="describtion flex justify-between">
            <Interno></Interno>
            <Pages></Pages>
            <Services></Services>
            <Contact></Contact>
        </div>
    );
};

export default Describtion;