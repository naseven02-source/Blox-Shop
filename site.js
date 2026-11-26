// ===== ຟັງຊັນກາງ ໃຊ້ທຸກໜ້າ =====
const db = (window.supabase && SUPABASE_URL.indexOf("YOUR_") < 0)
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

function esc(s) {
  return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
  });
}

function fmt(n) { return Number(n || 0).toLocaleString("en-US") + " ₭"; }

function chatLink(msg) {
  if (SITE.whatsapp) return "https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(msg);
  return SITE.chatUrl;
}

function setupCommon() {
  document.getElementById("bMain").textContent = SITE.brandMain;
  document.getElementById("bAcc").textContent = SITE.brandAccent;
  var fab = document.getElementById("fab");
  if (fab) fab.href = chatLink("ສະບາຍດີ ຢາກສອບຖາມສິນຄ້າ");
  var snow = document.getElementById("snow");
  if (snow) {
    for (var i = 0; i < 30; i++) {
      var f = document.createElement("div");
      f.className = "flake"; f.textContent = "❄";
      f.style.left = Math.random() * 100 + "vw";
      f.style.fontSize = (10 + Math.random() * 14) + "px";
      f.style.animationDuration = (6 + Math.random() * 8) + "s";
      f.style.animationDelay = (-Math.random() * 10) + "s";
      snow.appendChild(f);
    }
  }
}
