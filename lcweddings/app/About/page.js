import React from 'react'
import Head from 'next/head'

const About = () => {
  return (
    <>
        <div>
  <Head>
    <title>About Us – Loise & Chinagozi</title>
  </Head>

  <section className="min-h-screen bg-white text-gray-800 font-serif px-4 sm:px-6 md:px-10 py-12 sm:py-16">
    <div className="max-w-6xl mx-auto space-y-12">

      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold text-center text-red-700">
        Our Story
      </h1>

      {/* Intro */}
      <p className="text-base md:text-lg text-center text-gray-600 leading-relaxed max-w-3xl mx-auto">
        Welcome to our love story! From two hearts in different countries to one beautiful union of love and cultures—thank you for being part of this special journey.
      </p>

      {/* Image and Story Block */}
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        <img
          src="/images/Romance.jpeg"
          alt="Love Journey"
          className="w-full lg:w-1/2 h-auto rounded-xl shadow-md object-cover"
        />
        <div className="w-full lg:w-1/2 space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-green-700 mb-2">How We Met (Her Side)</h2>
            <p>
              We met at church. At first, I didn’t think much of him—just another international student. But everything changed at Vital Connection, a food ministry. There, our unexpected friendship blossomed over Saturdays of service. A birthday surprise, a car accident, and heartfelt phone calls brought us closer. Eventually, he asked me to be his “partner in purpose,” not just a girlfriend. That was my turning point.
            </p>
            <p>
              Since then, we’ve built a deep, faith-rooted love. Now, I’m about to become his wife—and I wouldn’t have it any other way.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-green-700 mt-6 mb-2">How We Met (His Side)</h2>
            <p>
              I first saw Loise at church—graceful, focused, leading the Vital Connection group. After a minor accident near church, she helped me and we started talking more. Our friendship deepened through late-night conversations, cinema trips, and shared values. She even let me become her "celebrated lullaby."
            </p>
            <p>
              I eventually asked her to be more than a friend—not with romance, but purpose. And today, I’m proud to be her husband. Yes! A finished man I am.
            </p>
          </div>
        </div>
      </div>

      {/* Extra Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <img
          src="/images/Truelove.jpeg"
          alt="Truelove"
          className="w-full h-auto rounded-xl object-cover shadow"
        />
        <img
          src="/images/Couples.jpeg"
          alt="Couples"
          className="w-full h-auto rounded-xl object-cover shadow"
        />
      </div>

      {/* Values */}
      <div className="text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-800 mb-4">
          What We Cherish
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm sm:text-base">
          <div className="bg-yellow-100 p-4 rounded-lg shadow">
            ❤️ Love: The foundation of everything we do.
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow">
            🤝 Unity: Embracing our cultures and differences.
          </div>
          <div className="bg-red-100 p-4 rounded-lg shadow">
            🙏 Faith: Guided by God’s grace and purpose.
          </div>
        </div>
      </div>

      {/* Final Image */}
      <div className="text-center">
        <img
          src="/images/Love.jpeg"
          alt="Couple Smiling"
          className="w-full max-w-2xl h-auto mx-auto rounded-xl shadow-lg"
        />
        <p className="mt-4 text-gray-500 text-sm italic">
          “Two hearts, two cultures, one love story.”
        </p>
      </div>

    </div>
  </section>
</div>
 </>
  )
}

export default About