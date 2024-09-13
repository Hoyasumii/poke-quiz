export async function preloadImage(imageSrc: string) {
  const response = await fetch(imageSrc);
  const buffer = await response.arrayBuffer();
  const imageBase64 = Buffer.from(buffer).toString("base64");

  return `data:image/png;base64,${imageBase64}`;
}
