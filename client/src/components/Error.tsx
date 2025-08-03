// components/Error.tsx
import { AlertTriangle } from "lucide-react";

type ErrorProps = {
  message?: string;
};

export default function Error({
  message = "Something went wrong.",
}: ErrorProps) {
  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-6 max-w-xl w-full shadow-sm flex flex-col sm:flex-row items-center gap-4">
        <AlertTriangle className="size-8 text-red-600 flex-shrink-0" />
        <div>
          <h2 className="font-semibold text-lg">Oops! An Error Occurred</h2>
          <p className="text-sm mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
}
