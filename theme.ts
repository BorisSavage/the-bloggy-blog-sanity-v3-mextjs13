import { buildLegacyTheme } from "sanity";

const props = {
  "--almost-white": "#ecfeff",
  "--almost-black": "#0f172a",
  "--bloggy-brand": "#67e8f9",
  "--my-red": "#872b23",
  "--my-yellow": "#e8e03f",
  "--my-green": "#1bc423",
};

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--almost-black"],
  "--white": props["--almost-white"],
  "--gray": "#777",
  "--gray-base": "#777",
  "--component-bg": props["--almost-black"],
  "--component-text-color": props["--almost-white"],
  /* Brand */
  "--brand-primary": props["--bloggy-brand"],
  // Default button
  "--default-button-color": "#777",
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
