import { render, screen } from "@testing-library/react";
import HomeHeroSection from "./HomeHeroSection.jsx";

// test("Check GNews home page title", () => {
//   render(<HomeHeroSection />);
//   const TitleElement = screen.getByText(
//     /Search The Most Updated News From Our Website/i
//   );

//   expect(TitleElement).toBeInTheDocument();
// });

// test("Check GNews home page has correct className", () => {
//   render(<HomeHeroSection />);
//   const HomeHeroTestid = screen.getByTestId("homehero-section-testing");
//   expect(HomeHeroTestid).toBeInTheDocument();

//   //testing for className
//   expect(HomeHeroTestid).toHaveClass(
//     "bg-[url('./images/gnews-hero-image.jpg')]"
//   );
//   expect(HomeHeroTestid).toHaveClass("bg-no-repeat");
//   expect(HomeHeroTestid).toHaveClass("bg-center");
// });
