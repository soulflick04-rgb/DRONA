import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  isLoading = false,
  to,
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 rounded-[14px]";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-dark to-secondary text-white glow-primary hover:shadow-lg hover:shadow-primary/50 border border-transparent",
    secondary: "bg-surface-soft text-white hover:bg-surface border border-white/10 hover:border-white/20",
    outline: "bg-transparent text-white border border-primary/50 hover:border-primary hover:bg-primary/10",
    ghost: "bg-transparent text-text-secondary hover:text-white hover:bg-white/5",
    destructive: "bg-red-500/10 text-red-400 border border-red-500/20 hover:bg-red-500/20 hover:border-red-500/30",
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    icon: "p-3",
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {children}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} disabled={isLoading} {...props}>
      {content}
    </button>
  );
};

export default Button;
