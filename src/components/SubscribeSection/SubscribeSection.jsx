/*************** Code Explanation ********************/
//This section is for demonstration.

//Entering email or clicking the subscribe button
//will not do anything.

/*************** Code Explanation ends ***************/

export default function SubscribeSection() {
  return (
    <div
      className="border-none h-full bg-green-50 pt-16 pb-16"
      data-testid="result-section-testing"
    >
      <div className="result-container">
        <div className="font-mono flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center bg-blue-100 w-4/5 lg:w-11/12 border border-white border-4 rounded-lg">
            <div className="m-10 flex flex-col justify-center items-center border-none border-red-500">
              <h2 className="text-2xl font-semibold mt-4 text-center">
                Subscribe to Our Newsletter
              </h2>
              <h3
                className="font-normal leading-loose mt-4"
                data-testid="news-content-testing"
              >
                Let us notice you when there is a new content for you.
              </h3>
              <input
                type="text"
                class="form-control"
                placeholder="Your Email"
                className="w-full mt-4 text-center py-2"
              ></input>
              <button className="px-4 py-2 mt-4 bg-blue-300 hover:bg-blue-800 text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
