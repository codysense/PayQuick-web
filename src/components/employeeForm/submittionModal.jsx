import { motion } from "framer-motion";
import React,{useContext} from "react";
import Button from "../../common/Button";
import stepContext from "../stepContext";

const SubmitionModal = () => {
  const{ step, redoStep } = useContext(stepContext)
  return (
    <motion.div
      key={step} // Add this line
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="md:w-3/5 mx-auto py-12"
    >
      <div className="mt-12  text-4xl text-center">
        Employee enrollment completed
      </div>
      <div>
        <div className="flex justify-center mt-12">
          <Button
            type="button"
            onClick={redoStep}
            // className=" bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            caption={"Register New Employee"}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SubmitionModal;
