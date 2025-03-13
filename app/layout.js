import './globals.css'
import { Exo } from 'next/font/google'
import Navbar from "./components/Navbar";
import PSA from "./components/PSA";

const exo = Exo({ subsets: ['latin'] })

export const metadata = {
  title: {
      template: '%s - Government of the Alure Regions',
      default: 'Government of the Alure Regions'
  },
  description: 'The official website of the Government of the Alure Regions',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
      <div className="sm:px-10 px-5 py-0.5 font-medium space-x-3 text-right">
          <a href="https://bnbmc.net" className="transition duration-150 ease-out hover:ease-in md:hover:text-red-500">bnbmc.net ↗</a>
          <a href="https://alee14.me" className="transition duration-150 ease-out hover:ease-in md:hover:text-green-500">alee14.me ↗</a>
      </div>
      <PSA/>
      <Navbar/>
      {children}
      <footer className="flex flex-col text-center py-3 space-y-2 bg-blue-950 text-light text-sm sm:text-base px-5 sm:px-0">
          <p>The Alure Regions is a fictional country made for the bits & Bytes Minecraft Server</p>
          <p>This website is proudly written using Next.JS and Tailwind CSS</p>
      </footer>
      </body>
    </html>
  )
}
