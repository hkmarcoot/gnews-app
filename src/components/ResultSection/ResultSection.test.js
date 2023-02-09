import { render, screen } from "@testing-library/react";
import ResultSection from "./ResultSection.jsx";

test("Check if Result Section news content have correct className", () => {
  let news = {
    articles: [
      {
        title:
          "Google's Bard AI chatbot screws up costing investors $100 billion in market value",
        description:
          "The shares of Google parent Alphabet dropped $100 billion in value after Google's new conversational AI chatbot Bard answered a question incorrectly.",
        content:
          "It has been a tough 24 hours for Google culminating today in a huge drop in the stock of parent company Alphabet. The stock declined by $8.04 or 7.44% to end the regular trading session at $100. The drop took $100 billion off of Google's market value... [3554 chars]",
        url: "https://www.phonearena.com/news/bard-error-costs-alphabet-big-bucks_id145466",
        image:
          "https://m-cdn.phonearena.com/images/article/145466-wide-two_1200/Googles-Bard-AI-chatbot-screws-up-costing-investors-100-billion-in-market-value.jpg",
        publishedAt: "2023-02-09T00:23:14Z",
        source: {
          name: "PhoneArena",
          url: "https://www.phonearena.com",
        },
      },
    ],
  };
  render(<ResultSection news={news} />);
  const NewsContentTestid = screen.getByTestId("news-content-testing");
  expect(NewsContentTestid).toBeInTheDocument();

  //testing for className
  expect(NewsContentTestid).toHaveClass("font-normal");
  expect(NewsContentTestid).toHaveClass("leading-loose");
  expect(NewsContentTestid).toHaveClass("mt-4");
});
