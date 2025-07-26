import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";

const Workflow = () => {
    return (
        <div className="mt-20 max-w-7xl mx-auto px-4">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
                Accelerate your{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
                    coding workflow.
                </span>
            </h2>

            <div className="flex flex-wrap justify-center items-center mt-12">
                {/* Left side: Image */}
                <div className="p-4 w-full lg:w-1/2">
                    <img
                        src={codeImg}
                        alt="Code"
                        className="rounded-xl shadow-lg object-cover w-full h-auto"
                    />
                </div>

                {/* Right side: Checklist */}
                <div className="pt-4 w-full lg:w-1/2">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex items-start mb-10">
                            <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full flex mr-4">
                                <CheckCircle2 size={20} />
                            </div>
                            <div>
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Workflow;
