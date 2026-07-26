import Link from "next/link";

export default function LoginFormFooter() {
    return (
        <div className="space-y-3 pt-1 text-center text-sm">
            <p className="text-slate-500">
                Don&apos;t have an account?{" "}
                <Link
                    href="/register"
                    className="text-[16px] text-yellow-500 hover:text-yellow-600"
                >
                    Register
                </Link>
            </p>
        </div>
    );
}