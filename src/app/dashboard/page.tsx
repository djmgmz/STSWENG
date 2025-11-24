// src/app/dashboard/page.tsx

import InterventionReports from "./reports/intervention_reports";
import AdminExportButton from "@/components/AdminExportButton"; // The button we created

export default async function DashboardPage() {
    
    // No session or role check - the button will be shown to everyone.

    return (
        <div>
            {/* This is the component you already have */}
            <InterventionReports />

            {/* This section will now be visible to all logged-in users */}
            <section className="mt-8 pt-8 border-t border-gray-200">
                <h2 className="text-xl font-semibold mb-2">Admin Controls</h2>
                <p className="mb-4">
                    Download a complete JSON snapshot of all application data.
                </p>
                <AdminExportButton />
            </section>
        </div>
    );
}