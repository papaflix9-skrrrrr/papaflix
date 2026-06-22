export function getSavedVideos(): string[] {
  const data = localStorage.getItem("savedVideos");

  if (!data) {
    return [];
  }

  return JSON.parse(data);
}

export function saveVideo(videoId: string) {
  const current = getSavedVideos();

  if (!current.includes(videoId)) {
    localStorage.setItem(
      "savedVideos",
      JSON.stringify([...current, videoId])
    );
  }
}

export function removeVideo(videoId: string) {
  const current = getSavedVideos();

  localStorage.setItem(
    "savedVideos",
    JSON.stringify(
      current.filter((id) => id !== videoId)
    )
  );
}