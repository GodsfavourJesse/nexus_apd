import AppFooter from "@/app/components/layout/AppFooter";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-slate-50">
            <main className="pb-24">
                {children}
            </main>

            <AppFooter />
        </div>
    );
}