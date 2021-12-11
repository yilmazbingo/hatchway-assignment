export default function Footer() {
  return (
    <footer className="flex items-center justify-center bg-red-900 w-full h-24 border-t">
      <a
        className="flex items-center justify-center"
        href="https://bingolyilmaz.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Created by{" "}
        <img src="/logo.png" alt="Vercel Logo" className="h-4 ml-2" />
      </a>
    </footer>
  );
}
