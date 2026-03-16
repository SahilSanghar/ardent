export const metadata = {
  title: "Success",
  description: "Successfully submitted the form",
};

export default function SuccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}