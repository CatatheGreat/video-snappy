import { Play, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-youtube-black text-youtube-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-youtube-red rounded-full p-2">
                <Play className="h-5 w-5 text-youtube-white fill-current" />
              </div>
              <div>
                <h3 className="text-lg font-bold">VideoSnappy</h3>
                <p className="text-xs text-youtube-white/70">Resumidor Instantáneo</p>
              </div>
            </div>
            <p className="text-youtube-white/80 text-sm leading-relaxed">
              Transformamos videos largos de YouTube en resúmenes concisos y útiles. 
              Ahorra tiempo y nunca más pierdas contenido valioso.
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-youtube-white">Características</h4>
            <ul className="space-y-2 text-sm text-youtube-white/80">
              <li className="flex items-center">
                <Clock className="h-4 w-4 text-youtube-red mr-2" />
                Resúmenes en 2-3 minutos
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 text-youtube-red mr-2" />
                Entrega por email
              </li>
              <li className="flex items-center">
                <Play className="h-4 w-4 text-youtube-red mr-2" />
                Compatible con todos los videos
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-youtube-white">Contacto</h4>
            <div className="space-y-2 text-sm text-youtube-white/80">
              <p>¿Preguntas o sugerencias?</p>
              <a 
                href="mailto:contacto@videosnappy.com" 
                className="text-youtube-red hover:text-youtube-white transition-colors duration-200"
              >
                contacto@videosnappy.com
              </a>
              <p className="text-xs text-youtube-white/60 mt-4">
                Procesamos videos de YouTube de forma automatizada para generar resúmenes útiles.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-youtube-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-youtube-white/60">
            © 2024 VideoSnappy. Hecho con ❤️ para optimizar tu aprendizaje.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;