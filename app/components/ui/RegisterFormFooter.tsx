import Link from "next/link";

export default function RegisterFormFooter() {
    return (
        <div className="space-y-3 pt-1 text-center text-sm">
            <p className="text-slate-500">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="text-[16px] text-[#4DA8FE] hover:text-[#2B84E0]"
                >
                    Login
                </Link>
            </p>
        </div>
    );
}