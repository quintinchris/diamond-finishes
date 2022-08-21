import { NavBar } from "../NavBar/NavBar";
import { Footer } from "../Footer/Footer";

export interface LayoutProps {
  children?: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html>
      <NavBar />
      <body className="w-full overflow-hidden">{children}</body>
      <Footer />
    </html>
  );
};
