/*************** Code Explanation ********************/
//The info from cookie is passed to this section.

//Since cookie cannot save an array, I use split to transform
//info from cookie back to an array.

//This user's history will be displayed here.

//If there is user's history, user can delete all of the history
//by clicking "Remove all history" button.

//If the history is empty, a message "Your search history is empty"
//will be displayed.

/*************** Code Explanation ends ***************/

import { useState } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

async function getNewsData(topic) {
  const response = await fetch(
    `https://gnews.io/api/v4/search?q=${topic}&token=${API_KEY}`
  );
  const data = await response.json();
  if (!data.errors) {
    return data;
  }
}

export default function HistorySection({
  topics,
  updateCurrentNews,
  removeTopicFromHistory,
  updateCookie,
}) {
  if (Array.isArray(topics) === false) {
    topics = topics.split(",");
  }

  const [topic, setTopic] = useState("");

  function updateTopic(block) {
    setTopic(block);
  }

  function onClick() {
    handleSubmit(topic);
  }

  async function handleSubmit(topic) {
    const news = await getNewsData(topic.block);

    if (news.Response === "False") return;
    else {
      updateCurrentNews(news);
      console.log(news);
    }
  }

  return (
    <div
      className="flex justify-center lg:w-full lg:h-fit"
      data-testid="history-section-testing"
    >
      {topics && topics.length > 0 ? (
        <div className="font-mono bg-amber-100 w-3/4 lg:w-11/12 mt-4 border border-4 border-white rounded-lg ">
          {topics.map((block, index) => {
            return (
              <div
                className="flex justify-center items-center py-2"
                key={index}
              >
                <button
                  className="text-[10px] bg-blue-300 text-white px-2 py-1 rounded-full border border-white border-2 hover:bg-blue-800"
                  onClick={() => removeTopicFromHistory(index)}
                >
                  X
                </button>
                <div
                  className="text-base pl-2 hover:text-blue-800 hover:underline hover:cursor-pointer"
                  onMouseOver={() => updateTopic({ block })}
                  onClick={() => {
                    onClick();
                  }}
                >
                  <h6>{block}</h6>
                </div>
              </div>
            );
          })}
          <div className="flex justify-center">
            <button
              className="px-4 py-2 my-2 bg-blue-300 text-white hover:bg-blue-800"
              onClick={() => {
                updateCookie([]);
              }}
            >
              Remove All History
            </button>
          </div>
        </div>
      ) : (
        <div className="font-mono bg-amber-100 w-3/4 lg:w-11/12 mt-4 border border-4 border-white rounded-lg">
          <p className="text-center py-4 px-2">Your search history is empty</p>
        </div>
      )}
    </div>
  );
}
