export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800 py-6 mt-20">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-neutral-400 text-sm">
        {/* Left - Logo / Name */}
        <div className=" text-gray-700 font-bold">
          © {new Date().getFullYear()} Faraaz Ashraf
        </div>

        {/* Right - Text */}
        <div className="mt-4 md:mt-0">
          <span className="text-neutral-500 font-bold">
            Crafted with ❤️ & Next.js
          </span>
        </div>
      </div>
    </footer>
  );
}
