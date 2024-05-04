import { Reveal } from 'react-awesome-reveal';
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BsSend } from "react-icons/bs";
import { GiWoodFrame } from "react-icons/gi";

const HomeBelow = () => {
    return (
        <div className="flex flex-col lg:flex-row gap-8">
            <Reveal>
                <div className="flex items-center gap-4">
                    <BsSend className="text-5xl text-orange-700" />
                    <div>
                        <h2 className="font-bold text-xl">Free Shipping</h2>
                        <p>True, however, when it comes to important matters.</p>
                    </div>
                </div>
            </Reveal>

            <div className="divider lg:hidden"></div> 

            <Reveal>
                <div className="flex items-center gap-4">
                    <GiWoodFrame className="text-5xl text-orange-700" />
                    <div>
                        <h2 className="font-bold text-xl">Free Frame</h2>
                        <p>True, however, when it comes to important matters.</p>
                    </div>
                </div>
            </Reveal>

            <div className="divider lg:hidden"></div> 

            <Reveal>
                <div className="flex items-center gap-4">
                    <AiOutlineDollarCircle className="text-5xl text-orange-700" />
                    <div>
                        <h2 className="font-bold text-xl">M.B Guarantee</h2>
                        <p>True, however, when it comes to important matters.</p>
                    </div>
                </div>
            </Reveal>
        </div>
    );
};

export default HomeBelow;
