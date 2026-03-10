import { client } from "./sanityClient";

export async function getNotices() {
  return client.fetch(
    `*[_type == "notice"] | order(date desc)[0...10]`,
    {},
    { cache: "no-store" }
  );
}

export async function getEvents() {
  return client.fetch(
    `*[_type == "event"] | order(eventDate asc)`,
    {},
    { cache: "no-store" }
  );
}

export async function getGallery() {
  return client.fetch(
    `*[_type == "gallery"] | order(_createdAt desc) {
      title,
      "images": images[].asset->url
    }`,
    {},
    { cache: "no-store" }
  );
}

export async function getTeachers() {
  return client.fetch(
    `*[_type == "teacher"] | order(name asc) {
      name,
      subject,
      qualification,
      "photo": photo.asset->url
    }`,
    {},
    { cache: "no-store" }
  );
}
