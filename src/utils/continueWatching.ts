type Progress = {
  currentTime: number;
  duration: number;
  updatedAt: number;
};

const STORAGE_KEY = "@papaflix:continue-watching";

function getStorage(): Record<string, Progress> {
  if (typeof window === "undefined") {
    return {};
  }

  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return {};
  }

  try {
    return JSON.parse(data);
  } catch {
    return {};
  }
}

function saveStorage(storage: Record<string, Progress>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storage));
}

export function saveProgress(
  videoId: string,
  currentTime: number,
  duration: number
) {
  const storage = getStorage();

  storage[videoId] = {
    currentTime,
    duration,
    updatedAt: Date.now(),
  };

  saveStorage(storage);
}

export function getProgress(videoId: string) {
  const storage = getStorage();

  return storage[videoId];
}

export function removeProgress(videoId: string) {
  const storage = getStorage();

  delete storage[videoId];

  saveStorage(storage);
}

export function getContinueWatching() {
  const storage = getStorage();

  return Object.entries(storage)
    .sort((a, b) => b[1].updatedAt - a[1].updatedAt)
    .map(([videoId, progress]) => ({
      videoId,
      ...progress,
    }));
}