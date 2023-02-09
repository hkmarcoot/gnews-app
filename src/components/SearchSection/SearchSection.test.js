import { render, screen } from "@testing-library/react";
import SearchSection from "./SearchSection.jsx";

test("Check if Search Section have correct className", () => {
  render(<SearchSection />);
  const SearchSectionTestid = screen.getByTestId("search-section-testing");
  expect(SearchSectionTestid).toBeInTheDocument();

  //testing for className
  expect(SearchSectionTestid).toHaveClass("pt-6");
});

test("Check Search Button Text", () => {
  render(<SearchSection />);
  const SearchElement = screen.getByText(/Search/i);

  expect(SearchElement).toBeInTheDocument();
});

test("Check Search Placeholder", () => {
  render(<SearchSection />);
  const PlaceholderElement = screen.getByPlaceholderText(/News Topic Here/i);

  expect(PlaceholderElement).toBeInTheDocument();
});
