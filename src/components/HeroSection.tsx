import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, Mail, Clock, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateYouTubeUrl = (url: string) => {
    const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/;
    return pattern.test(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateYouTubeUrl(youtubeUrl)) {
      toast({
        title: "URL inválida",
        description: "Por favor ingresa una URL válida de YouTube",
        variant: "destructive",
      });
      return;
    }

    if (!email) {
      toast({
        title: "Email requerido",
        description: "Por favor ingresa tu email para recibir el resumen",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "¡Resumen enviado!",
        description: `El resumen será enviado a ${email} en unos minutos`,
      });
      setYoutubeUrl("");
      setEmail("");
    }, 3000);
  };

  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBackground})` }}
    >
      <div className="absolute inset-0 bg-youtube-black/40"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold text-youtube-white mb-4">
            ¿Cuántos videos has guardado{" "}
            <span className="text-youtube-red">"para ver más tarde"</span>{" "}
            y nunca los has visto?
          </h1>
          <p className="text-xl md:text-2xl text-youtube-white/90 mb-2">
            Obtén resúmenes instantáneos directo a tu email
          </p>
          <p className="text-lg text-youtube-white/80">
            Tu tiempo vale más que scroll infinito
          </p>
        </div>

        <div className="bg-youtube-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="youtube-url" className="block text-sm font-medium text-youtube-gray-dark mb-2">
                URL del video de YouTube
              </label>
              <div className="relative">
                <Play className="absolute left-3 top-3 h-5 w-5 text-youtube-red" />
                <Input
                  id="youtube-url"
                  type="url"
                  placeholder="https://youtube.com/watch?v=..."
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  className="pl-10 h-12 text-lg border-youtube-gray-light focus:border-youtube-red focus:ring-youtube-red"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-youtube-gray-dark mb-2">
                Tu email (para recibir el resumen)
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-youtube-red" />
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-12 text-lg border-youtube-gray-light focus:border-youtube-red focus:ring-youtube-red"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              variant="cta"
              size="lg"
              className="w-full h-14 text-xl"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Clock className="animate-spin h-5 w-5 mr-2" />
                  Generando resumen...
                </>
              ) : (
                <>
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Generar Resumen Instantáneo
                </>
              )}
            </Button>
          </form>

          <div className="mt-6 flex items-center justify-center space-x-6 text-sm text-youtube-gray-dark">
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-youtube-red mr-1" />
              Gratis
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-youtube-red mr-1" />
              Instantáneo
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 text-youtube-red mr-1" />
              Sin registro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;