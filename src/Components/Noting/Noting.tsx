import { Dispatch, SetStateAction } from "react";

interface NotingProps {
    note: number;
    setNote: Dispatch<SetStateAction<number>>;
    setShowTy: Dispatch<SetStateAction<boolean>>;
}

export function Noting({ note, setNote, setShowTy }: NotingProps) {
    return (
        <div className="flex h-2/4 min-h-[400px] w-1/4 min-w-[300px] flex-col justify-between rounded-3xl bg-gradient-to-b from-[#222933] to-[#171E28] px-4 py-8 xs:min-w-[400px] xs:p-8">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#262F38] brightness-125">
                <img src="icon-star.svg" alt="star icon" />
            </div>
            <div>
                <h1 className="pb-2 text-3xl text-White">How did we do?</h1>
                <p className="text-[15px] text-Medium-Grey">
                    Please let us know how we did with your support request. All
                    feedback is appreciated to help us improve our offering!
                </p>
            </div>
            <div className="flex flex-row justify-between">
                <NotingButton value="1" note={note} setNote={setNote} />
                <NotingButton value="2" note={note} setNote={setNote} />
                <NotingButton value="3" note={note} setNote={setNote} />
                <NotingButton value="4" note={note} setNote={setNote} />
                <NotingButton value="5" note={note} setNote={setNote} />
            </div>
            <button
                onClick={() => {
                    if (note !== 0) setShowTy(true);
                }}
                className="h-10 w-full rounded-3xl bg-Orange text-[15px] tracking-widest text-White hover:bg-White hover:text-Orange"
            >
                SUBMIT
            </button>
        </div>
    );
}

interface NotingButtonProps {
    value: string;
    note: number;
    setNote: Dispatch<SetStateAction<number>>;
}

function NotingButton({ value, note, setNote }: NotingButtonProps) {
    return (
        <button
            onClick={() => setNote(parseInt(value))}
            className={
                "h-12 w-12 rounded-full bg-[#262F38] text-center " +
                (note === parseInt(value)
                    ? "bg-Light-Grey text-White hover:bg-Orange hover:text-White"
                    : "text-Medium-Grey bg-[#262F38] hover:bg-Orange hover:text-White")
            }
        >
            {value}
        </button>
    );
}
