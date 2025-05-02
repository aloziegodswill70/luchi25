import React from 'react'
import Head from 'next/head'

const Contacts = () => {
  return (
    <>
    <div>
      <Head>
        <title>Contact – Loise & Chinagozi</title>
      </Head>

      <section className="min-h-screen bg-white text-gray-800 font-serif px-4 sm:px-6 md:px-10 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Heading */}
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-700 mb-6">
            Get in Touch 💌
          </h1>

          {/* Intro Message */}
          <p className="text-center text-sm sm:text-base md:text-lg text-gray-600 mb-10 leading-relaxed">
            We’re so excited to hear from you! Whether you have questions about the event,
            directions, or anything else, feel free to reach out to us using the contact
            information below.
          </p>

          {/* Contact Details */}
          <div className="bg-gray-100 rounded-xl p-6 sm:p-8 shadow-md mb-12 text-sm sm:text-base">
            <h2 className="text-xl font-semibold text-green-700 mb-4">Contact Details</h2>
            <ul className="space-y-4">
              <li>
                <strong className="text-gray-700">Bride’s Family Contact:</strong><br />
                Mary Ndichu (Kenya)<br />
                <span className="text-gray-600">+254 *********</span>
              </li>
              <li>
                <strong className="text-gray-700">Groom’s Family Contact:</strong><br />
                Comfort Njoku (Nigeria)<br />
                <span className="text-gray-600">+234 8160972654</span>
              </li>
              <li>
                <strong className="text-gray-700">Email:</strong><br />
                <a href="mailto:loiseandchinagozi2025@gmail.com" className="text-blue-600 underline">
                  loiseandchinagozi2025@gm**.com
                </a>
              </li>
            </ul>
          </div>

          {/* Image Section */}
          <div className="text-center">
            <img
              src="/images/couples.jpeg"
              alt="Couples"
              className="w-full max-w-2xl h-auto mx-auto rounded-xl shadow-md"
            />
            <p className="mt-4 text-sm text-gray-500 italic">
              "We’re only a call, message, or prayer away."
            </p>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default Contacts