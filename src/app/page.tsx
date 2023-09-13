import Image from 'next/image';
import Options from './components/Options';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 sm:p-12 md:p-24">
      <Options />
    </main>
  );
}
