/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // Aucune optimisation : le quota Hobby (5 000 transformations par mois) est
        // partagé par tous les projets du compte, et `hostname: "**"` laissait
        // n'importe qui faire transformer n'importe quelle image du web. Next 14.2.16
        // n'a pas encore `qualities`, donc même un hôte restreint laissait 100
        // qualités par largeur.
        unoptimized: true,
    },
};

export default nextConfig;
