import Describtion from "./Describtion/Describtion";
import FooterPrivacy from "./Privacy/FooterPrivacy";

const Footer = () => {
    return (
        <div className="footer w-[1200px] mx-auto flex flex-col gap-[150px]">
            <Describtion></Describtion>
            <FooterPrivacy></FooterPrivacy>
        </div>
    );
};

export default Footer;