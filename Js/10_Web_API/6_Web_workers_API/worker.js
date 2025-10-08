// ⚙️ 3. Web Workers API — “Run JavaScript in Background”
// 💡 What is a Web Worker?

// Normally, when JavaScript runs, it can make the page freeze until it finishes.

// Web Workers let you run JavaScript in the background — so your webpage stays responsive even when heavy work is happening.

// 👇 Real-Life Example:

// Imagine you are on a website that’s:

// Uploading a large video 🎥

// While you’re still able to type a comment 💬

// That’s Web Workers in action — background JavaScript!

// ✅ Full Example Code

// 1️⃣ Create a Worker File — worker.js

// worker.js
let i = 0;
function timedCount() {
  i++;
  postMessage(i); // Send message back to main HTML
  setTimeout(timedCount, 500); // Repeat every 0.5 sec
}
timedCount();




