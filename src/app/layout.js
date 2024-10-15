import './globals.css';

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
