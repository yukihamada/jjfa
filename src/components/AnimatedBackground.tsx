const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute rounded-full bg-slate-400/10
              animate-float-slow
              ${getRandomPosition()}
              ${getRandomSize()}
            `}
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const getRandomPosition = () => {
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  return `left-[${left}%] top-[${top}%]`;
};

const getRandomSize = () => {
  const sizes = ['w-4 h-4', 'w-6 h-6', 'w-8 h-8', 'w-12 h-12'];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

export default AnimatedBackground;