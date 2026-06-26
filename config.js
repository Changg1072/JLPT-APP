// config.js
const GEMINI_API_KEYS = [
  "AQ." + "Ab8RN6K1VsofVzAXV2sgNnTrjB34yFb5V9FpkJXdV9GILeWJ1Q",
  "AQ." + "Ab8RN6KOkpAsu7GAKv4B6hhGWEF-e76Klfaxqv66UGJqHVpxSg",
  "AQ." + "Ab8RN6Jz2jwza3zCuELQhBEtUmVUmrQLbMcMZbJ6A_wTKiKgxQ"
];

// Hàm lấy API key hiện tại (mặc định lấy key đầu tiên)
let currentKeyIndex = 0;

function getApiKey() {
  return GEMINI_API_KEYS[currentKeyIndex];
}

// Hàm này sẽ được gọi khi một API báo lỗi
function switchToNextApiKey() {
  currentKeyIndex = (currentKeyIndex + 1) % GEMINI_API_KEYS.length;
  console.log("Đang chuyển sang API Key mới: " + (currentKeyIndex + 1));
}