interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeading({ 
  badge, 
  title, 
  description, 
  centered = false,
  light = false 
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""}`}>
      {badge && (
        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4 ${
          light 
            ? "bg-primary-foreground/10 text-primary-foreground" 
            : "bg-accent text-accent-foreground"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg ${
          light ? "text-primary-foreground/80" : "text-muted-foreground"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}