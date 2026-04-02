import LoadingSpinner from "@/components/ui/snow-ball-loading-spinner";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <LoadingSpinner />
    </div>
  );
}
