import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MapPage from "./pages/MapPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Histogram
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uncover the untold stories etched into every map marker
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-xl font-semibold mb-2">Explore Maps</h3>
              <p className="text-gray-600">
                Navigate global locations and discover hidden stories
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold mb-2">Share Stories</h3>
              <p className="text-gray-600">
                Contribute your memories and experiences
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📌</div>
              <h3 className="text-xl font-semibold mb-2">Save Places</h3>
              <p className="text-gray-600">
                Bookmark meaningful locations for later
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-12">
            <Link to="/map" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-indigo-700 transition-colors">
              Start Exploring
            </Link>
          </div>
        </div>
      </div>
    );
}

export default App;