type Props = {
  name: string;
  description: string;
  price: string;
};

export function MenuItem({ name, description, price }: Props) {
  return (
    <div className="flex items-baseline gap-3 py-3">
      <div className="flex-1">
        <div className="flex items-baseline gap-2">
          <h4 className="font-display text-lg font-semibold text-foreground">{name}</h4>
          <span className="flex-1 border-b border-dashed border-border" />
          <span className="font-semibold text-primary">{price}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
