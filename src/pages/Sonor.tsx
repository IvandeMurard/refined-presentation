// src/pages/Sonor.tsx
// FICHIER 4/4 : Assembly final et export pour le case study SONOR
// Version complète conforme aux spécifications validées

import React from "react";
import { useNavigate } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";

import { ContentFR } from "./Sonor_ContentFR";
import { ContentEN } from "./Sonor_ContentEN";

import sonorHero from "/img/image-banniere-sonor.jpg";

/**
 * SONOR Case Study Page
 * 
 * Structure complète :
 * - Fichier 1/4 : Sonor_Composants.tsx (composants réutilisables, tabs)
 * - Fichier 2/4 : Sonor_ContentFR.tsx (contenu français complet)
 * - Fichier 3/4 : Sonor_ContentEN.tsx (contenu anglais complet)
 * - Fichier 4/4 : Sonor_Final.tsx (ce fichier - assembly et export)
 * 
 * Chiffres validés :
 * - 20+ entretiens (pas 30)
 * - 4 co-fondateurs dont 1 dev/data-scientist à mi-temps
 * - 20 000€ financements
 * - 3+1 versions prototype
 * - 6+ jalons mensuels
 * 
 * Verbatims exacts (5) :
 * 1. Pivot stratégique (Conseil BdT/Matrice)
 * 2. L'insight qui a dilué le focus (Collectivité)
 * 3. Marque blanche (Issy-les-Moulineaux)
 * 4. Citation pollution sonore (hero/intro)
 * 5. Conclusion épilogue (Ivan)
 */

export default function SonorPage() {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const title = language === 'fr'
    ? "SONOR — Réduire la pollution sonore grâce à l'open data"
    : "SONOR — Reducing noise pollution with open data";

  const subtitle = language === 'fr'
    ? "Deux ans d'entrepreneuriat : du hackathon au prototype, avec Matrice & la Banque des Territoires"
    : "Two-year journey: from hackathon to prototype, with Matrice & Banque des Territoires";

  return (
    <div>
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <img
          src={sonorHero}
          alt="SONOR hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-3">{title}</h1>
          <p className="text-lg md:text-xl text-white/90">{subtitle}</p>
        </div>
      </section>

      {/* Content (switch FR/EN) */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {language === 'fr' ? <ContentFR /> : <ContentEN />}
      </div>

      {/* Footer */}
      <Footer
        siteName="Ivan de Murard"
        tagline={language === 'fr' 
          ? "Product Designer & Manager créant des expériences centrées sur l'utilisateur"
          : "Product Designer & Manager crafting user-centered experiences"
        }
        sections={[
          { 
            id: "home", 
            label: language === 'fr' ? "Retour au Portfolio" : "Back to Portfolio" 
          }
        ]}
        onSectionClick={() => navigate("/")}
      />
    </div>
  );
}
