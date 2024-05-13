import LeftHeader from "./LeftHeader";
import RightHeader from "./RightHeader";

const TopHeader = () => {
    return (
        <div className="TopHeader w-[1200px] flex items-center justify-between mx-auto py-[44px]">
            <LeftHeader></LeftHeader>
            <RightHeader></RightHeader>
        </div>
    );
};

export default TopHeader;