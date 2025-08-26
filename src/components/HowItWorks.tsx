import { Link, Mail, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Link,
    title: "1. Pega la URL",
    description: "Copia y pega cualquier URL de YouTube en nuestro formulario",
    color: "text-youtube-red"
  },
  {
    icon: Mail,
    title: "2. Ingresa tu email",
    description: "Agrega tu email para recibir el resumen instantáneo",
    color: "text-youtube-red"
  },
  {
    icon: CheckCircle,
    title: "3. Recibe tu resumen",
    description: "En minutos recibirás un resumen completo en tu bandeja de entrada",
    color: "text-youtube-red"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-youtube-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-youtube-black mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-lg text-youtube-gray-dark max-w-2xl mx-auto">
            Tres simples pasos para convertir cualquier video de YouTube en un resumen útil
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="bg-youtube-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="bg-youtube-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6 group-hover:bg-youtube-red/20 transition-colors duration-300">
                    <Icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-youtube-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-youtube-gray-dark leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-youtube-gray-dark text-lg">
            <span className="font-semibold text-youtube-red">Tiempo promedio:</span> 2-3 minutos para videos de hasta 1 hora
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;