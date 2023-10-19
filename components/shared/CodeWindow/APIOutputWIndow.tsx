import CodeSyntax from '../CodeSyntax';

const APIOutputWindow = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/flags`, {
    cache: 'no-store',
  });
  const flags = await res.json();
  return (
    <CodeSyntax title="API Output" language="json">
      {JSON.stringify(flags, null, 4)}
    </CodeSyntax>
  );
};

export default APIOutputWindow;
