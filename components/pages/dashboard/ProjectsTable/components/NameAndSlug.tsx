interface NameAndSlugProps {
  name: string;
  slug: string;
}

const NameAndSlug = ({ name, slug }: NameAndSlugProps) => {
  return (
    <div>
      <div className="font-medium">{name}</div>
      <div className="text-muted-foreground text-sm">{slug}</div>
    </div>
  );
};

export default NameAndSlug;
