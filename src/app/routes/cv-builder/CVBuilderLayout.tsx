import FormProgressBar from "@/components/FormProgressBar";
import { Outlet } from "react-router";

function CVBuilderLayout() {
  return (
    <section className="flex flex-col w-full">
      <FormProgressBar />
      <Outlet />
    </section>
  );
}

export default CVBuilderLayout;
