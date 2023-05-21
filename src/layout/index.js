import { Sidebar } from "./SIdebar";

export function Layout({ children }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 p-7 bg-gray-100">{children}</div>
    </div>
  );
}
