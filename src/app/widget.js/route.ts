export async function GET(request: Request) {
  const origin = new URL(request.url).origin;

  const script = `(function(){
  var ORIGIN='${origin}';
  if(document.getElementById('mrm-widget'))return;

  var style=document.createElement('style');
  style.textContent=[
    '#mrm-widget-btn{position:fixed;bottom:24px;left:24px;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,#0e2a47,#16b8a6);color:#fff;border:none;cursor:pointer;box-shadow:0 4px 14px rgba(22,184,166,.45);display:flex;align-items:center;justify-content:center;z-index:999998;transition:transform .2s}',
    '#mrm-widget-btn:hover{transform:scale(1.08)}',
    '#mrm-widget-btn svg{width:26px;height:26px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}',
    '#mrm-widget-panel{position:fixed;bottom:92px;left:24px;width:360px;height:520px;border-radius:18px;box-shadow:0 8px 30px rgba(14,42,71,.2);overflow:hidden;z-index:999997;display:none;border:1px solid rgba(14,42,71,.1)}',
    '@media(max-width:420px){#mrm-widget-panel{width:calc(100vw - 24px);left:12px;height:480px}}',
  ].join('');
  document.head.appendChild(style);

  var btn=document.createElement('button');
  btn.id='mrm-widget-btn';
  btn.setAttribute('aria-label','چت با دستیار MRM');
  btn.innerHTML='<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
  document.body.appendChild(btn);

  var panel=document.createElement('div');
  panel.id='mrm-widget-panel';
  var frame=document.createElement('iframe');
  frame.src=ORIGIN+'/api/widget-frame';
  frame.style.cssText='width:100%;height:100%;border:none';
  frame.allow='clipboard-write';
  panel.appendChild(frame);
  document.body.appendChild(panel);

  var open=false;
  btn.addEventListener('click',function(){
    open=!open;
    panel.style.display=open?'block':'none';
    btn.innerHTML=open
      ?'<svg viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12"></path></svg>'
      :'<svg viewBox="0 0 24 24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
  });
})();`;

  return new Response(script, {
    headers: {
      "Content-Type": "application/javascript; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
