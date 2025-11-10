'use client';
import { useEffect, useState } from 'react';
import { themes } from '../../lib/themes';

export default function ThemeSelect() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const root = document.documentElement;

    // Remove all previously set theme classes
    Object.keys(themes).forEach(t => root.classList.remove(t));

    // Optionally add class for Tailwind dark mode
    if (theme === 'dark') root.classList.add('dark');

    // Set CSS variables dynamically
    const themeVariables = themes[theme as keyof typeof themes];
    Object.entries(themeVariables).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [theme]);

  return (
    <div className="flex gap-3">
      {Object.entries(themes).map(([t, vars]) => {
        const bgColor = vars['--color-background'] || "white"; // Fallback if missing
        const isSelected = theme === t;

        return (
          <button
            key={t}
            onClick={() => setTheme(t)}
            style={{
              backgroundColor: bgColor,
              border: isSelected ? `2px solid ${vars['--color-accent']}` : `2px solid #ccc`,
            }}
            className="w-10 h-10 rounded-full transition-transform hover:scale-110"
            title={t.charAt(0).toUpperCase() + t.slice(1)}
          />
        );
      })}
    </div>
  );
}
