
import { useRouter } from 'next/router';

export default function SummaryPage() {
  const router = useRouter();
  const { slug } = router.query;

  if (!slug) return <p>Loading...</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 capitalize">{slug.replace(/-/g, ' ')}</h1>
      <p>This is the summary page for: {slug}</p>
    </div>
  );
  }
