export default function ResultHeroSection() {
  return (
    <div className="border-none h-screen" data-testid="result-section-testing">
      <div className="result-container">
        <div className="font-mono flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center bg-red-100 mt-4 w-4/5 lg:w-11/12 border border-white border-4 rounded-lg">
            <div className="m-4">
              <h2 className="text-2xl font-semibold mt-4">Welcome!</h2>
              <h3
                className="font-normal leading-loose mt-4"
                data-testid="news-content-testing"
              >
                GNews API is a simple REST API with which you can search for
                current and historic news articles published by over 60,000
                sources. With this news API, you can also collect the current
                top headlines articles based on the Google News ranking.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
