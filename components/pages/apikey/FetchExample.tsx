import CodeSyntax from '@/components/shared/CodeSyntax';

const FetchExample = () => {
  return (
    <CodeSyntax
      className="text-xs"
      title="Example Request"
    >{`const features = await fetch('https://api.supacharge.com/v1/features', {
    headers: {
      'X-API-KEY': 'YOUR_API_KEY',
    },
  });`}</CodeSyntax>
  );
};

export default FetchExample;

`function hello() {
    console.log('hello world');
  }`;

// const features = await fetch('https://api.supacharge.com/v1/features', {
//   headers: {
//     'X-API-KEY': 'YOUR_API_KEY',
//   },
// });
