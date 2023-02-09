/*************** Code Explanation ********************/
//Show the data received by using map methods.

/*************** Code Explanation ends ***************/

export default function ResultSection({ news }) {
  return (
    <div className="border-none pb-4" data-testid="result-section-testing">
      <div className="result-container">
        {news.articles.map((block, index) => {
          return (
            <div
              className="font-mono flex flex-col justify-center items-center"
              key={index}
            >
              <div className="flex flex-col justify-center items-center bg-red-100 mt-4 w-4/5 lg:w-11/12 border border-white border-4 rounded-lg">
                <div className="m-4">
                  <h1 className="text-4xl font-bold text-blue-300 underline">
                    {index + 1 === 10 ? "10" : "0" + (index + 1)}
                  </h1>
                  <h2 className="text-2xl font-semibold mt-4">{block.title}</h2>
                  <h3
                    className="font-normal leading-loose mt-4"
                    data-testid="news-content-testing"
                  >
                    {block.content}
                  </h3>
                  <a
                    className="bg-blue-300 px-4 py-2 mt-4 text-white inline-block hover:bg-blue-800"
                    href={block.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Learn more...
                  </a>
                </div>
                <div className="flex justify-center mt-2 mb-4">
                  <div className="w-2/3">
                    <img
                      className="rounded-lg"
                      src={block.image}
                      alt={block.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
