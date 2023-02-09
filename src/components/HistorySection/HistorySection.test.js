import { render, screen } from "@testing-library/react";
import HistorySection from "./HistorySection.jsx";

test("Check if History Section have correct className", () => {
  let topics = ["Tiger Woods", "Harry Potter", "Elon Musk"];
  render(<HistorySection topics={topics} />);

  const HistorySectionTestid = screen.getByTestId("history-section-testing");
  expect(HistorySectionTestid).toBeInTheDocument();

  //testing for className
  expect(HistorySectionTestid).toHaveClass("flex");
  expect(HistorySectionTestid).toHaveClass("justify-center");
  expect(HistorySectionTestid).toHaveClass("lg:w-full");
  expect(HistorySectionTestid).toHaveClass("lg:h-fit");
});
