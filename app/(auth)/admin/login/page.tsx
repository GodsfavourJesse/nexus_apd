import AdminLoginForm from "@/app/components/auth/AdminLoginForm";

export default function AdminLoginPage() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow">
                <h1 className="mb-2 text-center text-3xl font-bold">
                    Admin Login
                </h1>

                <p className="mb-8 text-center text-gray-500">
                    Sign in to the admin dashboard
                </p>

                <AdminLoginForm />
            </div>
        </main>
    );
}