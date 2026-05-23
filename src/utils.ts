/**
 * Converts third-party cloud sharing links (Google Drive, Dropbox, etc.) 
 * into direct, raw streamable URLs compatible with HTML5 video and image tags.
 */
export function resolveMediaUrl(url: string | undefined): string {
  if (!url) return "";

  // Trim whitespace
  let cleanUrl = url.trim();

  // 1. Handle Google Drive URLs
  // Standard web view: https://drive.google.com/file/d/1A2B3C-D4E/view?usp=sharing
  // Sharing URL: https://drive.google.com/uc?id=1A2B3C-D4E&export=download
  // Direct folder share etc.
  if (cleanUrl.includes("drive.google.com")) {
    // Extract ID using regex
    const fileIdMatch = cleanUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || cleanUrl.match(/[?&]id=([a-zA-Z0-9_-]+)/);
    if (fileIdMatch && fileIdMatch[1]) {
      const fileId = fileIdMatch[1];
      // docs.google.com with uc?export=download & id is the most reliable direct stream/download endpoint
      return `https://docs.google.com/uc?export=download&id=${fileId}`;
    }
  }

  // 2. Handle Dropbox URLs
  // Dropbox share link ends with ?dl=0. Change it to ?raw=1 for native stream
  // E.g. https://www.dropbox.com/scl/fi/abc123xyz/video.mov?rlkey=xyz&dl=0
  if (cleanUrl.includes("dropbox.com")) {
    if (cleanUrl.includes("dl=0")) {
      return cleanUrl.replace("dl=0", "raw=1");
    } else if (!cleanUrl.includes("raw=1") && !cleanUrl.includes("dl=1")) {
      // Append raw=1
      const separator = cleanUrl.includes("?") ? "&" : "?";
      return `${cleanUrl}${separator}raw=1`;
    }
  }

  // 3. Handle YouTube or Vimeo embed strings if they want to give those eventually
  // But HTML5 video won't stream standard YouTube video natively.
  // We can warn or handle it gracefully, or just return the cleanUrl if it's already direct.

  return cleanUrl;
}
