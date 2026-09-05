import { PageHeader } from "@/components/shared/page-header";
import { Card } from "@/components/ui/card";
export default function NotificationsPage() { return <><PageHeader title="Notifications" description="Keep important employee and workflow updates in one place." /><Card><h2 className="font-semibold text-slate-900">All notifications</h2><p className="mt-2 text-sm text-slate-500">You are all caught up. New workflow updates will appear here.</p></Card></>; }
