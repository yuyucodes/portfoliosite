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

      <ul className="gap-12 px-0 md:px-24 mt-12 flex flex-wrap gap-6 text-xl font-bold justify-center">
        <li>
          <a
            href="https://www.linkedin.com/in/estychen/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-300 transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/yuyucodes"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-300 transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
          </svg>
            GitHub
          </a>
        </li>
        <li>
          <a
            href="mailto:esyuec@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-300 transition-colors"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z"/>
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z"/>
          </svg>
            Email
          </a>
        </li>
      </ul>

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