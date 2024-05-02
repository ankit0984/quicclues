import React from 'react'

function Footer() {
  return (
    <footer className= "text-white body-font">
  <div className= "container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className= "w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a className= "flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap ="round" strokeLinejoin ="round" strokeWidth ="2" className= "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className= "text-gray-500 ml-3 text-xl">Quicclues</span>
      </a>
      <p className= "mt-2 text-sm text-gray-500">Empowering your digital dreams: Quicclues-where visionaries thrives!</p>
    </div>
    <div className= "flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div className= "lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className= "title-font font-medium text-white tracking-widest text-md mb-3">Services</h2>
        <h2 className= "title-font font-medium text-white tracking-widest text-md mb-3">Projects</h2>
        <h2 className= "title-font font-medium text-white tracking-widest text-md mb-3">Carrier</h2>
         
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-300 tracking-widest text-sm mb-3">Contact us</h2>
        <nav class="list-none mb-10 space-y-2">
          <li>Email:
            <a class="text-gray-600 hover:text-gray-800"> <br /> Contact@Quicclues.in</a>
          </li>
          <li>contact number:
            <a class="text-gray-600 hover:text-gray-800"><br />+91 9006400822</a>
          </li>
        </nav>
      </div>

    </div>
  </div>
  <div className= ''>
    <div className= "container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <h1 className= "text-gray-500 text-sm text-center sm:text-left">© 2023 Quicclues
      </h1>
      <span className= "inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a className= "text-gray-500" href='https://www.facebook.com/profile.php?id=61556505751661&mibextid=ZbWKwL'>
          <svg fill="currentColor" strokeLinecap ="round" strokeLinejoin ="round" strokeWidth ="2" className= "w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a className= "ml-3 text-gray-500" href='https://www.instagram.com/quicclues.ai?igsh=MWVxeGhreHg5b2hlOA=='>
          <svg fill="none" stroke="currentColor" strokeLinecap ="round" strokeLinejoin ="round" strokeWidth ="2" className= "w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a className= "ml-3 text-gray-500" href='https://www.linkedin.com/company/quicclues/'>
          <svg fill="currentColor" stroke="currentColor" strokeLinecap ="round" strokeLinejoin ="round" strokeWidth ="0" className= "w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
  )
}

export default Footer
