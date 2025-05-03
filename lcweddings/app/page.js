'useclient'

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
     <>
     <div className="bg-green-500 text-center item-align font-bold text-sm md:text-lg lg:text-xl">
  <div className="bg-green-500 text-center font-bold text-sm md:text-lg lg:text-xl py-4 text-white">
    You're Invited to a Beautiful Union 💍
  </div>

  <section className="min-h-screen bg-white text-gray-800 font-serif">
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero Image */}
      <img
        src="/images/couples.jpeg"
        alt="Couples"
        className="rounded-xl w-full h-auto max-h-[450px] object-cover shadow-md mb-10"
      />

      {/* Header */}
      <div className="text-center space-y-2 mb-10">
        <p className="uppercase text-xs sm:text-sm tracking-widest text-gray-500">Wedding Announcement</p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-700">Loise Ndichu & Chinagozi Njoku</h1>
        <p className="text-gray-500 italic text-sm sm:text-base">Sunday, 4th May 2025</p>
      </div>

      {/* Family Intro */}
      <div className="text-center text-base sm:text-lg leading-relaxed mb-12 px-2 sm:px-6">
        <p>
          The families of <strong>Mr. Simon Mbugua & Mrs. Mary Ndichu</strong> of Kiambu, Kenya and{" "}
          <strong>Mr. Boniface & Mrs. Comfort Njoku</strong> of Abia State, Nigeria, joyfully invite you to witness
          the union of their beloved children.
        </p>
      </div>

      {/* Wedding Ceremony */}
      <div className="mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-green-700 mb-2 text-center">Wedding Ceremony</h2>
        <p className="text-center text-gray-700 text-sm sm:text-base leading-relaxed">
          <strong>Time:</strong> 12:00PM<br />
          <strong>Location:</strong> MT GRAVATT SDA CHURCH<br />
          341/351 Broadwater Rd, Mansfield QLD 4122
        </p>
        <img
          src="/images/Luchi25.jpeg"
          alt="Luchi25"
          className="rounded-lg w-full h-auto max-h-[400px] object-cover mt-4 shadow"
        />
      </div>

      {/* Reception Section */}
      <div className="mb-16">
        <h2 className="text-xl sm:text-2xl font-semibold text-red-700 mb-2 text-center">Reception</h2>
        <p className="text-center text-gray-700 text-sm sm:text-base leading-relaxed">
          <strong>Time:</strong> 3:00PM<br />
          <strong>Venue:</strong> Beenleigh Events Center<br />
          Kent St, Beenleigh QLD 4207
        </p>
        <img
          src="/images/Truelove.jpeg"
          alt="Truelove"
          className="rounded-lg w-full h-auto max-h-[400px] object-cover mt-4 shadow"
        />
      </div>

      {/* Color Palette */}
      <div className="text-center mt-16">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Colors of the Day</h3>
        <div className="flex justify-center gap-4">
          <span className="w-8 h-8 rounded-full bg-yellow-400 border shadow" title="Yellow" />
          <span className="w-8 h-8 rounded-full bg-white border shadow" title="White" />
          <span className="w-8 h-8 rounded-full bg-green-600 border shadow" title="Green" />
          <span className="w-8 h-8 rounded-full bg-red-600 border shadow" title="Red" />
        </div>
      </div>

      {/* Footer Note */}
      <p className="text-center mt-12 text-gray-500 text-xs sm:text-sm px-4">
        With love and joy, we await your graceful presence as we begin our forever journey.
      </p>
    </div>
  </section>
</div>
 </>

  );
}
