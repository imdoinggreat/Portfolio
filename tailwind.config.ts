import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 柔性加色系统 - 用户配色
        honeydew: {
          50: '#F0FAF5',
          100: '#E5F7EE',
          200: '#D5F2E8',  // 主冷色 60%
          300: '#B8E9D8',
          400: '#8FDDC4',
          500: '#6BD1AF',
        },
        lychee: {
          50: '#FFF5F9',
          100: '#FFEFF5',
          200: '#FFE9F1',  // 主柔粉 30%
          300: '#FFD9E8',
          400: '#FFC5DC',
          500: '#FFB0D0',
        },
        mango: {
          50: '#FFF9F0',
          100: '#FFF4E5',
          200: '#FFEDD0',  // 主暖色 10%
          300: '#FFE4B8',
          400: '#FFD89A',
          500: '#FFCC7C',
        },
        
        // shadcn 兼容
        background: '#FFFFFF',
        foreground: '#2D3748',
        card: {
          DEFAULT: 'rgba(255, 255, 255, 0.8)',
          foreground: '#2D3748',
        },
        popover: {
          DEFAULT: 'rgba(255, 255, 255, 0.95)',
          foreground: '#2D3748',
        },
        primary: {
          DEFAULT: '#D5F2E8',
          foreground: '#1A4D3F',
        },
        secondary: {
          DEFAULT: '#FFE9F1',
          foreground: '#6B2D4A',
        },
        muted: {
          DEFAULT: '#FFEDD0',
          foreground: '#735A3A',
        },
        accent: {
          DEFAULT: '#D5F2E8',
          foreground: '#1A4D3F',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        border: 'rgba(213, 242, 232, 0.3)',
        input: 'rgba(213, 242, 232, 0.5)',
        ring: '#D5F2E8',
      },
      
      backgroundImage: {
        'soft-glow': 'radial-gradient(circle at center, #FFF991 0%, transparent 70%)',
        'honeydew-gradient': 'linear-gradient(135deg, #D5F2E8 0%, #E5F7EE 100%)',
        'lychee-gradient': 'linear-gradient(135deg, #FFE9F1 0%, #FFF5F9 100%)',
        'mango-gradient': 'linear-gradient(135deg, #FFEDD0 0%, #FFF9F0 100%)',
        'film-grain': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")',
      },
      
      boxShadow: {
        'soft': '0 10px 40px rgba(213, 242, 232, 0.15)',
        'soft-lg': '0 20px 60px rgba(213, 242, 232, 0.2)',
        'film': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      
      backdropBlur: {
        xs: '2px',
      },
      
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'film-roll': 'film-roll 20s linear infinite',
      },
      
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'film-roll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
