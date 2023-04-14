import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background: linear-gradient(135deg, #e09, #d0e); ;
`;
const Grid = styled.div`
    width: 70vw;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
`;
const Box = styled(motion.div)`
    width: 100%;
    height: 200px;
    border-radius: 10px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    font-weight: 600;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.3);
`;
const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;
function App() {
    const [id, setId] = useState<null | string>(null);
    return (
        <Wrapper>
            <Grid>
                {[1, 2, 3, 4].map((itm) => (
                    <Box
                        onClick={() => setId(itm + "")}
                        key={itm}
                        layoutId={itm + ""}
                    >
                        {itm}
                    </Box>
                ))}
            </Grid>
            <AnimatePresence>
                {id ? (
                    <Overlay
                        onClick={() => setId(null)}
                        initial={{ backgroundColor: "rgba(0,0,0,0)" }}
                        animate={{ backgroundColor: "rgba(0,0,0,.7)" }}
                        exit={{ backgroundColor: "rgba(0,0,0,0)" }}
                    >
                        <Box
                            layoutId={id}
                            style={{ width: "600px", height: "300px" }}
                        />
                    </Overlay>
                ) : null}
            </AnimatePresence>
        </Wrapper>
    );
}

export default App;
