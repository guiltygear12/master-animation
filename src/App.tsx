import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    gap: 8px;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #e09, #d0e); ;
`;

const Box = styled(motion.div)`
    width: 200px;
    height: 100px;
    border-radius: 10px;
    background-color: white;
`;
const boxVariants = {
    start: {
        opacity: 0,
        scale: 0,
    },
    end: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
        },
    },
    leaving: {
        opacity: 0,
        scale: 0,
        rotateZ: 360,
        transition: {
            duration: 0.5,
        },
    },
};
function App() {
    const [showing, setShowing] = useState(false);
    const toggleShowing = () => setShowing((prev) => !prev);
    return (
        <Wrapper>
            <AnimatePresence>
                {showing ? (
                    <Box
                        variants={boxVariants}
                        initial="start"
                        animate="end"
                        exit="leaving"
                    />
                ) : null}
            </AnimatePresence>
            <button onClick={toggleShowing}> 온오프 </button>
        </Wrapper>
    );
}

export default App;
