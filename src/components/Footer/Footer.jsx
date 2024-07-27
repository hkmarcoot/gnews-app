/*************** Code Explanation ********************/
//This footer is responsive.

/*************** Code Explanation ends ***************/

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="font-mono border-none h-full bg-gradient-to-b from-sky-100 to-blue-200">
      <div className="mx-16 py-16 md:flex md:flex-row md:justify-around md:mx-8">
        <div>
          <img src="" alt="School Of Code Logo" width="50rem" />
          <p className="mt-4 text-gray-500">
            Simple News API to search<br></br> News and Blog Articles
          </p>
        </div>
        <div>
          <h4 className="mt-4 text-lg">Link</h4>
          <div className="flex flex-row mt-2">
            <ul>
              <li>
                <Link
                  to="/"
                  className="font-normal text-base text-gray-500 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
                >
                  Home
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/searchpage"
                  className="font-normal text-base text-gray-500 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
                >
                  Search
                </Link>
              </li>
            </ul>
            <ul className="ml-4">
              <li>
                <Link
                  to="/faqpage"
                  className="font-normal text-base text-gray-500 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
                >
                  FAQ
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/contactpage"
                  className="font-normal text-base text-gray-500 border-transparent border-b-4 hover:border-blue-800 hover:text-blue-800"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <h4 className="text-lg">Contact Us</h4>
          <p className="mt-2 text-gray-500">
            Custard Factory,<br></br> Gibb St, Birmingham B9 4AA<br></br>
            Phone: 07161293230<br></br>
            E-Mail: <a href="mailto:xxx@gmail.com">xxx@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
