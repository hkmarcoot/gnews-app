/*************** Code Explanation ********************/
//Custom useCookie is used to save user's search history.

//Since cookie cannot save an array, I use split to transform
//info from cookie back to an array.

//With spread operator, I can add new elements to the array,
//and remove chosen elements from the array.

/*************** Code Explanation ends ***************/

import React from "react";
import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import SearchSection from "../../components/SearchSection/SearchSection";
import ResultSection from "../../components/ResultSection/ResultSection";
import HistorySection from "../../components/HistorySection/HistorySection";
import ResultHeroSection from "../../components/ResultHeroSection/ResultHeroSection";
import Footer from "../../components/Footer/Footer";
import useCookie from "../../components/useCookie/useCookie";

function SearchPage() {
  const [currentNews, setCurrentNews] = useState();
  let initialData = [];
  const [cookie, updateCookie] = useCookie("userTopics", initialData);

  useEffect(() => {
    if (Array.isArray(cookie) === false) {
      let arr = [];
      arr = cookie.split(",");
      updateCookie(arr);
    }
  }, [cookie, updateCookie]);

  function addTopicToHistory(newTopic) {
    const duplicates = cookie.find(
      (topic) => topic.toLowerCase() === String(newTopic).toLowerCase()
    );

    if (duplicates) return;

    const newList = [...cookie, newTopic];
    updateCookie(newList, 10);
  }

  function removeTopicFromHistory(index) {
    const newList = [...cookie.slice(0, index), ...cookie.slice(index + 1)];
    updateCookie(newList, 10);
  }

  function updateCurrentNews(newNews) {
    setCurrentNews(newNews);
  }

  return (
    <div className="bg-green-50 h-full">
      <Navbar />
      <SearchSection
        updateCurrentNews={updateCurrentNews}
        addTopicToHistory={addTopicToHistory}
      />
      <div className="lg:flex lg:flex-row justify-between">
        <HistorySection
          topics={cookie}
          updateCurrentNews={updateCurrentNews}
          removeTopicFromHistory={removeTopicFromHistory}
          updateCookie={updateCookie}
        />
        <div>
          {currentNews ? (
            <ResultSection news={currentNews} />
          ) : (
            <ResultHeroSection />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SearchPage;
