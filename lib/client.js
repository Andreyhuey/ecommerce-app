import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "snpqcvox",
  dataset: "production",
  ignoreBrowserTokenWarning: true,
  apiVersion: "2022-07-19",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

export const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
