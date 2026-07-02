listener = '''

// Setup BroadcastChannel to listen for commands from sibling iframes (like iframe-leccion)
const betelChannel = new BroadcastChannel('betel_channel');
betelChannel.onmessage = (event) => {
  if (event.data && event.data.action === 'openStrongTab') {
    const lexicoBtn = document.querySelector('[data-tab="lexico"]');
    if (lexicoBtn) {
      lexicoBtn.click();
    }
  }
};
'''
with open('c:/Users/control/Desktop/page 1/app.js', 'a', encoding='utf-8') as f:
    f.write(listener)
print('Appended BroadcastChannel listener to app.js')
