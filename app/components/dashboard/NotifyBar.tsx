import { ChevronRight } from "lucide-react";

interface NotifyBarProps {
    message?: string;
}

export default function NotifyBar({
    message = "Recruitment Activity Reward: member will earn a reward of 2100",
}: NotifyBarProps) {
    return (
        <div className="relative flex h-12 items-center overflow-hidden rounded-[10px] bg-white/40 p-1.5 backdrop-blur-sm">

            <div
                className="h-full w-full relative flex-1 overflow-hidden bg-[#FFFAED] rounded-[8px] flex items-center justify-center"
            >

                <div className="absolute z-10 -left-0 flex h-full shrink-0 items-center gap-0.5 rounded-l-[8px] rounded-br-[30px] bg-gradient-to-r from-[#FFB139] to-[#FF9A1F] px-4">
                    <span className="text-sm font-semibold text-white">
                        Notify
                    </span>
                    <span className="flex items-center text-white">
                        <ChevronRight size={12} className="-mr-1.5" />
                        <ChevronRight size={12} className="-mr-1.5" />
                        <ChevronRight size={12} />
                    </span>
                </div>

                <div
                    className="pointer-events-none absolute inset-y-0 right-0 w-50"
                    style={{
                        background:
                            "linear-gradient(to right, #FFF 10%, transparent 100%)",
                    }}
                />
                <div className="marquee-track flex w-max items-center whitespace-nowrap text-sm font-medium text-[#FFAF33]">
                    <span className="px-6">{message}</span>
                    <span className="px-6" aria-hidden="true">
                        {message}
                    </span>
                </div>
            </div>

            <style jsx>{`
                .marquee-track {
                    animation: marquee 14s linear infinite;
                }

                .marquee-track:hover {
                    animation-play-state: paused;
                }

                @keyframes marquee {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(-50%);
                    }
                }
            `}</style>
        </div>
    );
}