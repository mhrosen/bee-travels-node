import path from "path";
import { promises as fs } from "fs";

const DESTINATIONS_PATH = path.join(
  __dirname,
  "./../../data/destinations.json"
);

// Cities with these words in the city name are lower case
const lowercaseExceptions = ["es", "de", "au"];

function capitalize(text) {
  text = text
    .toLowerCase()
    .split("-")
    .map((s) =>
      lowercaseExceptions.includes(s)
        ? s
        : s.charAt(0).toUpperCase() + s.substring(1)
    );

  // The city of Port-au-Prince keeps "-" between the words of the city
  return text.includes(lowercaseExceptions[2])
    ? text.join("-")
    : text.join(" ");
}

async function parseMetadata(file, allData) {
  const content = await fs.readFile(file);
  const metadata = JSON.parse(content);
  if (allData) {
    return metadata;
  }
  return metadata.map((item) => ({
    country: item.country,
    city: item.city,
  }));
}

export async function getCities(context) {
  context.start("parseMetadata");
  const metadata = await parseMetadata(DESTINATIONS_PATH, false);
  context.stop();
  return metadata;
}

export async function getCitiesForCountry(country, context) {
  context.start("parseMetadata");
  const metadata = await parseMetadata(DESTINATIONS_PATH, false);
  context.stop();
  const citiesData = metadata.filter((c) => c.country === capitalize(country));
  return citiesData;
}

export async function getCity(country, city, context) {
  context.start("parseMetadata");
  const metadata = await parseMetadata(DESTINATIONS_PATH, true);
  context.stop();
  const cityData = metadata.find(
    (c) => c.city === capitalize(city) && c.country === capitalize(country)
  );
  return cityData;
}

export async function readinessCheck() {
  return true;
}
