import React, { ReactNode } from 'react';

declare type ClientSideSuspenseProps = {
  fallback: NonNullable<ReactNode> | null;
  children: () => ReactNode | undefined;
};

const ClientSideSuspense = (props: ClientSideSuspenseProps) => {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return React.createElement(
    React.Suspense,
    { fallback: props.fallback },
    mounted ? props.children() : props.fallback
  );
};

export default ClientSideSuspense;
