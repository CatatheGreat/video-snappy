import { Play, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-youtube-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-youtube-red rounded-full p-2">
              <Play className="h-6 w-6 text-youtube-white fill-current" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-youtube-black">
                VideoSnappy
              </h1>
              <p className="text-xs text-youtube-gray-dark">
                Resumidor Instantáneo
              </p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-youtube-red" />
            <span className="text-sm text-youtube-gray-dark">
              Resúmenes por email
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;