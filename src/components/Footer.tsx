export default function Footer() {
  return (
    <footer className="w-full bg-sky-700 flex-grow">
      <div className="w-full p-10 mx-auto max-w-screen-xl md:flex md:items-center md:justify-between sm:flex sm:items-center sm:justify-between">
        <ul className="flex flex-wrap mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.kireva.de/"
              className="hover:underline text-xl font-semibold"
            >
              Контакт
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
