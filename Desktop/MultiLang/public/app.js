const LANG_KEYS = ['en', 'fr', 'es', 'pt', 'hi', 'mr', 'kn', 'te', 'pa', 'sa'];
const LANG_LABELS = {
  en: 'English', fr: 'Français', es: 'Español', pt: 'Português',
  hi: 'हिंदी', mr: 'मराठी', kn: 'ಕನ್ನಡ', te: 'తెలుగు', pa: 'ਪੰਜਾਬੀ', sa: 'संस्कृतम्'
};

// Which script each language uses (Sanscript scheme names). en/es/pt = no conversion.
const LANG_TO_SCRIPT = {
  hi: 'devanagari', mr: 'devanagari', sa: 'devanagari',
  te: 'telugu', kn: 'kannada', pa: 'gurmukhi',
  en: null, es: null, pt: null
};

const LANG_DIGIT_MAPS = {
  hi: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
  mr: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
  sa: ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'],
  te: ['౦', '౧', '౨', '౩', '౪', '౫', '౬', '౭', '౮', '౯'],
  kn: ['೦', '೧', '೨', '೩', '೪', '೫', '೬', '೭', '೮', '೯'],
  pa: ['੦', '੧', '੨', '੩', '੪', '੫', '੬', '੭', '੮', '੯']
};

// English → target language phrase maps (lowercase keys). Longest phrases first when iterating.
const PHRASE_MAPS = {
  fr: {
    'good morning': 'Bonjour', 'good afternoon': 'Bon après-midi', 'good evening': 'Bonsoir',
    'good night': 'Bonne nuit', 'good day': 'Bonjour', 'good bye': 'Au revoir', 'goodbye': 'Au revoir',
    'hello': 'Bonjour', 'hi': 'Salut', 'hey': 'Salut',
    'thank you': 'Merci', 'thanks': 'Merci', 'please': 'S\'il vous plaît', 'sorry': 'Désolé',
    'yes': 'Oui', 'no': 'Non', 'ok': 'D\'accord', 'okay': 'D\'accord',
    'how are you': 'Comment allez-vous', 'how are you doing': 'Comment allez-vous',
    'i am fine': 'Je vais bien', 'i\'m fine': 'Je vais bien', 'i am good': 'Je vais bien',
    'see you': 'À bientôt', 'see you later': 'À bientôt', 'see you soon': 'À bientôt',
    'welcome': 'Bienvenue', 'congratulations': 'Félicitations', 'good luck': 'Bonne chance',
    'happy birthday': 'Joyeux anniversaire', 'happy new year': 'Bonne année',
    'good': 'bon', 'morning': 'matin', 'night': 'nuit', 'day': 'journée',
    'water': 'eau', 'food': 'nourriture', 'love': 'amour', 'friend': 'ami', 'friends': 'amis',
    'beautiful': 'beau', 'nice': 'sympa', 'great': 'super', 'wonderful': 'merveilleux',
    'please help': 'Aidez-moi s\'il vous plaît', 'help': 'aide', 'help me': 'Aidez-moi',
    'i love you': 'Je t\'aime', 'miss you': 'Tu me manques', 'take care': 'Prends soin de toi',
    'my name is': 'Je m\'appelle', 'i am': 'Je suis', 'what is your name': 'Comment vous appelez-vous',
    'this is': 'Ceci est', 'this': 'ceci', 'is': 'est'
  },
  es: {
    'good morning': 'Buenos días', 'good afternoon': 'Buenas tardes', 'good evening': 'Buenas tardes',
    'good night': 'Buenas noches', 'good day': 'Buenos días', 'good bye': 'Adiós', 'goodbye': 'Adiós',
    'hello': 'Hola', 'hi': 'Hola', 'hey': 'Hola',
    'thank you': 'Gracias', 'thanks': 'Gracias', 'please': 'Por favor', 'sorry': 'Lo siento',
    'yes': 'Sí', 'no': 'No', 'ok': 'Vale', 'okay': 'Vale',
    'how are you': '¿Cómo estás?', 'how are you doing': '¿Cómo estás?',
    'i am fine': 'Estoy bien', 'i\'m fine': 'Estoy bien', 'i am good': 'Estoy bien',
    'see you': 'Hasta luego', 'see you later': 'Hasta luego', 'see you soon': 'Hasta pronto',
    'welcome': 'Bienvenido', 'congratulations': 'Felicidades', 'good luck': 'Buena suerte',
    'happy birthday': 'Feliz cumpleaños', 'happy new year': 'Feliz Año Nuevo',
    'good': 'bueno', 'morning': 'mañana', 'night': 'noche', 'day': 'día',
    'water': 'agua', 'food': 'comida', 'love': 'amor', 'friend': 'amigo', 'friends': 'amigos',
    'beautiful': 'hermoso', 'nice': 'agradable', 'great': 'genial', 'wonderful': 'maravilloso',
    'help': 'ayuda', 'help me': 'Ayúdame', 'i love you': 'Te quiero', 'take care': 'Cuídate',
    'my name is': 'Me llamo', 'i am': 'Soy', 'what is your name': '¿Cómo te llamas?',
    'this is': 'Esto es', 'this': 'esto', 'is': 'es'
  },
  pt: {
    'good morning': 'Bom dia', 'good afternoon': 'Boa tarde', 'good evening': 'Boa noite',
    'good night': 'Boa noite', 'good day': 'Bom dia', 'good bye': 'Tchau', 'goodbye': 'Tchau',
    'hello': 'Olá', 'hi': 'Oi', 'hey': 'Oi',
    'thank you': 'Obrigado', 'thanks': 'Obrigado', 'please': 'Por favor', 'sorry': 'Desculpe',
    'yes': 'Sim', 'no': 'Não', 'ok': 'Ok', 'okay': 'Ok',
    'how are you': 'Como você está?', 'how are you doing': 'Como você está?',
    'i am fine': 'Estou bem', 'i\'m fine': 'Estou bem', 'i am good': 'Estou bem',
    'see you': 'Até mais', 'see you later': 'Até logo', 'see you soon': 'Até logo',
    'welcome': 'Bem-vindo', 'congratulations': 'Parabéns', 'good luck': 'Boa sorte',
    'happy birthday': 'Feliz aniversário', 'happy new year': 'Feliz Ano Novo',
    'good': 'bom', 'morning': 'manhã', 'night': 'noite', 'day': 'dia',
    'water': 'água', 'food': 'comida', 'love': 'amor', 'friend': 'amigo', 'friends': 'amigos',
    'beautiful': 'bonito', 'nice': 'legal', 'great': 'ótimo', 'wonderful': 'maravilhoso',
    'help': 'ajuda', 'help me': 'Me ajude', 'i love you': 'Eu te amo', 'take care': 'Cuide-se',
    'my name is': 'Meu nome é', 'i am': 'Eu sou', 'what is your name': 'Qual é o seu nome?',
    'this is': 'Isto é', 'this': 'isto', 'is': 'é'
  },
  hi: {
    'good morning': 'सुप्रभात', 'good night': 'शुभ रात्रि', 'goodbye': 'अलविदा', 'bye': 'अलविदा',
    'hello': 'नमस्कार', 'hi': 'नमस्कार', 'hey': 'नमस्कार', 'namaste': 'नमस्कार', 'namaskar': 'नमस्कार',
    'thank you': 'धन्यवाद', 'thanks': 'धन्यवाद', 'please': 'कृपया', 'sorry': 'क्षमा करें',
    'yes': 'हाँ', 'no': 'नहीं', 'ok': 'ठीक है', 'okay': 'ठीक है',
    'how are you': 'आप कैसे हैं?', 'see you': 'फिर मिलते हैं', 'welcome': 'स्वागत है',
    'good luck': 'शुभकामनाएँ', 'happy birthday': 'जन्मदिन मुबारक', 'happy new year': 'नया साल मुबारक',
    'good': 'अच्छा', 'morning': 'सुबह', 'night': 'रात', 'water': 'पानी', 'food': 'खाना',
    'love': 'प्यार', 'friend': 'दोस्त', 'friends': 'दोस्त', 'help': 'मदद', 'i love you': 'मैं तुमसे प्यार करता हूँ',
    'my name is': 'मेरा नाम', 'i am': 'मैं', 'jaideep': 'जयदीप', 'what is your name': 'आपका नाम क्या है', 'come': 'आओ', 'go': 'जाओ',
    'this is': 'यह है', 'this': 'यह', 'is': 'है'
  },
  mr: {
    'good morning': 'शुभ प्रभात', 'good night': 'शुभ रात्री', 'goodbye': 'नमस्कार', 'bye': 'नमस्कार',
    'hello': 'नमस्कार', 'hi': 'नमस्कार', 'hey': 'नमस्कार', 'namaste': 'नमस्कार', 'namaskar': 'नमस्कार',
    'thank you': 'धन्यवाद', 'thanks': 'धन्यवाद', 'please': 'कृपया', 'sorry': 'माफ करा',
    'yes': 'होय', 'no': 'नाही', 'ok': 'ठीक आहे',
    'how are you': 'तुम्ही कसे आहात?', 'welcome': 'स्वागत आहे', 'good': 'चांगले',
    'morning': 'सकाळ', 'water': 'पाणी', 'food': 'अन्न', 'love': 'प्रेम', 'friend': 'मित्र',
    'my name is': 'माझे नाव', 'i am': 'मी', 'jaideep': 'जयदीप', 'what is your name': 'तुमचे नाव काय आहे', 'come': 'ये', 'go': 'जा',
    'this is': 'हे आहे', 'this': 'हे', 'is': 'आहे'
  },
  kn: {
    'good morning': 'ಶುಭೋದಯ', 'good night': 'ಶುಭ ರಾತ್ರಿ', 'hello': 'ನಮಸ್ಕಾರ', 'hi': 'ನಮಸ್ಕಾರ', 'namaste': 'ನಮಸ್ಕಾರ', 'namaskar': 'ನಮಸ್ಕಾರ',
    'thank you': 'ಧನ್ಯವಾದ', 'thanks': 'ಧನ್ಯವಾದ', 'please': 'ದಯವಿಟ್ಟು', 'sorry': 'ಕ್ಷಮಿಸಿ',
    'yes': 'ಹೌದು', 'no': 'ಇಲ್ಲ', 'ok': 'ಸರಿ', 'welcome': 'ಸ್ವಾಗತ', 'good': 'ಒಳ್ಳೆಯದು',
    'morning': 'ಬೆಳಿಗ್ಗೆ', 'water': 'ನೀರು', 'food': 'ಆಹಾರ', 'love': 'ಪ್ರೀತಿ', 'friend': 'ಸ್ನೇಹಿತ',
    'my name is': 'ನನ್ನ ಹೆಸರು', 'what is your name': 'ನಿಮ್ಮ ಹೆಸರು ಏನು',
    'this is': 'ಇದು ಆಗಿದೆ', 'this': 'ಇದು', 'is': 'ಆಗಿದೆ'
  },
  te: {
    'good morning': 'శుభోదయం', 'good night': 'శుభ రాత్రి', 'hello': 'నమస్కారం', 'hi': 'నమస్కారం', 'namaste': 'నమస్కారం', 'namaskar': 'నమస్కారం',
    'thank you': 'ధన్యవాదాలు', 'thanks': 'ధన్యవాదాలు', 'please': 'దయచేసి', 'sorry': 'క్షమించండి',
    'yes': 'అవును', 'no': 'కాదు', 'ok': 'సరే', 'welcome': 'స్వాగతం', 'good': 'మంచి',
    'morning': 'ఉదయం', 'water': 'నీరు', 'food': 'ఆహారం', 'love': 'ప్రేమ', 'friend': 'స్నేహితుడు',
    'my name is': 'నా పేరు', 'what is your name': 'మీ పేరు ఏమిటి',
    'this is': 'ఇది ఉంది', 'this': 'ఇది', 'is': 'ఉంది'
  },
  pa: {
    'good morning': 'ਸ਼ੁਭ ਸਵੇਰ', 'good night': 'ਸ਼ੁਭ ਰਾਤ', 'hello': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', 'hi': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', 'namaste': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', 'namaskar': 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ',
    'thank you': 'ਧੰਨਵਾਦ', 'thanks': 'ਧੰਨਵਾਦ', 'please': 'ਕ੍ਰਿਪਾ ਕਰਕੇ', 'sorry': 'ਮਾਫ ਕਰੋ',
    'yes': 'ਹਾਂ', 'no': 'ਨਹੀਂ', 'ok': 'ਠੀਕ ਹੈ', 'welcome': 'ਜੀ ਆਇਆ ਨੂੰ', 'good': 'ਚੰਗਾ',
    'morning': 'ਸਵੇਰ', 'water': 'ਪਾਣੀ', 'food': 'ਖਾਣਾ', 'love': 'ਪਿਆਰ', 'friend': 'ਦੋਸਤ',
    'my name is': 'ਮੇਰਾ ਨਾਮ', 'what is your name': 'ਤੁਹਾਡਾ ਨਾਮ ਕੀ ਹੈ',
    'this is': 'ਇਹ ਹੈ', 'this': 'ਇਹ', 'is': 'ਹੈ'
  },
  sa: {
    'good morning': 'सुप्रभातम्', 'good night': 'शुभरात्रिः', 'hello': 'नमस्ते', 'hi': 'नमस्ते', 'namaste': 'नमस्ते', 'namaskar': 'नमस्कारः',
    'thank you': 'धन्यवादः', 'thanks': 'धन्यवादः', 'please': 'कृपया', 'sorry': 'क्षम्यताम्',
    'yes': 'आम्', 'no': 'न', 'ok': 'अस्तु', 'welcome': 'स्वागतम्', 'good': 'शोभनम्',
    'morning': 'प्रभातम्', 'water': 'जलम्', 'food': 'अन्नम्', 'love': 'प्रेम', 'friend': 'मित्रम्',
    'my name is': 'मम नाम', 'what is your name': 'भवतः नाम किम्',
    'this is': 'एतत् अस्ति', 'this': 'एतत्', 'is': 'अस्ति'
  }
};

const LATIN_RUN = /[a-zA-Z]+/g;

function escapeRegex(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function translatePhrasesWithMap(text, map) {
  if (!text || !map) return text;
  const trimmed = text.trim().toLowerCase();
  if (!trimmed) return text;
  const direct = map[trimmed];
  if (direct) return direct;
  let out = text;
  const entries = Object.entries(map).sort((a, b) => b[0].length - a[0].length);
  for (const [en, translated] of entries) {
    const re = new RegExp('\\b' + escapeRegex(en) + '\\b', 'gi');
    out = out.replace(re, translated);
  }
  return out;
}

function convertDigitsToLang(text, lang) {
  const digits = LANG_DIGIT_MAPS[lang];
  if (!digits || !text) return text;
  return text.replace(/\d/g, (d) => digits[Number(d)] || d);
}

// Convert segment: first phrase translation (if map exists), then transliterate remaining Latin to script.
function convertSegment(text, lang) {
  if (!text || lang === 'en') return text;
  let out = text;
  const phraseMap = PHRASE_MAPS[lang];
  if (phraseMap) {
    // Force-translate "hello" / "hi" first so they never get transliterated (e.g. to एल्ल्ओ).
    const helloStr = phraseMap['hello'] || phraseMap['hi'];
    if (helloStr) {
      out = out.replace(/\bhello\b/gi, helloStr);
      out = out.replace(/\bhi\b/gi, helloStr);
    }
    out = translatePhrasesWithMap(out, phraseMap);
  }
  if (LANG_TO_SCRIPT[lang]) {
    out = out.replace(LATIN_RUN, (lat) => transliterateToLang(lat, lang));
  }
  out = convertDigitsToLang(out, lang);
  return out;
}

function transliterateToLang(text, lang) {
  if (!text || typeof Sanscript === 'undefined') return text;
  const script = LANG_TO_SCRIPT[lang];
  if (!script) return text;
  try {
    const opts = lang === 'hi' ? { syncope: true } : {};
    return Sanscript.t(text, 'itrans', script, opts);
  } catch (e) {
    return text;
  }
}

// Convert full string: phrase translation + optional script transliteration.
function transliterateString(val, lang) {
  if (lang === 'en') return val;
  return convertSegment(val, lang);
}

async function translateByApi(text, targetLang) {
  const content = String(text || '').trim();
  if (!content || !targetLang || targetLang === 'en') return '';
  try {
    const res = await fetch('/api/translate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: content,
        sourceLang: 'auto',
        targetLang
      }),
    });
    const data = await res.json();
    if (data && data.ok && data.translatedText) {
      return String(data.translatedText).trim();
    }
  } catch {}
  return '';
}

async function translateTextWithFallback(text, lang) {
  const content = String(text || '').trim();
  if (!content) return '';
  if (lang === 'en') return content;

  // Fast local conversion first (phrase map + transliteration + digits).
  const local = transliterateString(content, lang);
  // Full sentence translation fallback from API.
  const apiTranslated = await translateByApi(content, lang);
  return apiTranslated || local;
}

/** Translate incoming chat text into the viewer's UI language (auto-detect source, then optional explicit pair). */
async function translateForViewer(text, senderLangApp, targetLangApp) {
  const content = String(text || '').trim();
  if (!content) return '';
  const tgt = String(targetLangApp || 'en').toLowerCase();
  const sender = String(senderLangApp || 'auto').toLowerCase();

  async function callApi(sourceLang) {
    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: content,
          sourceLang,
          targetLang: tgt,
        }),
      });
      const data = await res.json();
      if (data && data.ok && data.translatedText) {
        return String(data.translatedText).trim();
      }
    } catch {}
    return '';
  }

  // 1) Auto-detect actual language of the text (handles wrong/missing userLang on old messages).
  let out = await callApi('auto');
  if (out && out !== content) return out;

  // 2) If we know the sender's UI language and it differs from yours, try an explicit pair (helps when auto fails).
  if (sender && sender !== 'auto' && sender !== tgt) {
    out = await callApi(sender);
    if (out && out !== content) return out;
  }

  // 3) Best effort: use any successful response even if unchanged, else original.
  if (out) return out;
  return content;
}

function incomingMessageNeedsTranslation(msg, isSent) {
  if (isSent) return false;
  return !!(msg.text && String(msg.text).trim());
}

// On space: convert the word/phrase just typed (before cursor) to target language.
function convertCurrentWordOnSpace(inputEl, lang) {
  if (lang === 'en') return;
  const val = inputEl.value;
  const cursor = inputEl.selectionStart;
  const wordStart = val.slice(0, cursor).replace(/\s+$/, '').lastIndexOf(' ') + 1;
  const word = val.slice(wordStart, cursor).trim();
  if (!word || !/[a-zA-Z]/.test(word)) return;
  const converted = convertSegment(word, lang);
  if (converted === word) return;
  const newVal = val.slice(0, wordStart) + converted + val.slice(cursor);
  inputEl.value = newVal;
  inputEl.setSelectionRange(wordStart + converted.length, wordStart + converted.length);
}

// Live conversion: current word/phrase → target language (phrases + script).
function applyTransliteration(inputEl, lang) {
  if (lang === 'en') return;
  const val = inputEl.value;
  const wordStart = val.lastIndexOf(' ') + 1;
  const word = val.slice(wordStart).trim();
  if (!word || !/[a-zA-Z]/.test(word)) return;
  const converted = convertSegment(word, lang);
  if (converted === word) return;
  const newVal = val.slice(0, wordStart) + converted;
  inputEl.value = newVal;
  inputEl.setSelectionRange(newVal.length, newVal.length);
}

let locale = {};
let currentLang = localStorage.getItem('multilang-lang') || 'en';
let currentTheme = localStorage.getItem('nexova-theme') || 'classic';
let currentWallpaper = localStorage.getItem('nexova-wallpaper') || 'scenic';
let socket = null;
let currentRoomId = null;
let myName = '';
let myLang = currentLang;

document.body.setAttribute('data-theme', currentTheme);
document.body.setAttribute('data-wallpaper', currentWallpaper);

const RECENT_ROOMS_KEY = 'nexova-recent-rooms';
let roomListCache = [];
/** Messages in the current room (for re-translate when UI language changes). */
let roomMessagesCache = [];

function getMessageId(msg) {
  const id = msg._id ?? msg.id;
  if (id == null) return '';
  return String(id);
}

/** Normalize for reliable search (Unicode, zero-width chars). */
function normalizeForSearch(s) {
  return String(s || '')
    .normalize('NFC')
    .toLowerCase()
    .replace(/\u200b/g, '');
}

/** Case-insensitive match on message text, sender name, link URL, and file name. */
function messageMatchesSearch(msg, q) {
  if (!q) return true;
  const parts = [String(msg.text || ''), String(msg.userName || '')];
  const att = msg.attachment;
  if (att) {
    if (att.url) parts.push(String(att.url));
    if (att.name) parts.push(String(att.name));
  }
  return normalizeForSearch(parts.join(' ')).includes(normalizeForSearch(q));
}

let chatSearchDebounceTimer = null;

function applyChatSearchHighlights(container, qRaw, qLower) {
  if (!qRaw || !container) return;
  const children = [...container.children].filter((el) => el.classList.contains('msg'));
  children.forEach((el, idx) => {
    if (el.hidden) return;
    let msg = null;
    if (el.dataset.id) {
      msg = roomMessagesCache.find((m) => getMessageId(m) === el.dataset.id);
    }
    if (!msg) msg = roomMessagesCache[idx];
    if (!msg) return;

    const textEl = el.querySelector('.msg-text');
    // Highlight from what's on screen; allow match via cache text too (filter uses cache).
    // Skip while "Translating..." so we don't mark the wrong string; translate callback re-runs search.
    if (textEl && !textEl.classList.contains('msg-text-translating')) {
      const visible = textEl.textContent || '';
      const cacheMsgText = String(msg.text || '');
      const textMatchesQuery =
        textIncludesQueryInsensitive(visible, qLower) || textIncludesQueryInsensitive(cacheMsgText, qLower);
      if (textMatchesQuery && visible.trim()) {
        if (!textEl.dataset.searchPlain) textEl.dataset.searchPlain = visible;
        textEl.innerHTML = highlightText(textEl.dataset.searchPlain, qRaw);
      }
    }

    const authorEl = el.querySelector('.msg-author');
    if (authorEl && authorEl.textContent && textIncludesQueryInsensitive(authorEl.textContent, qLower)) {
      if (!authorEl.dataset.searchPlain) authorEl.dataset.searchPlain = authorEl.textContent;
      authorEl.innerHTML = highlightText(authorEl.dataset.searchPlain, qRaw);
    }

    el.querySelectorAll('a.msg-attachment-link').forEach((a) => {
      if (a.textContent && textIncludesQueryInsensitive(a.textContent, qLower)) {
        if (!a.dataset.searchPlain) a.dataset.searchPlain = a.textContent;
        a.innerHTML = highlightText(a.dataset.searchPlain, qRaw);
      }
    });

    el.querySelectorAll('a.msg-attachment-doc-link').forEach((a) => {
      if (a.textContent && textIncludesQueryInsensitive(a.textContent, qLower)) {
        if (!a.dataset.searchPlain) a.dataset.searchPlain = a.textContent;
        a.innerHTML = highlightText(a.dataset.searchPlain, qRaw);
      }
    });

    el.querySelectorAll('.msg-attachment-doc').forEach((d) => {
      if (d.querySelector('a.msg-attachment-doc-link')) return;
      if (d.textContent && textIncludesQueryInsensitive(d.textContent, qLower)) {
        if (!d.dataset.searchPlain) d.dataset.searchPlain = d.textContent;
        d.innerHTML = highlightText(d.dataset.searchPlain, qRaw);
      }
    });
  });
}

function applyChatSearch() {
  const input = document.getElementById('chatSearchInput');
  const qRaw = (input?.value || '').trim();
  const qLower = qRaw.toLowerCase();
  const container = document.getElementById('messages');
  const countEl = document.getElementById('chatSearchCount');
  if (!container) return;
  restoreChatSearchHighlights(container);
  const children = [...container.children].filter((el) => el.classList.contains('msg'));
  let visible = 0;
  children.forEach((el, idx) => {
    let msg = null;
    if (el.dataset.id) {
      msg = roomMessagesCache.find((m) => getMessageId(m) === el.dataset.id);
    }
    if (!msg) msg = roomMessagesCache[idx];
    if (!msg) {
      el.hidden = false;
      el.classList.remove('msg-search-match');
      return;
    }
    const match = !qLower || messageMatchesSearch(msg, qLower);
    el.hidden = !match;
    el.classList.toggle('msg-search-match', !!(qLower && match));
    if (match) visible++;
  });
  if (countEl) {
    if (qLower) {
      countEl.hidden = false;
      countEl.textContent =
        visible === 0 ? 'No matches' : visible === 1 ? '1 match' : `${visible} matches`;
    } else {
      countEl.hidden = true;
      countEl.textContent = '';
    }
  }
  applyChatSearchHighlights(container, qRaw, qLower);
}

function scheduleChatSearch() {
  clearTimeout(chatSearchDebounceTimer);
  chatSearchDebounceTimer = setTimeout(applyChatSearch, 160);
}

function loadRecentRooms() {
  try {
    const raw = localStorage.getItem(RECENT_ROOMS_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveRecentRooms(list) {
  localStorage.setItem(RECENT_ROOMS_KEY, JSON.stringify(list.slice(0, 20)));
}

function formatRelativeTime(ts) {
  const t = typeof ts === 'number' ? ts : Date.parse(ts);
  if (!t) return '';
  const diff = Date.now() - t;
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return 'now';
  if (mins < 60) return `${mins}m`;
  const hrs = Math.floor(mins / 60);
  if (hrs < 24) return `${hrs}h`;
  const days = Math.floor(hrs / 24);
  return `${days}d`;
}

function upsertRecentRoom(roomId, userName) {
  const id = (roomId || '').trim();
  if (!id) return;
  const list = loadRecentRooms().filter((r) => r && r.roomId && r.roomId !== id);
  list.unshift({ roomId: id, userName: (userName || '').trim() || '', lastUsedAt: Date.now() });
  saveRecentRooms(list);
  refreshRoomsFromDb();
}

function resetRoomRowMenuStyles(menu) {
  if (!menu) return;
  menu.style.position = '';
  menu.style.top = '';
  menu.style.left = '';
  menu.style.right = '';
  menu.style.bottom = '';
  menu.style.zIndex = '';
}

function positionRoomRowMenu(menuBtn, menu) {
  const rect = menuBtn.getBoundingClientRect();
  const menuWidth = 168;
  let left = rect.right - menuWidth;
  left = Math.max(8, Math.min(left, window.innerWidth - menuWidth - 8));
  let top = rect.bottom + 6;
  menu.style.position = 'fixed';
  menu.style.top = `${top}px`;
  menu.style.left = `${left}px`;
  menu.style.right = 'auto';
  menu.style.bottom = 'auto';
  menu.style.zIndex = '100';
  requestAnimationFrame(() => {
    const mh = menu.offsetHeight || 100;
    const maxBottom = window.innerHeight - 8;
    if (top + mh > maxBottom) {
      const above = rect.top - mh - 6;
      if (above >= 8) {
        menu.style.top = `${above}px`;
      } else {
        menu.style.top = `${Math.max(8, maxBottom - mh)}px`;
      }
    }
  });
}

function closeAllRoomRowMenus() {
  document.querySelectorAll('.room-row-menu').forEach((m) => {
    m.hidden = true;
    resetRoomRowMenuStyles(m);
  });
  document.querySelectorAll('.room-menu-btn').forEach((b) => b.setAttribute('aria-expanded', 'false'));
}

function renderRecentRooms() {
  const body = document.getElementById('recentRoomsBody');
  const empty = document.getElementById('recentRoomsEmpty');
  if (!body || !empty) return;
  const list = roomListCache.length ? roomListCache : loadRecentRooms();
  body.innerHTML = '';
  if (!list.length) {
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  list.forEach((r) => {
    const tr = document.createElement('tr');
    tr.className = 'room-row' + (r.roomId === currentRoomId ? ' active' : '');
    tr.dataset.roomId = r.roomId;
    const labelRename = escapeHtml(t('roomMenuRename'));
    const labelDelete = escapeHtml(t('roomMenuDelete'));
    tr.innerHTML = `<td title="${escapeHtml(r.roomId)}">${escapeHtml(r.roomId)}</td><td>${escapeHtml(formatRelativeTime(r.lastUsedAt))}</td><td class="room-row-actions-cell"><div class="room-menu-wrap"><button type="button" class="room-menu-btn" title="Room options" aria-label="Room options" aria-haspopup="true" aria-expanded="false">⋮</button><div class="room-row-menu" hidden role="menu"><button type="button" class="rename-room" role="menuitem">${labelRename}</button><button type="button" class="delete-room danger" role="menuitem">${labelDelete}</button></div></div></td>`;
    tr.addEventListener('click', () => {
      document.getElementById('roomId').value = r.roomId;
      joinRoom(r.roomId, document.getElementById('userName').value?.trim(), false);
    });
    const menuBtn = tr.querySelector('.room-menu-btn');
    const menu = tr.querySelector('.room-row-menu');
    const renameBtn = tr.querySelector('.rename-room');
    const deleteBtn = tr.querySelector('.delete-room');

    menu.addEventListener('click', (e) => e.stopPropagation());

    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const wasOpen = !menu.hidden;
      closeAllRoomRowMenus();
      if (wasOpen) return;
      menu.hidden = false;
      positionRoomRowMenu(menuBtn, menu);
      menuBtn.setAttribute('aria-expanded', 'true');
    });

    renameBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      menu.hidden = true;
      resetRoomRowMenuStyles(menu);
      menuBtn.setAttribute('aria-expanded', 'false');
      const next = window.prompt('Rename room ID', r.roomId);
      const newRoomId = String(next || '').trim();
      if (!newRoomId || newRoomId === r.roomId) return;
      try {
        const res = await fetch(`/api/rooms/${encodeURIComponent(r.roomId)}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ newRoomId }),
        });
        const data = await res.json();
        if (!data?.ok) return;
        roomListCache = roomListCache.map((x) => (x.roomId === r.roomId ? { ...x, roomId: newRoomId } : x));
        saveRecentRooms(loadRecentRooms().map((x) => (x.roomId === r.roomId ? { ...x, roomId: newRoomId } : x)));
        if (currentRoomId === r.roomId) {
          // Re-join renamed room so its history loads immediately
          document.getElementById('roomId').value = newRoomId;
          joinRoom(newRoomId, document.getElementById('userName').value?.trim(), false);
        }
        await refreshRoomsFromDb();
      } catch {}
    });

    deleteBtn.addEventListener('click', async (e) => {
      e.stopPropagation();
      menu.hidden = true;
      resetRoomRowMenuStyles(menu);
      menuBtn.setAttribute('aria-expanded', 'false');
      const ok = window.confirm(`Delete room "${r.roomId}" from dashboard and database?`);
      if (!ok) return;
      try {
        const res = await fetch(`/api/rooms/${encodeURIComponent(r.roomId)}`, { method: 'DELETE' });
        const data = await res.json();
        if (!data?.ok) return;
        roomListCache = roomListCache.filter((x) => x.roomId !== r.roomId);
        saveRecentRooms(loadRecentRooms().filter((x) => x.roomId !== r.roomId));
        if (currentRoomId === r.roomId) showWelcome();
        renderRecentRooms();
      } catch {}
    });
    body.appendChild(tr);
  });
}

async function refreshRoomsFromDb() {
  try {
    const res = await fetch('/api/rooms');
    const data = await res.json();
    if (data?.ok && Array.isArray(data.rooms)) {
      roomListCache = data.rooms
        .filter((r) => r && r.roomId)
        .map((r) => ({ roomId: r.roomId, lastUsedAt: r.lastUsedAt || null }));
      renderRecentRooms();
      return;
    }
  } catch {}
  // Fallback to local rooms if DB endpoint is unavailable
  roomListCache = [];
  renderRecentRooms();
}

async function loadLocale(lang) {
  const res = await fetch(`/locales/${lang}.json`);
  if (!res.ok) {
    if (LANG_KEYS.indexOf(lang) === -1) {
      await loadLocale('en');
    }
    return;
  }
  locale = await res.json();
  currentLang = lang;
  myLang = currentLang;
  localStorage.setItem('multilang-lang', lang);
  document.body.setAttribute('data-lang', lang);
  updateUI();
  rerenderChatMessagesFromCache();
  renderRecentRooms();
}

function t(key) {
  return locale[key] != null ? locale[key] : key;
}

function updateUI() {
  document.getElementById('appTitle').textContent = t('appName');
  document.getElementById('currentLangLabel').textContent = LANG_LABELS[currentLang] || currentLang;
  document.getElementById('yourNameLabel').textContent = t('yourName');
  document.getElementById('userName').placeholder = t('enterName');
  document.getElementById('roomIdLabel').textContent = t('roomId');
  document.getElementById('roomId').placeholder = t('enterRoomId');
  document.getElementById('joinBtn').textContent = t('joinRoom');
  document.getElementById('createBtn').textContent = t('createRoom');
  document.getElementById('hintJoin').textContent = locale.hint != null ? locale.hint : t('enterRoomId') + ' ' + t('yourName') + '.';
  document.getElementById('welcomeTitle').textContent = t('appName');
  document.getElementById('messageInput').placeholder = t('typeMessage');
  document.getElementById('sendBtn').setAttribute('aria-label', t('send'));
}

function formatTime(iso) {
  const d = new Date(iso);
  const now = new Date();
  const today = now.toDateString();
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const dateStr = d.toDateString() === today ? t('today') : d.toDateString() === yesterday.toDateString() ? t('yesterday') : d.toLocaleDateString();
  return dateStr + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function escapeHtml(s) {
  const el = document.createElement('span');
  el.textContent = s;
  return el.innerHTML;
}

function escapeRegex(s) {
  return String(s).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/** Wrap case-insensitive matches of query in <mark> (plain text in, safe HTML out). */
function highlightText(plain, query) {
  const content = String(plain ?? '');
  const q = String(query ?? '').trim();
  if (!q) return escapeHtml(content);
  let re;
  try {
    // `u` = Unicode-aware matching (helps with mixed scripts / special chars).
    re = new RegExp(escapeRegex(q), 'giu');
  } catch {
    re = new RegExp(escapeRegex(q), 'gi');
  }
  let result = '';
  let lastIndex = 0;
  let m;
  while ((m = re.exec(content)) !== null) {
    result += escapeHtml(content.slice(lastIndex, m.index));
    result += '<mark class="msg-search-highlight">' + escapeHtml(m[0]) + '</mark>';
    lastIndex = m.lastIndex;
  }
  result += escapeHtml(content.slice(lastIndex));
  return result;
}

function textIncludesQueryInsensitive(text, qLower) {
  if (!qLower) return true;
  return normalizeForSearch(text).includes(normalizeForSearch(qLower));
}

function restoreChatSearchHighlights(container) {
  if (!container) return;
  container.querySelectorAll('[data-search-plain]').forEach((el) => {
    const plain = el.dataset.searchPlain;
    el.textContent = plain;
    delete el.dataset.searchPlain;
  });
}

/** For href/src/download — do not use escapeHtml on data URLs (breaks & in URLs). */
function escapeAttr(s) {
  return String(s).replace(/"/g, '&quot;');
}

function renderMessage(msg, isSent) {
  const div = document.createElement('div');
  div.className = 'msg ' + (isSent ? 'sent' : 'received');
  const mid = msg._id || msg.id;
  if (mid != null) div.dataset.id = String(mid);
  const name = isSent ? t('you') : (msg.userName || 'User');
  let attachmentHtml = '';
  if (msg.attachment) {
    const att = msg.attachment;
    if (att.type === 'media' && att.data) {
      const isVideo = att.mime && att.mime.startsWith('video/');
      attachmentHtml = isVideo
        ? '<div class="msg-attachment"><video src="' + escapeHtml(att.data) + '" controls class="msg-attachment-media"></video></div>'
        : '<div class="msg-attachment"><img src="' + escapeHtml(att.data) + '" alt="Attachment" class="msg-attachment-media" /></div>';
    } else if (att.type === 'link' && att.url) {
      attachmentHtml = '<div class="msg-attachment"><a href="' + escapeHtml(att.url) + '" target="_blank" rel="noopener" class="msg-attachment-link">' + escapeHtml(att.url) + '</a></div>';
    } else if (att.type === 'document' && att.name) {
      if (att.data) {
        const safeName = escapeHtml(att.name);
        const hrefSrc = escapeAttr(att.data);
        const dlName = escapeAttr(att.name);
        const mime = att.mime || '';
        const isImg = mime.startsWith('image/');
        attachmentHtml =
          '<div class="msg-attachment msg-attachment-doc">' +
          (isImg
            ? '<img src="' + hrefSrc + '" alt="" class="msg-attachment-doc-thumb" />'
            : '') +
          '<a href="' + hrefSrc + '" download="' + dlName + '" class="msg-attachment-doc-link" target="_blank" rel="noopener">📎 ' + safeName + '</a></div>';
      } else {
        attachmentHtml = '<div class="msg-attachment msg-attachment-doc">' + escapeHtml(att.name) + '</div>';
      }
    }
  }
  div.innerHTML = `
    <div class="msg-author"></div>
    ${attachmentHtml}
    <div class="msg-text"></div>
    <div class="msg-meta"><span class="msg-time"></span></div>
  `;
  const authorEl = div.querySelector('.msg-author');
  authorEl.textContent = name;
  const textEl = div.querySelector('.msg-text');
  const timeEl = div.querySelector('.msg-time');
  timeEl.textContent = formatTime(msg.time);

  const rawText = msg.text || '';
  if (incomingMessageNeedsTranslation(msg, isSent)) {
    textEl.textContent = t('translating');
    textEl.classList.add('msg-text-translating');
    translateForViewer(rawText, msg.userLang || 'auto', currentLang).then((out) => {
      textEl.textContent = out || rawText;
      textEl.classList.remove('msg-text-translating');
      scheduleChatSearch();
    });
  } else {
    textEl.textContent = rawText;
  }
  return div;
}

function rerenderChatMessagesFromCache() {
  const chatArea = document.getElementById('chatArea');
  if (!currentRoomId || !chatArea || chatArea.hidden) return;
  const container = document.getElementById('messages');
  if (!container || !roomMessagesCache.length) return;
  const prevScroll = container.scrollHeight - container.scrollTop;
  container.innerHTML = '';
  roomMessagesCache.forEach((msg) => {
    const isSent = msg.userName === myName;
    container.appendChild(renderMessage(msg, isSent));
  });
  container.scrollTop = container.scrollHeight - prevScroll;
  applyChatSearch();
}

function showChat(roomId) {
  currentRoomId = roomId;
  roomMessagesCache = [];
  document.getElementById('welcome').hidden = true;
  document.getElementById('chatArea').hidden = false;
  document.getElementById('chatRoomBadge').textContent = roomId;
  document.getElementById('messages').innerHTML = '';
  const searchInput = document.getElementById('chatSearchInput');
  if (searchInput) {
    searchInput.value = '';
    applyChatSearch();
  }
  renderRecentRooms();
}

function showWelcome() {
  currentRoomId = null;
  closeRoomMembersModal();
  document.getElementById('welcome').hidden = false;
  document.getElementById('chatArea').hidden = true;
  const searchInput = document.getElementById('chatSearchInput');
  if (searchInput) {
    searchInput.value = '';
    applyChatSearch();
  }
  if (socket) socket.disconnect();
  socket = null;
}

function renderRoomMembersList(members, onlineList) {
  const list = document.getElementById('roomMembersList');
  if (!list) return;
  try {
    list.innerHTML = '';
    const arr = Array.isArray(members) ? members : [];
    const onlineSet = new Set(
      Array.isArray(onlineList) ? onlineList.map((n) => String(n || '').trim()).filter(Boolean) : []
    );
    if (!arr.length) {
      const li = document.createElement('li');
      li.className = 'room-members-empty';
      li.textContent =
        typeof t === 'function' ? t('noMembersInRoom') || t('noMembersOnline') : 'No members yet.';
      list.appendChild(li);
      return;
    }
    const onlineLabel = typeof t === 'function' ? t('memberOnline') : 'online';
    arr.forEach((name) => {
      const li = document.createElement('li');
      const youLabel = typeof t === 'function' ? t('you') : 'You';
      let line = name === myName ? `${name} (${youLabel})` : String(name);
      if (onlineSet.has(name)) {
        line += ` (${onlineLabel})`;
      }
      li.textContent = line;
      list.appendChild(li);
    });
  } catch (_) {
    list.innerHTML = '';
    const li = document.createElement('li');
    li.className = 'room-members-empty';
    li.textContent = '—';
    list.appendChild(li);
  }
}

function closeRoomMembersModal() {
  const backdrop = document.getElementById('roomMembersBackdrop');
  if (!backdrop) return;
  backdrop.hidden = true;
  backdrop.setAttribute('aria-hidden', 'true');
  const badge = document.getElementById('chatRoomBadge');
  if (badge) badge.setAttribute('aria-expanded', 'false');
}

function openRoomMembersModal() {
  if (!currentRoomId) return;
  const backdrop = document.getElementById('roomMembersBackdrop');
  const list = document.getElementById('roomMembersList');
  const title = document.getElementById('roomMembersTitle');
  if (!backdrop || !list || !title) return;
  title.textContent = typeof t === 'function' ? t('roomMembers') : 'Room members';
  backdrop.hidden = false;
  backdrop.setAttribute('aria-hidden', 'false');
  const badge = document.getElementById('chatRoomBadge');
  if (badge) badge.setAttribute('aria-expanded', 'true');

  const room = String(currentRoomId).trim();
  // Absolute URL so fetch always hits this app (avoids wrong base path / file://).
  const apiUrl = new URL(`/api/room/${encodeURIComponent(room)}/members`, window.location.origin).href;

  function paint(members, online) {
    renderRoomMembersList(
      Array.isArray(members) ? members : [],
      Array.isArray(online) ? online : []
    );
  }

  // Show at least yourself immediately — never leave the user stuck on "Loading…"
  paint(myName ? [myName] : [], myName ? [myName] : []);

  fetch(apiUrl, { cache: 'no-store', credentials: 'same-origin' })
    .then((res) => res.text())
    .then((text) => {
      try {
        const data = JSON.parse(text);
        if (data && data.ok && Array.isArray(data.members)) {
          paint(data.members, data.online);
        }
      } catch (_) {}
    })
    .catch(() => {});

  if (socket && socket.connected) {
    socket.emit('room_members_request', { roomId: room });
  }
}

function joinRoom(roomId, userName, create) {
  if (!roomId?.trim()) {
    document.getElementById('roomId').focus();
    return;
  }
  const nameInput = document.getElementById('userName');
  const name = (userName || nameInput.value || '').trim();
  if (!name) {
    nameInput.focus();
    nameInput.classList.add('input-error');
    setTimeout(() => nameInput.classList.remove('input-error'), 1200);
    return;
  }
  // If Profile email exists, persist mapping (email -> name)
  const email = (localStorage.getItem('nexova-profile-email') || '').trim().toLowerCase();
  if (email && email.includes('@')) {
    fetch('/api/identity', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, userName: name }),
    }).catch(() => {});
  }
  myName = name;
  myLang = currentLang;
  const id = roomId.trim();
  upsertRecentRoom(id, name);

  if (!socket) {
    socket = io();
    socket.on('connect', () => {
      socket.emit('join', { roomId: id, userName: myName, userLang: currentLang });
    });
    socket.on('history', (history) => {
      roomMessagesCache = history || [];
      const container = document.getElementById('messages');
      container.innerHTML = '';
      roomMessagesCache.forEach((msg) => {
        const isSent = msg.userName === myName;
        container.appendChild(renderMessage(msg, isSent));
      });
      container.scrollTop = container.scrollHeight;
      applyChatSearch();
    });
    socket.on('message', (msg) => {
      roomMessagesCache.push(msg);
      const container = document.getElementById('messages');
      const isSent = msg.userName === myName;
      container.appendChild(renderMessage(msg, isSent));
      container.scrollTop = container.scrollHeight;
      applyChatSearch();
    });
    socket.on('profile_email', ({ userName, email }) => {
      const current = (myName || document.getElementById('userName').value || '').trim();
      if (!userName || !current || userName !== current) return;
      const mail = (email || '').trim();
      localStorage.setItem('nexova-profile-email', mail);
      const el = document.getElementById('profileEmail');
      if (el) el.textContent = mail || '—';
    });
    socket.on('user_joined', () => {});
    socket.on('room_members', (payload) => {
      const backdrop = document.getElementById('roomMembersBackdrop');
      if (!backdrop || backdrop.hidden) return;
      const members = payload && Array.isArray(payload.members) ? payload.members : [];
      const online = payload && Array.isArray(payload.online) ? payload.online : [];
      renderRoomMembersList(members, online);
    });
  } else {
    socket.emit('join', { roomId: id, userName: myName, userLang: currentLang });
  }
  showChat(id);
}

async function sendMessage(text, attachment) {
  const email = (localStorage.getItem('nexova-profile-email') || '').trim();
  if (!myName?.trim() || !email) {
    if (attachment) {
      alert('Add your email in Profile (Settings → Profile) to send photos, files, or links.');
    }
    return;
  }
  const hasContent = text?.trim() || attachment;
  if (!hasContent || !socket || !currentRoomId) return;
  const translatedText = await translateTextWithFallback(text, currentLang);
  const payload = {
    roomId: currentRoomId,
    text: translatedText,
    userName: myName,
    userLang: currentLang
  };
  if (attachment) payload.attachment = attachment;
  socket.emit('message', payload);
}

function createRoom() {
  const id = 'room-' + Math.random().toString(36).slice(2, 10);
  document.getElementById('roomId').value = id;
  joinRoom(id, document.getElementById('userName').value?.trim(), true);
}

function init() {
  document.addEventListener('click', (e) => {
    if (e.target.closest('.room-menu-wrap')) return;
    closeAllRoomRowMenus();
  });
  window.addEventListener('resize', closeAllRoomRowMenus);

  loadLocale(currentLang);
  refreshRoomsFromDb();
  const userNameInput = document.getElementById('userName');

  let emailLookupTimer = null;
  async function lookupNameByEmail(email) {
    const mail = String(email || '').trim().toLowerCase();
    if (!mail || !mail.includes('@')) return;
    try {
      const res = await fetch(`/api/identity?email=${encodeURIComponent(mail)}`);
      const data = await res.json();
      if (data && data.ok && data.userName) {
        userNameInput.value = data.userName;
      }
    } catch {}
  }
  // Auto-fill name using the email saved in Profile (if any)
  const savedProfileEmail = (localStorage.getItem('nexova-profile-email') || '').trim();
  if (savedProfileEmail) lookupNameByEmail(savedProfileEmail);

  document.getElementById('langTrigger').addEventListener('click', () => {
    const dd = document.getElementById('langDropdown');
    dd.hidden = !dd.hidden;
  });

  document.getElementById('langDropdown').addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-lang]');
    if (!btn) return;
    const lang = btn.getAttribute('data-lang');
    document.getElementById('langDropdown').hidden = true;
    loadLocale(lang);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.lang-trigger') && !e.target.closest('.lang-dropdown')) {
      document.getElementById('langDropdown').hidden = true;
    }
    if (!e.target.closest('.composer-emoji-wrap')) {
      document.getElementById('emojiPicker').hidden = true;
    }
    if (!e.target.closest('.composer-attach-wrap')) {
      document.getElementById('attachMenu').hidden = true;
      document.getElementById('attachLinkPanel').hidden = true;
    }
  });

  function insertEmojiAtCursor(emoji) {
    const input = document.getElementById('messageInput');
    const start = input.selectionStart;
    const end = input.selectionEnd;
    const val = input.value;
    input.value = val.slice(0, start) + emoji + val.slice(end);
    input.selectionStart = input.selectionEnd = start + emoji.length;
    input.focus();
    document.getElementById('emojiPicker').hidden = true;
  }

  function flagFromCode(code) {
    return String.fromCodePoint(0x1F1E6 + code.charCodeAt(0) - 65, 0x1F1E6 + code.charCodeAt(1) - 65);
  }

  const EMOJI_LIST = '😀😊🥰😎😢😡👍👋🙏❤️🔥😂🤔✨🌟💯🎉🙌👏😍🥳😇🤗💪🌈☀️🌙⭐💬📌✅❌';
  const emojiGrid = document.getElementById('emojiPickerGrid');
  Array.from(EMOJI_LIST).forEach((emoji) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = emoji;
    btn.setAttribute('aria-label', 'Insert ' + emoji);
    btn.addEventListener('click', (e) => { e.preventDefault(); insertEmojiAtCursor(emoji); });
    emojiGrid.appendChild(btn);
  });

  const HEART_EMOJI_LIST = '❤️🧡💛💚💙💜🖤🤍🤎🩷🩵🩶💔❣️💕💞💓💗💖💘💝';
  const heartsGrid = document.getElementById('emojiPickerHearts');
  Array.from(HEART_EMOJI_LIST).forEach((emoji) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = emoji;
    btn.setAttribute('aria-label', 'Insert ' + emoji);
    btn.addEventListener('click', (e) => { e.preventDefault(); insertEmojiAtCursor(emoji); });
    heartsGrid.appendChild(btn);
  });

  const FOOD_EMOJI_LIST = '🍎🍊🍋🍌🍉🍇🍓🫐🍒🍑🥭🍍🥥🥝🍅🫒🥑🥦🥬🥒🌶️🫑🌽🥕🫚🧄🧅🥔🍠🥐🥖🫓🥨🥯🥞🧇🧀🍳🥚🍖🍗🥩🦴🍕🍔🍟🌭🥪🌮🌯🫔🥙🧆🍲🫕🥣🥗🍿🧈🍞🥓🍝🍜🍛🍣🍱🥟🦪🍤🍙🍚🍘🍥🥠🥮🍢🍡🍧🍨🍦🥧🧁🍰🎂🍮🍭🍬🍫🍩🍪🌰🥜🍯🥛🍼☕🍵🧃🥤🧋🍶🍺🍻🥂🍷🥃🍸🍹🧉🍾🥄🍴🍽️';
  const foodGrid = document.getElementById('emojiPickerFood');
  Array.from(FOOD_EMOJI_LIST).forEach((emoji) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = emoji;
    btn.setAttribute('aria-label', 'Insert ' + emoji);
    btn.addEventListener('click', (e) => { e.preventDefault(); insertEmojiAtCursor(emoji); });
    foodGrid.appendChild(btn);
  });

  const COUNTRY_CODES = 'AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS XK YE YT ZA ZM ZW'.split(' ');
  const flagsGrid = document.getElementById('emojiPickerFlags');
  COUNTRY_CODES.forEach((code) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = flagFromCode(code);
    btn.setAttribute('aria-label', 'Insert flag ' + code);
    btn.setAttribute('title', code);
    btn.addEventListener('click', (e) => { e.preventDefault(); insertEmojiAtCursor(btn.textContent); });
    flagsGrid.appendChild(btn);
  });

  document.getElementById('emojiBtn').addEventListener('click', (e) => {
    e.preventDefault();
    const picker = document.getElementById('emojiPicker');
    picker.hidden = !picker.hidden;
  });

  document.getElementById('joinBtn').addEventListener('click', async () => {
    // If name is empty but Profile email exists, try auto-fill from DB first
    const nameVal = document.getElementById('userName').value?.trim();
    const emailVal = (localStorage.getItem('nexova-profile-email') || '').trim();
    if (!nameVal && emailVal) await lookupNameByEmail(emailVal);
    joinRoom(document.getElementById('roomId').value, document.getElementById('userName').value?.trim(), false);
  });

  document.getElementById('createBtn').addEventListener('click', async () => {
    const nameVal = document.getElementById('userName').value?.trim();
    const emailVal = (localStorage.getItem('nexova-profile-email') || '').trim();
    if (!nameVal && emailVal) await lookupNameByEmail(emailVal);
    createRoom();
  });

  const messageInput = document.getElementById('messageInput');

  // Convert ONLY on send. Word-by-word conversion on space breaks phrases like "i am":
  // "i" + space → इ, "am" + space → अम्, so "i am" is never seen for phrase mapping.
  // Keeping input as Latin until send lets convertSegment see full phrases and translate correctly.

  document.getElementById('composer').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = (localStorage.getItem('nexova-profile-email') || '').trim();
    const nameInput = document.getElementById('userName');
    const nameVal = (myName || nameInput.value || '').trim();
    if (!nameVal) {
      nameInput.focus();
      nameInput.classList.add('input-error');
      setTimeout(() => nameInput.classList.remove('input-error'), 1200);
      return;
    }
    if (!email) {
      // Force user to "log in" by setting email in Profile
      openSettings();
      openProfile();
      profileEmailEditBtn.click();
      return;
    }
    const input = document.getElementById('messageInput');
    const text = input.value;
    await sendMessage(text);
    input.value = '';
  });

  const attachBtn = document.getElementById('attachBtn');
  const attachMenu = document.getElementById('attachMenu');
  const attachLinkPanel = document.getElementById('attachLinkPanel');
  const attachMediaInput = document.getElementById('attachMediaInput');
  const attachDocInput = document.getElementById('attachDocInput');
  const attachLinkInput = document.getElementById('attachLinkInput');
  const attachLinkAdd = document.getElementById('attachLinkAdd');

  attachBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    attachLinkPanel.hidden = true;
    attachMenu.hidden = !attachMenu.hidden;
  });

  // Photo/Document: native <label for> — do not hide the menu in the same click (can block the picker on some browsers).

  document.getElementById('attachLink').addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    attachMenu.hidden = true;
    attachLinkInput.value = '';
    attachLinkPanel.hidden = false;
    attachLinkInput.focus();
  });

  attachMediaInput.addEventListener('change', () => {
    attachMenu.hidden = true;
    attachLinkPanel.hidden = true;
    const file = attachMediaInput.files && attachMediaInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async () => {
      const caption = document.getElementById('messageInput').value.trim();
      await sendMessage(caption, { type: 'media', data: reader.result, mime: file.type });
      document.getElementById('messageInput').value = '';
      attachMediaInput.value = '';
    };
    reader.onerror = () => {
      attachMediaInput.value = '';
    };
    reader.readAsDataURL(file);
  });

  attachDocInput.addEventListener('change', () => {
    attachMenu.hidden = true;
    attachLinkPanel.hidden = true;
    const file = attachDocInput.files && attachDocInput.files[0];
    if (!file) return;
    const maxBytes = 12 * 1024 * 1024; // under MongoDB 16MB doc limit
    if (file.size > maxBytes) {
      alert('File is too large (max 12 MB). Try a smaller file.');
      attachDocInput.value = '';
      return;
    }
    const caption = document.getElementById('messageInput').value.trim();
    const reader = new FileReader();
    reader.onload = async () => {
      await sendMessage(caption, {
        type: 'document',
        name: file.name,
        mime: file.type || 'application/octet-stream',
        data: reader.result,
      });
      document.getElementById('messageInput').value = '';
      attachDocInput.value = '';
    };
    reader.onerror = () => {
      alert('Could not read that file. Try again.');
      attachDocInput.value = '';
    };
    reader.readAsDataURL(file);
  });

  attachLinkAdd.addEventListener('click', () => {
    const url = attachLinkInput.value.trim();
    if (!url) return;
    const caption = document.getElementById('messageInput').value.trim();
    sendMessage(caption || url, { type: 'link', url: url });
    document.getElementById('messageInput').value = '';
    attachLinkInput.value = '';
    attachLinkPanel.hidden = true;
  });
  attachLinkInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') attachLinkAdd.click();
  });

  const settingsBtn = document.getElementById('settingsBtn');
  const settingsSlider = document.getElementById('settingsSlider');
  const settingsOverlay = document.getElementById('settingsOverlay');
  const settingsClose = document.getElementById('settingsClose');

  function openSettings() {
    settingsOverlay.setAttribute('aria-hidden', 'false');
    settingsOverlay.classList.add('visible');
    settingsSlider.classList.add('open');
  }

  function closeSettings() {
    settingsOverlay.classList.remove('visible');
    settingsSlider.classList.remove('open');
    settingsOverlay.setAttribute('aria-hidden', 'true');
  }

  const chatSearchInput = document.getElementById('chatSearchInput');
  if (chatSearchInput) {
    chatSearchInput.addEventListener('input', scheduleChatSearch);
    chatSearchInput.addEventListener('search', applyChatSearch);
  }

  const chatRoomBadge = document.getElementById('chatRoomBadge');
  const roomMembersBackdrop = document.getElementById('roomMembersBackdrop');
  const roomMembersClose = document.getElementById('roomMembersClose');
  if (chatRoomBadge) {
    chatRoomBadge.addEventListener('click', (e) => {
      e.preventDefault();
      openRoomMembersModal();
    });
  }
  if (roomMembersClose) roomMembersClose.addEventListener('click', closeRoomMembersModal);
  if (roomMembersBackdrop) {
    roomMembersBackdrop.addEventListener('click', (e) => {
      if (e.target === roomMembersBackdrop) closeRoomMembersModal();
    });
  }

  settingsBtn.addEventListener('click', openSettings);
  settingsClose.addEventListener('click', closeSettings);
  settingsOverlay.addEventListener('click', () => {
    if (profileSlider.classList.contains('open')) closeProfile();
    else closeSettings();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const rm = document.getElementById('roomMembersBackdrop');
      if (rm && !rm.hidden) closeRoomMembersModal();
      else if (profileSlider.classList.contains('open')) closeProfile();
      else if (settingsSlider.classList.contains('open')) closeSettings();
    }
  });

  const profileSlider = document.getElementById('profileSlider');
  const profileBack = document.getElementById('profileBack');
  const profileNameEl = document.getElementById('profileName');
  const profileEmailEl = document.getElementById('profileEmail');
  const profileInitialsEl = document.getElementById('profileInitials');
  const profileAvatarEl = document.getElementById('profileAvatar');
  const profileAvatarEditBtn = document.getElementById('profileAvatarEdit');
  const profileAvatarInput = document.getElementById('profileAvatarInput');

  const profileEmailEditBtn = document.getElementById('profileEmailEdit');
  const profileEmailEditRow = document.getElementById('profileEmailEditRow');
  const profileEmailInput = document.getElementById('profileEmailInput');
  const profileEmailSave = document.getElementById('profileEmailSave');

  function openProfile() {
    closeSettings();
    settingsOverlay.classList.add('visible');
    settingsOverlay.setAttribute('aria-hidden', 'false');
    profileSlider.classList.add('open');
    const name = myName || document.getElementById('userName').value?.trim() || 'Guest';
    const email = localStorage.getItem('nexova-profile-email') || '';
    profileNameEl.textContent = name || '—';
    profileEmailEl.textContent = email || '—';
    profileEmailEl.classList.remove('hide-for-edit');
    profileEmailEditRow.classList.remove('visible');
    profileEmailEditRow.setAttribute('aria-hidden', 'true');
    profileEmailInput.value = email || '';
    const parts = name.split(/\s+/).filter(Boolean);
    profileInitialsEl.textContent = parts.length >= 2
      ? (parts[0][0] + parts[1][0]).toUpperCase()
      : name ? name.slice(0, 2).toUpperCase() : '?';
    const img = localStorage.getItem('nexova-profile-image');
    if (img) {
      profileAvatarEl.style.backgroundImage = 'url(' + img + ')';
      profileAvatarEl.classList.add('has-image');
    } else {
      profileAvatarEl.style.backgroundImage = '';
      profileAvatarEl.classList.remove('has-image');
    }

    // If connected, fetch email from DB for this userName
    if (socket && socket.connected && name && name !== 'Guest') {
      socket.emit('profile_email_get', { userName: name });
    }
  }

  profileAvatarEditBtn.addEventListener('click', () => profileAvatarInput.click());
  profileAvatarInput.addEventListener('change', () => {
    const file = profileAvatarInput.files && profileAvatarInput.files[0];
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      localStorage.setItem('nexova-profile-image', dataUrl);
      profileAvatarEl.style.backgroundImage = 'url(' + dataUrl + ')';
      profileAvatarEl.classList.add('has-image');
    };
    reader.readAsDataURL(file);
    profileAvatarInput.value = '';
  });

  profileEmailEditBtn.addEventListener('click', () => {
    profileEmailEl.classList.add('hide-for-edit');
    profileEmailEditRow.classList.add('visible');
    profileEmailEditRow.setAttribute('aria-hidden', 'false');
    profileEmailInput.value = profileEmailEl.textContent === '—' ? '' : profileEmailEl.textContent;
    profileEmailInput.focus();
  });

  profileEmailSave.addEventListener('click', () => {
    const email = profileEmailInput.value.trim();
    if (email) localStorage.setItem('nexova-profile-email', email);
    else localStorage.removeItem('nexova-profile-email');
    profileEmailEl.textContent = email || '—';
    profileEmailEl.classList.remove('hide-for-edit');
    profileEmailEditRow.classList.remove('visible');
    profileEmailEditRow.setAttribute('aria-hidden', 'true');

    // Save to MongoDB (keyed by userName) if connected
    const name = (myName || document.getElementById('userName').value || '').trim();
    if (socket && socket.connected && name) {
      socket.emit('profile_email_set', { userName: name, email });
    }

    // Also store mapping email -> name for auto-fill on next visit
    if (email && name) {
      fetch('/api/identity', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim().toLowerCase(), userName: name }),
      }).catch(() => {});
    }
  });

  profileEmailInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') profileEmailSave.click();
  });

  const profileSignOut = document.getElementById('profileSignOut');
  profileSignOut.addEventListener('click', () => {
    // Do NOT delete from DB; just clear local session/email display.
    localStorage.removeItem('nexova-profile-email');
    profileEmailEl.textContent = '—';
    profileEmailInput.value = '';
    profileEmailEl.classList.remove('hide-for-edit');
    profileEmailEditRow.classList.remove('visible');
    profileEmailEditRow.setAttribute('aria-hidden', 'true');

    // Clear local name/session so user must re-enter name
    myName = '';
    const nameInput = document.getElementById('userName');
    nameInput.value = '';
    document.getElementById('roomId').value = '';
    renderRecentRooms();
    closeProfile();
    closeSettings();
    showWelcome();
  });

  function closeProfile() {
    profileSlider.classList.remove('open');
    settingsOverlay.classList.remove('visible');
    settingsOverlay.setAttribute('aria-hidden', 'true');
  }

  document.getElementById('settingsProfile').addEventListener('click', openProfile);
  profileBack.addEventListener('click', () => {
    closeProfile();
    openSettings();
  });
  const settingsThemeBtn = document.getElementById('settingsTheme');
  const settingsThemeSection = document.getElementById('settingsThemeSection');
  const settingsWallpaperSection = document.getElementById('settingsWallpaperSection');
  const themeCards = settingsThemeSection ? settingsThemeSection.querySelectorAll('.theme-card[data-theme-key]') : [];
  const wallpaperCards = settingsWallpaperSection ? settingsWallpaperSection.querySelectorAll('.wallpaper-card') : [];

  function applyTheme(theme) {
    currentTheme = theme;
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('nexova-theme', theme);
    themeCards.forEach((btn) => {
      const key = btn.getAttribute('data-theme-key');
      btn.classList.toggle('is-active', key === theme);
    });
  }

  if (themeCards.length) {
    applyTheme(currentTheme);
    themeCards.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.getAttribute('data-theme-key');
        if (key) applyTheme(key);
      });
    });
  }

  function applyWallpaper(key) {
    currentWallpaper = key;
    document.body.setAttribute('data-wallpaper', key);
    localStorage.setItem('nexova-wallpaper', key);
    wallpaperCards.forEach((btn) => {
      const k = btn.getAttribute('data-wallpaper-key');
      btn.classList.toggle('is-active', k === key);
    });
  }

  if (wallpaperCards.length) {
    applyWallpaper(currentWallpaper);
    wallpaperCards.forEach((btn) => {
      btn.addEventListener('click', () => {
        const k = btn.getAttribute('data-wallpaper-key');
        if (k) applyWallpaper(k);
      });
    });
  }

  settingsThemeBtn.addEventListener('click', () => {
    openSettings();
    if (settingsThemeSection) settingsThemeSection.hidden = false;
    if (settingsWallpaperSection) settingsWallpaperSection.hidden = false;
  });
}

init();
