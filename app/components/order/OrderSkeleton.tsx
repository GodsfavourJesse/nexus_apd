export default function OrderSkeleton() {

    return (

        <div
            className="
                grid
                grid-cols-2
                gap-3
            "
        >

            {Array.from({
                length: 6,
            }).map((_, index) => (

                <div
                    key={index}
                    className="
                        animate-pulse
                        overflow-hidden
                        rounded-2xl
                        bg-white
                        shadow-sm
                    "
                >

                    <div
                        className="
                            aspect-square
                            w-full
                            bg-slate-200
                        "
                    />

                    <div className="space-y-3 p-3">

                        <div
                            className="
                                h-4
                                w-3/4
                                rounded
                                bg-slate-200
                            "
                        />

                        <div
                            className="
                                h-3
                                w-1/2
                                rounded
                                bg-slate-100
                            "
                        />

                        <div className="flex justify-between">

                            <div
                                className="
                                    h-3
                                    w-14
                                    rounded
                                    bg-slate-100
                                "
                            />

                            <div
                                className="
                                    h-7
                                    w-7
                                    rounded-full
                                    bg-slate-200
                                "
                            />

                        </div>

                    </div>

                </div>

            ))}

        </div>

    );

}