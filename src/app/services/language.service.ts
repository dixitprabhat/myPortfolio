import { Injectable, signal, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type Language = 'en' | 'hi';

export interface Translations {
  navHome: string;
  navSkills: string;
  navProjects: string;
  navExperience: string;
  navEducation: string;
  navContact: string;
  availability: string;
  heroGreeting: string;
  heroRole: string;
  resumeBtn: string;
  exploreProjectsBtn: string;
  getInTouchBtn: string;
  connectWithMe: string;
  contactHeading: string;
  contactSubtitle: string;
  backToTop: string;
  copyEmail: string;
  emailCopied: string;
  viewCaseStudy: string;
  liveDemo: string;
  githubRepo: string;
}

const DICTIONARY: Record<Language, Translations> = {
  en: {
    navHome: 'Home',
    navSkills: 'Skills & Stack',
    navProjects: 'Projects',
    navExperience: 'Experience',
    navEducation: 'Education',
    navContact: 'Contact',
    availability: 'Available for Opportunities',
    heroGreeting: "Hi, I'm",
    heroRole: 'MEAN Stack Developer',
    resumeBtn: 'Download Resume',
    exploreProjectsBtn: 'Explore Projects',
    getInTouchBtn: 'Get In Touch',
    connectWithMe: 'Connect With Me:',
    contactHeading: "Let's Build Something Together",
    contactSubtitle: 'Interested in frontend engineering, full-stack opportunities, or collaboration? Drop me a line below or reach out directly.',
    backToTop: 'Back to Top',
    copyEmail: 'Copy Email',
    emailCopied: 'Email copied to clipboard!',
    viewCaseStudy: 'Case Study',
    liveDemo: 'Live Demo',
    githubRepo: 'GitHub',
  },
  hi: {
    navHome: 'मुख्य पृष्ठ',
    navSkills: 'कौशल एवं तकनीक',
    navProjects: 'प्रोजेक्ट्स',
    navExperience: 'अनुभव',
    navEducation: 'शिक्षा',
    navContact: 'संपर्क',
    availability: 'अवसरों के लिए उपलब्ध',
    heroGreeting: 'नमस्ते, मैं हूँ',
    heroRole: 'मीन (MEAN) स्टैक डेवलपर',
    resumeBtn: 'रिज्यूमे डाउनलोड',
    exploreProjectsBtn: 'प्रोजेक्ट्स देखें',
    getInTouchBtn: 'संपर्क करें',
    connectWithMe: 'मुझसे जुड़ें:',
    contactHeading: 'आइए मिलकर कुछ नया बनाएं',
    contactSubtitle: 'क्या आप वेब डेवलपमेंट या फुल-स्टैक प्रोजेक्ट्स के लिए संपर्क करना चाहते हैं? नीचे संदेश भेजें।',
    backToTop: 'ऊपर जाएं',
    copyEmail: 'ईमेल कॉपी करें',
    emailCopied: 'ईमेल क्लिपबोर्ड पर कॉपी हो गया!',
    viewCaseStudy: 'केस स्टडी',
    liveDemo: 'लाइव डेमो',
    githubRepo: 'गिटहब',
  },
};

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly platformId = inject(PLATFORM_ID);
  readonly currentLang = signal<Language>('en');

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      const saved = localStorage.getItem('portfolio_lang') as Language | null;
      if (saved === 'en' || saved === 'hi') {
        this.currentLang.set(saved);
      }
    }
  }

  toggleLanguage(): void {
    const next: Language = this.currentLang() === 'en' ? 'hi' : 'en';
    this.currentLang.set(next);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('portfolio_lang', next);
    }
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('portfolio_lang', lang);
    }
  }

  get t(): Translations {
    return DICTIONARY[this.currentLang()];
  }
}
