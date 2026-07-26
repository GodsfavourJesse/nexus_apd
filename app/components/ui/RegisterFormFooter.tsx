import Link from "next/link";

export default function RegisterFormFooter() {
    return (
        <div className="space-y-3 pt-1 text-center text-sm">
            <p className="text-slate-500">
                Already have an account?{" "}
                <Link
                    href="/login"
                    className="text-[16px] text-yellow-400 hover:text-yellow-500"
                >
                    Login
                </Link>
            </p>
        </div>
    );
}