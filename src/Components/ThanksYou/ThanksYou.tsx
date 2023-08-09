export function ThanksYou({ note }: { note: number }) {
    return (
        <div className="m-4 flex h-2/4 min-h-[400px] w-1/4 min-w-[300px] flex-col items-center justify-evenly rounded-3xl bg-gradient-to-b from-[#222933] to-[#171E28] p-6 px-4 py-8 xs:min-w-[400px] xs:p-8">
            <img
                className="h-24 w-32"
                src="illustration-thank-you.svg"
                alt="illustration thanks you"
            />
            <div className="flex h-6 w-auto items-center rounded-2xl bg-[#262F38]">
                <span className="px-4 text-[12px] text-Orange/70">
                    You selected {note} out of 5
                </span>
            </div>
            <div>
                <h1 className="pb-2 text-center text-3xl text-White ">
                    Thank you!
                </h1>
                <p className="text-center text-[15px] text-Medium-Grey">
                    We appreciate you taking the time to give a rating. If you
                    ever need more support, don’t hesitate to get in touch!
                </p>
            </div>
        </div>
    );
}
