export default function Footer() {
  return (
    <footer className="w-full  bg-gray-400">
      <div className="w-full p-10 mx-auto max-w-screen-xl md:flex md:items-center md:justify-between">
        <span className=" text-white sm:text-center text-xl font-semibold">
          
          <a href="https://www.kireva.de/" className="hover:underline gap-4 text-xl font-semibold mr-2 ">
          2024
          </a>
           Мария Кирева
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <a href="https://www.kireva.de/" className="hover:underline text-xl font-semibold">
              Контакт
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
