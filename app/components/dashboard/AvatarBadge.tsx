import { User, Shield } from "lucide-react";

export default function AvatarBadge() {
    return (
        <div className="relative h-20 w-20 shrink-0">
            {/* <div
                className="absolute inset-0 bg-[#EAF2FB]"
                style={{
                    clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
            /> */}

            <div className="absolute inset-0 flex items-center justify-center">
                {/* Replace with an actual <Image> of the user's avatar */}
                <div
                    className="
                        absolute inset-0
                        bg-[url('/images/avatars/avatar_1.jpg')]
                        bg-cover
                        bg-center
                    "
                    style={{
                    clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
                />
            </div>

            <div className="absolute -bottom-2 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-lg border-2 border-white bg-slate-300">
                <Shield size={12} className="text-white" fill="white" />
            </div>
        </div>
    );
}