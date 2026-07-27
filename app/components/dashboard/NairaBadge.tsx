interface NairaBadgeProps {
    size?: number;
}

export default function NairaBadge({ size = 96 }: NairaBadgeProps) {
    return (
        <div
            className="relative flex items-center justify-center"
            style={{ width: size, height: size }}
        >
            {/* Handles */}
            <div
                className="absolute top-0 left-[22%] rounded-full bg-[#189EFE]"
                style={{
                    width: size * 0.22,
                    height: size * 0.3,
                    transform: "translateY(-35%)",
                }}
            />
            <div
                className="absolute top-0 right-[22%] rounded-full bg-[#189EFE]"
                style={{
                    width: size * 0.22,
                    height: size * 0.3,
                    transform: "translateY(-35%)",
                }}
            />

            {/* Body */}
            <div
                className="absolute inset-0 rounded-[28%] bg-[#189EFE] shadow-sm"
            />

            {/* Coin */}
            <div
                className="relative flex items-center justify-center rounded-full bg-white shadow-inner"
                style={{ width: size * 0.62, height: size * 0.62 }}
            >
                <span
                    className="font-extrabold text-[#189EFE]"
                    style={{ fontSize: size * 0.32, lineHeight: 1 }}
                >
                    ₦
                </span>
            </div>
        </div>
    );
}