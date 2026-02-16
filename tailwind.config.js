/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",        // ตรวจสอบว่ามี app
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // ต้องสะกดว่า components ตามโฟลเดอร์จริง
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}