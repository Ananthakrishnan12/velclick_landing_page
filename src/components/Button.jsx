import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
  icon: Icon,
  iconPosition = 'right',
  disabled = false,
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-4 gap-2.5 shadow-gold-sm hover:shadow-gold-md',
  };

  const variantStyles = {
    primary:
      'bg-gold-gradient text-brand-black shadow-gold-sm hover:shadow-gold-md hover:brightness-105 focus:ring-brand-gold border border-brand-light-gold/40',
    secondary:
      'bg-brand-white dark:bg-neutral-850 text-brand-black dark:text-neutral-100 border border-brand-border dark:border-neutral-750 hover:border-brand-gold dark:hover:border-brand-gold hover:text-brand-gold dark:hover:text-brand-light-gold focus:ring-brand-gold shadow-sm hover:shadow-md',
    dark:
      'bg-brand-black dark:bg-neutral-900 text-brand-white hover:bg-neutral-800 dark:hover:bg-neutral-800 border border-brand-gold/30 hover:border-brand-gold focus:ring-brand-gold shadow-md',
    outline:
      'bg-transparent text-brand-black dark:text-brand-white border-2 border-brand-gold hover:bg-brand-gold/10 focus:ring-brand-gold',
    ghost:
      'bg-transparent text-brand-charcoal dark:text-neutral-300 hover:text-brand-gold dark:hover:text-brand-light-gold hover:bg-brand-gold/5 focus:ring-brand-gold',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${
    variantStyles[variant] || variantStyles.primary
  } ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4 shrink-0" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`group ${combinedClasses}`} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`group ${combinedClasses}`}
      {...props}
    >
      {content}
    </button>
  );
}
