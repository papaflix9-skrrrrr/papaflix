import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "./firebase";

type CreateVideoData = {
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  tags: string[];
};

export async function getVideos() {
  const snapshot = await getDocs(collection(db, "videos"));

  return snapshot.docs.map((document) => {
    const data = document.data();

    return {
      id: document.id,
      title: data.title ?? "",
      description: data.description ?? "",
      thumbnail: data.thumbnail ?? "",
      videoUrl: data.videoUrl ?? "",
      tags: data.tags ?? [],
      views: data.views ?? 0,
      published: data.published ?? true,
    };
  });
}

export async function getVideoById(id: string) {
  const ref = doc(db, "videos", id);
  const snapshot = await getDoc(ref);

  if (!snapshot.exists()) {
    return null;
  }

  const data = snapshot.data();

  return {
    id: snapshot.id,
    title: data.title ?? "",
    description: data.description ?? "",
    thumbnail: data.thumbnail ?? "",
    videoUrl: data.videoUrl ?? "",
    tags: data.tags ?? [],
    views: data.views ?? 0,
    published: data.published ?? true,
  };
}

export async function createVideo(data: CreateVideoData) {
  return addDoc(collection(db, "videos"), {
    title: data.title,
    description: data.description,
    thumbnail: data.thumbnail,
    videoUrl: data.videoUrl,
    tags: data.tags,
    views: 0,
    published: true,
    createdAt: serverTimestamp(),
  });
}

export async function deleteVideo(videoId: string) {
  const ref = doc(db, "videos", videoId);

  return deleteDoc(ref);
}