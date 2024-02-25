export const LoadingPing = ({}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span className="flex absolute h-2 w-2 top-3 right-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
    </span>
  );
};
