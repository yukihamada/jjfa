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
            }
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
            }
          }
        }
      },
      pt: {
        translation: {
          whitepaper: {
            title: 'Token JJFA',
            subtitle: 'Solução Blockchain Revolucionando a Comunidade do Jiu-Jitsu',
            intro: {
              title: 'Introdução',
              background: 'Contexto e Objetivo',
              backgroundText: 'O Jiu-jitsu tornou-se uma arte marcial e esporte amado globalmente devido à sua profundidade técnica e espiritualidade. No entanto, ainda existem muitos desafios em sua popularização e desenvolvimento comunitário. A JJFA (Jiu-Jitsu For ALL) foi estabelecida para resolver esses desafios e levar o jiu-jitsu a todas as pessoas.',
              overview: 'Visão Geral do Whitepaper',
              overviewText: 'Este whitepaper detalha a construção inovadora do ecossistema da comunidade do jiu-jitsu utilizando tecnologia blockchain, centrada no "Token JJFA" emitido pela JJFA.'
            }
          }
        }
      },
      ko: {
        translation: {
          whitepaper: {
            title: 'JJFA 토큰',
            subtitle: '주짓수 커뮤니티를 혁신하는 블록체인 솔루션',
            intro: {
              title: '소개',
              background: '배경 및 목적',
              backgroundText: '주짓수는 기술적 깊이와 정신성으로 인해 전 세계적으로 사랑받는 무도와 스포츠가 되었습니다. 하지만 보급과 커뮤니티 발전에는 아직 많은 과제가 있습니다. JJFA(Jiu-Jitsu For ALL)는 이러한 과제를 해결하고 주짓수를 모든 사람들에게 전달하기 위해 설립되었습니다.',
              overview: '백서 개요',
              overviewText: '본 백서는 JJFA가 발행하는 "JJFA 토큰"을 중심으로 블록체인 기술을 활용한 주짓수 커뮤니티의 혁신적인 생태계 구축에 대해 상세히 설명합니다.'
            }
          }
        }
      },
      zh: {
        translation: {
          whitepaper: {
            title: 'JJFA代币',
            subtitle: '革新柔术社区的区块链解决方案',
            intro: {
              title: '简介',
              background: '背景与目的',
              backgroundText: '柔术因其技术深度和精神性而成为全球备受喜爱的武术和运动。然而，在其普及和社区发展方面仍存在诸多挑战。JJFA（Jiu-Jitsu For ALL）成立的目的是解决这些挑战，将柔术带给所有人。',
              overview: '白皮书概述',
              overviewText: '本白皮书详细说明了以JJFA发行的"JJFA代币"为中心，利用区块链技术构建创新柔术社区生态系统的方案。'
            }
          }
        }
      },
      es: {
        translation: {
          whitepaper: {
            title: 'Token JJFA',
            subtitle: 'Solución Blockchain que Revoluciona la Comunidad del Jiu-Jitsu',
            intro: {
              title: 'Introducción',
              background: 'Antecedentes y Propósito',
              backgroundText: 'El Jiu-jitsu se ha convertido en un arte marcial y deporte amado globalmente por su profundidad técnica y espiritualidad. Sin embargo, aún existen muchos desafíos en su popularización y desarrollo comunitario. JJFA (Jiu-Jitsu For ALL) se estableció para resolver estos desafíos y llevar el jiu-jitsu a todas las personas.',
              overview: 'Resumen del Whitepaper',
              overviewText: 'Este whitepaper detalla la construcción innovadora del ecosistema de la comunidad del jiu-jitsu utilizando tecnología blockchain, centrada en el "Token JJFA" emitido por JJFA.'
            }
          }
        }
      },
      fr: {
        translation: {
          whitepaper: {
            title: 'Token JJFA',
            subtitle: 'Solution Blockchain Révolutionnant la Communauté du Jiu-Jitsu',
            intro: {
              title: 'Introduction',
              background: 'Contexte et Objectif',
              backgroundText: 'Le Jiu-jitsu est devenu un art martial et un sport mondialement apprécié pour sa profondeur technique et sa spiritualité. Cependant, il existe encore de nombreux défis dans sa popularisation et le développement de sa communauté. JJFA (Jiu-Jitsu For ALL) a été créée pour relever ces défis et apporter le jiu-jitsu à tous.',
              overview: 'Aperçu du Whitepaper',
              overviewText: 'Ce whitepaper détaille la construction innovante de l\'écosystème de la communauté du jiu-jitsu utilisant la technologie blockchain, centrée sur le "Token JJFA" émis par JJFA.'
            }
          }
        }
      },
      th: {
        translation: {
          whitepaper: {
            title: 'โทเค็น JJFA',
            subtitle: 'โซลูชันบล็อกเชนที่ปฏิวัติชุมชนยูยิตสู',
            intro: {
              title: 'บทนำ',
              background: 'ภูมิหลังและวัตถุประสงค์',
              backgroundText: 'ยูยิตสูได้กลายเป็นศิลปะการต่อสู้และกีฬาที่เป็นที่รักทั่วโลกด้วยความลึกซึ้งทางเทคนิคและจิตวิญญาณ อย่างไรก็ตาม ยังมีความท้าทายมากมายในการเผยแพร่และพัฒนาชุมชน JJFA (Jiu-Jitsu For ALL) ได้ก่อตั้งขึ้นเพื่อแก้ไขความท้าทายเหล่านี้และนำยูยิตสูไปสู่ทุกคน',
              overview: 'ภาพรวมของเอกสารขาว',
              overviewText: 'เอกสารขาวนี้อธิบายรายละเอียดการสร้างระบบนิเวศนวัตกรรมของชุมชนยูยิตสูโดยใช้เทคโนโลยีบล็อกเชน โดยมี "โทเค็น JJFA" ที่ออกโดย JJFA เป็นศูนย์กลาง'
            }
          }
        }
      },
      vi: {
        translation: {
          whitepaper: {
            title: 'Token JJFA',
            subtitle: 'Giải pháp Blockchain Cách mạng hóa Cộng đồng Jiu-Jitsu',
            intro: {
              title: 'Giới thiệu',
              background: 'Bối cảnh và Mục đích',
              backgroundText: 'Jiu-jitsu đã trở thành môn võ thuật và thể thao được yêu thích trên toàn cầu nhờ vào độ sâu kỹ thuật và tính tâm linh của nó. Tuy nhiên, vẫn còn nhiều thách thức trong việc phổ biến và phát triển cộng đồng. JJFA (Jiu-Jitsu For ALL) được thành lập để giải quyết những thách thức này và mang Jiu-jitsu đến với tất cả mọi người.',
              overview: 'Tổng quan về Whitepaper',
              overviewText: 'Whitepaper này mô tả chi tiết việc xây dựng hệ sinh thái sáng tạo của cộng đồng Jiu-jitsu sử dụng công nghệ blockchain, tập trung vào "Token JJFA" do JJFA phát hành.'
            }
          }
        }
      }
    },
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;