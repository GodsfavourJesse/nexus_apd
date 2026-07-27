import NairaBadge from "./NairaBadge";

export default function PositionsBanner() {
    return (
        <div className="flex w-full items-center justify-between rounded-3xl bg-[#2DC8FF] px-6 py-5">
            <div className="flex items-center gap-3">
                <NairaBadge size={50} />

                <p className="text-[16px] font-medium text-slate-800">
                    Get more positions
                </p>
            </div>

            <button
                type="button"
                className="rounded-full bg-[#22AFFF] px-8 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0A72F3]"
            >
                Go
            </button>
        </div>
    );
}