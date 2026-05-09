/* ═══════════════════════════════════════════
   WISHVERSE — script.js
   Complete Application Logic
   ═══════════════════════════════════════════ */

'use strict';

/* ─────────────────────────────────────────
   1. CONSTANTS
───────────────────────────────────────── */
const DEFAULT_UPI   = '9019123302@fam';
const ADMIN_PASS    = 'md imran X 123';
const CONTACT_EMAIL = 'officialimranhub@gmail.com';
const CONTACT_WA    = '6282298431688';

const LANG_NAMES = { en:'English', hi:'हिंदी', kn:'ಕನ್ನಡ', hg:'Hinglish' };
const LANG_FLAGS = { en:'🇬🇧', hi:'🇮🇳', kn:'🇮🇳', hg:'🎭' };

/* ─────────────────────────────────────────
   2. TRANSLATIONS
───────────────────────────────────────── */
const T = {
  en: {
    appName:'WishVerse',by:'by Imran',
    tagline:'Create Magical Wish Experiences',
    heroSub:'Design cinematic, emotional wish websites for birthdays, love, anniversaries & beyond',
    heroBadge:'✨ The Viral Wish Platform',
    createWish:'Create a Wish ✨',exploreTemplates:'Explore Templates',supportUs:'Support WishVerse ❤️',
    howItWorks:'How It Works',
    step1:'Choose Template',step1D:'Pick from 7 beautiful emotional templates',
    step2:'Customize',step2D:'Add your message, photo, music & effects',
    step3:'Share',step3D:'Share via WhatsApp, Instagram or QR code',
    templates:'Templates',features:'Features',
    f1:'7 Beautiful Templates',f2:'Animated Effects',f3:'Multi-language',
    f4:'QR Code Sharing',f5:'Photo Upload',f6:'Countdown Timer',
    myWishes:'My Wishes',noWishes:'No wishes yet. Create your first one!',
    wishTitle:'Wish Title',titlePH:'e.g. Happy Birthday Priya! 🎂',
    yourMessage:'Your Message',msgPH:'Write something beautiful from your heart...',
    toName:'Recipient Name',toPH:'Who is this for?',fromName:'Your Name',fromPH:'Your name',
    selectTemplate:'Select Template',selectTheme:'Select Theme',
    uploadPhoto:'Upload Photo',changePhoto:'Change Photo',
    addEmoji:'Add Emoji',countdownLabel:'Add Countdown Timer',countdownDate:'Target Date & Time',
    selectAudio:'Background Music',audioNone:'No Music',
    preview:'Preview Wish ✨',back:'← Back',saveShare:'Save & Share 🚀',
    copyLink:'Copy Link 🔗',generateQR:'QR Code 📲',
    whatsapp:'WhatsApp',twitter:'Twitter',instagram:'Instagram',
    wishCreated:'Wish saved! ✓',linkCopied:'Link copied! ✓',
    shareText:'Check out this wish I made for you on WishVerse!',
    supportTitle:'Support WishVerse ❤️',
    supportSub:'If this website made someone smile, please support us 🌸',
    enterAmount:'Enter Amount (₹)',genQR:'Generate QR Code',payNow:'Pay Now ✨',
    thankYou:'Thank You So Much! 💖',
    thankYouSub:'Your support keeps WishVerse alive and spreading love 🌟',
    adminTitle:'🔐 Admin Panel',adminPassLabel:'Enter Password',loginBtn:'Login',wrongPass:'Wrong password!',
    upiIdLabel:'UPI ID',supportTextLabel:'Support Text',updateBtn:'Update Settings',savedMsg:'Saved! ✓',
    enabledTemplates:'Enabled Templates',announcement:'Announcement Banner',
    announcePH:'Enter announcement...',featuredTemplate:'Featured Template',
    birthday:'Birthday 🎂',anniversary:'Anniversary 💍',friendship:'Friendship 🤝',
    love:'Love 💕',festival:'Festival 🎉',apology:'Apology 🙏',surprise:'Surprise 🎁',
    romantic:'Romantic 🌹',cute:'Cute 🌸',luxury:'Luxury 👑',cyberpunk:'Cyberpunk ⚡',
    madeWith:'Made with WishVerse ❤️',reactions:'Send a Reaction',
    openGift:'Tap to Open Your Gift 🎁',scrollDown:'Scroll to reveal your surprise...',
    shareOn:'Share on',language:'Language',chooseLanguage:'Choose Your Language',
    footerLinks:'Quick Links',footerLegal:'Legal',footerContact:'Contact',
    privacyPolicy:'Privacy Policy',termsConditions:'Terms & Conditions',contactUs:'Contact Us',
    aboutUs:'About WishVerse',
    openInApp:'Opening...',
    validTitle:'Please enter a wish title',
    validMsg:'Please write your message',
    validTo:'Please enter recipient name',
    openGiftHint:'🎁',
  },
  hi: {
    appName:'WishVerse',by:'by Imran',
    tagline:'जादुई विश अनुभव बनाएं',
    heroSub:'जन्मदिन, प्यार, सालगिरह के लिए सिनेमाई विश वेबसाइट डिज़ाइन करें',
    heroBadge:'✨ वायरल विश प्लेटफॉर्म',
    createWish:'विश बनाएं ✨',exploreTemplates:'टेम्पलेट्स देखें',supportUs:'WishVerse को सपोर्ट करें ❤️',
    howItWorks:'कैसे काम करता है',
    step1:'टेम्पलेट चुनें',step1D:'7 सुंदर टेम्पलेट्स में से चुनें',
    step2:'कस्टमाइज़ करें',step2D:'संदेश, फोटो, इफेक्ट जोड़ें',
    step3:'शेयर करें',step3D:'WhatsApp या QR से शेयर करें',
    templates:'टेम्पलेट्स',features:'फीचर्स',
    f1:'7 सुंदर टेम्पलेट्स',f2:'एनिमेटेड इफेक्ट्स',f3:'मल्टी-लैंग्वेज',
    f4:'QR कोड शेयरिंग',f5:'फोटो अपलोड',f6:'काउंटडाउन टाइमर',
    myWishes:'मेरी विशेज़',noWishes:'अभी कोई विश नहीं। पहली विश बनाएं!',
    wishTitle:'विश का शीर्षक',titlePH:'जैसे: जन्मदिन मुबारक प्रिया! 🎂',
    yourMessage:'आपका संदेश',msgPH:'दिल से कुछ खूबसूरत लिखें...',
    toName:'किसके लिए',toPH:'नाम लिखें',fromName:'आपका नाम',fromPH:'आपका नाम',
    selectTemplate:'टेम्पलेट चुनें',selectTheme:'थीम चुनें',
    uploadPhoto:'फोटो अपलोड करें',changePhoto:'फोटो बदलें',
    addEmoji:'इमोजी जोड़ें',countdownLabel:'काउंटडाउन जोड़ें',countdownDate:'तारीख और समय',
    selectAudio:'बैकग्राउंड म्यूजिक',audioNone:'कोई म्यूजिक नहीं',
    preview:'विश प्रीव्यू ✨',back:'← वापस',saveShare:'सेव और शेयर करें 🚀',
    copyLink:'लिंक कॉपी करें 🔗',generateQR:'QR कोड 📲',
    whatsapp:'व्हाट्सएप',twitter:'ट्विटर',instagram:'इंस्टाग्राम',
    wishCreated:'विश सेव हो गई! ✓',linkCopied:'लिंक कॉपी हो गया! ✓',
    shareText:'WishVerse पर मेरी विश देखें!',
    supportTitle:'WishVerse को सपोर्ट करें ❤️',
    supportSub:'अगर इस वेबसाइट ने किसी को मुस्कुराया, तो सपोर्ट करें 🌸',
    enterAmount:'राशि डालें (₹)',genQR:'QR कोड बनाएं',payNow:'पेमेंट करें ✨',
    thankYou:'बहुत धन्यवाद! 💖',thankYouSub:'आपका सपोर्ट WishVerse को चलाता है 🌟',
    adminTitle:'🔐 एडमिन पैनल',adminPassLabel:'पासवर्ड डालें',loginBtn:'लॉगिन',wrongPass:'गलत पासवर्ड!',
    upiIdLabel:'UPI आईडी',supportTextLabel:'सपोर्ट टेक्स्ट',updateBtn:'सेटिंग्स अपडेट करें',savedMsg:'सेव हो गया! ✓',
    enabledTemplates:'एक्टिव टेम्पलेट्स',announcement:'अनाउंसमेंट',
    announcePH:'अनाउंसमेंट लिखें...',featuredTemplate:'फीचर्ड',
    birthday:'जन्मदिन 🎂',anniversary:'सालगिरह 💍',friendship:'दोस्ती 🤝',
    love:'प्यार 💕',festival:'त्योहार 🎉',apology:'माफी 🙏',surprise:'सरप्राइज 🎁',
    romantic:'रोमांटिक 🌹',cute:'क्यूट 🌸',luxury:'लग्जरी 👑',cyberpunk:'साइबरपंक ⚡',
    madeWith:'WishVerse ❤️ के साथ बनाया',reactions:'रिएक्शन भेजें',
    openGift:'अपना गिफ्ट खोलें 🎁',scrollDown:'नीचे स्क्रॉल करें...',
    shareOn:'शेयर करें',language:'भाषा',chooseLanguage:'भाषा चुनें',
    footerLinks:'लिंक्स',footerLegal:'कानूनी',footerContact:'संपर्क',
    privacyPolicy:'प्राइवेसी पॉलिसी',termsConditions:'नियम और शर्तें',contactUs:'संपर्क करें',
    aboutUs:'WishVerse के बारे में',
    openInApp:'खुल रहा है...',
    validTitle:'कृपया विश का शीर्षक लिखें',validMsg:'कृपया संदेश लिखें',validTo:'कृपया नाम लिखें',
    openGiftHint:'🎁',
  },
  kn: {
    appName:'WishVerse',by:'by Imran',
    tagline:'ಮಾಯಾ ವಿಶ್ ಅನುಭವ ರಚಿಸಿ',
    heroSub:'ಹುಟ್ಟುಹಬ್ಬ, ಪ್ರೀತಿ, ಹಬ್ಬಗಳಿಗಾಗಿ ಸಿನೆಮಾಟಿಕ್ ವಿಶ್ ವೆಬ್‌ಸೈಟ್ ರಚಿಸಿ',
    heroBadge:'✨ ವೈರಲ್ ವಿಶ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್',
    createWish:'ವಿಶ್ ರಚಿಸಿ ✨',exploreTemplates:'ಟೆಂಪ್ಲೇಟ್‌ಗಳು ನೋಡಿ',supportUs:'WishVerse ಬೆಂಬಲಿಸಿ ❤️',
    howItWorks:'ಹೇಗೆ ಕಾರ್ಯ ನಿರ್ವಹಿಸುತ್ತದೆ',
    step1:'ಟೆಂಪ್ಲೇಟ್ ಆಯ್ಕೆ',step1D:'7 ಟೆಂಪ್ಲೇಟ್‌ಗಳಿಂದ ಆಯ್ಕೆ',
    step2:'ಕಸ್ಟಮೈಸ್',step2D:'ಸಂದೇಶ, ಫೋಟೋ, ಸಂಗೀತ ಸೇರಿಸಿ',
    step3:'ಶೇರ್',step3D:'WhatsApp ಮೂಲಕ ಶೇರ್',
    templates:'ಟೆಂಪ್ಲೇಟ್‌ಗಳು',features:'ವೈಶಿಷ್ಟ್ಯಗಳು',
    f1:'7 ಟೆಂಪ್ಲೇಟ್‌ಗಳು',f2:'ಅನಿಮೇಷನ್',f3:'ಬಹು-ಭಾಷೆ',
    f4:'QR ಕೋಡ್',f5:'ಫೋಟೋ',f6:'ಕೌಂಟ್‌ಡೌನ್',
    myWishes:'ನನ್ನ ವಿಶ್‌ಗಳು',noWishes:'ಇನ್ನೂ ವಿಶ್ ಇಲ್ಲ',
    wishTitle:'ವಿಶ್ ಶೀರ್ಷಿಕೆ',titlePH:'ಉದಾ: ಹುಟ್ಟುಹಬ್ಬದ ಶುಭಾಶಯ! 🎂',
    yourMessage:'ನಿಮ್ಮ ಸಂದೇಶ',msgPH:'ಹೃದಯದಿಂದ ಸಂದೇಶ ಬರೆಯಿರಿ...',
    toName:'ಯಾರಿಗಾಗಿ',toPH:'ಹೆಸರು',fromName:'ನಿಮ್ಮ ಹೆಸರು',fromPH:'ನಿಮ್ಮ ಹೆಸರು',
    selectTemplate:'ಟೆಂಪ್ಲೇಟ್ ಆಯ್ಕೆ',selectTheme:'ಥೀಮ್ ಆಯ್ಕೆ',
    uploadPhoto:'ಫೋಟೋ ಅಪ್‌ಲೋಡ್',changePhoto:'ಫೋಟೋ ಬದಲಿಸಿ',
    addEmoji:'ಎಮೋಜಿ',countdownLabel:'ಕೌಂಟ್‌ಡೌನ್',countdownDate:'ದಿನಾಂಕ',
    selectAudio:'ಸಂಗೀತ',audioNone:'ಸಂಗೀತ ಇಲ್ಲ',
    preview:'ಪ್ರಿವ್ಯೂ ✨',back:'← ಹಿಂದೆ',saveShare:'ಉಳಿಸಿ ಮತ್ತು ಶೇರ್ 🚀',
    copyLink:'ಲಿಂಕ್ ಕಾಪಿ 🔗',generateQR:'QR ಕೋಡ್ 📲',
    whatsapp:'ವಾಟ್ಸ್ಆ್ಯಪ್',twitter:'ಟ್ವಿಟರ್',instagram:'ಇನ್‌ಸ್ಟಾ',
    wishCreated:'ವಿಶ್ ಉಳಿಸಲಾಗಿದೆ! ✓',linkCopied:'ಲಿಂಕ್ ಕಾಪಿ! ✓',
    shareText:'WishVerse ನಲ್ಲಿ ವಿಶ್ ನೋಡಿ!',
    supportTitle:'WishVerse ಬೆಂಬಲಿಸಿ ❤️',
    supportSub:'ಈ ವೆಬ್‌ಸೈಟ್ ನಗಿಸಿದ್ದರೆ, ಬೆಂಬಲಿಸಿ 🌸',
    enterAmount:'ಮೊತ್ತ (₹)',genQR:'QR ರಚಿಸಿ',payNow:'ಪಾವತಿಸಿ ✨',
    thankYou:'ಧನ್ಯವಾದ! 💖',thankYouSub:'ನಿಮ್ಮ ಬೆಂಬಲ WishVerse ಅನ್ನು ಮುಂದುವರಿಸುತ್ತದೆ 🌟',
    adminTitle:'🔐 ಅಡ್ಮಿನ್',adminPassLabel:'ಪಾಸ್‌ವರ್ಡ್',loginBtn:'ಲಾಗಿನ್',wrongPass:'ತಪ್ಪು!',
    upiIdLabel:'UPI ID',supportTextLabel:'ಸಪೋರ್ಟ್ ಟೆಕ್ಸ್ಟ್',updateBtn:'ಅಪ್‌ಡೇಟ್',savedMsg:'ಉಳಿಸಲಾಗಿದೆ! ✓',
    enabledTemplates:'ಟೆಂಪ್ಲೇಟ್‌ಗಳು',announcement:'ಅನೌನ್ಸ್‌ಮೆಂಟ್',
    announcePH:'ಬರೆಯಿರಿ...',featuredTemplate:'ಫೀಚರ್ಡ್',
    birthday:'ಹುಟ್ಟುಹಬ್ಬ 🎂',anniversary:'ವಾರ್ಷಿಕೋತ್ಸವ 💍',friendship:'ಸ್ನೇಹ 🤝',
    love:'ಪ್ರೀತಿ 💕',festival:'ಹಬ್ಬ 🎉',apology:'ಕ್ಷಮೆ 🙏',surprise:'ಆಶ್ಚರ್ಯ 🎁',
    romantic:'ರೊಮಾಂಟಿಕ್ 🌹',cute:'ಕ್ಯೂಟ್ 🌸',luxury:'ಲಕ್ಸರಿ 👑',cyberpunk:'ಸೈಬರ್‌ಪಂಕ್ ⚡',
    madeWith:'WishVerse ❤️ ನೊಂದಿಗೆ',reactions:'ಪ್ರತಿಕ್ರಿಯೆ',
    openGift:'ಉಡುಗೊರೆ ತೆರೆಯಿರಿ 🎁',scrollDown:'ಕೆಳಗೆ ಸ್ಕ್ರಾಲ್ ಮಾಡಿ...',
    shareOn:'ಶೇರ್ ಮಾಡಿ',language:'ಭಾಷೆ',chooseLanguage:'ಭಾಷೆ ಆಯ್ಕೆ',
    footerLinks:'ಲಿಂಕ್‌ಗಳು',footerLegal:'ಕಾನೂನು',footerContact:'ಸಂಪರ್ಕ',
    privacyPolicy:'ಗೌಪ್ಯತಾ ನೀತಿ',termsConditions:'ನಿಯಮಗಳು',contactUs:'ಸಂಪರ್ಕ',
    aboutUs:'WishVerse ಬಗ್ಗೆ',
    openInApp:'ತೆರೆಯಲಾಗುತ್ತಿದೆ...',
    validTitle:'ಶೀರ್ಷಿಕೆ ನಮೂದಿಸಿ',validMsg:'ಸಂದೇಶ ಬರೆಯಿರಿ',validTo:'ಹೆಸರು ನಮೂದಿಸಿ',
    openGiftHint:'🎁',
  },
  hg: {
    appName:'WishVerse',by:'by Imran',
    tagline:'Magical Wish Banao',
    heroSub:'Birthday, Pyaar, Tyohar ke liye Cinematic Wish Website Banao',
    heroBadge:'✨ Viral Wish Platform',
    createWish:'Wish Banao ✨',exploreTemplates:'Templates Dekho',supportUs:'WishVerse Support Karo ❤️',
    howItWorks:'Kaise Kaam Karta Hai',
    step1:'Template Chuno',step1D:'7 sundar templates mein se chuno',
    step2:'Customize Karo',step2D:'Message, photo, music add karo',
    step3:'Share Karo',step3D:'WhatsApp ya QR se share karo',
    templates:'Templates',features:'Features',
    f1:'7 Sundar Templates',f2:'Animated Effects',f3:'Multi-language',
    f4:'QR Code Sharing',f5:'Photo Upload',f6:'Countdown Timer',
    myWishes:'Meri Wishes',noWishes:'Abhi koi wish nahi. Pehli wish banao!',
    wishTitle:'Wish ka Title',titlePH:'jaise: Happy Birthday Priya! 🎂',
    yourMessage:'Apna Message Likho',msgPH:'Dil se kuch khoobsurat likho...',
    toName:'Kiske liye',toPH:'Unka naam',fromName:'Tumhara Naam',fromPH:'Tumhara naam',
    selectTemplate:'Template Chuno',selectTheme:'Theme Chuno',
    uploadPhoto:'Photo Upload Karo',changePhoto:'Photo Badlo',
    addEmoji:'Emoji Lagao',countdownLabel:'Countdown Lagao',countdownDate:'Date aur Time',
    selectAudio:'Background Music',audioNone:'Koi Music Nahi',
    preview:'Preview Dekho ✨',back:'← Wapas Jao',saveShare:'Save aur Share Karo 🚀',
    copyLink:'Link Copy Karo 🔗',generateQR:'QR Code 📲',
    whatsapp:'WhatsApp',twitter:'Twitter',instagram:'Instagram',
    wishCreated:'Wish save ho gayi! ✓',linkCopied:'Link copy ho gaya! ✓',
    shareText:'WishVerse pe meri wish dekho!',
    supportTitle:'WishVerse Support Karo ❤️',
    supportSub:'Agar is website ne kisi ko muskuraya, support karo 🌸',
    enterAmount:'Amount Dalo (₹)',genQR:'QR Code Banao',payNow:'Pay Karo ✨',
    thankYou:'Bohot Shukriya! 💖',thankYouSub:'Tumhara support WishVerse chalata hai 🌟',
    adminTitle:'🔐 Admin Panel',adminPassLabel:'Password Dalo',loginBtn:'Login Karo',wrongPass:'Galat password!',
    upiIdLabel:'UPI ID',supportTextLabel:'Support Text',updateBtn:'Update Karo',savedMsg:'Save Ho Gaya! ✓',
    enabledTemplates:'Active Templates',announcement:'Announcement',
    announcePH:'Likho...',featuredTemplate:'Featured',
    birthday:'Birthday 🎂',anniversary:'Anniversary 💍',friendship:'Dosti 🤝',
    love:'Pyaar 💕',festival:'Tyohar 🎉',apology:'Maafi 🙏',surprise:'Surprise 🎁',
    romantic:'Romantic 🌹',cute:'Cute 🌸',luxury:'Luxury 👑',cyberpunk:'Cyberpunk ⚡',
    madeWith:'WishVerse ❤️ ke saath banaya',reactions:'Reaction Bhejo',
    openGift:'Apna Gift Kholo 🎁',scrollDown:'Neeche scroll karo...',
    shareOn:'Share Karo',language:'Bhasha',chooseLanguage:'Apni Bhasha Chuno',
    footerLinks:'Links',footerLegal:'Legal',footerContact:'Contact',
    privacyPolicy:'Privacy Policy',termsConditions:'Terms & Conditions',contactUs:'Contact Karo',
    aboutUs:'WishVerse ke Baare Mein',
    openInApp:'Khul raha hai...',
    validTitle:'Wish ka title likho',validMsg:'Apna message likho',validTo:'Naam likho',
    openGiftHint:'🎁',
  }
};

/* ─────────────────────────────────────────
   3. TEMPLATES DATA
───────────────────────────────────────── */
const TEMPLATES = [
  {id:'birthday',  emoji:'🎂',grad:'linear-gradient(135deg,#f472b6,#9333ea)',accent:'#f472b6',dark:'#0d0015',pts:['🎈','🎉','🎊','✨','🎂'],def:"Wishing you a magical birthday filled with joy, laughter, and beautiful surprises! May every dream of yours come true today and always. 🎂✨",audio:'birthday'},
  {id:'anniversary',emoji:'💍',grad:'linear-gradient(135deg,#fb7185,#be123c)',accent:'#fb7185',dark:'#120004',pts:['💕','💍','🌹','✨','❤️'],def:"Every moment with you is a treasure I cherish forever. You make my world complete. Happy Anniversary, my love! 💍❤️",audio:'romantic'},
  {id:'friendship',emoji:'🤝',grad:'linear-gradient(135deg,#38bdf8,#0284c7)',accent:'#38bdf8',dark:'#00080f',pts:['🌟','🤝','💙','✨','🎊'],def:"Friends like you make life worth living. You're my sunshine on cloudy days and my laughter in hard times. Thank you for everything! 🤝💙",audio:'celebration'},
  {id:'love',      emoji:'💕',grad:'linear-gradient(135deg,#f43f5e,#ec4899)',accent:'#f43f5e',dark:'#100007',pts:['💕','💖','❤️','🌹','✨'],def:"You are the reason my heart smiles every single day. I love you more than words can express. You're my everything! 💕❤️",audio:'romantic'},
  {id:'festival',  emoji:'🎉',grad:'linear-gradient(135deg,#f97316,#eab308)',accent:'#f97316',dark:'#0f0800',pts:['🎉','🪔','🎊','✨','🌟'],def:"May this festival bring light, joy, and endless prosperity to your beautiful life! Wishing you happiness and blessings! 🎉🪔",audio:'celebration'},
  {id:'apology',   emoji:'🙏',grad:'linear-gradient(135deg,#818cf8,#7c3aed)',accent:'#818cf8',dark:'#060010',pts:['🙏','💜','✨','💫','🌸'],def:"I'm truly sorry from the bottom of my heart. You mean everything to me and I never want to hurt you. Please forgive me. 🙏💜",audio:'romantic'},
  {id:'surprise',  emoji:'🎁',grad:'linear-gradient(135deg,#c084fc,#db2777)',accent:'#c084fc',dark:'#0e0015',pts:['🎁','✨','🎊','🌟','💫'],def:"SURPRISE! This special moment was created just for you. Open your heart and let the magic in! 🎁✨🌟",audio:'celebration'},
];

const THEMES = [
  {id:'romantic',label:'romantic',grad:'linear-gradient(135deg,#be185d,#9333ea,#1d4ed8)',glow:'rgba(190,24,93,0.5)'},
  {id:'cute',    label:'cute',    grad:'linear-gradient(135deg,#ec4899,#8b5cf6,#6366f1)',glow:'rgba(236,72,153,0.5)'},
  {id:'luxury',  label:'luxury',  grad:'linear-gradient(135deg,#d97706,#dc2626,#9333ea)',glow:'rgba(217,119,6,0.5)'},
  {id:'cyberpunk',label:'cyberpunk',grad:'linear-gradient(135deg,#06b6d4,#3b82f6,#8b5cf6)',glow:'rgba(6,182,212,0.5)'},
];

const EMOJIS_LIST = ['🎂','💕','🎉','✨','🌟','💫','🎊','🎁','💝','🌸','🌹','💖','🎈','🦋','🌙','⭐','🍰','🥂','🎵','🎶','💐','🌺','🌈','🦄','🔥','💯','🎯','🎨','💜','💙','🤍','🥺','🤗','😘','🌷','🎀','🎼','🌠','💌','🏆'];

const REACTIONS_LIST = ['❤️','😍','🥺','🎉','😭','💖','🔥','✨','🙏','😘','🦋','🌸','👏','🤩','💯','🫶'];

/* ─────────────────────────────────────────
   4. AUDIO — Web Audio API Melodies
───────────────────────────────────────── */
const NOTE = {
  C4:261.63,D4:293.66,E4:329.63,F4:349.23,G4:392.00,A4:440.00,B4:493.88,
  C5:523.25,D5:587.33,E5:659.25,F5:698.46,G5:783.99,A5:880.00,B5:987.77,
  REST:0
};

const AUDIO_TRACKS = [
  {
    id:'birthday',
    name:'🎂 Happy Birthday',
    desc:'Classic birthday melody',
    color:'#f472b6',
    wave:'sine',
    notes:[
      {f:NOTE.G4,d:0.3},{f:NOTE.G4,d:0.15},{f:NOTE.A4,d:0.45},{f:NOTE.G4,d:0.45},{f:NOTE.C5,d:0.45},{f:NOTE.B4,d:0.9},
      {f:NOTE.REST,d:0.18},
      {f:NOTE.G4,d:0.3},{f:NOTE.G4,d:0.15},{f:NOTE.A4,d:0.45},{f:NOTE.G4,d:0.45},{f:NOTE.D5,d:0.45},{f:NOTE.C5,d:0.9},
      {f:NOTE.REST,d:0.18},
      {f:NOTE.G4,d:0.3},{f:NOTE.G4,d:0.15},{f:NOTE.G5,d:0.45},{f:NOTE.E5,d:0.45},{f:NOTE.C5,d:0.45},{f:NOTE.B4,d:0.45},{f:NOTE.A4,d:0.9},
      {f:NOTE.REST,d:0.18},
      {f:NOTE.F5,d:0.3},{f:NOTE.F5,d:0.15},{f:NOTE.E5,d:0.45},{f:NOTE.C5,d:0.45},{f:NOTE.D5,d:0.45},{f:NOTE.C5,d:1.2},
    ]
  },
  {
    id:'romantic',
    name:'💕 Romantic Melody',
    desc:'Soft & emotional tune',
    color:'#fb7185',
    wave:'sine',
    notes:[
      {f:NOTE.E4,d:0.5},{f:NOTE.G4,d:0.5},{f:NOTE.A4,d:0.5},{f:NOTE.B4,d:0.5},
      {f:NOTE.A4,d:0.5},{f:NOTE.G4,d:0.5},{f:NOTE.E4,d:1.0},{f:NOTE.REST,d:0.2},
      {f:NOTE.G4,d:0.5},{f:NOTE.A4,d:0.5},{f:NOTE.B4,d:0.5},{f:NOTE.E5,d:0.5},
      {f:NOTE.D5,d:0.5},{f:NOTE.B4,d:0.5},{f:NOTE.A4,d:1.0},{f:NOTE.REST,d:0.2},
      {f:NOTE.A4,d:0.5},{f:NOTE.B4,d:0.5},{f:NOTE.C5,d:0.5},{f:NOTE.D5,d:0.5},
      {f:NOTE.C5,d:0.5},{f:NOTE.B4,d:0.5},{f:NOTE.A4,d:1.0},{f:NOTE.REST,d:0.2},
      {f:NOTE.G4,d:0.5},{f:NOTE.A4,d:0.5},{f:NOTE.B4,d:0.5},{f:NOTE.A4,d:0.5},
      {f:NOTE.G4,d:0.5},{f:NOTE.E4,d:0.5},{f:NOTE.E4,d:1.5},
    ]
  },
  {
    id:'celebration',
    name:'🎉 Celebration',
    desc:'Upbeat festive melody',
    color:'#f97316',
    wave:'triangle',
    notes:[
      {f:NOTE.C5,d:0.22},{f:NOTE.E5,d:0.22},{f:NOTE.G5,d:0.22},{f:NOTE.C5,d:0.22},
      {f:NOTE.E5,d:0.22},{f:NOTE.G5,d:0.22},{f:NOTE.E5,d:0.45},{f:NOTE.REST,d:0.1},
      {f:NOTE.D5,d:0.22},{f:NOTE.F5,d:0.22},{f:NOTE.A5,d:0.22},{f:NOTE.D5,d:0.22},
      {f:NOTE.F5,d:0.22},{f:NOTE.A5,d:0.22},{f:NOTE.F5,d:0.45},{f:NOTE.REST,d:0.1},
      {f:NOTE.E5,d:0.22},{f:NOTE.G5,d:0.22},{f:NOTE.B5,d:0.45},{f:NOTE.REST,d:0.1},
      {f:NOTE.A5,d:0.22},{f:NOTE.G5,d:0.22},{f:NOTE.F5,d:0.45},{f:NOTE.REST,d:0.1},
      {f:NOTE.E5,d:0.22},{f:NOTE.D5,d:0.22},{f:NOTE.C5,d:0.9},{f:NOTE.REST,d:0.3},
      {f:NOTE.G5,d:0.22},{f:NOTE.E5,d:0.22},{f:NOTE.C5,d:0.9},
    ]
  }
];

/* ─────────────────────────────────────────
   5. STATE
───────────────────────────────────────── */
const state = {
  page: 'loading',
  lang: 'en',
  darkMode: true,
  wishes: [],
  currentWish: null,
  wishStage: 'intro',
  reactions: {},
  adminAuth: false,
  adminState: {
    upiId: DEFAULT_UPI,
    supportText: '',
    announcement: '',
    showAnnouncement: false,
    disabled: [],
    featuredTemplate: 'birthday'
  },
  builder: {
    template:'birthday', theme:'romantic',
    title:'', message:'', to:'', from:'',
    photo:null, showEmoji:false,
    countdown:false, countdownDate:'',
    audio:'birthday', showQR:false
  },
  support: { amount:'49', qrVisible:false, paid:false },
  countdownTimer: null,
  audioCtx: null,
  audioNodes: [],
  audioLoopTimer: null,
  playingTrack: null,
};

/* ─────────────────────────────────────────
   6. UTILITIES
───────────────────────────────────────── */
function uid(){ return Math.random().toString(36).slice(2,9); }
function t(){ return T[state.lang] || T.en; }
function tmplName(id){ const tr=t(); return tr[id]||id; }
function getQR(d){ return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&color=ffffff&bgcolor=000000&data=${encodeURIComponent(d)}`; }
function upiLink(upi,amt){ return `upi://pay?pa=${upi}&pn=WishVerse&am=${amt}&cu=INR`; }
function getTmpl(id){ return TEMPLATES.find(x=>x.id===id)||TEMPLATES[0]; }
function getTheme(id){ return THEMES.find(x=>x.id===id)||THEMES[0]; }

/* ─────────────────────────────────────────
   7. STORAGE
───────────────────────────────────────── */
function loadStorage(){
  try {
    const l=localStorage.getItem('wv_lang'); if(l) state.lang=l;
    const dm=localStorage.getItem('wv_dark'); if(dm!==null) state.darkMode=(dm==='1');
    const w=localStorage.getItem('wv_wishes'); if(w) state.wishes=JSON.parse(w);
    const a=localStorage.getItem('wv_admin'); if(a) Object.assign(state.adminState,JSON.parse(a));
  } catch(e){ /* ignore */ }
}
function saveStorage(){
  try {
    localStorage.setItem('wv_lang', state.lang);
    localStorage.setItem('wv_dark', state.darkMode?'1':'0');
    localStorage.setItem('wv_wishes', JSON.stringify(state.wishes));
    localStorage.setItem('wv_admin', JSON.stringify(state.adminState));
  } catch(e){ /* ignore */ }
}

/* ─────────────────────────────────────────
   8. DARK MODE
───────────────────────────────────────── */
function applyTheme(){
  document.documentElement.setAttribute('data-theme', state.darkMode?'dark':'light');
  const btn=document.getElementById('theme-btn');
  if(btn) btn.textContent = state.darkMode?'☀️':'🌙';
}
function toggleTheme(){
  state.darkMode=!state.darkMode;
  applyTheme();
  saveStorage();
}

/* ─────────────────────────────────────────
   9. TOAST
───────────────────────────────────────── */
function showToast(msg, type='success'){
  const c=document.getElementById('toast-container');
  if(!c) return;
  const d=document.createElement('div');
  d.className=`toast ${type}`;
  const icons={success:'✅',error:'❌',info:'ℹ️'};
  d.innerHTML=`<span>${icons[type]||'✨'}</span><span>${msg}</span>`;
  c.appendChild(d);
  setTimeout(()=>{ d.style.opacity='0'; d.style.transform='translateX(20px)'; d.style.transition='all 0.3s'; setTimeout(()=>d.remove(),320); },2800);
}

/* ─────────────────────────────────────────
   10. CONFETTI
───────────────────────────────────────── */
function launchConfetti(){
  const c=document.getElementById('confetti-container');
  if(!c) return;
  const cols=['#f472b6','#a78bfa','#34d399','#fbbf24','#60a5fa','#f87171','#c084fc','#fb923c'];
  for(let i=0;i<60;i++){
    const p=document.createElement('div');
    p.className='conf-piece';
    const col=cols[Math.floor(Math.random()*cols.length)];
    p.style.cssText=`left:${Math.random()*100}%;top:-20px;width:${Math.random()*8+4}px;height:${Math.random()*12+6}px;background:${col};animation-duration:${Math.random()*2+1.4}s;animation-delay:${Math.random()*1.2}s;transform:rotate(${Math.random()*360}deg);`;
    c.appendChild(p);
    setTimeout(()=>p.remove(),(Math.random()*2+1.4+1.2)*1000+200);
  }
}

/* ─────────────────────────────────────────
   11. REACTION FLOAT
───────────────────────────────────────── */
function floatReaction(emoji){
  const c=document.getElementById('reaction-container');
  if(!c) return;
  const d=document.createElement('div');
  d.className='react-float';
  const rx=(Math.random()-0.5)*120;
  d.style.cssText=`left:${Math.random()*60+20}%;bottom:${Math.random()*20+15}%;--rx:${rx}px;`;
  d.textContent=emoji;
  c.appendChild(d);
  setTimeout(()=>d.remove(),2000);
}

/* ─────────────────────────────────────────
   12. STARS
───────────────────────────────────────── */
function initStars(){
  const c=document.getElementById('stars-bg');
  if(!c) return;
  const colors=['#a78bfa','#ec4899','#d0d0ff','#ffffff'];
  let html='';
  for(let i=0;i<50;i++){
    const sz=Math.random()*2.5+0.8;
    const col=colors[Math.floor(Math.random()*colors.length)];
    const dur=(Math.random()*4+2).toFixed(1);
    const del=(Math.random()*6).toFixed(1);
    html+=`<div class="star" style="left:${Math.random()*100}%;top:${Math.random()*100}%;width:${sz}px;height:${sz}px;background:${col};box-shadow:0 0 ${sz*3}px ${col};--dur:${dur}s;--del:${del}s;animation-delay:${del}s;animation-duration:${dur}s;"></div>`;
  }
  c.innerHTML=html;
}

/* ─────────────────────────────────────────
   13. AUDIO ENGINE
───────────────────────────────────────── */
function getAudioCtx(){
  if(!state.audioCtx){ state.audioCtx=new(window.AudioContext||window.webkitAudioContext)(); }
  if(state.audioCtx.state==='suspended') state.audioCtx.resume();
  return state.audioCtx;
}

function stopAudio(){
  clearTimeout(state.audioLoopTimer);
  state.audioNodes.forEach(n=>{ try{ n.stop(); }catch(e){} });
  state.audioNodes=[];
  state.playingTrack=null;
}

function playTrack(trackId, loop=true){
  stopAudio();
  const track=AUDIO_TRACKS.find(t=>t.id===trackId);
  if(!track) return;
  state.playingTrack=trackId;

  try {
    const ctx=getAudioCtx();
    let time=ctx.currentTime+0.05;
    const masterGain=ctx.createGain();
    masterGain.gain.setValueAtTime(0.32,time);
    masterGain.connect(ctx.destination);

    track.notes.forEach(note=>{
      if(note.f>0){
        const osc=ctx.createOscillator();
        const g=ctx.createGain();
        osc.connect(g); g.connect(masterGain);
        osc.type=track.wave||'sine';
        osc.frequency.setValueAtTime(note.f,time);
        g.gain.setValueAtTime(0,time);
        g.gain.linearRampToValueAtTime(1,time+0.02);
        g.gain.setValueAtTime(1,time+note.d-0.05);
        g.gain.linearRampToValueAtTime(0,time+note.d);
        osc.start(time);
        osc.stop(time+note.d+0.02);
        state.audioNodes.push(osc);
      }
      time+=note.d;
    });

    if(loop){
      const totalMs=(track.notes.reduce((s,n)=>s+n.d,0)+0.5)*1000;
      state.audioLoopTimer=setTimeout(()=>playTrack(trackId,true),totalMs);
    }
  } catch(e){ state.playingTrack=null; }
}

/* ─────────────────────────────────────────
   14. COUNTDOWN
───────────────────────────────────────── */
function clearCountdown(){ clearInterval(state.countdownTimer); state.countdownTimer=null; }

function startCountdown(target){
  clearCountdown();
  function update(){
    const diff=new Date(target).getTime()-Date.now();
    const el=document.getElementById('countdown-display');
    if(!el){ clearCountdown(); return; }
    if(diff<=0){ el.innerHTML='<div style="color:var(--text2);font-family:\'Syne\',sans-serif;">🎉 It\'s time!</div>'; clearCountdown(); return; }
    const d=Math.floor(diff/86400000);
    const h=Math.floor((diff%86400000)/3600000);
    const m=Math.floor((diff%3600000)/60000);
    const s=Math.floor((diff%60000)/1000);
    el.innerHTML=`<div class="countdown-grid">${[{v:d,l:'Days'},{v:h,l:'Hours'},{v:m,l:'Mins'},{v:s,l:'Secs'}].map(u=>`<div class="countdown-unit" style="background:rgba(255,255,255,0.06);"><div class="countdown-num" style="background:linear-gradient(135deg,${state.currentWish?getTmpl(state.currentWish.template).accent:'#a78bfa'},#fff);">${String(u.v).padStart(2,'0')}</div><div class="countdown-label">${u.l}</div></div>`).join('')}</div>`;
  }
  update();
  state.countdownTimer=setInterval(update,1000);
}

/* ─────────────────────────────────────────
   15. NAVIGATION
───────────────────────────────────────── */
function navigate(page){
  clearCountdown();
  if(page!=='view') stopAudio();
  state.page=page;
  renderApp();
}

/* ─────────────────────────────────────────
   16. RENDER — Page Router
───────────────────────────────────────── */
function renderApp(){
  const app=document.getElementById('app');
  if(!app) return;
  switch(state.page){
    case 'lang':    app.innerHTML=renderLang(); break;
    case 'landing': app.innerHTML=renderLanding(); break;
    case 'builder': app.innerHTML=renderBuilder(); attachBuilderEvents(); break;
    case 'view':    app.innerHTML=renderView(); attachViewEvents(); break;
    case 'admin':   app.innerHTML=renderAdmin(); attachAdminEvents(); break;
    default: app.innerHTML='';
  }
  window.scrollTo(0,0);
}

/* ─────────────────────────────────────────
   17. RENDER — Language Popup
───────────────────────────────────────── */
function renderLang(){
  return `<div class="lang-popup-overlay">
    <div class="lang-popup-box glass2">
      <div class="lang-popup-emoji">🌏</div>
      <h2 class="lang-popup-title serif">Welcome to <span class="grad-text">WishVerse</span></h2>
      <p class="lang-popup-sub">by Imran · Choose your language to begin ✨</p>
      <div class="lang-grid">
        ${Object.entries(LANG_NAMES).map(([code,name])=>`
          <button class="lang-btn" onclick="selectLang('${code}')">
            <div class="lang-btn-flag">${LANG_FLAGS[code]}</div>
            <div class="lang-btn-name">${name}</div>
            ${code==='hg'?'<div class="lang-btn-sub">Roman Hindi</div>':''}
          </button>`).join('')}
      </div>
    </div>
  </div>`;
}

function selectLang(code){
  state.lang=code;
  saveStorage();
  navigate('landing');
}

/* ─────────────────────────────────────────
   18. RENDER — Landing Page
───────────────────────────────────────── */
function renderLanding(){
  const tr=t();
  const tkeys={birthday:tr.birthday,anniversary:tr.anniversary,friendship:tr.friendship,love:tr.love,festival:tr.festival,apology:tr.apology,surprise:tr.surprise};
  const thkeys={romantic:tr.romantic,cute:tr.cute,luxury:tr.luxury,cyberpunk:tr.cyberpunk};
  const visible=TEMPLATES.filter(x=>!state.adminState.disabled.includes(x.id));

  return `
  <div class="landing">
    ${state.adminState.showAnnouncement && state.adminState.announcement ?
      `<div class="announce-banner">${state.adminState.announcement}</div>` : ''}

    <!-- NAV -->
    <nav class="nav glass">
      <div class="nav-inner">
        <div class="nav-logo">
          <span class="nav-logo-emoji">✨</span>
          <span class="nav-logo-text">${tr.appName}</span>
          <span class="nav-logo-by">${tr.by}</span>
        </div>
        <div class="nav-actions">
          <select class="lang-select" onchange="changeLang(this.value)" aria-label="Language">
            ${Object.entries(LANG_NAMES).map(([c,n])=>`<option value="${c}" ${state.lang===c?'selected':''}>${LANG_FLAGS[c]} ${n}</option>`).join('')}
          </select>
          <button class="theme-toggle-btn btn" id="theme-btn" onclick="toggleTheme()" aria-label="Toggle theme">${state.darkMode?'☀️':'🌙'}</button>
          <button class="btn btn-ghost sm" onclick="openSupport()">❤️</button>
        </div>
      </div>
    </nav>

    <!-- HERO -->
    <section class="hero z1">
      ${['🎂','💕','🎉','✨','💍','🎁'].map((e,i)=>`<div aria-hidden="true" style="position:absolute;font-size:26px;opacity:0.1;left:${7+i*16}%;top:${20+Math.sin(i)*28}%;animation:floatY ${3+i*0.55}s ease-in-out infinite;animation-delay:${i*0.7}s;pointer-events:none;">${e}</div>`).join('')}
      <div class="hero-badge" style="animation:fadeUp 0.5s ease;">${tr.heroBadge}</div>
      <h1 class="hero-title serif" style="animation:fadeUp 0.7s ease 0.1s both;"><span class="grad-text">${tr.tagline}</span></h1>
      <p class="hero-sub" style="animation:fadeUp 0.7s ease 0.25s both;">${tr.heroSub}</p>
      <div class="hero-btns" style="animation:fadeUp 0.7s ease 0.4s both;">
        <button class="btn btn-primary lg" onclick="navigate('builder')" style="box-shadow:0 8px 36px rgba(139,92,246,0.45);">${tr.createWish}</button>
        <button class="btn btn-ghost" onclick="document.getElementById('tmpl-section').scrollIntoView({behavior:'smooth'})">${tr.exploreTemplates}</button>
      </div>
      <div class="hero-cards" style="animation:fadeUp 0.9s ease 0.6s both;">
        ${TEMPLATES.slice(0,4).map((tmpl,i)=>`
          <div class="hero-card glass" onclick="navigate('builder')" style="animation:floatY ${4+i*0.5}s ease-in-out infinite;animation-delay:${i*0.4}s;">
            <span class="hero-card-emoji" style="filter:drop-shadow(0 0 10px ${tmpl.accent}66);">${tmpl.emoji}</span>
            <div class="hero-card-label">${tkeys[tmpl.id]}</div>
          </div>`).join('')}
      </div>
    </section>

    <!-- HOW IT WORKS -->
    <section class="section z1">
      <div class="section-header">
        <h2 class="section-title serif">${tr.howItWorks}</h2>
        <div class="section-line"></div>
      </div>
      <div class="steps-grid">
        ${[{e:'🎨',h:tr.step1,d:tr.step1D},{e:'✏️',h:tr.step2,d:tr.step2D},{e:'🚀',h:tr.step3,d:tr.step3D}].map((s,i)=>`
          <div class="step-card glass card-hover">
            <div class="step-emoji-wrap">${s.e}</div>
            <div class="step-num">${i+1}</div>
            <h3 class="step-title serif">${s.h}</h3>
            <p class="step-desc">${s.d}</p>
          </div>`).join('')}
      </div>
    </section>

    <!-- TEMPLATES -->
    <section class="section z1" id="tmpl-section">
      <div class="section-header">
        <h2 class="section-title serif">${tr.templates}</h2>
        <p class="section-sub">${state.lang==='hg'?'Har occasion ke liye perfect template':state.lang==='hi'?'हर अवसर के लिए परफेक्ट टेम्पलेट':state.lang==='kn'?'ಪ್ರತಿ ಸಂದರ್ಭಕ್ಕೂ ಟೆಂಪ್ಲೇಟ್':'A perfect template for every occasion'}</p>
        <div class="section-line"></div>
      </div>
      <div class="templates-grid">
        ${visible.map((tmpl,i)=>`
          <div class="tmpl-card" onclick="navigate('builder')" style="animation:fadeUp 0.5s ease ${i*0.08}s both;">
            <div class="tmpl-card-inner" style="background:linear-gradient(160deg,${tmpl.dark} 0%,#04040f 100%);">
              <div class="tmpl-glow" style="background:radial-gradient(circle,${tmpl.accent}25 0%,transparent 70%);"></div>
              <div class="tmpl-top">
                <div>
                  <span class="tmpl-emoji" style="filter:drop-shadow(0 0 12px ${tmpl.accent}66);">${tmpl.emoji}</span>
                  <h3 class="tmpl-name serif">${tkeys[tmpl.id]}</h3>
                  <p class="tmpl-preview">${tmpl.def.slice(0,65)}...</p>
                </div>
                <span class="tmpl-badge">Use →</span>
              </div>
              <div class="tmpl-particles">${tmpl.pts.map(p=>`<span>${p}</span>`).join('')}</div>
            </div>
          </div>`).join('')}
      </div>
      <div style="text-align:center;margin-top:36px;">
        <button class="btn btn-primary lg" onclick="navigate('builder')" style="box-shadow:0 8px 36px rgba(139,92,246,0.4);">${tr.createWish}</button>
      </div>
    </section>

    <!-- FEATURES -->
    <section class="section z1">
      <div class="section-header">
        <h2 class="section-title serif">${tr.features}</h2>
        <div class="section-line"></div>
      </div>
      <div class="features-grid">
        ${[{e:'🎨',tx:tr.f1},{e:'✨',tx:tr.f2},{e:'🌏',tx:tr.f3},{e:'📲',tx:tr.f4},{e:'📸',tx:tr.f5},{e:'⏰',tx:tr.f6}].map(f=>`
          <div class="feat-card glass card-hover">
            <div class="feat-emoji">${f.e}</div>
            <div class="feat-text">${f.tx}</div>
          </div>`).join('')}
      </div>
    </section>

    <!-- MY WISHES -->
    ${state.wishes.length>0?`
    <section class="section z1">
      <div class="section-header">
        <h2 class="section-title serif">${tr.myWishes}</h2>
        <div class="section-line"></div>
      </div>
      <div class="wishes-grid">
        ${state.wishes.map(w=>{ const tm=getTmpl(w.template); return `
          <div class="wish-item glass card-hover" onclick="viewWish('${w.id}')">
            <div class="wish-item-head">
              <span class="wish-item-emoji" style="filter:drop-shadow(0 0 8px ${tm.accent}66);">${tm.emoji}</span>
              <div>
                <div class="wish-item-title serif">${esc(w.title||'Wish')}</div>
                <div class="wish-item-to syne">${tr.toName}: ${esc(w.to||'—')}</div>
              </div>
            </div>
            <p class="wish-item-msg">${esc(w.message||tm.def)}</p>
          </div>`; }).join('')}
      </div>
    </section>`:'' }

    <!-- SUPPORT CTA -->
    <section class="section z1">
      <div class="support-cta glass">
        <div class="support-cta-emoji">❤️</div>
        <h2 class="support-cta-title serif">${tr.supportTitle}</h2>
        <p class="support-cta-sub">${tr.supportSub}</p>
        <button class="btn btn-primary lg" onclick="openSupport()" style="box-shadow:0 8px 36px rgba(139,92,246,0.4);">${tr.supportUs}</button>
      </div>
    </section>

    <!-- FOOTER -->
    ${renderFooter()}
  </div>`;
}

/* ─────────────────────────────────────────
   19. RENDER — Footer
───────────────────────────────────────── */
function renderFooter(){
  const tr=t();
  return `
  <footer class="footer z1">
    <div class="footer-inner">
      <div class="footer-grid">
        <div>
          <div class="footer-brand-logo">
            <span style="font-size:20px;">✨</span>
            <span class="footer-brand-name">${tr.appName}</span>
          </div>
          <p class="footer-brand-desc">Create cinematic, emotional wish websites for your loved ones. Make every moment unforgettable with WishVerse.</p>
          <div class="footer-social">
            <a href="https://wa.me/${CONTACT_WA}" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">📱</a>
            <a href="mailto:${CONTACT_EMAIL}" aria-label="Email" title="Email">📧</a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" title="Instagram">📸</a>
          </div>
        </div>
        <div>
          <div class="footer-col-title">${tr.footerLinks}</div>
          <ul class="footer-links">
            <li><button onclick="navigate('builder')">${tr.createWish}</button></li>
            <li><button onclick="document.getElementById('tmpl-section')?.scrollIntoView({behavior:'smooth'})">${tr.templates}</button></li>
            <li><button onclick="openSupport()">${tr.supportUs}</button></li>
            <li><button onclick="navigate('admin')">${tr.adminTitle}</button></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">${tr.footerLegal}</div>
          <ul class="footer-links">
            <li><button onclick="openPrivacy()">${tr.privacyPolicy}</button></li>
            <li><button onclick="openTerms()">${tr.termsConditions}</button></li>
            <li><button onclick="openAbout()">${tr.aboutUs}</button></li>
          </ul>
        </div>
        <div>
          <div class="footer-col-title">${tr.footerContact}</div>
          <div class="footer-contact-item"><span>📧</span><a href="mailto:${CONTACT_EMAIL}" style="word-break:break-all;">${CONTACT_EMAIL}</a></div>
          <div class="footer-contact-item"><span>📱</span><a href="https://wa.me/${CONTACT_WA}" target="_blank" rel="noopener">+62 822-9843-1688</a></div>
          <div style="margin-top:12px;">
            <button class="btn btn-ghost sm" onclick="openContact()" style="font-size:12px;">💬 ${tr.contactUs}</button>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© ${new Date().getFullYear()} WishVerse · Made with <span class="footer-heart">❤️</span> by Imran · All rights reserved.</p>
        <p class="footer-copy" style="opacity:0.6;">${tr.privacyPolicy} · ${tr.termsConditions}</p>
      </div>
    </div>
  </footer>`;
}

/* ─────────────────────────────────────────
   20. RENDER — Builder
───────────────────────────────────────── */
function renderBuilder(){
  const tr=t();
  const b=state.builder;
  const tmpl=getTmpl(b.template);
  const tkeys={birthday:tr.birthday,anniversary:tr.anniversary,friendship:tr.friendship,love:tr.love,festival:tr.festival,apology:tr.apology,surprise:tr.surprise};
  const thkeys={romantic:tr.romantic,cute:tr.cute,luxury:tr.luxury,cyberpunk:tr.cyberpunk};

  return `
  <div class="builder-page">
    ${renderBuilderNav(tr)}
    <div class="builder-inner">
      <div class="builder-header">
        <h1 class="builder-title serif grad-text">${tr.createWish}</h1>
        <p class="builder-sub">Craft something beautiful and emotional ✨</p>
      </div>

      <!-- TEMPLATE -->
      <div class="builder-section glass">
        <div class="builder-section-title">🎨 ${tr.selectTemplate}</div>
        <div class="chips-row">
          ${TEMPLATES.map(tm=>`
            <button class="chip ${b.template===tm.id?'active':''}" onclick="selectTemplate('${tm.id}')"
              style="background:${b.template===tm.id?tm.grad:'rgba(255,255,255,0.07)'};${b.template===tm.id?`box-shadow:0 4px 20px ${tm.accent}44;`:''}">${tm.emoji} ${tkeys[tm.id]}</button>`).join('')}
        </div>
      </div>

      <!-- THEME -->
      <div class="builder-section glass">
        <div class="builder-section-title">✨ ${tr.selectTheme}</div>
        <div class="chips-row">
          ${THEMES.map(th=>`
            <button class="chip ${b.theme===th.id?'active':''}" onclick="selectTheme('${th.id}')"
              style="background:${th.grad};${b.theme===th.id?`box-shadow:0 4px 18px ${th.glow};`:''}">${thkeys[th.id]}</button>`).join('')}
        </div>
      </div>

      <!-- FORM FIELDS -->
      <div class="builder-section glass">
        <div class="form-group">
          <label class="form-label" for="wish-title">${tr.wishTitle}</label>
          <input class="form-input" id="wish-title" type="text" placeholder="${tr.titlePH}" value="${esc(b.title)}" oninput="state.builder.title=this.value" maxlength="100">
          <div class="form-error" id="err-title">${tr.validTitle}</div>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;">
          <div class="form-group">
            <label class="form-label" for="wish-to">${tr.toName}</label>
            <input class="form-input" id="wish-to" type="text" placeholder="${tr.toPH}" value="${esc(b.to)}" oninput="state.builder.to=this.value" maxlength="60">
            <div class="form-error" id="err-to">${tr.validTo}</div>
          </div>
          <div class="form-group">
            <label class="form-label" for="wish-from">${tr.fromName}</label>
            <input class="form-input" id="wish-from" type="text" placeholder="${tr.fromPH}" value="${esc(b.from)}" oninput="state.builder.from=this.value" maxlength="60">
          </div>
        </div>
        <div class="form-group">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <label class="form-label" style="margin:0;" for="wish-msg">${tr.yourMessage}</label>
            <button class="btn btn-ghost sm" onclick="toggleEmoji()" id="emoji-toggle-btn" style="border:1px solid var(--border2)!important;padding:6px 12px;font-size:12px;">😊 ${tr.addEmoji}</button>
          </div>
          ${b.showEmoji?`
            <div class="emoji-picker-grid glass2" id="emoji-grid">
              ${EMOJIS_LIST.map(e=>`<button class="emoji-btn" onclick="addEmoji('${e}')" title="${e}">${e}</button>`).join('')}
            </div>`:'' }
          <textarea class="form-input" id="wish-msg" rows="5" placeholder="${tr.msgPH}" oninput="state.builder.message=this.value" maxlength="1000">${esc(b.message)}</textarea>
          <div class="form-error" id="err-msg">${tr.validMsg}</div>
        </div>
      </div>

      <!-- PHOTO UPLOAD -->
      <div class="builder-section glass">
        <div class="builder-section-title">📸 ${tr.uploadPhoto}</div>
        ${b.photo?`
          <div class="photo-preview-wrap">
            <img src="${b.photo}" alt="Uploaded photo" class="photo-preview">
            <button class="photo-remove" onclick="removePhoto()" aria-label="Remove photo">×</button>
          </div>`:
          `<div class="photo-upload-area" onclick="triggerPhotoUpload()" role="button" tabindex="0" onkeydown="if(event.key==='Enter')triggerPhotoUpload()">
            <span style="font-size:32px;">📸</span>
            <span style="font-family:'Syne',sans-serif;font-size:13px;font-weight:700;">${tr.uploadPhoto}</span>
            <span style="font-size:11px;opacity:0.6;">JPG, PNG, GIF · Max 5MB</span>
          </div>`}
      </div>

      <!-- AUDIO -->
      <div class="builder-section glass">
        <div class="builder-section-title">🎵 ${tr.selectAudio}</div>
        <div class="audio-tracks">
          <div class="audio-track ${b.audio==='none'?'selected':''}" onclick="selectAudio('none')">
            <input type="radio" class="audio-select-radio" ${b.audio==='none'?'checked':''} readonly>
            <div class="audio-track-info">
              <div class="audio-track-name">🔇 ${tr.audioNone}</div>
              <div class="audio-track-desc">Play wish silently</div>
            </div>
          </div>
          ${AUDIO_TRACKS.map(track=>`
            <div class="audio-track ${b.audio===track.id?'selected':''}" onclick="selectAudio('${track.id}')">
              <input type="radio" class="audio-select-radio" ${b.audio===track.id?'checked':''} readonly>
              <div class="audio-track-info">
                <div class="audio-track-name" style="color:${track.color};">${track.name}</div>
                <div class="audio-track-desc">${track.desc}</div>
              </div>
              <div class="audio-track-btns">
                <button class="audio-play-btn ${state.playingTrack===track.id?'playing':''}" onclick="event.stopPropagation();previewAudio('${track.id}')" aria-label="Preview">
                  ${state.playingTrack===track.id?'⏸':'▶'}
                </button>
                ${state.playingTrack===track.id?`<button class="audio-stop-btn" onclick="event.stopPropagation();stopAudio();renderApp();" aria-label="Stop">⏹</button>`:''}
              </div>
            </div>`).join('')}
        </div>
      </div>

      <!-- COUNTDOWN -->
      <div class="builder-section glass">
        <label style="display:flex;align-items:center;gap:12px;cursor:pointer;margin-bottom:${b.countdown?'18px':'0'};">
          <div class="toggle ${b.countdown?'on':''}" onclick="toggleCountdown()" role="switch" aria-checked="${b.countdown}" tabindex="0">
            <div class="toggle-dot"></div>
          </div>
          <span style="font-family:'Syne',sans-serif;font-weight:700;font-size:13px;color:var(--text2);">⏰ ${tr.countdownLabel}</span>
        </label>
        ${b.countdown?`
          <div style="animation:fadeUp 0.3s ease;">
            <label class="form-label">${tr.countdownDate}</label>
            <input class="form-input" type="datetime-local" id="countdown-input" value="${b.countdownDate}" oninput="state.builder.countdownDate=this.value" style="color-scheme:dark;">
          </div>`:'' }
      </div>

      <!-- ACTION BUTTONS -->
      <div class="builder-actions">
        <button class="btn btn-ghost" onclick="previewWish()" style="padding:15px;border-radius:14px;font-size:14px;border:1px solid var(--border2)!important;">${tr.preview}</button>
        <button class="btn btn-primary" onclick="saveWish()" style="padding:15px;border-radius:14px;font-size:15px;">${tr.saveShare}</button>
      </div>

      <!-- SHARE / QR -->
      <div class="builder-section glass" style="margin-top:18px;">
        <div class="builder-section-title">📤 ${tr.shareOn}</div>
        <div class="share-btns">
          <button class="btn btn-ghost sm" onclick="copyLink()" style="border:1px solid var(--border2)!important;">${tr.copyLink}</button>
          <button class="btn btn-ghost sm" onclick="toggleQR()" style="border:1px solid var(--border2)!important;">${tr.generateQR}</button>
          <button onclick="shareWhatsApp()" style="padding:9px 16px;font-size:12px;background:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.28);color:#22c55e;border-radius:50px;cursor:pointer;font-family:'Syne',sans-serif;font-weight:700;transition:all 0.2s;">📱 ${tr.whatsapp}</button>
          <button onclick="shareTwitter()" style="padding:9px 16px;font-size:12px;background:rgba(96,165,250,0.1);border:1px solid rgba(96,165,250,0.25);color:#60a5fa;border-radius:50px;cursor:pointer;font-family:'Syne',sans-serif;font-weight:700;transition:all 0.2s;">🐦 ${tr.twitter}</button>
        </div>
        ${b.showQR?`
          <div class="qr-box">
            <img src="${getQR(window.location.href)}" width="190" height="190" alt="Share QR Code"
              onerror="this.parentElement.innerHTML='<p style=color:var(--text2);padding:10px;>QR unavailable offline</p>'">
            <p>Scan to share wish</p>
          </div>`:'' }
      </div>
    </div>
    ${renderFooter()}
  </div>`;
}

function renderBuilderNav(tr){
  return `<nav class="nav glass">
    <div class="nav-inner">
      <div class="nav-logo">
        <span class="nav-logo-emoji">✨</span>
        <span class="nav-logo-text">${tr.appName}</span>
      </div>
      <div class="nav-actions">
        <button class="btn btn-ghost sm" onclick="navigate('landing')" style="border:1px solid var(--border2)!important;">${tr.back}</button>
        <button class="theme-toggle-btn btn" id="theme-btn" onclick="toggleTheme()" aria-label="Toggle theme">${state.darkMode?'☀️':'🌙'}</button>
      </div>
    </div>
  </nav>`;
}

/* ─────────────────────────────────────────
   21. RENDER — Wish View
───────────────────────────────────────── */
function renderView(){
  const w=state.currentWish;
  if(!w) return '<div class="z1" style="padding:40px;text-align:center;">No wish found. <button class="btn btn-ghost" onclick="navigate(\'landing\')">← Back</button></div>';
  const tmpl=getTmpl(w.template);
  const theme=getTheme(w.theme);
  const tr=t();

  if(state.wishStage==='intro') return renderViewIntro(w,tmpl,tr);
  if(state.wishStage==='gift')  return renderViewGift(w,tmpl,tr);
  return renderViewReveal(w,tmpl,theme,tr);
}

function renderViewIntro(w,tmpl,tr){
  return `
  <div class="view-page" style="background:radial-gradient(ellipse at 20% 20%,${tmpl.accent}18 0%,transparent 55%),${tmpl.dark};">
    <div class="stage-intro z1">
      <div class="stage-intro-emoji" style="color:${tmpl.accent};">${tmpl.emoji}</div>
      <h1 class="stage-intro-title serif" style="background:linear-gradient(135deg,${tmpl.accent},#fff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">
        ${w.to?`For ${esc(w.to)}`:'A Special Wish'}
      </h1>
      <p class="stage-intro-sub">Opening your wish...</p>
      <div class="stage-intro-dots">
        ${[0,1,2].map(i=>`<div class="stage-intro-dot" style="background:${tmpl.accent};animation-delay:${i*0.2}s;"></div>`).join('')}
      </div>
    </div>
  </div>`;
}

function renderViewGift(w,tmpl,tr){
  return `
  <div class="view-page" style="background:radial-gradient(ellipse at 20% 20%,${tmpl.accent}18 0%,transparent 55%),${tmpl.dark};">
    <div class="view-back"><button class="btn btn-ghost sm" onclick="navigate('landing')" style="backdrop-filter:blur(10px);">${tr.back}</button></div>
    <div class="stage-gift z1">
      ${tmpl.pts.map((p,i)=>`<div aria-hidden="true" style="position:absolute;font-size:18px;opacity:0.25;left:${10+i*18}%;top:${18+Math.sin(i*1.4)*18}%;animation:floatY ${3+i*0.4}s ease-in-out infinite;animation-delay:${i*0.5}s;pointer-events:none;">${p}</div>`).join('')}
      <p style="font-family:'Syne',sans-serif;font-size:13px;color:rgba(240,240,255,0.45);letter-spacing:0.1em;margin-bottom:14px;">${tr.openGift}</p>
      <div class="stage-gift-box" onclick="openGift()" style="filter:drop-shadow(0 0 28px ${tmpl.accent}88);" role="button" tabindex="0" onkeydown="if(event.key==='Enter')openGift()" aria-label="Open gift">🎁</div>
      <p class="stage-gift-hint">${tr.scrollDown}</p>
      <span class="stage-gift-arrow">👇</span>
    </div>
  </div>`;
}

function renderViewReveal(w,tmpl,theme,tr){
  const hasCountdown=w.countdown&&w.countdownDate;
  const hasAudio=w.audio&&w.audio!=='none';
  const reactions=state.reactions;

  return `
  <div class="view-page" style="background:radial-gradient(ellipse at 20% 20%,${tmpl.accent}18 0%,transparent 55%),radial-gradient(ellipse at 80% 80%,${tmpl.accent}12 0%,transparent 50%),${tmpl.dark};">
    <div class="view-back"><button class="btn btn-ghost sm" onclick="navigate('landing')" style="backdrop-filter:blur(10px);">${tr.back}</button></div>
    <div class="view-page-content">

      <!-- HEADER -->
      <div class="view-header">
        <div class="view-header-emoji" style="filter:drop-shadow(0 0 22px ${tmpl.accent}88);">${tmpl.emoji}</div>
        ${w.to?`<div class="view-for-label">For</div>`:''}
        <h1 class="view-title serif" style="background:linear-gradient(135deg,${tmpl.accent},#fff,${tmpl.accent});background-size:200% auto;-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;animation:shimmer 3s linear infinite;">${esc(w.title||tmpl.emoji+' A Special Wish')}</h1>
        ${w.to?`<div class="view-to-badge" style="background:linear-gradient(135deg,${tmpl.accent}22,${tmpl.accent}44);border:1px solid ${tmpl.accent}44;color:${tmpl.accent};font-family:'DM Serif Display',serif;font-size:20px;">${esc(w.to)} 💝</div>`:''}
      </div>

      <!-- PHOTO -->
      ${w.photo?`
        <div class="view-photo">
          <img src="${w.photo}" alt="Special moment" style="box-shadow:0 20px 70px ${tmpl.accent}44,0 8px 28px rgba(0,0,0,0.6);border:2px solid ${tmpl.accent}33;border-radius:24px;">
        </div>`:'' }

      <!-- AUDIO BAR -->
      ${hasAudio?`
        <div class="view-audio-bar glass">
          <div class="view-audio-icon">🎵</div>
          <div class="view-audio-info">
            <div class="view-audio-name">${AUDIO_TRACKS.find(a=>a.id===w.audio)?.name||'Music'}</div>
            <div class="view-audio-status">${state.playingTrack===w.audio?'♫ Playing...':'Tap to play'}</div>
          </div>
          <div class="view-audio-controls">
            <button class="audio-play-btn ${state.playingTrack===w.audio?'playing':''}" onclick="toggleAudio('${w.audio}')" aria-label="${state.playingTrack===w.audio?'Pause':'Play'}">
              ${state.playingTrack===w.audio?'⏸':'▶'}
            </button>
            ${state.playingTrack===w.audio?`<button class="audio-stop-btn" onclick="stopAudio();document.querySelector('.view-audio-status').textContent='Tap to play';this.previousElementSibling.textContent='▶';this.previousElementSibling.classList.remove('playing');this.remove();" aria-label="Stop">⏹</button>`:''}
          </div>
        </div>`:'' }

      <!-- MESSAGE -->
      <div class="view-message-card glass" style="border:1px solid ${tmpl.accent}33;box-shadow:0 0 50px ${tmpl.accent}22;">
        <div class="view-message-quote" style="color:${tmpl.accent};">"</div>
        <p class="view-message-text">${esc(w.message||tmpl.def)}</p>
        ${w.from?`<div class="view-message-from" style="color:${tmpl.accent};">— ${esc(w.from)} 💕</div>`:''}
      </div>

      <!-- COUNTDOWN -->
      ${hasCountdown?`
        <div class="view-countdown glass">
          <div class="view-countdown-title serif">⏰ Countdown</div>
          <div id="countdown-display"><div class="countdown-grid">${[{v:0,l:'Days'},{v:0,l:'Hours'},{v:0,l:'Mins'},{v:0,l:'Secs'}].map(u=>`<div class="countdown-unit" style="background:rgba(255,255,255,0.06);"><div class="countdown-num" style="background:linear-gradient(135deg,${tmpl.accent},#fff);">00</div><div class="countdown-label">${u.l}</div></div>`).join('')}</div></div>
        </div>`:'' }

      <!-- PARTICLES -->
      <div class="view-particles">
        ${tmpl.pts.map((p,i)=>`<div class="view-particle" aria-hidden="true" style="left:${i*18+4}%;--dur:${2.5+i*0.3}s;--del:${i*0.4}s;filter:drop-shadow(0 0 7px ${tmpl.accent}66);">${p}</div>`).join('')}
      </div>

      <!-- REACTIONS -->
      <div class="view-reactions glass">
        <div class="view-reactions-title">${tr.reactions}</div>
        <div class="reactions-row">
          ${REACTIONS_LIST.map(r=>`
            <button class="reaction-btn" onclick="sendReaction('${r}')" aria-label="React with ${r}">
              ${r}
              ${reactions[r]>0?`<span class="reaction-count">${reactions[r]}</span>`:''}
            </button>`).join('')}
        </div>
      </div>

      <!-- SHARE -->
      <div class="view-share">
        <div class="view-share-title">${tr.shareOn}</div>
        <div class="view-share-btns">
          <button onclick="shareWhatsApp()" style="padding:11px 20px;font-size:13px;background:rgba(34,197,94,0.12);border:1px solid rgba(34,197,94,0.28);color:#22c55e;border-radius:50px;cursor:pointer;font-family:'Syne',sans-serif;font-weight:700;transition:all 0.2s;">📱 ${tr.whatsapp}</button>
          <button onclick="shareTwitter()" style="padding:11px 20px;font-size:13px;background:rgba(96,165,250,0.1);border:1px solid rgba(96,165,250,0.25);color:#60a5fa;border-radius:50px;cursor:pointer;font-family:'Syne',sans-serif;font-weight:700;transition:all 0.2s;">🐦 ${tr.twitter}</button>
          <button onclick="copyLink()" style="padding:11px 20px;font-size:13px;background:var(--surface);border:1px solid var(--border2);color:var(--text);border-radius:50px;cursor:pointer;font-family:'Syne',sans-serif;font-weight:700;transition:all 0.2s;">🔗 ${tr.copyLink}</button>
        </div>
      </div>

      <!-- SUPPORT -->
      <button class="view-support-btn" onclick="openSupport()">❤️ ${tr.supportTitle}</button>
    </div>

    <!-- FOOTER BAR -->
    <div class="view-footer-bar">
      <span class="view-footer-text">${tr.madeWith} · ${tr.by} ✨</span>
    </div>
  </div>`;
}

/* ─────────────────────────────────────────
   22. RENDER — Admin
───────────────────────────────────────── */
function renderAdmin(){
  const tr=t();
  const isAuth=state.adminAuth;

  return `
  <div class="admin-page">
    <nav class="nav glass">
      <div class="nav-inner">
        <div class="nav-logo"><span class="nav-logo-emoji">✨</span><span class="nav-logo-text">${tr.appName}</span></div>
        <div class="nav-actions">
          <button class="btn btn-ghost sm" onclick="navigate('landing')" style="border:1px solid var(--border2)!important;">${tr.back}</button>
          <button class="theme-toggle-btn btn" id="theme-btn" onclick="toggleTheme()" aria-label="Theme">${state.darkMode?'☀️':'🌙'}</button>
        </div>
      </div>
    </nav>
    <div class="admin-inner">
      ${!isAuth?`
        <div class="glass" style="border-radius:24px;padding:40px 32px;max-width:380px;margin:0 auto;text-align:center;">
          <div style="font-size:44px;margin-bottom:14px;">🔐</div>
          <h2 class="serif" style="font-size:26px;margin-bottom:22px;">${tr.adminTitle}</h2>
          <div class="form-group">
            <input class="form-input" type="password" id="admin-pass-input" placeholder="${tr.adminPassLabel}" onkeydown="if(event.key==='Enter')adminLogin()">
            <div class="form-error" id="admin-pass-err">${tr.wrongPass}</div>
          </div>
          <button class="btn btn-primary" onclick="adminLogin()" style="width:100%;padding:14px;border-radius:14px;">${tr.loginBtn}</button>
        </div>
      `:`
        <h2 class="admin-title serif grad-text">${tr.adminTitle}</h2>
        <p class="admin-sub">${tr.appName} · Admin Settings</p>
        <div>
          <div class="admin-section glass">
            <div class="admin-section-title">💳 UPI / Payment</div>
            <div class="form-group">
              <label class="form-label">${tr.upiIdLabel}</label>
              <input class="form-input" id="admin-upi" value="${esc(state.adminState.upiId)}" placeholder="yourname@upi">
            </div>
          </div>
          <div class="admin-section glass">
            <div class="admin-section-title">❤️ ${tr.supportTextLabel}</div>
            <textarea class="form-input" id="admin-support-text" rows="3">${esc(state.adminState.supportText)}</textarea>
          </div>
          <div class="admin-section glass">
            <div class="admin-section-title">📢 ${tr.announcement}</div>
            <textarea class="form-input" id="admin-announce" rows="2" placeholder="${tr.announcePH}" style="margin-bottom:12px;">${esc(state.adminState.announcement)}</textarea>
            <label style="display:flex;align-items:center;gap:10px;cursor:pointer;">
              <div class="toggle ${state.adminState.showAnnouncement?'on':''}" id="announce-toggle" onclick="toggleAnnounce()" role="switch">
                <div class="toggle-dot"></div>
              </div>
              <span style="font-family:'Syne',sans-serif;font-size:13px;color:var(--text2);">Show announcement banner</span>
            </label>
          </div>
          <div class="admin-section glass">
            <div class="admin-section-title">🎨 ${tr.enabledTemplates}</div>
            <div class="admin-tmpl-grid">
              ${TEMPLATES.map(tmpl=>{ const on=!state.adminState.disabled.includes(tmpl.id); return `
                <div class="admin-tmpl-item ${on?'on':''}" onclick="toggleTemplate('${tmpl.id}')">
                  <input type="checkbox" ${on?'checked':''} readonly style="accent-color:#8b5cf6;pointer-events:none;">
                  <span style="font-size:16px;">${tmpl.emoji}</span>
                  <span style="font-family:'Syne',sans-serif;font-size:12px;font-weight:600;">${tmpl.id}</span>
                </div>`; }).join('')}
            </div>
          </div>
          <div class="admin-section glass">
            <div class="admin-section-title">⭐ ${tr.featuredTemplate}</div>
            <select class="form-input" id="admin-featured" style="cursor:pointer;">
              ${TEMPLATES.map(tmpl=>`<option value="${tmpl.id}" ${state.adminState.featuredTemplate===tmpl.id?'selected':''}>${tmpl.emoji} ${tmpl.id}</option>`).join('')}
            </select>
          </div>
          <button class="btn btn-primary" id="admin-save-btn" onclick="adminSave()" style="width:100%;padding:15px;border-radius:16px;font-size:15px;margin-top:4px;">${tr.updateBtn}</button>
        </div>
      `}
    </div>
    ${renderFooter()}
  </div>`;
}

/* ─────────────────────────────────────────
   23. MODALS — Support
───────────────────────────────────────── */
function openSupport(){
  state.support={amount:'49',qrVisible:false,paid:false};
  renderSupportModal();
  document.getElementById('modal-support').classList.remove('hidden');
}
function renderSupportModal(){
  const tr=t();
  const s=state.support;
  const box=document.getElementById('support-box');
  if(!box) return;
  if(s.paid){
    box.innerHTML=`
      <button class="modal-close" onclick="closeModal('modal-support')">×</button>
      <div class="support-thank">
        <div class="support-thank-emoji">💖</div>
        <h3 class="support-thank-title serif">${tr.thankYou}</h3>
        <p class="support-thank-sub">${tr.thankYouSub}</p>
        <button class="btn btn-primary" onclick="closeModal('modal-support')" style="width:100%;padding:14px;border-radius:14px;">Close ✨</button>
      </div>`;
    return;
  }
  const link=upiLink(state.adminState.upiId, s.amount);
  const qr=getQR(link);
  box.innerHTML=`
    <button class="modal-close" onclick="closeModal('modal-support')">×</button>
    <div class="support-modal-header">
      <div class="support-modal-emoji">❤️</div>
      <h3 class="support-modal-title serif">${tr.supportTitle}</h3>
      <p class="support-modal-sub">${tr.supportSub}</p>
    </div>
    <div class="quick-amts">
      ${['21','49','99','199','499'].map(a=>`<button class="quick-amt ${s.amount===a?'active':''}" onclick="setAmount('${a}')"  >₹${a}</button>`).join('')}
    </div>
    <div class="form-group">
      <label class="form-label">${tr.enterAmount}</label>
      <input class="form-input" type="number" id="support-amount" value="${s.amount}" oninput="state.support.amount=this.value;state.support.qrVisible=false;" style="text-align:center;font-size:20px;font-weight:700;" min="1">
    </div>
    <button class="btn btn-primary" onclick="showSupportQR()" style="width:100%;padding:14px;border-radius:14px;margin-bottom:18px;">${tr.genQR}</button>
    ${s.qrVisible?`
      <div style="text-align:center;animation:scaleIn 0.3s ease;">
        <div class="qr-box" style="margin:0 auto 14px;">
          <img src="${qr}" width="190" height="190" alt="Payment QR"
            onerror="this.parentElement.innerHTML='<p style=color:var(--text2);padding:10px;font-size:13px;>Open your UPI app and pay manually to:<br><strong>${esc(state.adminState.upiId)}</strong></p>'">
          <p>Scan with any UPI app · ₹${s.amount}</p>
        </div>
        <p style="color:var(--muted);font-size:12px;margin-bottom:14px;">${esc(state.adminState.upiId)}</p>
        <a href="${link}" class="btn btn-primary" style="display:inline-flex;padding:15px 30px;border-radius:14px;font-size:16px;text-decoration:none;" onclick="setTimeout(()=>{state.support.paid=true;renderSupportModal();launchConfetti();},1200);">${tr.payNow}</a>
        <p style="margin-top:10px;font-size:11px;color:var(--muted);">Opens your UPI app automatically</p>
      </div>`:''}`;
}

function setAmount(a){
  state.support.amount=a;
  state.support.qrVisible=false;
  renderSupportModal();
}
function showSupportQR(){
  const amt=document.getElementById('support-amount');
  if(amt) state.support.amount=amt.value||'49';
  if(!state.support.amount||isNaN(state.support.amount)||+state.support.amount<1){ showToast('Enter valid amount','error'); return; }
  state.support.qrVisible=true;
  renderSupportModal();
}

/* ─────────────────────────────────────────
   24. MODALS — Privacy & Terms
───────────────────────────────────────── */
function openPrivacy(){
  document.getElementById('privacy-content').innerHTML=getPrivacyHTML();
  document.getElementById('modal-privacy').classList.remove('hidden');
}
function openTerms(){
  document.getElementById('terms-content').innerHTML=getTermsHTML();
  document.getElementById('modal-terms').classList.remove('hidden');
}
function openAbout(){
  document.getElementById('terms-content').innerHTML=getAboutHTML();
  document.getElementById('modal-terms').querySelector('.modal-doc-title').textContent='About WishVerse';
  document.getElementById('modal-terms').querySelector('.modal-doc-icon').textContent='✨';
  document.getElementById('modal-terms').classList.remove('hidden');
}
function closeModal(id){
  document.getElementById(id).classList.add('hidden');
}

function getPrivacyHTML(){
  return `
    <h3>1. Information We Collect</h3>
    <p>WishVerse is a client-side application. We collect minimal information:</p>
    <ul>
      <li><strong>Wish Data:</strong> Your wish content (title, message, photos, settings) is stored locally on your device using browser localStorage. We do not transmit this to any server.</li>
      <li><strong>Language Preference:</strong> Your chosen language is saved locally.</li>
      <li><strong>Theme Preference:</strong> Dark/Light mode preference is stored locally.</li>
    </ul>
    <h3>2. Photo Uploads</h3>
    <p>Photos you upload are processed entirely in your browser and stored locally. They are never uploaded to external servers by WishVerse.</p>
    <h3>3. Third-Party Services</h3>
    <ul>
      <li><strong>Google Fonts:</strong> We load fonts from Google Fonts CDN. Google's privacy policy applies.</li>
      <li><strong>QR Code API:</strong> When generating QR codes, the wish URL is sent to api.qrserver.com. No personal data is included.</li>
      <li><strong>UPI Payments:</strong> Payment processing is handled entirely by your UPI app. We never receive or store payment information.</li>
    </ul>
    <h3>4. Cookies</h3>
    <p>WishVerse does not use cookies. We only use localStorage for saving your preferences and wishes locally.</p>
    <h3>5. Data Sharing</h3>
    <p>We do not sell, trade, or share any personal information with third parties. All data remains on your device.</p>
    <h3>6. Children's Privacy</h3>
    <p>WishVerse is suitable for all ages. We do not knowingly collect personal information from children.</p>
    <h3>7. Changes to Privacy Policy</h3>
    <p>We may update this policy occasionally. Changes will be reflected on this page with an updated date.</p>
    <h3>8. Contact</h3>
    <p>For privacy concerns, contact us at: <strong>${CONTACT_EMAIL}</strong></p>`;
}

function getTermsHTML(){
  return `
    <h3>1. Acceptance of Terms</h3>
    <p>By using WishVerse, you agree to these Terms & Conditions. If you do not agree, please do not use the service.</p>
    <h3>2. Description of Service</h3>
    <p>WishVerse is a free web application that allows users to create personalized, animated wish experiences for sharing with loved ones.</p>
    <h3>3. User Content</h3>
    <ul>
      <li>You retain ownership of all content you create on WishVerse.</li>
      <li>You are responsible for ensuring your content does not violate any laws or third-party rights.</li>
      <li>Do not use WishVerse to create harmful, abusive, or inappropriate content.</li>
    </ul>
    <h3>4. Prohibited Uses</h3>
    <p>You may not use WishVerse to:</p>
    <ul>
      <li>Share harmful, hateful, or illegal content</li>
      <li>Infringe on intellectual property rights</li>
      <li>Spam or harass other users</li>
      <li>Attempt to reverse engineer or hack the application</li>
    </ul>
    <h3>5. Support System</h3>
    <p>The "Support WishVerse" feature is entirely voluntary. Payments are processed through your UPI app and go directly to the developer. We make no guarantees or claims related to the support feature.</p>
    <h3>6. Disclaimer of Warranties</h3>
    <p>WishVerse is provided "as is" without warranties of any kind. We do not guarantee uninterrupted service or that the service will be error-free.</p>
    <h3>7. Limitation of Liability</h3>
    <p>WishVerse and its creators shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.</p>
    <h3>8. Changes to Terms</h3>
    <p>We reserve the right to modify these terms at any time. Continued use of WishVerse constitutes acceptance of the updated terms.</p>
    <h3>9. Governing Law</h3>
    <p>These terms are governed by applicable law. Disputes shall be resolved through appropriate legal channels.</p>
    <h3>10. Contact</h3>
    <p>Questions about these terms: <strong>${CONTACT_EMAIL}</strong></p>`;
}

function getAboutHTML(){
  return `
    <h3>What is WishVerse?</h3>
    <p>WishVerse is a <strong>cinematic wish experience platform</strong> created by Imran. It lets you create beautiful, animated, personalized wish websites for your loved ones — and share them via WhatsApp, Instagram, or QR code.</p>
    <h3>Our Mission</h3>
    <p>To make every special moment more memorable. Instead of sending a boring text message, create a full cinematic experience that will leave your loved one speechless. ✨</p>
    <h3>Features</h3>
    <ul>
      <li>🎂 7 beautiful emotional templates</li>
      <li>🎨 4 stunning visual themes</li>
      <li>🌏 4 language support (EN, हिंदी, ಕನ್ನಡ, Hinglish)</li>
      <li>🎵 3 background music tracks via Web Audio</li>
      <li>📸 Photo upload support</li>
      <li>⏰ Countdown timer</li>
      <li>💳 UPI support system</li>
      <li>🌙 Dark & Light mode</li>
    </ul>
    <h3>Creator</h3>
    <p>WishVerse was built with ❤️ by <strong>Imran</strong>. If this app made someone smile, consider supporting the project!</p>
    <h3>Contact</h3>
    <p>📧 ${CONTACT_EMAIL}<br>📱 WhatsApp: +62 822-9843-1688</p>`;
}

/* ─────────────────────────────────────────
   25. MODAL — Contact
───────────────────────────────────────── */
function openContact(){
  const tr=t();
  document.getElementById('contact-content').innerHTML=`
    <div class="contact-header">
      <div class="contact-emoji">💬</div>
      <h3 class="contact-title serif">${tr.contactUs}</h3>
      <p class="contact-sub">We'd love to hear from you! Get in touch below.</p>
    </div>
    <div class="contact-methods">
      <div class="contact-method">
        <div class="contact-method-icon">📧</div>
        <div class="contact-method-info">
          <div class="contact-method-label">Email</div>
          <div class="contact-method-val">${CONTACT_EMAIL}</div>
        </div>
        <button class="contact-method-btn" onclick="window.open('mailto:${CONTACT_EMAIL}','_blank')" style="background:linear-gradient(135deg,#7c3aed,#be185d);">Send</button>
      </div>
      <div class="contact-method">
        <div class="contact-method-icon">📱</div>
        <div class="contact-method-info">
          <div class="contact-method-label">WhatsApp</div>
          <div class="contact-method-val">+62 822-9843-1688</div>
        </div>
        <button class="contact-method-btn" onclick="window.open('https://wa.me/${CONTACT_WA}','_blank')" style="background:linear-gradient(135deg,#22c55e,#16a34a);">Chat</button>
      </div>
    </div>
    <div class="contact-form-title">✉️ Send Feedback</div>
    <div>
      <div class="form-group">
        <label class="form-label">Your Name</label>
        <input class="form-input" type="text" id="cf-name" placeholder="Your name" maxlength="80">
        <div class="form-error" id="cf-name-err">Please enter your name</div>
      </div>
      <div class="form-group">
        <label class="form-label">Your Message</label>
        <textarea class="form-input" id="cf-msg" rows="4" placeholder="Write your feedback, suggestion or issue..." maxlength="1000"></textarea>
        <div class="form-error" id="cf-msg-err">Please write your message</div>
      </div>
      <div class="contact-form-actions">
        <button class="btn" onclick="sendContactEmail()" style="background:linear-gradient(135deg,#7c3aed,#be185d);color:#fff;padding:13px;border-radius:12px;font-size:13px;">📧 Send via Email</button>
        <button class="btn" onclick="sendContactWA()" style="background:linear-gradient(135deg,#22c55e,#16a34a);color:#fff;padding:13px;border-radius:12px;font-size:13px;">📱 Send via WhatsApp</button>
      </div>
    </div>`;
  document.getElementById('modal-contact').classList.remove('hidden');
}

function validateContact(){
  let ok=true;
  const name=document.getElementById('cf-name');
  const msg=document.getElementById('cf-msg');
  const nErr=document.getElementById('cf-name-err');
  const mErr=document.getElementById('cf-msg-err');
  if(!name||!name.value.trim()){ if(nErr)nErr.classList.add('show'); if(name)name.classList.add('error'); ok=false; } else { if(nErr)nErr.classList.remove('show'); if(name)name.classList.remove('error'); }
  if(!msg||!msg.value.trim()){ if(mErr)mErr.classList.add('show'); if(msg)msg.classList.add('error'); ok=false; } else { if(mErr)mErr.classList.remove('show'); if(msg)msg.classList.remove('error'); }
  return ok;
}
function sendContactEmail(){
  if(!validateContact()) return;
  const name=document.getElementById('cf-name').value;
  const msg=document.getElementById('cf-msg').value;
  const subject=encodeURIComponent(`WishVerse Feedback from ${name}`);
  const body=encodeURIComponent(`Name: ${name}\n\nMessage:\n${msg}\n\n— Sent via WishVerse`);
  window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`,'_blank');
  showToast('Opening email app...','info');
}
function sendContactWA(){
  if(!validateContact()) return;
  const name=document.getElementById('cf-name').value;
  const msg=document.getElementById('cf-msg').value;
  const text=encodeURIComponent(`*WishVerse Feedback*\nName: ${name}\n\nMessage:\n${msg}`);
  window.open(`https://wa.me/${CONTACT_WA}?text=${text}`,'_blank');
  showToast('Opening WhatsApp...','info');
}

/* ─────────────────────────────────────────
   26. BUILDER ACTIONS
───────────────────────────────────────── */
function selectTemplate(id){
  state.builder.template=id;
  const tmpl=getTmpl(id);
  if(!state.builder.audio||state.builder.audio==='none') state.builder.audio=tmpl.audio||'birthday';
  renderApp();
}
function selectTheme(id){ state.builder.theme=id; renderApp(); }
function toggleEmoji(){ state.builder.showEmoji=!state.builder.showEmoji; renderApp(); }
function addEmoji(e){ state.builder.message=(state.builder.message||'')+e; state.builder.showEmoji=false; renderApp(); }
function toggleCountdown(){ state.builder.countdown=!state.builder.countdown; renderApp(); }
function selectAudio(id){ state.builder.audio=id; renderApp(); }
function toggleQR(){ state.builder.showQR=!state.builder.showQR; renderApp(); }

function triggerPhotoUpload(){
  document.getElementById('photo-input').click();
}
function removePhoto(){
  state.builder.photo=null;
  renderApp();
}
function previewAudio(id){
  if(state.playingTrack===id){ stopAudio(); renderApp(); }
  else { playTrack(id,false); renderApp(); }
}

function validateBuilder(){
  let ok=true;
  const title=document.getElementById('wish-title');
  const msg=document.getElementById('wish-msg');
  const to=document.getElementById('wish-to');
  const tErr=document.getElementById('err-title');
  const mErr=document.getElementById('err-msg');
  const toErr=document.getElementById('err-to');
  if(title&&!title.value.trim()){ if(tErr)tErr.classList.add('show'); title.classList.add('error'); ok=false; } else { if(tErr)tErr.classList.remove('show'); if(title)title.classList.remove('error'); }
  if(msg&&!msg.value.trim()){ if(mErr)mErr.classList.add('show'); msg.classList.add('error'); ok=false; } else { if(mErr)mErr.classList.remove('show'); if(msg)msg.classList.remove('error'); }
  if(to&&!to.value.trim()){ if(toErr)toErr.classList.add('show'); to.classList.add('error'); ok=false; } else { if(toErr)toErr.classList.remove('show'); if(to)to.classList.remove('error'); }
  return ok;
}

function readFormValues(){
  const title=document.getElementById('wish-title');
  const msg=document.getElementById('wish-msg');
  const to=document.getElementById('wish-to');
  const from=document.getElementById('wish-from');
  const cd=document.getElementById('countdown-input');
  if(title) state.builder.title=title.value;
  if(msg) state.builder.message=msg.value;
  if(to) state.builder.to=to.value;
  if(from) state.builder.from=from.value;
  if(cd) state.builder.countdownDate=cd.value;
}

function buildWish(preview=false){
  readFormValues();
  const b=state.builder;
  const tmpl=getTmpl(b.template);
  return {
    id: preview?'preview':uid(),
    title: b.title||`${tmpl.emoji} Wish for ${b.to||'Someone Special'}`,
    message: b.message||tmpl.def,
    to: b.to, from: b.from,
    template: b.template, theme: b.theme,
    photo: b.photo,
    countdown: b.countdown,
    countdownDate: b.countdownDate,
    audio: b.audio,
    createdAt: Date.now()
  };
}

function previewWish(){
  readFormValues();
  const w=buildWish(true);
  state.currentWish=w;
  state.wishStage='intro';
  state.reactions={};
  stopAudio();
  navigate('view');
  scheduleViewStages(w);
}

function saveWish(){
  if(!validateBuilder()) return;
  readFormValues();
  const w=buildWish(false);
  state.wishes=[w,...state.wishes.filter(x=>x.id!==w.id)];
  saveStorage();
  showToast(t().wishCreated,'success');
  state.currentWish=w;
  state.wishStage='intro';
  state.reactions={};
  stopAudio();
  setTimeout(()=>{ navigate('view'); scheduleViewStages(w); },700);
}

function viewWish(id){
  const w=state.wishes.find(x=>x.id===id);
  if(!w) return;
  state.currentWish=w;
  state.wishStage='intro';
  state.reactions={};
  stopAudio();
  navigate('view');
  scheduleViewStages(w);
}

/* ─────────────────────────────────────────
   27. VIEW STAGE LOGIC
───────────────────────────────────────── */
function scheduleViewStages(w){
  setTimeout(()=>{
    state.wishStage='gift';
    renderApp();
  },2200);
}

function openGift(){
  state.wishStage='reveal';
  renderApp();
  launchConfetti();
  // Start audio if set
  if(state.currentWish&&state.currentWish.audio&&state.currentWish.audio!=='none'){
    setTimeout(()=>playTrack(state.currentWish.audio,true),300);
  }
  // Start countdown if set
  if(state.currentWish&&state.currentWish.countdown&&state.currentWish.countdownDate){
    setTimeout(()=>startCountdown(state.currentWish.countdownDate),400);
  }
}

function sendReaction(r){
  state.reactions[r]=(state.reactions[r]||0)+1;
  floatReaction(r);
  // Update reaction counts in DOM without full re-render
  const btns=document.querySelectorAll('.reaction-btn');
  btns.forEach(btn=>{
    const emoji=btn.textContent.trim().slice(0,2);
    if(emoji===r){
      let cnt=btn.querySelector('.reaction-count');
      if(!cnt){
        cnt=document.createElement('span');
        cnt.className='reaction-count';
        btn.appendChild(cnt);
      }
      cnt.textContent=state.reactions[r];
    }
  });
  // Update audio status text
  const audioStatus=document.querySelector('.view-audio-status');
  if(audioStatus&&state.playingTrack) audioStatus.textContent='♫ Playing...';
}

function toggleAudio(trackId){
  if(state.playingTrack===trackId){ stopAudio(); }
  else { playTrack(trackId,true); }
  // Update audio bar without full re-render
  const playBtn=document.querySelector('.view-audio-controls .audio-play-btn');
  const statusEl=document.querySelector('.view-audio-status');
  if(playBtn){ playBtn.textContent=state.playingTrack?'⏸':'▶'; if(state.playingTrack) playBtn.classList.add('playing'); else playBtn.classList.remove('playing'); }
  if(statusEl) statusEl.textContent=state.playingTrack?'♫ Playing...':'Tap to play';
}

/* ─────────────────────────────────────────
   28. SHARE
───────────────────────────────────────── */
function copyLink(){
  const url=window.location.href;
  if(navigator.clipboard){ navigator.clipboard.writeText(url).then(()=>showToast(t().linkCopied,'success')).catch(()=>fallbackCopy(url)); }
  else fallbackCopy(url);
}
function fallbackCopy(text){
  const ta=document.createElement('textarea');
  ta.value=text;ta.style.position='fixed';ta.style.opacity='0';
  document.body.appendChild(ta);ta.select();
  try{ document.execCommand('copy');showToast(t().linkCopied,'success'); }catch(e){ showToast('Copy failed','error'); }
  document.body.removeChild(ta);
}
function shareWhatsApp(){
  const tr=t();
  const url=window.location.href;
  const wish=state.currentWish;
  const title=wish?`✨ ${wish.title||tr.appName}`:'✨ WishVerse';
  const text=`${title}\n\n${tr.shareText}\n${url}`;
  window.open(`https://wa.me/?text=${encodeURIComponent(text)}`,'_blank','noopener');
}
function shareTwitter(){
  const tr=t();
  const url=window.location.href;
  window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(tr.shareText)}&url=${encodeURIComponent(url)}`,'_blank','noopener');
}

/* ─────────────────────────────────────────
   29. ADMIN ACTIONS
───────────────────────────────────────── */
function adminLogin(){
  const inp=document.getElementById('admin-pass-input');
  const err=document.getElementById('admin-pass-err');
  if(!inp) return;
  if(inp.value===ADMIN_PASS){
    state.adminAuth=true;
    renderApp();
  } else {
    if(err) err.classList.add('show');
    inp.classList.add('error');
    inp.value='';
    inp.focus();
  }
}
function toggleTemplate(id){
  const d=[...state.adminState.disabled];
  const idx=d.indexOf(id);
  if(idx>-1) d.splice(idx,1); else d.push(id);
  state.adminState.disabled=d;
  renderApp();
}
function toggleAnnounce(){
  state.adminState.showAnnouncement=!state.adminState.showAnnouncement;
  const tgl=document.getElementById('announce-toggle');
  if(tgl) tgl.className=`toggle ${state.adminState.showAnnouncement?'on':''}`;
}
function adminSave(){
  const upi=document.getElementById('admin-upi');
  const st=document.getElementById('admin-support-text');
  const ann=document.getElementById('admin-announce');
  const feat=document.getElementById('admin-featured');
  if(upi) state.adminState.upiId=upi.value;
  if(st) state.adminState.supportText=st.value;
  if(ann) state.adminState.announcement=ann.value;
  if(feat) state.adminState.featuredTemplate=feat.value;
  saveStorage();
  showToast(t().savedMsg,'success');
  const btn=document.getElementById('admin-save-btn');
  if(btn){ btn.textContent=t().savedMsg; setTimeout(()=>{ if(btn) btn.textContent=t().updateBtn; },2000); }
}

/* ─────────────────────────────────────────
   30. LANGUAGE SWITCH
───────────────────────────────────────── */
function changeLang(code){
  state.lang=code;
  saveStorage();
  renderApp();
}

/* ─────────────────────────────────────────
   31. ATTACH EVENTS
───────────────────────────────────────── */
function attachBuilderEvents(){
  // Photo input
  const photoInput=document.getElementById('photo-input');
  if(photoInput){
    photoInput.onchange=function(){
      const file=this.files[0];
      if(!file) return;
      if(file.size>5*1024*1024){ showToast('Photo too large (max 5MB)','error'); return; }
      const reader=new FileReader();
      reader.onload=ev=>{ state.builder.photo=ev.target.result; renderApp(); };
      reader.onerror=()=>showToast('Failed to load photo','error');
      reader.readAsDataURL(file);
      this.value=''; // reset input
    };
  }
  // Click outside emoji picker to close
  document.addEventListener('click',function closeEmoji(e){
    if(state.builder.showEmoji&&!e.target.closest('#emoji-grid')&&!e.target.closest('#emoji-toggle-btn')){
      state.builder.showEmoji=false;
      const grid=document.getElementById('emoji-grid');
      if(grid){ grid.remove(); }
      document.removeEventListener('click',closeEmoji);
    }
  });
}
function attachViewEvents(){ /* event delegation already on window */ }
function attachAdminEvents(){
  const inp=document.getElementById('admin-pass-input');
  if(inp) inp.focus();
}

/* ─────────────────────────────────────────
   32. MODAL CLOSE ON OVERLAY CLICK
───────────────────────────────────────── */
function initModalCloseOnOverlay(){
  ['modal-support','modal-privacy','modal-terms','modal-contact'].forEach(id=>{
    const el=document.getElementById(id);
    if(el){
      el.addEventListener('click',function(e){
        if(e.target===this) closeModal(id);
      });
    }
  });
}

/* ─────────────────────────────────────────
   33. KEYBOARD SHORTCUTS
───────────────────────────────────────── */
function initKeyboard(){
  document.addEventListener('keydown',function(e){
    // ESC closes modals
    if(e.key==='Escape'){
      ['modal-support','modal-privacy','modal-terms','modal-contact'].forEach(id=>{
        const el=document.getElementById(id);
        if(el&&!el.classList.contains('hidden')) closeModal(id);
      });
    }
    // Admin shortcut: Ctrl+Shift+A
    if(e.ctrlKey&&e.shiftKey&&e.key==='A'){
      e.preventDefault();
      navigate('admin');
    }
  });
}

/* ─────────────────────────────────────────
   34. HTML ESCAPE
───────────────────────────────────────── */
function esc(str){
  if(!str) return '';
  return String(str).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

/* ─────────────────────────────────────────
   35. INIT
───────────────────────────────────────── */
function init(){
  loadStorage();
  applyTheme();
  initStars();
  initModalCloseOnOverlay();
  initKeyboard();

  // Check if lang was previously set
  const hasLang=localStorage.getItem('wv_lang');

  // Show loading screen then navigate
  setTimeout(()=>{
    const ls=document.getElementById('loading-screen');
    if(ls){
      ls.classList.add('fade-out');
      setTimeout(()=>{ ls.style.display='none'; },500);
    }
    navigate(hasLang?'landing':'lang');
  },1500);
}

// Start
document.addEventListener('DOMContentLoaded', init);
