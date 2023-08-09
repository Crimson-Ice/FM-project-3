import { useState } from "react";
import { Noting } from "./Components/Noting";
import { ThanksYou } from "./Components/ThanksYou";

function App() {
    const [note, setNote] = useState(0);
    const [showTy, setShowTy] = useState(false);

    return (
        <div className="flex h-full w-full items-center justify-center bg-Very-Dark-Blue">
            {showTy ? (
                <div className="flex h-full w-full animate-fadein flex-col items-center justify-center">
                    <ThanksYou note={note} />
                    <div className="text-center text-White">
                        Challenge by{" "}
                        <a
                            href="https://www.frontendmentor.io?ref=challenge"
                            target="_blank"
                            rel="noreferrer"
                            className="text-Orange"
                        >
                            Frontend Mentor
                        </a>
                        . Coded by{" "}
                        <a
                            className="bg-gradient-to-r from-[#1E9600] via-[#FFF200] to-[#FF0000] bg-clip-text font-extrabold text-[#00000000]"
                            href="https://github.com/CrimsonLand"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Antonin Drujon
                        </a>
                        .
                    </div>
                </div>
            ) : (
                <Noting note={note} setNote={setNote} setShowTy={setShowTy} />
            )}
        </div>
    );
}

export default App;
