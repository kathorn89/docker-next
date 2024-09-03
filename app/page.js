import DashboardCanvas from "../components/DashboardCanvas";
import Header from "../components/Header";

export default function Page() {
  return (
    <main className="flex px-0 ">
      <div className="overflow-x-hidden">
        <Header />
      </div>

      <div className="px-6 -z-999">
        <DashboardCanvas />
      </div>
    </main>
  );
}
