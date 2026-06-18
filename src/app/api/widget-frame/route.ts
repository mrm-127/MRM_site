export async function GET() {
  const html = `<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>دستیار MRM Intelligence</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300;400;500;600&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%;font-family:'Vazirmatn',system-ui,sans-serif;background:#f6f9fc;color:#15212e;font-size:14px;-webkit-font-smoothing:antialiased}
#root{display:flex;flex-direction:column;height:100%}
#header{background:#0e2a47;color:#fff;padding:12px 16px;display:flex;align-items:center;gap:10px;flex-shrink:0}
#header-dot{width:8px;height:8px;border-radius:50%;background:#16b8a6;animation:pulse 2s ease-in-out infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
#header span{font-size:13px;font-weight:600}
#messages{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px}
.msg{max-width:80%;padding:10px 14px;border-radius:18px;line-height:1.7;word-break:break-word;font-size:13px}
.msg.user{align-self:flex-start;background:#0e2a47;color:#fff;border-bottom-right-radius:4px}
.msg.bot{align-self:flex-end;background:#fff;color:#15212e;border:1px solid #e3e9f0;border-bottom-left-radius:4px;box-shadow:0 1px 3px rgba(14,42,71,.06)}
.typing{display:flex;gap:4px;padding:12px 14px;background:#fff;border:1px solid #e3e9f0;border-radius:18px;border-bottom-left-radius:4px;align-self:flex-end}
.typing span{width:6px;height:6px;border-radius:50%;background:#16b8a6;animation:bounce .8s infinite}
.typing span:nth-child(2){animation-delay:.15s}
.typing span:nth-child(3){animation-delay:.3s}
@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}
#footer{padding:10px 12px;border-top:1px solid #e3e9f0;background:#fff;flex-shrink:0;display:flex;gap:8px}
#input{flex:1;border:1.5px solid #e3e9f0;border-radius:12px;padding:9px 12px;font-family:inherit;font-size:13px;outline:none;transition:border-color .2s;resize:none;min-height:40px;max-height:100px}
#input:focus{border-color:#16b8a6}
#send{background:linear-gradient(135deg,#16b8a6,#34d3be);color:#fff;border:none;border-radius:12px;padding:9px 16px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;flex-shrink:0;transition:opacity .2s}
#send:disabled{opacity:.5;cursor:not-allowed}
</style>
</head>
<body>
<div id="root">
  <div id="header">
    <div id="header-dot"></div>
    <span>دستیار هوشمند MRM</span>
  </div>
  <div id="messages"></div>
  <div id="footer">
    <textarea id="input" rows="1" placeholder="پیام خود را بنویسید..."></textarea>
    <button id="send">ارسال</button>
  </div>
</div>
<script>
var sessionId = sessionStorage.getItem('mrm_sid') || (function(){
  var id = crypto.randomUUID();
  sessionStorage.setItem('mrm_sid', id);
  return id;
})();

var messagesEl = document.getElementById('messages');
var inputEl = document.getElementById('input');
var sendBtn = document.getElementById('send');

function addMessage(role, text) {
  var div = document.createElement('div');
  div.className = 'msg ' + role;
  div.textContent = text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
  return div;
}

function showTyping() {
  var div = document.createElement('div');
  div.className = 'typing';
  div.innerHTML = '<span></span><span></span><span></span>';
  div.id = 'typing';
  messagesEl.appendChild(div);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function hideTyping() {
  var el = document.getElementById('typing');
  if (el) el.remove();
}

addMessage('bot', 'سلام! من دستیار هوشمند MRM Intelligence هستم. چطور می\\u200cتوانم کمکتان کنم؟');

async function send() {
  var text = inputEl.value.trim();
  if (!text || sendBtn.disabled) return;
  inputEl.value = '';
  inputEl.style.height = 'auto';
  sendBtn.disabled = true;
  addMessage('user', text);
  showTyping();
  try {
    var res = await fetch('/api/chat', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ message: text, sessionId: sessionId, source: 'widget' })
    });
    var data = await res.json();
    hideTyping();
    addMessage('bot', data.reply || 'خطایی رخ داد.');
  } catch(e) {
    hideTyping();
    addMessage('bot', 'خطا در اتصال. لطفاً دوباره تلاش کنید.');
  } finally {
    sendBtn.disabled = false;
    inputEl.focus();
  }
}

sendBtn.addEventListener('click', send);
inputEl.addEventListener('keydown', function(e) {
  if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); }
});
inputEl.addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = Math.min(this.scrollHeight, 100) + 'px';
});
</script>
</body>
</html>`;

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "X-Frame-Options": "ALLOWALL",
    },
  });
}
