import { buildLegacyTheme } from "sanity";

const props = {
  "--almost-white": "#f0fdfa",
  "--almost-black": "#131c1c",
  "--bloggy-brand": "#5eead4",
  "--my-red": "#872b23",
  "--my-yellow": "#fff645",
  "--my-green": "#24ff2f",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--almost-black"],
  "--white": props["--almost-white"],
  "--gray": "#888",
  "--gray-base": "#888",
  "--component-bg": props["--almost-black"],
  "--component-text-color": props["--almost-white"],
  /* Brand */
  "--brand-primary": props["--bloggy-brand"],
  // Default button
  "--default-button-color": "#888",
  "--default-button-primary-color": props["--bloggy-brand"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],
  /* State */
  "--state-info-color": props["--bloggy-brand"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],
  /* Navbar */
  "--main-navigation-color": props["--almost-black"],
  "--main-navigation-color--inverted": props["--almost-white"],

  "--focus-color": props["--bloggy-brand"],
});
