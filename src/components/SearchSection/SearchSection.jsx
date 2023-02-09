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

export default function SearchSection({
  updateCurrentNews,
  addTopicToHistory,
}) {
  const [topic, setTopic] = useState("");

  function updateTopic(e) {
    const value = e.target.value;
    setTopic(value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    // const topicInput = e.target[0];
    // Check if the search input is empty or not
    if (topic) {
      const news = await getNewsData(topic);

      if (news.Response === "False") return;
      else {
        updateCurrentNews(news);
        addTopicToHistory(topic);
        console.log(news);
        // topicInput.value = "";
      }
    } else {
      // The website shows hero and feature sections when currentNews is empty.
      updateCurrentNews("");
    }
  }

  return (
    <div className="pt-6" data-testid="search-section-testing">
      <form
        className="font-mono w-full flex flex-col justify-center items-center"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          className="w-2/3 py-2 bg-gray-50 border border-2 border-gray-300 text-gray-900 text-sm rounded-lg block text-center"
          type="text"
          placeholder="News Topic Here"
          onChange={(e) => updateTopic(e)}
        ></input>
        <input
          className="px-4 py-2 bg-blue-300 mt-4 text-white hover:bg-blue-800 hover:cursor-pointer"
          type="submit"
          value="Search"
        ></input>
      </form>
    </div>
  );
}
