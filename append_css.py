from pathlib import Path

css_path = Path('c:/Users/control/Desktop/page 1/styles.css')
content = css_path.read_text(encoding='utf-8')

append_css = """

/* ---- NEUMORPHIC REDESIGN & UI FIXES ---- */

/* 1. Improved Variables for Depth */
:root {
  --neu-shadow: 10px 10px 20px #b8c4d4, -10px -10px 20px #ffffff;
  --neu-shadow-hover: 6px 6px 12px #b8c4d4, -6px -6px 12px #ffffff;
  --neu-inner: inset 6px 6px 12px #b8c4d4, inset -6px -6px 12px #ffffff;
  --neu-active: inset 3px 3px 6px #b8c4d4, inset -3px -3px 6px #ffffff;
}

/* 2. Fix the Topbar (Sticky issue) */
.topbar {
  position: sticky !important;
  top: 0;
  z-index: 100 !important;
  background: rgba(224, 229, 236, 0.85) !important;
  backdrop-filter: blur(16px) !important;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05) !important;
}

/* 3. Make screen-grid a Split Pane on Desktop */
@media (min-width: 900px) {
  .screen-grid {
    display: grid !important;
    grid-template-columns: minmax(320px, 380px) 1fr !important;
    gap: 24px !important;
    align-items: start !important;
    max-width: 1400px !important;
    margin: 0 auto !important;
  }
  
  /* Make the second column (the details) sticky so it doesn't scroll away */
  .screen-stack:nth-child(2) {
    position: sticky !important;
    top: 90px !important;
    max-height: calc(100vh - 120px) !important;
    overflow-y: auto !important;
    padding-right: 10px !important;
  }
  
  /* Hide Ruta inicial when searching to save vertical space */
  .app-shell[data-query="true"] .onboarding-block {
    display: none !important;
  }
}

/* 4. Beautiful Interactive Tokens for Verses */
.token {
  display: inline-flex !important;
  flex-direction: column !important;
  align-items: center !important;
  background: var(--surface) !important;
  border: 1px solid transparent !important;
  border-radius: 8px !important;
  padding: 6px 10px !important;
  margin: 4px !important;
  box-shadow: var(--neu-shadow-hover) !important;
  transition: all 0.2s ease-in-out !important;
  cursor: pointer !important;
  color: var(--ink) !important;
}

.token small {
  color: var(--blue) !important;
  font-weight: 700 !important;
  font-size: 0.7rem !important;
  margin-top: 2px !important;
}

.token:hover:not(:disabled) {
  transform: translateY(-2px) !important;
  box-shadow: var(--neu-shadow) !important;
  border-color: #c8d8e4 !important;
}

.token:active:not(:disabled), .token.active {
  transform: translateY(1px) !important;
  box-shadow: var(--neu-active) !important;
  background: #d8e0e8 !important;
}

.token:disabled {
  opacity: 0.5 !important;
  box-shadow: none !important;
  cursor: not-allowed !important;
  background: transparent !important;
}

/* 5. General Card Aesthetic Lift */
.result-card, .verse-card, .lexicon-row, .saved-row, .module {
  background: var(--surface) !important;
  border-radius: 20px !important;
  box-shadow: var(--neu-shadow) !important;
  border: 1px solid rgba(255, 255, 255, 0.4) !important;
  margin-bottom: 16px !important;
}

.module {
  padding: 8px !important;
}

.result-card:hover, .verse-card:hover {
  border-color: rgba(255, 255, 255, 0.8) !important;
  box-shadow: 12px 12px 24px #b8c4d4, -12px -12px 24px #ffffff !important;
}

/* Fix token line display */
.token-line {
  display: flex !important;
  flex-wrap: wrap !important;
  gap: 4px !important;
  margin-top: 12px !important;
}

/* Make scrollbars better */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #c8d8e4;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #a3b1c6;
}

"""

if "NEUMORPHIC REDESIGN & UI FIXES" not in content:
    css_path.write_text(content + append_css, encoding='utf-8')
    print("CSS successfully appended!")
else:
    print("CSS already contains the update.")

