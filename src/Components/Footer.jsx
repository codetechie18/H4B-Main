import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  return (
    <footer class="bg-gray-900 text-white py-8">
    <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="footer-section">
            <h4 class="text-lg font-bold mb-4 text-yellow-500">Hack4Brahma</h4>
            <p class="text-sm text-gray-300">A hackathon dedicated to honoring and supporting our brave soldiers through innovative technological solutions.</p>
        </div>
        
        <div class="footer-section">
            <h4 class="text-lg font-bold mb-4 text-yellow-500">Quick Links</h4>
            <ul class="space-y-2">
                <li><a href="#home" class="hover:text-yellow-500 transition-colors">Home</a></li>
                <li><a href="#about" class="hover:text-yellow-500 transition-colors">About</a></li>
                <li><a href="#challenges" class="hover:text-yellow-500 transition-colors">Challenges</a></li>
                <li><a href="#register" class="hover:text-yellow-500 transition-colors">Register</a></li>
            </ul>
        </div>
        
        <div class="footer-section">
            <h4 class="text-lg font-bold mb-4 text-yellow-500">Connect With Us</h4>
            <div class="flex space-x-4">
                <a href="#" class="text-white hover:text-yellow-500 transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.13 8.44 9.88v-7H7.9v-2.88h2.54V9.42c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.88h-2.33v7a10 10 0 0 0 8.44-9.88c0-5.53-4.5-10.02-10-10.02z"/>
                    </svg>
                </a>
                <a href="#" class="text-white hover:text-yellow-500 transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                </a>
                <a href="#" class="text-white hover:text-yellow-500 transition-colors">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.16l3.15 9.71h10.23l-8.28 6.02 3.15 9.71-8.25-6.02-8.25 6.02 3.15-9.71-8.28-6.02h10.23z"/>
                    </svg>
                </a>
            </div>
            <div class="mt-4 text-sm text-gray-400">
                <p>Email: contact@hack4brahma.com</p>
                <p>Support: +91 1234 5678</p>
            </div>
        </div>
    </div>
    
    <div class="border-t border-gray-700 mt-6 py-4 text-center">
        <p class="text-sm text-gray-500">© 2024 Hack4Brahma. Saluting Our Heroes Through Innovation.</p>
    </div>
</footer>
  );
};

export default Footer;
