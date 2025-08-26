import { Clock, Brain, Smartphone, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Ahorra tiempo valioso",
    description: "Convierte videos de 1 hora en resúmenes de 5 minutos. Más tiempo para lo que realmente importa.",
    stats: "90% menos tiempo"
  },
  {
    icon: Brain,
    title: "No pierdas contenido importante",
    description: "Extrae los puntos clave y conceptos principales sin perder información valiosa.",
    stats: "100% de los puntos clave"
  },
  {
    icon: Smartphone,
    title: "Acceso desde cualquier dispositivo",
    description: "Recibe tus resúmenes por email y accede a ellos desde cualquier lugar.",
    stats: "Disponible 24/7"
  },
  {
    icon: CheckCircle,
    title: "Organiza tu aprendizaje",
    description: "Crea una biblioteca personal de conocimiento organizado y fácil de revisar.",
    stats: "Búsqueda instantánea"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-youtube-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-youtube-black mb-4">
            ¿Por qué usar VideoSnappy?
          </h2>
          <p className="text-lg text-youtube-gray-dark max-w-2xl mx-auto">
            Transforma tu forma de consumir contenido educativo y profesional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group">
                <div className="bg-youtube-white border border-youtube-gray-light rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-youtube-red/20 h-full">
                  <div className="bg-youtube-red/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-youtube-red/20 transition-colors duration-300">
                    <Icon className="h-6 w-6 text-youtube-red" />
                  </div>
                  
                  <h3 className="text-lg font-semibold text-youtube-black mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-youtube-gray-dark text-sm leading-relaxed mb-4">
                    {benefit.description}
                  </p>
                  
                  <div className="border-t border-youtube-gray-light pt-3">
                    <span className="text-youtube-red font-semibold text-sm">
                      {benefit.stats}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-youtube-red/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-youtube-black mb-4">
            ¿Listo para dejar de acumular videos sin ver?
          </h3>
          <p className="text-youtube-gray-dark text-lg mb-6">
            Únete a miles de personas que ya optimizaron su aprendizaje
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-youtube-gray-dark">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-youtube-red mr-2" />
              Más de 10,000 videos resumidos
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-youtube-red mr-2" />
              95% de satisfacción de usuarios
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-youtube-red mr-2" />
              Soporte en español
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;