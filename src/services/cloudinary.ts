export async function uploadToCloudinary(
  file: File,
  resourceType: "image" | "video"
) {
  const cloudName = "damfbrmqf";
  const uploadPreset = "papaflix_upload";

  const formData = new FormData();

  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/${resourceType}/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  return data.secure_url;
}