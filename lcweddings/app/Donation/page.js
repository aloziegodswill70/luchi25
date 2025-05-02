import React from 'react'
import Head from 'next/head'

const Donation = () => {
  return (
    <>
    <div>
      <Head>
        <title>Gifts and Donations – Loise & Chinagozi</title>
      </Head>

      <section className="bg-white min-h-screen text-gray-800 font-serif px-4 sm:px-6 md:px-8 py-12 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Gifts and Donations ❤️
          </h1>

          {/* Intro Message */}
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-8 px-1 sm:px-6">
            If you'd like to send a gift, kindly use the account details below.
            Thank you for being part of our special day!
          </p>

          {/* Account Details Box */}
          <div className="bg-gray-100 p-5 sm:p-6 md:p-8 rounded-xl shadow-md text-left mb-8">
            <p className="text-base sm:text-lg font-semibold text-red-700 mb-4">
              Account Details For Australian Dollar:
            </p>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <span className="font-medium text-gray-700">Account Name:</span>{" "}
                Chinagozi Njoku
              </li>
              <li>
                <span className="font-medium text-gray-700">Bank Name/Address:</span>{" "}
                Revolut Payments Australia Pty Ltd, Level 28, 161 Castlereagh Street, 2000, Sydney, NSW, Australia.
              </li>
              <li>
                <span className="font-medium text-gray-700">Account Number:</span>{" "}
                228346649
              </li>
              <li>
                <span className="font-medium text-gray-700">BIC/SWIFT Code:</span>{" "}
                REVOAU32
              </li>
            </ul>
          </div>

          {/* Image */}
          <img
            src="/images/Luchi25.jpeg"
            alt="Luchi25"
            className="w-full h-auto max-h-[450px] object-cover rounded-xl shadow-md"
          /> 
          <br></br>

          <div className="bg-gray-100 p-5 sm:p-6 md:p-8 rounded-xl shadow-md text-left mb-8">
            <p className="text-base sm:text-lg font-semibold text-red-700 mb-4">
              Account Details:
            </p>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <span className="font-medium text-gray-700">Account Name:</span>{" "}
                Chinagozi Njoku
              </li>
              <li>
                <span className="font-medium text-gray-700">Bank Name:</span>{" "}
                Zenith Bank
              </li>
              <li>
                <span className="font-medium text-gray-700">Account Number:</span>{" "}
                2283765999
              </li>
              <li>
                <span className="font-medium text-gray-700">SWIFT Code:</span>{" "}
                ******
              </li>
            </ul>
          </div>

          {/* Thank You Note */}
          <p className="text-xs sm:text-sm text-gray-500 italic mb-8">
            We are truly grateful for your generosity and blessings. 💕
          </p>

          {/* Image */}
          <img
            src="/images/Weds.jpeg"
            alt="Weds"
            className="w-full h-auto max-h-[450px] object-cover rounded-xl shadow-md"
          />
        </div>
      </section>
    </div>
    </>
  )
}

export default Donation