// src/pages/ContentPage.jsx
import React from 'react';

function ContentPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Anti-Doping Educational Content</h1>

      {/* Videos Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="shadow-lg rounded overflow-hidden">
            <iframe
              width="100%" height="315" src="https://www.youtube.com/embed/O53-_1J0I1Q?si=PLKHL2fRULmteMKZ" title="YouTube video player"
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
            <p className="mt-2 text-center">Anti-Doping Educational Video 1</p>
          </div>
          <div className="shadow-lg rounded overflow-hidden">
            <iframe
              width="100%" height="315" src="https://www.youtube.com/embed/jPDmT6g1UTQ?si=TBDHimn3FIiDFwTT" title="YouTube video player"
              frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
            </iframe>
            <p className="mt-2 text-center">Anti-Doping Educational Video 2</p>
          </div>
        </div>
      </section>

      {/* Infographics Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Infographics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="shadow-lg rounded overflow-hidden">
            <img
              src="https://www.researchgate.net/profile/Dobgima-Fonmboh/publication/356255764/figure/fig1/AS:1093061924921346@1637617679956/Summary-of-the-antidoping-rules-as-defined-by-WADA-Design-and-conceived-by-author.jpg"
              alt="Anti-Doping Infographic 1"
              className="w-full h-auto"
            />
            <p className="mt-2 text-center">Infographic on Anti-Doping Practices</p>
          </div>
          <div className="shadow-lg rounded overflow-hidden">
            <img
              src="data:image/jpeg;base64,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"
              alt="Anti-Doping Infographic 2"
              className="w-full h-auto"
            />
            <p className="mt-2 text-center">Infographic on Prohibited Substances</p>
          </div>
        </div>
      </section>

      {/* Podcasts Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Podcasts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="shadow-lg rounded overflow-hidden">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gRVI2wpl_48?si=ji3DCTbLH3ACHZVb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className="mt-2 text-center">Podcast: Understanding Anti-Doping Regulations</p>
          </div>
          <div className="shadow-lg rounded overflow-hidden">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/fuE_vnFcO-s?si=KINq9C1_eSPAHdq-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <p className="mt-2 text-center">Podcast: Athlete Experiences with Anti-Doping</p>
          </div>
        </div>
      </section>

      {/* Interactive Modules Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Interactive Modules</h2>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <p>
            Engage with real-life case studies and scenarios to better understand anti-doping policies.
          </p>
          <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200 ${location.pathname === '/module' ? 'bg-gray-700' : ''}">
            Start Interactive Module
            
          </button>
        
        </div>
      </section>
    </div>
  );
}

export default ContentPage;
