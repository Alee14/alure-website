import './globals.css'
import { Exo } from 'next/font/google'
import Link from 'next/link'
import Image from "next/image";

const exo = Exo({ subsets: ['latin'] })

export const metadata = {
  title: 'Government of Alure Regions',
  description: 'Information about Alure Regions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
      <div className="px-2 mx-10 text-right font-medium">
          <a href="https://aircs.racing" className="transition duration-150 ease-out hover:ease-in md:hover:text-blue-500">aircs.racing</a>
      </div>
      <nav className="border-gray-200">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              <div className="flex items-center">
                  <Image src="/alure_flag.svg" className="mr-5" alt="Alure Flag" width={70} height={70}/>
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"><p>Government of</p><p>Alure Regions</p></span>
              </div>
              <button data-collapse-toggle="navbar-default" type="button"
                      className="transition duration-150 ease-out hover:ease-in inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                      aria-controls="navbar-default" aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                       viewBox="0 0 17 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"/>
                  </svg>
              </button>
              <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
                      {[
                          ['Home', '/'],
                          ['Updates', '#'],
                          ['Services', '#'],
                          ['ExploreAlure', 'explorealure'],
                      ].map(([title, url]) => (
                          // eslint-disable-next-line react/jsx-key
                          <li>
                              <Link href={url} className="transition duration-150 ease-out hover:ease-in block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent">
                                  {title}
                              </Link>
                          </li>
                      ))}
                      { /*<li>
                          <a href="#"
                             className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                             aria-current="page">Home</a>
                      </li> */}

                  </ul>
              </div>
          </div>
      </nav>
      {children}
      <footer className="flex flex-col text-center py-3 space-y-2 bg-red-950 text-light">
          <p>Alure Regions is a fictional country made for the bits & Bytes Minecraft Server</p>
          <p>Website is proudly written in Next.JS and Tailwind CSS</p>
      </footer>
      </body>
    </html>
  )
}
