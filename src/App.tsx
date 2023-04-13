import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #e09, #d0e); ;
`;

const Box = styled(motion.div)`
    position: absolute;
    top: 100px;
    width: 200px;
    height: 100px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const boxVariant = {
    entry: (back: boolean) => ({
        x: back ? -500 : 500,
        opacity: 0,
        scale: 0,
    }),
    center: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            duration: 0.3,
        },
    },
    exit: (back: boolean) => ({
        x: back ? 500 : -500,
        opacity: 0,
        scale: 0,
        transition: {
            duration: 0.3,
        },
    }),
};

function App() {
    const [visible, setVisible] = useState(1);
    const [back, setBack] = useState(false);
    const next = () => {
        setBack(false);
        setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    };
    const prev = () => {
        setBack(true);
        setVisible((prev) => (prev === 1 ? 1 : prev - 1));
    };
    const autoSlide = () => {
        setVisible((prev) => (prev === 10 ? 10 : prev + 1));
    };
    useEffect(() => {
        // const interval = setInterval(() => {
        //     autoSlide();
        // }, 3000);
    }, []);
    return (
        <Wrapper>
            <AnimatePresence mode="wait" custom={back}>
                <Box
                    custom={back}
                    variants={boxVariant}
                    initial="entry"
                    animate="center"
                    exit="exit"
                    key={visible}
                >
                    {visible}
                </Box>
            </AnimatePresence>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </Wrapper>
    );
}

export default App;
