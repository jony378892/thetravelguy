export default function CommonTitile({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <div className="h-[1px] bg-gray-400 flex-1 max-w-[150px]" />
      <h1 className="text-4xl text-center font-semibold whitespace-nowrap">
        {title}
      </h1>
      <div className="h-[1px] bg-gray-400 flex-1 max-w-[150px]" />
    </div>
  );
}
