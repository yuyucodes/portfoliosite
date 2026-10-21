export default function About() {
  return (
    <div className="pt-16 px-8 mt-16 md:px-24 text-slate-500 max-w-5xl mx-auto">
      {/* Header Section: Avatar + Title & Bio info */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        {/* Circular Avatar Placeholder */}
        <div className="w-40 h-40 shrink-0 flex items-center justify-center">
          <img src="https://i.postimg.cc/GhQbXf3G/IMG-0215.jpg" alt="Avatar" className="overflow-hidden w-full h-full rounded-full object-cover drop-shadow-lg" />
        </div>

        {/* Title & Subtitle Info */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            esther <span className="text-slate-400 font-normal text-2xl">(yuyucodes)</span>
          </h1>
          <p className="text-lg font-bold mb-1">
            hi! i'm esther, a student & developer based in boston, massachusetts and charlotte, north carolina.
          </p>
          <p className="text-base text-slate-400">
            i have a passion for building fun things and learning new technologies. i'm currently exploring UI/UX and full-stack development opportunities.
          </p>
        </div>
      </div>

      {/* Main Body Content */}
      <div className="space-y-6 text-base md:text-lg leading-relaxed">
        
        <p className="font-medium text-justify">
          when i'm not coding, you will probably find me at the gym, voice-acting for a special project, or trying out new recipes in the kitchen. i'm always open to connecting with fellow developers and new friends, so feel free to reach out!
        </p>
      </div>

      {/* Education Section matching the style reference */}
      <div className="mt-8">
        <h2 className="text-xl font-bold tracking-wider uppercase mb-6">
          Education
        </h2>
        
        <div className="border-l-4 border-slate-300 pl-4 space-y-1">
          <p className="font-bold text-lg">
            Bachelor of Science in Computer Science and Design
          </p>
          <p className="text-slate-400">
            Northeastern University, expected 2029
          </p>
        </div>
      </div>

      {/* Sign-off */}
      <div className="mt-16 text-right">
        <p className="text-xl font-bold">
          (•˕ •マ.ᐟ
          <br />
          Happy typing!
        </p>
      </div>
    </div>
  );
}