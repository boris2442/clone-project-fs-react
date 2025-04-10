import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';

const About = () => {
    return (
        <div>
            <Logo />
            <Navigation />
         
            <div className="container mx-auto px-4 py-10">
                <h1 className="text-4xl text-center font-bold mb-6">Qui sommes-nous ?</h1>

                {/* Section de présentation */}
                <section className="text-center mb-8">
                    <p className="text-lg text-gray-700">
                        Bienvenue sur notre application ! Notre projet vise à rendre l'exploration des pays du monde plus interactive.
                        Nous croyons que l'apprentissage de la géographie peut être ludique et éducatif à la fois.
                        Rejoignez-nous dans cette aventure !
                    </p>
                </section>

                {/* Photo de l'équipe */}
                <section className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
                    <img src='pfofil.jpg' alt="Équipe" className="w-64 h-64 object-cover rounded-full shadow-lg" />
                    <div>
                        <p className="text-center text-lg text-gray-700">
                            Nous sommes passionnés par l'éducation et la technologie. Voici notre équipe qui travaille sans relâche pour vous offrir la meilleure expérience possible.
                        </p>
                    </div>
                </section>

                {/* Objectifs du projet */}
                <section className="mb-8">
                    <h2 className="text-2xl text-center font-semibold mb-4">Objectifs du projet</h2>
                    <ul className="list-disc pl-6 text-lg text-gray-700">
                        <li>Permettre aux utilisateurs de découvrir des informations sur les pays du monde.</li>
                        <li>Offrir une expérience interactive via un filtre par continent et une exploration dynamique.</li>
                        <li>Fournir un moyen simple et ludique d'apprendre la géographie.</li>
                    </ul>
                </section>

                {/* Timeline de développement */}
                <section className="mb-8">
                    <h2 className="text-2xl text-center font-semibold mb-4">Timeline du projet</h2>
                    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8">
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-xl">Janvier 2024</span>
                            <p className="text-gray-700">Début du projet, exploration de l'API des pays.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-xl">Mars 2024</span>
                            <p className="text-gray-700">Développement du filtre de recherche par continent et ajout du slider.</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="font-bold text-xl">Mai 2024</span>
                            <p className="text-gray-700">Ajout de la page "À propos" et des fonctionnalités de partage.</p>
                        </div>
                    </div>
                </section>

                {/* Mentions légales / Contact / Réseaux sociaux */}
                <section className="text-center">
                    <h2 className="text-2xl font-semibold mb-4">Contact & Réseaux sociaux</h2>
                    <p className="text-lg text-gray-700 mb-4">Vous pouvez nous suivre ou nous contacter ici :</p>
                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/boris2442" target="_blank" className="text-xl text-blue-500 hover:text-blue-700">
                            GitHub
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="text-xl text-blue-500 hover:text-blue-700">
                            LinkedIn
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default About;