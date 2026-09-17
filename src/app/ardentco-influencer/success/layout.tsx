import type { ReactNode } from "react";

export const metadata = {
  title: "Success",
  description: "Successfully submitted the form",
};

export default function SuccessLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
