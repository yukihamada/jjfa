import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ja: {
        translation: {
          whitepaper: {
            title: 'JJFAトークン',
            subtitle: '柔術コミュニティを革新するブロックチェーンソリューション',
            intro: {
              title: 'はじめに',
              background: '背景と目的',
              backgroundText: '柔術は、その技術的深さと精神性から世界中で愛される武道・スポーツとなりました。しかし、その普及とコミュニティの発展にはまだ多くの課題が存在します。JJFA（Jiu-Jitsu For ALL）は、これらの課題を解決し、柔術を全ての人々に届けるために設立されました。',
              overview: 'ホワイトペーパーの概要',
              overviewText: '本ホワイトペーパーでは、JJFAが発行する「JJFAトークン」を中心に、ブロックチェーン技術を活用した柔術コミュニティの革新的なエコシステム構築について詳細に説明します。'
            },
            // ... 他の日本語翻訳
          }
        }
      },
      en: {
        translation: {
          whitepaper: {
            title: 'JJFA Token',
            subtitle: 'Blockchain Solution Revolutionizing the Jiu-Jitsu Community',
            intro: {
              title: 'Introduction',
              background: 'Background and Purpose',
              backgroundText: 'Jiu-jitsu has become a globally beloved martial art and sport due to its technical depth and spirituality. However, there are still many challenges in its popularization and community development. JJFA (Jiu-Jitsu For ALL) was established to solve these challenges and deliver jiu-jitsu to all people.',
              overview: 'Whitepaper Overview',
              overviewText: 'This whitepaper details the innovative ecosystem construction of the jiu-jitsu community utilizing blockchain technology, centered around the "JJFA Token" issued by JJFA.'
            },
            // ... 他の英語翻訳
          }
        }
      },
      // 他の言語も同様に追加
    },
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;